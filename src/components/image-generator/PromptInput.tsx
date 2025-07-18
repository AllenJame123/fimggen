import React from 'react';
import { Input } from "@/components/ui/input";
import { Sparkles } from "lucide-react";
import SizeSelector from './SizeSelector';

interface PromptInputProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  isGenerating: boolean;
  onEnterPress: () => void;
  width: number;
  height: number;
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
  onValidSizeChange: (isValid: boolean) => void;
}

const MAX_CHARS = 150;

const PromptInput = ({ 
  prompt, 
  setPrompt, 
  isGenerating, 
  onEnterPress,
  width,
  height,
  setWidth,
  setHeight,
  onValidSizeChange
}: PromptInputProps) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isGenerating) {
      onEnterPress();
    }
  };

  const handlePromptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue.length <= MAX_CHARS) {
      setPrompt(newValue);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <div className="relative space-y-2">
        <Input
          placeholder="Describe the image you want to generate..."
          value={prompt}
          onChange={handlePromptChange}
          onKeyPress={handleKeyPress}
          className="w-full h-14 pl-4 pr-12 text-lg bg-white/50 backdrop-blur-sm border-2 focus:border-primary"
          disabled={isGenerating}
          maxLength={MAX_CHARS}
        />
        <Sparkles className="absolute right-4 top-[22px] -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <div className="flex justify-end">
          <span className={`text-sm ${prompt.length === MAX_CHARS ? 'text-destructive' : 'text-muted-foreground'}`}>
            {prompt.length}/{MAX_CHARS} characters
          </span>
        </div>
      </div>
      
      <div className="grid gap-8 w-full">
        <SizeSelector 
          width={width}
          height={height}
          setWidth={setWidth}
          setHeight={setHeight}
          isGenerating={isGenerating}
          onValidSizeChange={onValidSizeChange}
        />
      </div>
    </div>
  );
};

export default PromptInput;