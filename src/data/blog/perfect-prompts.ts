
import { BlogPost } from "../types/blog";

export const perfectPrompts: BlogPost = {
  id: "perfect-prompts",
  slug: "perfect-prompts",
  title: "How to Write Perfect AI Image Prompts: A Complete Guide",
  excerpt: "Master the art of prompt engineering to create stunning AI images. Learn techniques, examples, and best practices for better results.",
  featuredImage: "/lovable-uploads/perfect-prompts.webp",
  publishedAt: "2024-01-15T10:00:00Z",
  author: {
    name: "AI Image Generator Team",
    avatar: "/lovable-uploads/89cecf23-fac2-463a-9100-4b0e48d9880d.png"
  },
  tags: ["AI", "Prompts", "Tutorial", "Image Generation"],
  readingTime: 8,
  content: `
    <p>Writing effective prompts is the key to generating stunning AI images. Whether you're creating art, logos, or any visual content, the quality of your prompt directly impacts the final result.</p>
    
    <h2>Understanding AI Image Prompts</h2>
    <p>An AI image prompt is a text description that tells the AI what kind of image you want to create. The more specific and detailed your prompt, the better the AI can understand and generate your desired image.</p>
    
    <h2>Essential Elements of Great Prompts</h2>
    
    <h3>1. Subject Description</h3>
    <p>Start with a clear description of your main subject:</p>
    <ul>
      <li><strong>Vague:</strong> "a cat"</li>
      <li><strong>Better:</strong> "a Persian cat with long white fur"</li>
      <li><strong>Best:</strong> "a majestic Persian cat with flowing white fur, sitting elegantly"</li>
    </ul>
    
    <h3>2. Style and Artistic Direction</h3>
    <p>Specify the artistic style you want:</p>
    <ul>
      <li>Photography styles: "photorealistic", "portrait photography", "macro photography"</li>
      <li>Art styles: "oil painting", "watercolor", "digital art", "pencil sketch"</li>
      <li>Specific artists: "in the style of Van Gogh", "Picasso-inspired"</li>
    </ul>
    
    <h3>3. Lighting and Atmosphere</h3>
    <p>Lighting can dramatically change the mood:</p>
    <ul>
      <li>"golden hour lighting"</li>
      <li>"soft natural light"</li>
      <li>"dramatic shadows"</li>
      <li>"neon lighting"</li>
    </ul>
    
    <h3>4. Composition and Camera Angle</h3>
    <p>Describe how you want the image framed:</p>
    <ul>
      <li>"close-up portrait"</li>
      <li>"wide-angle landscape"</li>
      <li>"bird's eye view"</li>
      <li>"low angle shot"</li>
    </ul>
    
    <h2>Advanced Prompt Techniques</h2>
    
    <h3>Using Weights and Emphasis</h3>
    <p>Some AI models allow you to emphasize certain parts of your prompt:</p>
    <ul>
      <li>Use parentheses for emphasis: "(beautiful sunset)"</li>
      <li>Use weights: "beautiful sunset:1.2"</li>
    </ul>
    
    <h3>Negative Prompts</h3>
    <p>Tell the AI what you DON'T want:</p>
    <ul>
      <li>"--no blur, distortion, low quality"</li>
      <li>Exclude unwanted elements</li>
    </ul>
    
    <h2>Common Mistakes to Avoid</h2>
    
    <h3>1. Being Too Vague</h3>
    <p>Generic prompts like "beautiful landscape" give unpredictable results. Be specific about what makes it beautiful.</p>
    
    <h3>2. Overcomplicating</h3>
    <p>While detail is good, too many conflicting elements can confuse the AI. Focus on 3-5 key elements.</p>
    
    <h3>3. Ignoring Technical Specifications</h3>
    <p>Include technical details when needed:</p>
    <ul>
      <li>"high resolution"</li>
      <li>"8K quality"</li>
      <li>"professional photography"</li>
    </ul>
    
    <h2>Prompt Examples by Category</h2>
    
    <h3>Portrait Photography</h3>
    <p><em>"Professional headshot of a confident businesswoman, soft studio lighting, shallow depth of field, Canon 85mm lens, modern office background, high-resolution portrait photography"</em></p>
    
    <h3>Landscape Art</h3>
    <p><em>"Misty mountain landscape at dawn, golden hour lighting, pine trees in foreground, distant peaks, oil painting style, romantic era composition, rich earth tones"</em></p>
    
    <h3>Product Photography</h3>
    <p><em>"Luxury watch on marble surface, dramatic side lighting, reflection, minimalist composition, commercial photography style, high contrast, premium product shot"</em></p>
    
    <h2>Testing and Iteration</h2>
    <p>Great prompts often come from experimentation:</p>
    <ol>
      <li>Start with a basic prompt</li>
      <li>Generate an image</li>
      <li>Identify what needs improvement</li>
      <li>Refine your prompt</li>
      <li>Try again</li>
    </ol>
    
    <h2>Tools and Resources</h2>
    <p>Consider using prompt generators and databases to get inspiration and learn from successful prompts used by others.</p>
    
    <h2>Conclusion</h2>
    <p>Writing perfect AI image prompts is both an art and a science. With practice and attention to detail, you'll be able to generate exactly the images you envision. Remember to be specific, consider all visual elements, and don't be afraid to experiment!</p>
  `
};
