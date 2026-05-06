import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What exactly does this tool generate?",
    answer:
      "It generates structured study prompts — detailed instructions you paste into Claude, ChatGPT, Gemini or any AI. The AI then acts as an expert tutor for that specific topic, exam, and year. You get concepts, solved examples, practice MCQs, PYQ patterns, shortcuts, and exam-day strategy — all in one go.",
  },
  {
    question: "Is this free? Do I need to create an account?",
    answer:
      "100% free, no account needed. Open any tool, generate prompts, copy and paste. No login, no email, no subscription. The tools run entirely in your browser.",
  },
  {
    question: "Which AI should I use with these prompts?",
    answer:
      "Claude (Anthropic) and ChatGPT (GPT-4o) give the most detailed and accurate exam responses. Gemini is great for current affairs. Perplexity is useful when you need web-sourced, up-to-date information. All platforms are one-click accessible from within any tool.",
  },
  {
    question: "Are the prompts updated for the current exam year?",
    answer:
      "Yes — all tools auto-detect the current year using JavaScript and calibrate content for the latest exam cycle. PYQ ranges, cutoff data, and syllabus references all update dynamically.",
  },
  {
    question: "Which exams are covered?",
    answer:
      "12 major categories covering 80+ Indian competitive exams: Banking (SBI/IBPS/RRB), Railway (NTPC/Group D/ALP/JE), UPSC Civil Services, SSC (CGL/CHSL/MTS/JE), JEE (Mains + Advanced), NEET UG, MBA/CAT, State PSC (10 states), Teaching (CTET/KVS/NVS), Defence (NDA/AFCAT/Agniveer), PSU/GATE (CS/ECE/EE/ME), and Law Entrance (CLAT/AILET/LSAT India).",
  },
  {
    question: "Can I use these prompts on my phone?",
    answer:
      "Yes — all tools are fully mobile-responsive. The toggle sections, topic selectors, and one-click AI launchers all work on any screen size. Claude and ChatGPT both have mobile apps you can paste prompts into directly.",
  },
  {
    question: "How do I get the best results from these prompts?",
    answer:
      "1. Select your exact exam, subject, and topic. 2. Adjust difficulty and question count to match your level. 3. Copy the generated prompt. 4. Paste it into your preferred AI (Claude works best). 5. Ask follow-up questions if needed. 6. Save the AI's response for future reference.",
  },
  {
    question: "Can I customize the prompts?",
    answer:
      "Yes! You can adjust vocabulary depth, question count, difficulty level, and language (English/Hindi/Bilingual). For newspaper analysis, you can select specific newspapers and analysis columns. After generation, you can edit the prompt before pasting into AI.",
  },
  {
    question: "Do you collect my data?",
    answer:
      "No. Everything runs client-side in your browser. We don't collect any personal data, track your activity, or store your prompts. Your privacy is completely protected.",
  },
  {
    question: "How often are new exams added?",
    answer:
      "We regularly add new exam categories and update existing ones. Check back often for updates. You can also suggest exams via our contact page.",
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpen = new Set(openItems);
    if (newOpen.has(index)) {
      newOpen.delete(index);
    } else {
      newOpen.add(index);
    }
    setOpenItems(newOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container py-4 flex items-center justify-between">
          <h1 className="font-bold text-lg">Exam AI Prompt</h1>
        </div>
      </header>

      {/* Content */}
      <main className="container py-12">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-600">Everything you need to know about using these free exam tools</p>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => toggleItem(index)}
              >
                <div className="p-4 flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900">{item.question}</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-500 transition-transform ${
                      openItems.has(index) ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {openItems.has(index) && (
                  <div className="px-4 pb-4 text-slate-600 text-sm border-t border-slate-200">
                    {item.answer}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
