
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1";

// Configure CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type': 'application/json',
};

// Create Supabase client using environment variables
const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Get API key from environment variable
async function getHuggingFaceKey() {
  const apiKey = Deno.env.get('HUGGING_FACE_ACCESS_TOKEN');
  
  if (apiKey) {
    console.log('Using API key from environment variable');
    return apiKey;
  }
  
  console.error('HUGGING_FACE_ACCESS_TOKEN not found in environment variables');
  throw new Error('HUGGING_FACE_ACCESS_TOKEN is not configured in Supabase Secrets');
}

serve(async (req) => {
  console.log('Starting image generation request');
  console.log('Request method:', req.method);
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    console.log('Handling OPTIONS request');
    return new Response(null, { 
      status: 200,
      headers: corsHeaders 
    });
  }
  
  try {
    // Get the API key
    let hfToken;
    try {
      console.log('Attempting to retrieve Hugging Face API key');
      hfToken = await getHuggingFaceKey();
      console.log('API key retrieved successfully. Key starts with:', hfToken.substring(0, 4) + '...');
    } catch (error) {
      console.error('Failed to get API key:', error.message);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: error.message 
        }), 
        { 
          status: 401, 
          headers: corsHeaders
        }
      );
    }

    // Parse the request body
    let requestData;
    try {
      console.log('Parsing request body');
      const bodyText = await req.text();
      console.log('Request body text:', bodyText);
      
      if (!bodyText) {
        throw new Error('Empty request body');
      }
      
      requestData = JSON.parse(bodyText);
      console.log('Parsed request data:', requestData);
    } catch (parseError) {
      console.error('Error parsing request body:', parseError.message);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: `Failed to parse request body: ${parseError.message}` 
        }), 
        { 
          status: 400, 
          headers: corsHeaders
        }
      );
    }
    
    const { prompt, width = 512, height = 512 } = requestData;
    
    if (!prompt) {
      console.error('Missing prompt parameter');
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Prompt is required' 
        }), 
        { 
          status: 400, 
          headers: corsHeaders
        }
      );
    }
    
    console.log(`Generating image with: ${prompt}, dimensions: ${width}x${height}`);

    // Try multiple working models in order of preference
    const models = [
      'stabilityai/stable-diffusion-xl-base-1.0',
      'stabilityai/stable-diffusion-2-1',
      'Lykon/DreamShaper'
    ];

    let lastError = null;
    
    for (const modelName of models) {
      try {
        console.log(`Trying model: ${modelName}`);
        
        const apiRequestData = {
          inputs: prompt,
          parameters: {
            width: Math.min(width, 1024),
            height: Math.min(height, 1024),
            num_inference_steps: 20,
            guidance_scale: 7.5,
          }
        };
        
        console.log('API request data:', JSON.stringify(apiRequestData));
        
        const response = await fetch(`https://api-inference.huggingface.co/models/${modelName}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${hfToken}`
          },
          body: JSON.stringify(apiRequestData),
        });
        
        console.log(`${modelName} response status:`, response.status);
        
        if (response.ok) {
          // Process the image
          console.log('Processing image response');
          const imageArrayBuffer = await response.arrayBuffer();
          const base64Image = btoa(String.fromCharCode(...new Uint8Array(imageArrayBuffer)));
          const dataUrl = `data:image/jpeg;base64,${base64Image}`;
          
          console.log('Image generation successful with model:', modelName);
          
          // Return successful response with image
          return new Response(
            JSON.stringify({
              success: true,
              image: dataUrl,
            }),
            { 
              status: 200,
              headers: corsHeaders
            }
          );
        } else {
          const errorText = await response.text();
          console.error(`${modelName} error: ${response.status} - ${errorText}`);
          lastError = `${modelName}: ${response.status} - ${errorText}`;
          
          // If it's a 503 (model loading), wait and try next model
          if (response.status === 503) {
            console.log(`Model ${modelName} is loading, trying next model...`);
            continue;
          }
          
          // For other errors, also try next model
          continue;
        }
      } catch (modelError) {
        console.error(`Error with model ${modelName}:`, modelError);
        lastError = `${modelName}: ${modelError.message}`;
        continue;
      }
    }
    
    // If all models failed
    console.error('All models failed. Last error:', lastError);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'All image generation models are currently unavailable. Please try again in a few moments.',
        details: lastError
      }), 
      { 
        status: 503, 
        headers: corsHeaders
      }
    );
    
  } catch (error) {
    console.error(`Error in image generation: ${error.message}`);
    console.error(`Error stack: ${error.stack}`);
    
    // Return error response with appropriate status
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Image generation service is temporarily unavailable. Please try again later.',
        details: error.message,
      }),
      { 
        status: 500,
        headers: corsHeaders
      }
    );
  }
});
