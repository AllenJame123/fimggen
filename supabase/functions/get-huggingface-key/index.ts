
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
    // Check authorization
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      return new Response(
        JSON.stringify({ success: false, error: 'Authorization required' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    try {
      // Try to get the API key from the bucket
      const { data, error } = await supabase.storage
        .from(BUCKET_NAME)
        .download(FILE_PATH);
      
      if (error) {
        throw error;
      }
      
      if (!data) {
        return new Response(
          JSON.stringify({ success: false, error: 'API key not found' }),
          { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      // Convert the blob to text
      const apiKey = await data.text();
      
      console.log('Successfully retrieved API key');
      
      return new Response(
        JSON.stringify({ 
          success: true, 
          apiKey: apiKey 
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    } catch (error) {
      console.error('Error retrieving API key:', error);
      
      // If bucket or file doesn't exist, return a specific message
      if (error.message?.includes('The resource was not found')) {
        return new Response(
          JSON.stringify({ 
            success: false, 
            error: 'API key has not been set yet' 
          }),
          { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Failed to retrieve API key: ' + error.message 
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
