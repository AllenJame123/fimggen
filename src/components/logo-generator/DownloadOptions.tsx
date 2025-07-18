import React from 'react';
import { Button } from "@/components/ui/button";
import { Crop, Download } from "lucide-react";

interface DownloadOptionsProps {
  downloadFormat: string;
  setDownloadFormat: (format: string) => void;
  downloadSize: string;
  setDownloadSize: (size: string) => void;
  downloadShape: string;
  setDownloadShape: (shape: string) => void;
  onCrop: () => void;
  onDownload: () => void;
  isEnabled: boolean;
}

const DownloadOptions = ({
  downloadFormat,
  setDownloadFormat,
  downloadSize,
  setDownloadSize,
  downloadShape,
  setDownloadShape,
  onCrop,
  onDownload,
  isEnabled
}: DownloadOptionsProps) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Format</label>
          <select
            value={downloadFormat}
            onChange={(e) => setDownloadFormat(e.target.value)}
            className="w-full p-2 border rounded"
            disabled={!isEnabled}
          >
            <option value="png">PNG</option>
            <option value="jpeg">JPEG</option>
            <option value="webp">WebP</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Size</label>
          <select
            value={downloadSize}
            onChange={(e) => setDownloadSize(e.target.value)}
            className="w-full p-2 border rounded"
            disabled={!isEnabled}
          >
            <option value="256">256px</option>
            <option value="512">512px</option>
            <option value="1024">1024px</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Shape</label>
        <select
          value={downloadShape}
          onChange={(e) => setDownloadShape(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          disabled={!isEnabled}
        >
          <option value="square">Square</option>
          <option value="circle">Circle</option>
          <option value="rectangle">Rectangle</option>
        </select>
      </div>

      <div className="flex gap-2">
        <Button
          onClick={onCrop}
          variant="outline"
          disabled={!isEnabled}
          className="flex-1"
        >
          <Crop className="w-4 h-4 mr-2" />
          Crop
        </Button>
        <Button
          onClick={onDownload}
          disabled={!isEnabled}
          className="flex-1"
        >
          <Download className="w-4 h-4 mr-2" />
          Download
        </Button>
      </div>
    </div>
  );
};

export default DownloadOptions;