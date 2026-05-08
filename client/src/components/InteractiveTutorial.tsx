import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, X, Lightbulb } from "lucide-react";

interface TutorialStep {
  title: string;
  description: string;
  icon: React.ReactNode;
  highlight: string;
  animation: string;
}

const tutorialSteps: TutorialStep[] = [
  {
    title: "Choose Your Exam",
    description: "Select from 12 major exam categories like UPSC, Banking, SSC, JEE, NEET, and more.",
    icon: "📚",
    highlight: "Choose Your Exam",
    animation: "animate-bounce",
  },
  {
    title: "Select Subject & Topic",
    description: "Pick the specific subject and topic you want to study. You can customize difficulty level too.",
    icon: "🎯",
    highlight: "Select Your Subject",
    animation: "animate-pulse",
  },
  {
    title: "Generate AI Prompt",
    description: "Click the Generate button to create a structured prompt tailored to your exam and topic.",
    icon: "✨",
    highlight: "Generate Prompt",
    animation: "animate-spin",
  },
  {
    title: "Copy & Paste to AI",
    description: "Copy the generated prompt and paste it into Claude, ChatGPT, Gemini, or any AI platform.",
    icon: "📋",
    highlight: "Copy Prompt",
    animation: "animate-pulse",
  },
  {
    title: "Get Expert Guidance",
    description: "The AI will provide comprehensive study material, examples, practice questions, and exam tips.",
    icon: "🧠",
    highlight: "AI Response",
    animation: "animate-bounce",
  },
];

export default function InteractiveTutorial() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [hasSeenTutorial, setHasSeenTutorial] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("tutorialSeen");
    if (!seen) {
      setIsOpen(true);
    } else {
      setHasSeenTutorial(true);
    }
  }, []);

  const handleNext = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleClose();
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("tutorialSeen", "true");
  };

  const handleSkip = () => {
    handleClose();
  };

  if (!isOpen) return null;

  const step = tutorialSteps[currentStep];
  const progress = ((currentStep + 1) / tutorialSteps.length) * 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <Card className="w-full max-w-md shadow-2xl animate-in fade-in zoom-in-95 duration-300">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <Lightbulb className="w-6 h-6 text-yellow-500 animate-pulse" />
              <h2 className="text-xl font-bold text-slate-900">How to Use</h2>
            </div>
            <button
              onClick={handleSkip}
              className="text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Step Content */}
          <div className="space-y-4">
            <div className={`text-5xl text-center ${step.animation}`}>
              {step.icon}
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-xs text-slate-500 text-center">
              Step {currentStep + 1} of {tutorialSteps.length}
            </p>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2">
            {tutorialSteps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentStep(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentStep
                    ? "bg-blue-600 w-6"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={handleSkip}
              className="flex-1"
            >
              Skip
            </Button>
            <Button
              onClick={handleNext}
              className="flex-1 gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              {currentStep === tutorialSteps.length - 1 ? "Done" : "Next"}
              {currentStep < tutorialSteps.length - 1 && <ChevronRight className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
