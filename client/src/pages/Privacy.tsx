import { Card } from "@/components/ui/card";

export default function Privacy() {
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
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-slate-900">Privacy Policy</h2>
            <p className="text-slate-600">Last updated: May 2026</p>
          </div>

          <div className="space-y-6">
            <Card className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">About This Website</h3>
              <p className="text-slate-600">
                This website provides free AI study prompt generators for Indian competitive exams. It is hosted on
                GitHub Pages and runs entirely client-side in your browser. No data is sent to any server.
              </p>
            </Card>

            <Card className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">Information We Collect</h3>
              <p className="text-slate-600">
                We do not collect any personal information. The tools run entirely in your browser, and no data is
                transmitted to our servers. Your exam selections, generated prompts, and preferences are stored only
                locally in your browser.
              </p>
            </Card>

            <Card className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">Cookie Policy</h3>
              <div className="space-y-3 text-slate-600">
                <p>We use minimal cookies for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <span className="font-medium">Cookie Consent:</span> To remember your cookie preference
                    (rb_ck_*)
                  </li>
                  <li>
                    <span className="font-medium">Analytics:</span> Google Analytics 4 (GA4) to understand usage
                    patterns
                  </li>
                  <li>
                    <span className="font-medium">Advertising:</span> Google AdSense for optional ads
                  </li>
                </ul>
                <p className="pt-2">
                  These cookies are set by third parties and are governed by their respective privacy policies.
                </p>
              </div>
            </Card>

            <Card className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">Third-Party Services & Links</h3>
              <div className="space-y-3 text-slate-600">
                <p>This website includes links to and integrations with:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <span className="font-medium">AI Platforms:</span> Claude, ChatGPT, Gemini, Perplexity (for
                    prompt submission)
                  </li>
                  <li>
                    <span className="font-medium">Social Media:</span> Facebook, Instagram, YouTube, GitHub
                  </li>
                  <li>
                    <span className="font-medium">Analytics:</span> Google Analytics 4
                  </li>
                  <li>
                    <span className="font-medium">Advertising:</span> Google AdSense
                  </li>
                </ul>
                <p className="pt-2">
                  These third parties may collect data according to their own privacy policies. We are not responsible
                  for their practices.
                </p>
              </div>
            </Card>

            <Card className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">Your Rights</h3>
              <div className="space-y-3 text-slate-600">
                <ul className="list-disc list-inside space-y-2">
                  <li>You can clear your browser cookies at any time</li>
                  <li>You can disable analytics by adjusting your browser settings</li>
                  <li>You can opt-out of personalized ads through Google's Ad Settings</li>
                  <li>You can request deletion of any data by contacting us</li>
                </ul>
              </div>
            </Card>

            <Card className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">Contact Us</h3>
              <div className="space-y-2 text-slate-600">
                <p>
                  If you have privacy concerns or questions about this policy, please contact us at:
                </p>
                <p className="font-medium">
                  Email:{" "}
                  <a href="mailto:raghavbegins@gmail.com" className="text-blue-600 hover:text-blue-700">
                    raghavbegins@gmail.com
                  </a>
                </p>
              </div>
            </Card>

            <Card className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">Changes to This Policy</h3>
              <p className="text-slate-600">
                We may update this privacy policy from time to time. Any changes will be posted on this page with an
                updated "Last updated" date. Your continued use of the website constitutes acceptance of the updated
                policy.
              </p>
            </Card>

            <Card className="p-6 space-y-4 bg-blue-50">
              <h3 className="text-xl font-semibold">Important Disclaimer</h3>
              <p className="text-slate-600">
                This website is not affiliated with, endorsed by, or associated with any exam conducting authority or
                educational institution. All exam names, logos, and trademarks are the property of their respective
                organizations. We provide study tools only and are not responsible for exam patterns, syllabus changes,
                or official policies.
              </p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
