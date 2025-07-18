
import { BlogPost } from './types/blog';
import { howToCreateViralMemes } from './blog/how-to-create-viral-memes';
import { aiImagePromptsExamples } from './blog/ai-image-prompts-examples';
import { howToMakeMemesForBusiness } from './blog/how-to-make-memes-for-business';
import { howToImproveAIImageQuality } from './blog/how-to-improve-ai-image-quality';
import { logoDesignTipsBeginners } from './blog/logo-design-tips-beginners';
import { aiLogoGeneratorVsHumanDesigner } from './blog/ai-logo-generator-vs-human-designer';
import { aiGeneratedImagesCopyright } from './blog/ai-generated-images-copyright';
import { aiImageGenerators } from './blog/ai-image-generators';
import { perfectPrompts } from './blog/perfect-prompts';

export const blogPosts: Record<string, BlogPost> = {
  [howToCreateViralMemes.id]: howToCreateViralMemes,
  [aiImagePromptsExamples.id]: aiImagePromptsExamples,
  [howToMakeMemesForBusiness.id]: howToMakeMemesForBusiness,
  [howToImproveAIImageQuality.id]: howToImproveAIImageQuality,
  [logoDesignTipsBeginners.id]: logoDesignTipsBeginners,
  [aiLogoGeneratorVsHumanDesigner.id]: aiLogoGeneratorVsHumanDesigner,
  [aiGeneratedImagesCopyright.id]: aiGeneratedImagesCopyright,
  [aiImageGenerators.id]: aiImageGenerators,
  [perfectPrompts.id]: perfectPrompts,
};
