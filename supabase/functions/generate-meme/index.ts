
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Parse request body
    const requestData = await req.json();
    const { prompt } = requestData;
    
    console.log('Received prompt:', prompt);

    // Get the API key from environment variable
    const apiKey = Deno.env.get('HUGGING_FACE_ACCESS_TOKEN');
    if (!apiKey) {
      throw new Error('HUGGING_FACE_ACCESS_TOKEN is not configured in Supabase Secrets');
    }

    console.log('API key retrieved successfully');

    // Try multiple working models in order of preference
    const models = [
      'stabilityai/stable-diffusion-xl-base-1.0',
      'stabilityai/stable-diffusion-2-1',
      'runwayml/stable-diffusion-v1-5'
    ];

    let lastError = null;
    
    for (const modelName of models) {
      try {
        console.log(`Trying model: ${modelName}`);
        
        const apiRequestData = {
          inputs: prompt,
          parameters: {
            negative_prompt: "nsfw, nude, naked, sexual, explicit content, inappropriate, adult content",
            num_inference_steps: 20,
            guidance_scale: 7.5,
          }
        };
        
        console.log('API request data:', JSON.stringify(apiRequestData));
        
        const response = await fetch(`https://api-inference.huggingface.co/models/${modelName}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
          },
          body: JSON.stringify(apiRequestData),
        });
        
        console.log(`${modelName} response status:`, response.status);
        
        if (response.ok) {
          // Process the image with improved memory handling
          console.log('Processing image response');
          
          const imageArrayBuffer = await response.arrayBuffer();
          console.log('Image size:', imageArrayBuffer.byteLength, 'bytes');
          
          // Convert ArrayBuffer to base64 in chunks to avoid stack overflow
          const uint8Array = new Uint8Array(imageArrayBuffer);
          const chunkSize = 32768; // 32KB chunks
          let base64String = '';
          
          for (let i = 0; i < uint8Array.length; i += chunkSize) {
            const chunk = uint8Array.slice(i, i + chunkSize);
            const chunkString = String.fromCharCode.apply(null, Array.from(chunk));
            base64String += chunkString;
          }
          
          const base64Image = btoa(base64String);
          const dataUrl = `data:image/jpeg;base64,${base64Image}`;
          
          console.log('Image generation successful with model:', modelName);
          
          // Return successful response with image
          return new Response(
            JSON.stringify({
              success: true,
              imageUrl: dataUrl,
            }),
            { 
              status: 200,
              headers: { ...corsHeaders, 'Content-Type': 'application/json' }
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
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
    
  } catch (error) {
    console.error('Error in generate-meme function:', error);
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error.message || 'Failed to generate meme. Please try again.' 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500
      }
    );
  }
});
