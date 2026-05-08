import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowDown, Zap } from "lucide-react";

interface GuideStep {
  title: string;
  description: string;
  tips: string[];
  icon: string;
}

const guideSteps: GuideStep[] = [
  {
    title: "Understanding Your Exam",
    description: "Start by selecting your target exam. Each exam has specific patterns and requirements.",
    tips: [
      "Know your exam's syllabus",
      "Understand the exam pattern",
      "Check previous year questions",
    ],
    icon: "🎓",
  },
  {
    title: "Choosing the Right Topic",
    description: "Select topics based on your weak areas or upcoming test schedule.",
    tips: [
      "Focus on high-weightage topics",
      "Practice weak areas first",
      "Balance theory and practice",
    ],
    icon: "📍",
  },
  {
    title: "Customizing Your Prompt",
    description: "Adjust difficulty level and format to match your learning style.",
    tips: [
      "Start with beginner level",
      "Gradually increase difficulty",
      "Try different formats",
    ],
    icon: "⚙️",
  },
  {
    title: "Using AI Effectively",
    description: "Leverage AI to get personalized study material and practice questions.",
    tips: [
      "Ask follow-up questions",
      "Request specific examples",
      "Save important responses",
    ],
    icon: "🤖",
  },
];

export default function OnboardingGuide() {
  const [expandedStep, setExpandedStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`py-16 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      <div className="container space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold">
            <Zap className="w-4 h-4" />
            Study Tips & Guidance
          </div>
          <h2 className="text-4xl font-black bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Make the Most of Your Study Time
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Follow these steps to maximize your learning with AI-powered prompts
          </p>
        </div>

        <div className="space-y-4 max-w-2xl mx-auto">
          {guideSteps.map((step, idx) => (
            <div key={idx} className="group">
              <Card
                className={`cursor-pointer transition-all duration-300 border-0 overflow-hidden ${
                  expandedStep === idx
                    ? "shadow-lg ring-2 ring-blue-500"
                    : "shadow-md hover:shadow-lg"
                }`}
                onClick={() => setExpandedStep(expandedStep === idx ? -1 : idx)}
              >
                <div className="p-6 space-y-4">
                  {/* Header */}
                  <div className="flex items-start gap-4">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white text-xs font-bold">
                          {idx + 1}
                        </span>
                        <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                      </div>
                      <p className="text-sm text-slate-600">{step.description}</p>
                    </div>
                    <ArrowDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                        expandedStep === idx ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {/* Expanded Content */}
                  {expandedStep === idx && (
                    <div className="pt-4 border-t border-slate-200 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                      <p className="text-sm font-semibold text-slate-700">💡 Pro Tips:</p>
                      <ul className="space-y-2">
                        {step.tips.map((tip, tipIdx) => (
                          <li
                            key={tipIdx}
                            className="flex items-start gap-3 text-sm text-slate-600 animate-in fade-in slide-in-from-left-2 duration-300"
                            style={{ animationDelay: `${tipIdx * 100}ms` }}
                          >
                            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 flex-shrink-0 text-xs font-bold">
                              ✓
                            </span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <Button
            size="lg"
            className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Ready to Start Learning?
            <ArrowDown className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
