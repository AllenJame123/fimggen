import React from 'react';
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface GenerateButtonProps {
  onClick: () => void;
  isGenerating: boolean;
  disabled: boolean;
}

const GenerateButton = ({ onClick, isGenerating, disabled }: GenerateButtonProps) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className="w-full primary-gradient"
    >
      {isGenerating ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        'Generate'
      )}
    </Button>
  );
};

export default GenerateButton;