export const validatePrompt = (prompt: string): { isValid: boolean; message?: string } => {
  if (!prompt.trim()) {
    return {
      isValid: false,
      message: 'Please enter a prompt'
    };
  }

  // Only filter explicit adult content
  const RESTRICTED_PATTERNS = [
    /\b(xxx|nsfw|porn)\b/i,
  ];

  for (const pattern of RESTRICTED_PATTERNS) {
    if (pattern.test(prompt.toLowerCase())) {
      return {
        isValid: false,
        message: 'Your prompt contains inappropriate content.'
      };
    }
  }

  return { isValid: true };
};