import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { getExamCategory } from "@/lib/examData";
import PromptGenerator from "@/components/PromptGenerator";

export default function ExamDetail() {
  const { id } = useParams<{ id: string }>();
  const category = id ? getExamCategory(id) : undefined;

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Exam not found</h1>
        <Link href="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-2xl">{category.icon}</span>
            <h1 className="font-bold text-lg">{category.name} Prompt Generator</h1>
          </div>
          <div className="w-20" />
        </div>
      </header>

      {/* Content */}
      <main className="container py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Category Info */}
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-slate-900">{category.name}</h2>
            <p className="text-lg text-slate-600">{category.description}</p>
          </div>

          {/* Prompt Generator */}
          <PromptGenerator category={category} />
        </div>
      </main>
    </div>
  );
}
