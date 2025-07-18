
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface ImageDimensions {
  width: number;
  height: number;
}

export const generateImage = async (
  prompt: string,
  dimensions: ImageDimensions,
): Promise<string> => {
  try {
    // Enhance prompt for better results
    const enhancedPrompt = `${prompt}, professional photograph, raw photo, unedited photography, photorealistic, 8k uhd, high quality dslr photo, sharp focus, detailed, crystal clear, natural lighting`;
    
    const requestBody = {
      prompt: enhancedPrompt,
      width: Math.round(dimensions.width),
      height: Math.round(dimensions.height)
    };

    // Create a timeout promise to handle request timeouts
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Request timed out after 45 seconds')), 45000);
    });

    // Call the generate-image Edge Function with timeout
    const functionPromise = supabase.functions.invoke('generate-image', {
      body: requestBody,
    });

    // Race the function call with the timeout
    const { data, error } = await Promise.race([
      functionPromise,
      timeoutPromise.then(() => {
        throw new Error('Request timed out');
      })
    ]);



    if (error) {
      console.error('Function error:', error);
      
      // Enhanced error handling with more specific API limit messages
      if (error.message?.includes('402') || error.message?.includes('exceeded') || error.message?.includes('credits')) {
        throw new Error('The AI image generation service has reached its daily usage limit. This is a free service with limited daily capacity. Please try again tomorrow or consider using our other free tools like the Logo Generator or Favicon Generator.');
      } else if (error.message?.includes('JWT') || error.message?.includes('auth token')) {
        throw new Error('Authentication error with the image generation service. Please refresh the page and try again.');
      } else if (error.message?.includes('401') || error.message?.includes('auth')) {
        throw new Error('Authentication error. The service is temporarily unavailable.');
      } else if (error.message?.includes('403')) {
        throw new Error('Access denied. You may not have permission to use this feature.');
      } else if (error.message?.includes('rate limit')) {
        throw new Error('Too many requests. Please wait a few seconds and try again.');
      } else if (error.message?.includes('503') || error.message?.includes('502')) {
        throw new Error('The image generation service is temporarily unavailable. Please try again in a moment.');
      } else if (error.message?.includes('timeout')) {
        throw new Error('The request timed out. Image generation may take longer than expected. Please try again.');
      } else {
        throw new Error('The image generation service is temporarily unavailable. Please try again later or try our other free tools.');
      }
    }

    if (!data?.success || !data?.image) {
      console.error('Generation failed:', data);
      throw new Error('The image generation service is currently unavailable. Please try again later.');
    }

    return data.image;
  } catch (error: unknown) {
    console.error('Generation error:', error);
    
    // Show appropriate toast message based on error type
    const errorMessage = (error as Error).message || 'An unexpected error occurred while generating the image';
    
    if ((error as Error).message?.includes('daily usage limit')) {
      toast.error('Daily usage limit reached. Please try again tomorrow or use our other free tools.');
    } else if ((error as Error).message?.includes('rate limit')) {
      toast.error('Please wait a moment before generating another image');
    } else if ((error as Error).message?.includes('temporarily unavailable')) {
      toast.error('Service temporarily unavailable. Please try again in a moment');
    } else if ((error as Error).message?.includes('Authentication error')) {
      toast.error('Please refresh the page and try again.');
    } else if ((error as Error).message?.includes('timeout')) {
      toast.error('Request timed out. Please try again with a simpler prompt.');
    } else {
      toast.error('Image generation service is temporarily unavailable. Please try our other tools.');
    }
    
    throw new Error(errorMessage);
  }
};
