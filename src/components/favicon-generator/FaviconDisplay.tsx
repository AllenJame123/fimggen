
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface FaviconDisplayProps {
  faviconUrl: string | null;
}

const FaviconDisplay = ({ faviconUrl }: FaviconDisplayProps) => {
  if (!faviconUrl) return null;

  const downloadFavicon = async () => {
    try {
      const response = await fetch(faviconUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "favicon.ico";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      toast.success("Favicon downloaded successfully!");
    } catch (error) {
      toast.error("Failed to download favicon");
    }
  };

  return (
    <Card className="p-6 text-center">
      <div className="space-y-4">
        <div className="flex justify-center">
          <img
            src={faviconUrl}
            alt="Generated Favicon"
            className="w-32 h-32 object-contain bg-gray-50 rounded-lg"
            crossOrigin="anonymous"
          />
        </div>
        <Button onClick={downloadFavicon} className="primary-gradient">
          Download Favicon
        </Button>
      </div>
    </Card>
  );
};

export default FaviconDisplay;
