
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { HfInference } from 'https://esm.sh/@huggingface/inference@2.3.2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // Parse the request body
    let prompt;
    try {
      const body = await req.json();
      prompt = body.prompt;
      console.log('Received prompt:', prompt);
    } catch (parseError) {
      console.error('Error parsing request body:', parseError);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Invalid request format' 
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }, 
          status: 400 
        }
      );
    }
    
    // Check if prompt exists
    if (!prompt || typeof prompt !== 'string') {
      console.error('Missing or invalid prompt parameter');
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Prompt is required and must be a string'
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400
        }
      );
    }

    // Check if we have a valid token
    const huggingFaceToken = Deno.env.get('HUGGING_FACE_ACCESS_TOKEN');
    if (!huggingFaceToken) {
      console.error('HUGGING_FACE_ACCESS_TOKEN is not set');
      return new Response(
        JSON.stringify({
          success: false,
          error: 'HUGGING_FACE_ACCESS_TOKEN is not set'
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 500
        }
      );
    }

    // Enhanced prompt specifically for favicon generation
    const enhancedPrompt = `minimalist favicon icon design: ${prompt}, professional, clean, modern, simple, vector style, flat design, iconic, memorable, scalable`;
    console.log('Enhanced prompt:', enhancedPrompt);

    const hf = new HfInference(huggingFaceToken);

    try {
      console.log('Starting image generation with HuggingFace');
      
      // Set a timeout for the Hugging Face API request
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 25000); // 25 second timeout
      
      const image = await hf.textToImage({
        inputs: enhancedPrompt,
        model: 'stabilityai/stable-diffusion-xl-base-1.0',
        parameters: {
          negative_prompt: "text, letters, words, typography, writing, characters, numbers, fonts, alphabet, lettering, handwriting, calligraphy, script, messy, busy, cluttered, detailed, photorealistic, 3d effect, gradient, texture, pattern, noisy, blurry, distorted, ugly, deformed, low quality, low resolution",
          guidance_scale: 7.5,
          num_inference_steps: 50,
        }
      });
      
      // Clear the timeout
      clearTimeout(timeoutId);

      console.log('Successfully generated image with HuggingFace');
      
      // Convert the blob to a base64 string
      const arrayBuffer = await image.arrayBuffer();
      const base64 = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));

      return new Response(
        JSON.stringify({ success: true, image: `data:image/png;base64,${base64}` }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200
        }
      );
    } catch (hfError) {
      console.error('HuggingFace API error:', hfError.message, hfError.stack);
      
      // Check for credit limit error specifically
      const isRateLimitError = hfError.message && (
        hfError.message.includes('exceeded your monthly included credits') ||
        hfError.message.includes('rate limit') ||
        hfError.message.includes('quota')
      );
      
      if (isRateLimitError) {
        console.log('API usage limit reached, using fallback generator');
        
        try {
          console.log('Attempting to use fallback');
          
          // Get the anon key for the fallback request
          const anonKey = Deno.env.get('SUPABASE_ANON_KEY');
          if (!anonKey) {
            console.error('Missing SUPABASE_ANON_KEY for fallback');
            throw new Error('Missing SUPABASE_ANON_KEY');
          }
          
          const fallbackUrl = req.url.replace('generate-favicon', 'generate-favicon-icon');
          console.log('Fallback URL:', fallbackUrl);
          
          const fallbackResponse = await fetch(fallbackUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${anonKey}`,
            }
          });
          
          console.log('Fallback response status:', fallbackResponse.status);
          
          if (!fallbackResponse.ok) {
            const errorText = await fallbackResponse.text();
            console.error('Fallback response error:', errorText);
            throw new Error(`Fallback generation failed: ${errorText}`);
          }
          
          const fallbackData = await fallbackResponse.json();
          console.log('Fallback data:', fallbackData.success);
          
          if (!fallbackData?.success || !fallbackData?.image) {
            throw new Error('Invalid response from fallback generator');
          }
          
          return new Response(
            JSON.stringify(fallbackData),
            {
              headers: { ...corsHeaders, 'Content-Type': 'application/json' },
              status: 200
            }
          );
        } catch (fallbackError) {
          console.error('Fallback generation failed:', fallbackError.message, fallbackError.stack);
          return new Response(
            JSON.stringify({
              success: false,
              error: 'Both primary and fallback generation methods failed',
              details: `Original error: ${hfError.message}, Fallback error: ${fallbackError.message}`
            }),
            {
              headers: { ...corsHeaders, 'Content-Type': 'application/json' },
              status: 500
            }
          );
        }
      } else {
        // Non-quota related errors
        return new Response(
          JSON.stringify({
            success: false,
            error: `HuggingFace API error: ${hfError.message || 'Unknown error'}`
          }),
          {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 500
          }
        );
      }
    }
  } catch (error) {
    console.error('Unhandled error in generate-favicon:', error.message, error.stack);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || 'An unknown error occurred',
        details: error.toString()
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }, 
        status: 500 
      }
    );
  }
});
