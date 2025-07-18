
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';

// Create a Supabase client with the service role key
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// The bucket name where we'll store the API key
const BUCKET_NAME = 'api-keys';
const FILE_PATH = 'huggingface-access-token.txt';

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // Check authorization (only admin should be able to update API keys)
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      return new Response(
        JSON.stringify({ success: false, error: 'Authorization required' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Parse the request body
    const { apiKey } = await req.json()
    
    if (!apiKey || typeof apiKey !== 'string') {
      return new Response(
        JSON.stringify({ success: false, error: 'API key is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    console.log('Updating Hugging Face API key');

    try {
      // Ensure the bucket exists
      const { data: bucketData, error: bucketError } = await supabase.storage.getBucket(BUCKET_NAME);
      
      if (bucketError && bucketError.message.includes('The resource was not found')) {
        console.log('Creating storage bucket for API keys');
        const { error: createBucketError } = await supabase.storage.createBucket(BUCKET_NAME, {
          public: false,
        });
        
        if (createBucketError) {
          throw createBucketError;
        }
      } else if (bucketError) {
        throw bucketError;
      }
      
      // Store the API key in a file in the bucket
      const { error: uploadError } = await supabase.storage
        .from(BUCKET_NAME)
        .upload(FILE_PATH, apiKey, {
          contentType: 'text/plain',
          upsert: true
        });
      
      if (uploadError) {
        throw uploadError;
      }
      
      // For this function instance, also set the environment variable
      // This allows the current function instance to use the new key immediately
      Deno.env.set('HUGGING_FACE_ACCESS_TOKEN', apiKey);
      
      console.log('API key stored in storage and set for this instance');
      
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'API key updated successfully' 
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    } catch (error) {
      console.error('Error storing API key:', error);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Failed to store API key: ' + error.message 
        }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
  } catch (error) {
    console.error('Error processing request:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message || 'An unexpected error occurred' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
