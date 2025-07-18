
import { Card } from "@/components/ui/card";

const FAQ = () => {
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <Card className="p-4 bg-card border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">What is an AI image generator?</h3>
          <p>An AI image generator is a tool that uses artificial intelligence to create images based on text descriptions you provide.</p>
        </Card>
        
        <Card className="p-4 bg-card border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">How many images can I generate?</h3>
          <p>You can generate unlimited images with our free service, with no restrictions on usage or downloads.</p>
        </Card>
        
        <Card className="p-4 bg-card border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Do I own the images I create?</h3>
          <p>Yes, you can use the generated images for personal and commercial projects.</p>
        </Card>
        
        <Card className="p-4 bg-card border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">How accurate is the art to my description?</h3>
          <p>Our AI strives for high accuracy, but results may vary based on prompt clarity. Best results come from detailed, clear descriptions with specific style references.</p>
        </Card>
        
        <Card className="p-4 bg-card border rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">What should I do if I encounter a problem?</h3>
          <p>Contact our support team. Most issues can be resolved by refreshing the page or trying a different browser.</p>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;
