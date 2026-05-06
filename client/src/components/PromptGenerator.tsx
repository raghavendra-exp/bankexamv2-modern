import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Copy, Download, Zap, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import type { ExamCategory } from "@/lib/examData";
import {
  generateStudyPrompt,
  generatePracticeSetPrompt,
  generateNewspaperPrompt,
  type PromptOptions,
  type PracticeSetOptions,
  type NewspaperOptions,
} from "@/lib/promptGenerator";

interface PromptGeneratorProps {
  category: ExamCategory;
}

const NEWSPAPERS = [
  { id: "the_hindu", name: "The Hindu" },
  { id: "indian_express", name: "Indian Express" },
  { id: "et", name: "Economic Times" },
  { id: "bs", name: "Business Standard" },
  { id: "mint", name: "Mint" },
  { id: "toi", name: "Times of India" },
];

const ANALYSIS_COLUMNS = [
  { id: "editorial", name: "Editorial" },
  { id: "banking", name: "Banking & Finance" },
  { id: "economy", name: "Economy" },
  { id: "policy", name: "Policy" },
  { id: "international", name: "International" },
];

const AI_PLATFORMS = [
  { name: "Claude", url: "https://claude.ai/new", icon: "🤖" },
  { name: "ChatGPT", url: "https://chat.openai.com/", icon: "💬" },
  { name: "Gemini", url: "https://gemini.google.com/", icon: "✨" },
  { name: "Perplexity", url: "https://www.perplexity.ai/", icon: "🔍" },
];

export default function PromptGenerator({ category }: PromptGeneratorProps) {
  const [selectedExam, setSelectedExam] = useState<string>(category.exams[0]?.id || "");
  const [selectedSubject, setSelectedSubject] = useState<string>(category.subjects[0]?.id || "");
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [generatedPrompt, setGeneratedPrompt] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("study");
  const [language, setLanguage] = useState<"english" | "hindi" | "bilingual">("english");
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard" | "mixed">("mixed");
  const [vocabDepth, setVocabDepth] = useState<number>(10);
  const [questionCount, setQuestionCount] = useState<number>(15);
  const [practiceFormat, setPracticeFormat] = useState<"pdf" | "whatsapp" | "standard">("standard");
  const [includeHints, setIncludeHints] = useState<boolean>(true);
  const [includeSolutions, setIncludeSolutions] = useState<boolean>(true);
  const [includeMarkingScheme, setIncludeMarkingScheme] = useState<boolean>(false);
  const [selectedNewspapers, setSelectedNewspapers] = useState<string[]>(["the_hindu", "indian_express"]);
  const [selectedColumns, setSelectedColumns] = useState<string[]>(["editorial", "banking", "economy"]);
  const [includeVocab, setIncludeVocab] = useState<boolean>(true);
  const [includeQA, setIncludeQA] = useState<boolean>(true);
  const [includeOneLiners, setIncludeOneLiners] = useState<boolean>(true);

  const currentSubject = category.subjects.find((s) => s.id === selectedSubject);
  const currentExam = category.exams.find((e) => e.id === selectedExam);

  const generatePrompt = () => {
    if (!selectedTopic) {
      toast.error("Please select a topic first");
      return;
    }

    const exam = category.exams.find((e) => e.id === selectedExam);
    const subject = category.subjects.find((s) => s.id === selectedSubject);
    const topic = subject?.topics.find((t) => t.id === selectedTopic);

    if (!exam || !subject || !topic) {
      toast.error("Invalid selection");
      return;
    }

    let prompt = "";

    if (activeTab === "study") {
      const options: PromptOptions = {
        examName: exam.name,
        examYear: exam.year,
        subjectName: subject.name,
        topicName: topic.name,
        language,
        difficulty,
        vocabDepth,
        questionCount,
      };
      prompt = generateStudyPrompt(options);
    } else if (activeTab === "practice") {
      const options: PracticeSetOptions = {
        examName: exam.name,
        examYear: exam.year,
        subjectName: subject.name,
        topicName: topic.name,
        language,
        difficulty,
        vocabDepth,
        questionCount,
        format: practiceFormat,
        includeHints,
        includeSolutions,
        includeMarkingScheme,
      };
      prompt = generatePracticeSetPrompt(options);
    } else if (activeTab === "newspaper") {
      const newspaperNames = selectedNewspapers
        .map((id) => NEWSPAPERS.find((n) => n.id === id)?.name)
        .filter(Boolean) as string[];
      const columnNames = selectedColumns
        .map((id) => ANALYSIS_COLUMNS.find((c) => c.id === id)?.name)
        .filter(Boolean) as string[];

      const options: NewspaperOptions = {
        examName: exam.name,
        examYear: exam.year,
        subjectName: subject.name,
        topicName: topic.name,
        language,
        difficulty,
        vocabDepth,
        questionCount,
        newspapers: newspaperNames,
        analysisColumns: columnNames,
        includeVocabulary: includeVocab,
        includeQA,
        includeOneLiners,
      };
      prompt = generateNewspaperPrompt(options);
    }

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
    element.download = `${category.name}_${selectedTopic}_${activeTab}_prompt.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    toast.success("Downloaded!");
  };

  const openInAI = (platform: { name: string; url: string }) => {
    if (!generatedPrompt) {
      toast.error("Generate a prompt first");
      return;
    }

    navigator.clipboard.writeText(generatedPrompt).then(() => {
      window.open(platform.url, "_blank");
      toast.success(`Prompt copied! Paste it in ${platform.name}`);
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

        {/* Common Settings */}
        <Card className="p-6 space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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

            <div className="space-y-2">
              <label className="text-sm font-medium">Language</label>
              <Select value={language} onValueChange={(v: any) => setLanguage(v)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="hindi">Hindi</SelectItem>
                  <SelectItem value="bilingual">Bilingual</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        {/* Tab Content */}
        <TabsContent value="study" className="space-y-4">
          <Card className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Difficulty</label>
                <Select value={difficulty} onValueChange={(v: any) => setDifficulty(v)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="easy">Easy</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="hard">Hard</SelectItem>
                    <SelectItem value="mixed">Mixed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Vocabulary Depth: {vocabDepth}</label>
                <Slider
                  value={[vocabDepth]}
                  onValueChange={(v) => setVocabDepth(v[0])}
                  min={5}
                  max={20}
                  step={1}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Questions: {questionCount}</label>
                <Slider
                  value={[questionCount]}
                  onValueChange={(v) => setQuestionCount(v[0])}
                  min={5}
                  max={25}
                  step={1}
                />
              </div>
            </div>

            <Button onClick={generatePrompt} className="w-full" size="lg">
              <Zap className="mr-2 h-4 w-4" />
              Generate Study Prompt
            </Button>
          </Card>
        </TabsContent>

        <TabsContent value="practice" className="space-y-4">
          <Card className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Format</label>
                <Select value={practiceFormat} onValueChange={(v: any) => setPracticeFormat(v)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="pdf">PDF Ready</SelectItem>
                    <SelectItem value="whatsapp">WhatsApp Format</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Difficulty</label>
                <Select value={difficulty} onValueChange={(v: any) => setDifficulty(v)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="easy">Easy</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="hard">Hard</SelectItem>
                    <SelectItem value="mixed">Mixed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Questions: {questionCount}</label>
              <Slider
                value={[questionCount]}
                onValueChange={(v) => setQuestionCount(v[0])}
                min={5}
                max={50}
                step={1}
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Checkbox
                  checked={includeHints}
                  onCheckedChange={(v) => setIncludeHints(v as boolean)}
                />
                <label className="text-sm">Include hints for each question</label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  checked={includeSolutions}
                  onCheckedChange={(v) => setIncludeSolutions(v as boolean)}
                />
                <label className="text-sm">Include detailed solutions</label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  checked={includeMarkingScheme}
                  onCheckedChange={(v) => setIncludeMarkingScheme(v as boolean)}
                />
                <label className="text-sm">Include marking scheme</label>
              </div>
            </div>

            <Button onClick={generatePrompt} className="w-full" size="lg">
              <Zap className="mr-2 h-4 w-4" />
              Generate Practice Set
            </Button>
          </Card>
        </TabsContent>

        <TabsContent value="newspaper" className="space-y-4">
          <Card className="p-6 space-y-4">
            <div className="space-y-3">
              <label className="text-sm font-medium">Select Newspapers</label>
              <div className="grid grid-cols-2 gap-3">
                {NEWSPAPERS.map((np) => (
                  <div key={np.id} className="flex items-center gap-2">
                    <Checkbox
                      checked={selectedNewspapers.includes(np.id)}
                      onCheckedChange={(v) => {
                        if (v) {
                          setSelectedNewspapers([...selectedNewspapers, np.id]);
                        } else {
                          setSelectedNewspapers(selectedNewspapers.filter((id) => id !== np.id));
                        }
                      }}
                    />
                    <label className="text-sm">{np.name}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-medium">Analysis Columns</label>
              <div className="grid grid-cols-2 gap-3">
                {ANALYSIS_COLUMNS.map((col) => (
                  <div key={col.id} className="flex items-center gap-2">
                    <Checkbox
                      checked={selectedColumns.includes(col.id)}
                      onCheckedChange={(v) => {
                        if (v) {
                          setSelectedColumns([...selectedColumns, col.id]);
                        } else {
                          setSelectedColumns(selectedColumns.filter((id) => id !== col.id));
                        }
                      }}
                    />
                    <label className="text-sm">{col.name}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Checkbox checked={includeVocab} onCheckedChange={(v) => setIncludeVocab(v as boolean)} />
                <label className="text-sm">Include vocabulary section</label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox checked={includeQA} onCheckedChange={(v) => setIncludeQA(v as boolean)} />
                <label className="text-sm">Include Q&A points</label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox checked={includeOneLiners} onCheckedChange={(v) => setIncludeOneLiners(v as boolean)} />
                <label className="text-sm">Include one-liners</label>
              </div>
            </div>

            <Button onClick={generatePrompt} className="w-full" size="lg">
              <Zap className="mr-2 h-4 w-4" />
              Generate Newspaper Analysis
            </Button>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Output Section */}
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
            <p className="text-sm font-medium">Open in AI Platform:</p>
            <div className="flex flex-wrap gap-2">
              {AI_PLATFORMS.map((platform) => (
                <Button
                  key={platform.name}
                  onClick={() => openInAI(platform)}
                  variant="secondary"
                  size="sm"
                  className="gap-2"
                >
                  {platform.icon} {platform.name}
                  <ExternalLink className="h-3 w-3" />
                </Button>
              ))}
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
