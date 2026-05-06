import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, BookOpen, Sparkles } from "lucide-react";
import { examCategories } from "@/lib/examData";
import ExamSearch from "@/components/ExamSearch";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white font-bold">
                📚
              </div>
              <div>
                <h1 className="font-bold text-lg">Exam AI Prompt</h1>
                <p className="text-xs text-slate-500">80+ Indian Competitive Exams</p>
              </div>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/faq">
              <Button variant="ghost" size="sm">
                FAQ
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost" size="sm">
                Contact
              </Button>
            </Link>
            <a href="https://github.com/raghavendra-exp/bankexamv2" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">
                GitHub
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-20 space-y-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Free AI Study Prompts
          </div>
          <h2 className="text-5xl font-bold tracking-tight text-slate-900">
            Master Any Exam with AI-Powered Study Prompts
          </h2>
          <p className="text-xl text-slate-600">
            Generate structured study prompts for 80+ Indian competitive exams. Perfect for UPSC, Banking, SSC, JEE, NEET, and more. No login required. 100% free.
          </p>
          <div className="flex gap-3 pt-4">
            <Button size="lg" className="gap-2">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Link href="/faq">
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
          <Card className="p-4 space-y-2">
            <Zap className="w-6 h-6 text-blue-500" />
            <h3 className="font-semibold">Instant Prompts</h3>
            <p className="text-sm text-slate-600">Generate AI-ready prompts in seconds</p>
          </Card>
          <Card className="p-4 space-y-2">
            <BookOpen className="w-6 h-6 text-teal-500" />
            <h3 className="font-semibold">All Exams</h3>
            <p className="text-sm text-slate-600">Coverage for 80+ competitive exams</p>
          </Card>
          <Card className="p-4 space-y-2">
            <Sparkles className="w-6 h-6 text-purple-500" />
            <h3 className="font-semibold">AI Ready</h3>
            <p className="text-sm text-slate-600">Works with Claude, ChatGPT, Gemini</p>
          </Card>
        </div>
      </section>

      {/* Search Section */}
      <section className="container py-8">
        <div className="max-w-md mx-auto">
          <ExamSearch />
        </div>
      </section>

      {/* Exam Categories */}
      <section className="container py-20 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-slate-900">Choose Your Exam</h2>
          <p className="text-slate-600">Select from 12 major exam categories</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {examCategories.map((category) => (
            <Link key={category.id} href={`/exam/${category.id}`}>
              <Card className="p-6 hover:shadow-lg transition-all cursor-pointer h-full hover:border-blue-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{category.icon}</div>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-slate-100 text-slate-700">
                    {category.exams.length} exams
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{category.name}</h3>
                <p className="text-sm text-slate-600 mb-4">{category.description}</p>
                <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                  Explore <ArrowRight className="w-4 h-4" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16">
        <div className="container text-center space-y-4">
          <h2 className="text-3xl font-bold">Ready to Ace Your Exam?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Start generating AI-powered study prompts today. No signup, no payment, completely free.
          </p>
          <Button size="lg" variant="secondary" className="gap-2">
            Start Now
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">Exams</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/exam/banking" className="hover:text-white">Banking</Link></li>
                <li><Link href="/exam/upsc" className="hover:text-white">UPSC</Link></li>
                <li><Link href="/exam/ssc" className="hover:text-white">SSC</Link></li>
                <li><Link href="/exam/railway" className="hover:text-white">Railway</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><a href="https://github.com/raghavendra-exp/bankexamv2" target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Follow</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://www.facebook.com/Raghavbegins" target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook</a></li>
                <li><a href="https://www.instagram.com/raghav3o" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a></li>
                <li><a href="https://www.youtube.com/@raghav_begins" target="_blank" rel="noopener noreferrer" className="hover:text-white">YouTube</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>&copy; 2026 Exam AI Prompt Generator. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
