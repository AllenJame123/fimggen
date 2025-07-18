
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

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
    console.log('Starting favicon generation with fallback function');
    
    // Enhanced prompt specifically for favicon generation
    const enhancedPrompt = "minimalist AI brain logo icon, simple geometric shapes, clean lines, modern tech style, single color, perfect for favicon"

    console.log('Using default enhanced prompt:', enhancedPrompt);

    // Check if we have a valid token
    const huggingFaceToken = Deno.env.get('HUGGING_FACE_ACCESS_TOKEN');
    if (!huggingFaceToken) {
      console.error('HUGGING_FACE_ACCESS_TOKEN is not set');
      return new Response(
        JSON.stringify({
          success: false,
          error: 'HUGGING_FACE_ACCESS_TOKEN is not set',
        }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    console.log('Sending request to Hugging Face API');
    const response = await fetch(
      "https://api.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
      {
        headers: {
          Authorization: `Bearer ${huggingFaceToken}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          inputs: enhancedPrompt,
          parameters: {
            negative_prompt: "text, letters, words, typography, writing, characters, numbers, fonts, alphabet, lettering, handwriting, calligraphy, script, complex, busy, detailed",
            guidance_scale: 7.5,
            num_inference_steps: 50,
            width: 256,  // Smaller size suitable for favicon
            height: 256,
            seed: Math.floor(Math.random() * 1000000),
          }
        }),
      }
    );

    console.log('Hugging Face response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error response from Hugging Face:', errorText);
      
      try {
        const errorJson = JSON.parse(errorText);
        console.error('Parsed error from Hugging Face:', errorJson);
        return new Response(
          JSON.stringify({
            success: false,
            error: `Failed to generate image: ${errorJson.error || errorText}`
          }),
          {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        );
      } catch (parseError) {
        // If parsing fails, just use the error text
        console.error('Error parsing JSON response:', parseError);
        return new Response(
          JSON.stringify({
            success: false,
            error: `Failed to generate image: ${errorText}`
          }),
          {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        );
      }
    }

    const image = await response.blob();
    console.log('Successfully received image from Stable Diffusion');

    // Convert blob to base64
    const arrayBuffer = await image.arrayBuffer();
    const bytes = new Uint8Array(arrayBuffer);
    const base64 = btoa(String.fromCharCode(...Array.from(bytes)));
    
    return new Response(
      JSON.stringify({ success: true, image: `data:image/png;base64,${base64}` }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200
      }
    )
  } catch (error) {
    console.error('Error in fallback function:', error.message, error.stack);
    
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || 'Unknown error in fallback function',
        details: error.toString()
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})
