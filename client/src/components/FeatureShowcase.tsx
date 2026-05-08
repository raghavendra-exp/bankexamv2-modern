import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Zap, BookOpen, Sparkles, Copy, Share2 } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Instant Results",
    description: "Get AI-powered study prompts in seconds",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "AI Integration",
    description: "Works with Claude, ChatGPT, Gemini, and more",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Comprehensive",
    description: "80+ exams with detailed topic coverage",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Customizable",
    description: "Adjust difficulty, language, and format",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <Copy className="w-6 h-6" />,
    title: "One-Click Copy",
    description: "Copy prompts instantly to clipboard",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: "Share & Collaborate",
    description: "Share prompts with study groups",
    color: "from-rose-500 to-pink-500",
  },
];

export default function FeatureShowcase() {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);

  useEffect(() => {
    features.forEach((_, idx) => {
      setTimeout(() => {
        setVisibleFeatures((prev) => [...prev, idx]);
      }, idx * 150);
    });
  }, []);

  return (
    <div className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-black bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need for effective exam preparation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`transform transition-all duration-500 ${
                visibleFeatures.includes(idx)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 group cursor-pointer border-0 bg-white hover:bg-gradient-to-br hover:from-white hover:to-slate-50">
                <div className="space-y-4">
                  {/* Icon Container */}
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>

                  {/* Animated Underline */}
                  <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
