import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Copy, Download, Zap } from "lucide-react";
import { toast } from "sonner";
import type { ExamCategory } from "@/lib/examData";

interface PromptGeneratorProps {
  category: ExamCategory;
}

export default function PromptGenerator({ category }: PromptGeneratorProps) {
  const [selectedExam, setSelectedExam] = useState<string>(category.exams[0]?.id || "");
  const [selectedSubject, setSelectedSubject] = useState<string>(category.subjects[0]?.id || "");
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [generatedPrompt, setGeneratedPrompt] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("study");

  const currentSubject = category.subjects.find((s) => s.id === selectedSubject);
  const currentTopic = currentSubject?.topics.find((t) => t.id === selectedTopic);

  const generatePrompt = () => {
    if (!selectedTopic) {
      toast.error("Please select a topic first");
      return;
    }

    const exam = category.exams.find((e) => e.id === selectedExam);
    const subject = category.subjects.find((s) => s.id === selectedSubject);
    const topic = subject?.topics.find((t) => t.id === selectedTopic);

    const prompt = `You are an expert ${category.name} exam tutor.

Generate a comprehensive study guide for:
- Exam: ${exam?.name} (${exam?.year})
- Subject: ${subject?.name}
- Topic: ${topic?.name}

Include:
1. Core concepts and definitions
2. Key formulas or principles
3. Solved examples (3-5)
4. Common mistakes to avoid
5. Practice questions (10-15 MCQs)
6. Exam-day strategy tips

Format with clear headers, bullet points, and emphasis on exam-relevant content.`;

    setGeneratedPrompt(prompt);
    toast.success("Prompt generated!");
  };

  const copyToClipboard = async () => {
    if (!generatedPrompt) {
      toast.error("Generate a prompt first");
      return;
    }
    try {
      await navigator.clipboard.writeText(generatedPrompt);
      toast.success("Copied to clipboard!");
    } catch {
      toast.error("Failed to copy");
    }
  };

  const downloadPrompt = () => {
    if (!generatedPrompt) {
      toast.error("Generate a prompt first");
      return;
    }
    const element = document.createElement("a");
    const file = new Blob([generatedPrompt], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${category.name}_${selectedTopic}_prompt.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    toast.success("Downloaded!");
  };

  const openInAI = (platform: string) => {
    if (!generatedPrompt) {
      toast.error("Generate a prompt first");
      return;
    }

    const urls: Record<string, string> = {
      claude: "https://claude.ai/new",
      chatgpt: "https://chat.openai.com/",
      gemini: "https://gemini.google.com/",
      perplexity: "https://www.perplexity.ai/",
    };

    // Copy to clipboard first
    navigator.clipboard.writeText(generatedPrompt).then(() => {
      window.open(urls[platform], "_blank");
      toast.success(`Prompt copied! Paste it in ${platform}`);
    });
  };

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="study">Study Prompt</TabsTrigger>
          <TabsTrigger value="practice">Practice Set</TabsTrigger>
          <TabsTrigger value="newspaper">Newspaper Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="study" className="space-y-4">
          <Card className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Exam</label>
                <Select value={selectedExam} onValueChange={setSelectedExam}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {category.exams.map((exam) => (
                      <SelectItem key={exam.id} value={exam.id}>
                        {exam.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {category.subjects.map((subject) => (
                      <SelectItem key={subject.id} value={subject.id}>
                        {subject.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Topic</label>
                <Select value={selectedTopic} onValueChange={setSelectedTopic}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select topic" />
                  </SelectTrigger>
                  <SelectContent>
                    {currentSubject?.topics.map((topic) => (
                      <SelectItem key={topic.id} value={topic.id}>
                        {topic.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button onClick={generatePrompt} className="w-full" size="lg">
              <Zap className="mr-2 h-4 w-4" />
              Generate Prompt
            </Button>
          </Card>

          {generatedPrompt && (
            <Card className="p-6 space-y-4">
              <div className="bg-muted p-4 rounded-lg max-h-96 overflow-y-auto">
                <pre className="text-sm whitespace-pre-wrap font-mono">{generatedPrompt}</pre>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button onClick={copyToClipboard} variant="outline" size="sm">
                  <Copy className="mr-2 h-4 w-4" />
                  Copy
                </Button>
                <Button onClick={downloadPrompt} variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium">Open in AI:</p>
                <div className="flex flex-wrap gap-2">
                  <Button onClick={() => openInAI("claude")} variant="secondary" size="sm">
                    Claude
                  </Button>
                  <Button onClick={() => openInAI("chatgpt")} variant="secondary" size="sm">
                    ChatGPT
                  </Button>
                  <Button onClick={() => openInAI("gemini")} variant="secondary" size="sm">
                    Gemini
                  </Button>
                  <Button onClick={() => openInAI("perplexity")} variant="secondary" size="sm">
                    Perplexity
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="practice">
          <Card className="p-6">
            <p className="text-muted-foreground">Practice set generation coming soon...</p>
          </Card>
        </TabsContent>

        <TabsContent value="newspaper">
          <Card className="p-6">
            <p className="text-muted-foreground">Newspaper analysis generation coming soon...</p>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
