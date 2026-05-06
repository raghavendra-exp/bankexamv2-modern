import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Github, Twitter, Instagram, Youtube } from "lucide-react";

export default function Contact() {
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
            <h2 className="text-3xl font-bold text-slate-900">Get in Touch</h2>
            <p className="text-slate-600">Have questions or suggestions? We'd love to hear from you!</p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-6 space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-blue-600" />
                <h3 className="font-semibold">Email</h3>
              </div>
              <p className="text-slate-600 text-sm">
                For general inquiries, bug reports, or partnerships
              </p>
              <a
                href="mailto:raghavbegins@gmail.com"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                raghavbegins@gmail.com
              </a>
            </Card>

            <Card className="p-6 space-y-3">
              <div className="flex items-center gap-3">
                <MessageSquare className="h-6 w-6 text-green-600" />
                <h3 className="font-semibold">Feedback</h3>
              </div>
              <p className="text-slate-600 text-sm">
                Share your suggestions to improve these tools
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Send Feedback
              </Button>
            </Card>
          </div>

          {/* Social Links */}
          <Card className="p-6 space-y-4">
            <h3 className="font-semibold text-lg">Follow Us</h3>
            <p className="text-slate-600 text-sm">
              Daily exam tips, study hacks, and current affairs updates
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <a
                href="https://www.facebook.com/Raghavbegins"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                <MessageSquare className="h-4 w-4" />
                Facebook
              </a>
              <a
                href="https://www.instagram.com/raghav3o"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors text-sm font-medium"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
              <a
                href="https://www.youtube.com/@raghav_begins"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
              >
                <Youtube className="h-4 w-4" />
                YouTube
              </a>
              <a
                href="https://github.com/raghavendra-exp/bankexamv2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors text-sm font-medium"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </Card>

          {/* Publisher Info */}
          <Card className="p-6 space-y-3 bg-slate-50">
            <h3 className="font-semibold text-lg">Publisher Information</h3>
            <div className="space-y-2 text-sm text-slate-600">
              <p>
                <span className="font-medium">Name:</span> Raghavbegins
              </p>
              <p>
                <span className="font-medium">Platform:</span> Indian Exam AI Prompt Generator
              </p>
              <p>
                <span className="font-medium">Country:</span> India
              </p>
              <p>
                <span className="font-medium">Website:</span>{" "}
                <a
                  href="https://raghavbegins.github.io/bankexamv2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  raghavbegins.github.io/bankexamv2
                </a>
              </p>
              <p className="pt-2 text-xs text-slate-500">
                This website is not affiliated with any exam conducting authority. All exam names and logos are
                trademarks of their respective organizations.
              </p>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
