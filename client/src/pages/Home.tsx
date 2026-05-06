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
        <div className="max-w-3xl space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-transparent bg-clip-text font-semibold text-sm">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Free AI Study Prompts</span>
          </div>
          <h2 className="text-6xl font-black tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse-slow">
            Master Any Exam with AI-Powered Study Prompts
          </h2>
          <p className="text-xl text-slate-700 leading-relaxed">
            Generate structured study prompts for 80+ Indian competitive exams. Perfect for UPSC, Banking, SSC, JEE, NEET, and more. No login required. 100% free.
          </p>
          <div className="flex gap-3 pt-4">
            <Button size="lg" className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Link href="/faq">
              <Button size="lg" variant="outline" className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
          <Card className="p-6 space-y-3 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-lg text-blue-900">Instant Prompts</h3>
            <p className="text-sm text-blue-700">Generate AI-ready prompts in seconds</p>
          </Card>
          <Card className="p-6 space-y-3 bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-lg text-teal-900">All Exams</h3>
            <p className="text-sm text-teal-700">Coverage for 80+ competitive exams</p>
          </Card>
          <Card className="p-6 space-y-3 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-lg text-purple-900">AI Ready</h3>
            <p className="text-sm text-purple-700">Works with Claude, ChatGPT, Gemini</p>
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
          <h2 className="text-4xl font-black bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Choose Your Exam</h2>
          <p className="text-lg text-slate-600">Select from 12 major exam categories</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examCategories.map((category, idx) => (
            <Link key={category.id} href={`/exam/${category.id}`}>
              <Card className="p-6 h-full cursor-pointer group relative overflow-hidden border-0 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 bg-gradient-to-br from-white to-slate-50" style={{
                animation: `slideUp 0.5s ease-out ${idx * 0.1}s both`
              }}>
                {/* Gradient background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-transparent bg-clip-text">
                      {category.exams.length} exams
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">{category.name}</h3>
                  <p className="text-sm text-slate-600 mb-4 group-hover:text-slate-700 transition-colors duration-300">{category.description}</p>
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-sm group-hover:text-purple-600 group-hover:gap-3 transition-all duration-300">
                    Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>
        <div className="container text-center space-y-6 relative z-10">
          <h2 className="text-4xl font-black">Ready to Ace Your Exam?</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Start generating AI-powered study prompts today. No signup, no payment, completely free.
          </p>
          <Button size="lg" variant="secondary" className="gap-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Start Now
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-400 py-12 border-t border-slate-800">
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
          <div className="border-t border-slate-800 pt-8 text-center text-sm space-y-2">
            <p>&copy; 2026 Exam AI Prompt Generator. All rights reserved.</p>
            <p className="text-xs text-slate-500">Made with ❤️ for students | Powered by AI</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
