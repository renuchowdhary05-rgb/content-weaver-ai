import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Copy, Sparkles, Loader2 } from "lucide-react";
import { toast } from "sonner";

const contentTypes = [
  { value: "social", label: "Social Media Post" },
  { value: "blog", label: "Blog Article" },
  { value: "script", label: "Video Script" },
  { value: "ad", label: "Ad Copy" },
  { value: "email", label: "Email Copy" },
  { value: "caption", label: "Instagram Caption" },
];

const toneOptions = [
  { value: "professional", label: "Professional" },
  { value: "casual", label: "Casual" },
  { value: "friendly", label: "Friendly" },
  { value: "formal", label: "Formal" },
  { value: "funny", label: "Funny" },
  { value: "inspiring", label: "Inspiring" },
];

export const ContentGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [contentType, setContentType] = useState("social");
  const [tone, setTone] = useState("professional");
  const [generatedContent, setGeneratedContent] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a prompt");
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      const mockContent = generateMockContent(contentType, tone, prompt);
      setGeneratedContent(mockContent);
      setIsGenerating(false);
      toast.success("Content generated successfully!");
    }, 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent);
    toast.success("Copied to clipboard!");
  };

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">AI Content Generator</h2>
          <p className="text-lg text-muted-foreground">
            Tell us what you need, and we'll create it instantly
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card className="p-6 bg-card border-border shadow-lg">
            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block text-foreground">Content Type</label>
                <Select value={contentType} onValueChange={setContentType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {contentTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block text-foreground">Tone & Style</label>
                <Select value={tone} onValueChange={setTone}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {toneOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block text-foreground">Your Prompt</label>
                <Textarea
                  placeholder="Describe what content you want to create... (e.g., 'Write a post about healthy morning routines')"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[200px] resize-none"
                />
              </div>

              <Button 
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                size="lg"
                onClick={handleGenerate}
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-2" />
                    Generate Content
                  </>
                )}
              </Button>
            </div>
          </Card>

          {/* Output Section */}
          <Card className="p-6 bg-card border-border shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">Generated Content</h3>
              {generatedContent && (
                <Button variant="outline" size="sm" onClick={handleCopy}>
                  <Copy className="w-4 h-4 mr-2" />
                  Copy
                </Button>
              )}
            </div>
            
            <div className="min-h-[400px] p-4 bg-secondary/30 rounded-lg">
              {isGenerating ? (
                <div className="flex items-center justify-center h-full">
                  <Loader2 className="w-8 h-8 animate-spin text-primary" />
                </div>
              ) : generatedContent ? (
                <p className="text-foreground whitespace-pre-wrap leading-relaxed">{generatedContent}</p>
              ) : (
                <p className="text-muted-foreground text-center mt-20">
                  Your generated content will appear here...
                </p>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

// Mock content generator (in a real app, this would call an AI API)
const generateMockContent = (type: string, tone: string, prompt: string) => {
  const toneAdjectives: Record<string, string> = {
    professional: "clear and authoritative",
    casual: "relaxed and friendly",
    friendly: "warm and approachable",
    formal: "sophisticated and polished",
    funny: "witty and entertaining",
    inspiring: "motivational and uplifting",
  };

  return `Here's your ${toneAdjectives[tone]} ${type} about "${prompt}":

${type === "social" ? "🌟 " : ""}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

${type === "blog" ? "## Key Points\n\n" : ""}Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

${type === "script" ? "[Scene transitions smoothly]\n\n" : ""}Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.

${type === "social" ? "\n#ContentCreation #AI #Digital" : ""}`;
};
