import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Sparkles,
  LayoutDashboard,
  Users,
  Calendar,
  Bell,
  Zap,
  BarChart3,
  Star,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-xl">TaskFlow</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Reviews
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/signin">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="bg-violet-600 hover:bg-violet-700 text-white">
                Get Started for Free
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(124,58,237,0.1),rgba(255,255,255,0))]" />

        <div className="flex justify-center mb-6">
          <Badge className="px-4 py-1.5 bg-violet-50 text-violet-700 border-violet-200 hover:bg-violet-50">
            <Sparkles className="w-3 h-3 mr-1.5" />
            Introducing TaskFlow 2.0 — Now with AI
          </Badge>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]">
          Manage your tasks,
          <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            {" "}master your day
          </span>
        </h1>

        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
          The all-in-one task manager that helps teams and individuals stay organized, focused, and
          productive — no matter where they work.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
          <Link href="/signup">
            <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-white gap-2 px-8 h-12">
              Get started for free <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="gap-2 h-12 px-8">
            Watch demo
          </Button>
        </div>
        <p className="text-sm text-gray-400">7-day free trial. No credit card required.</p>

        {/* Product Mockup */}
        <div className="mt-16 relative max-w-5xl mx-auto">
          <div className="rounded-2xl border border-gray-200 shadow-2xl shadow-violet-100/50 overflow-hidden bg-white">
            {/* App Chrome */}
            <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-white border border-gray-200 rounded-md px-4 py-1 text-xs text-gray-400 w-48">
                  app.taskflow.io
                </div>
              </div>
            </div>
            {/* App Content */}
            <div className="flex h-[460px] text-left">
              {/* Sidebar */}
              <div className="w-56 bg-gray-50 border-r border-gray-100 p-4 flex flex-col gap-1 shrink-0">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-violet-100 text-violet-700 text-sm font-medium mb-2">
                  <LayoutDashboard className="w-4 h-4" />
                  My Tasks
                </div>
                {["Today", "Upcoming", "Projects", "Team", "Completed"].map((item, i) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-600 text-sm hover:bg-gray-100 cursor-pointer"
                  >
                    <div className="w-4 h-4 rounded-sm border border-gray-300 flex items-center justify-center">
                      {i === 0 && <div className="w-2 h-2 rounded-full bg-violet-500" />}
                    </div>
                    {item}
                    {i < 3 && (
                      <span className="ml-auto text-xs bg-gray-200 text-gray-600 rounded-full px-1.5 py-0.5">
                        {[5, 12, 3, 0, 0][i]}
                      </span>
                    )}
                  </div>
                ))}
                <div className="mt-4 px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  Projects
                </div>
                {["Website Redesign", "Mobile App", "Marketing Q2"].map((p, i) => (
                  <div
                    key={p}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-600 text-sm cursor-pointer hover:bg-gray-100"
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${["bg-blue-500", "bg-green-500", "bg-orange-500"][i]}`}
                    />
                    {p}
                  </div>
                ))}
              </div>
              {/* Main Content */}
              <div className="flex-1 p-6 overflow-hidden">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">Today</h2>
                    <p className="text-sm text-gray-400">Monday, March 2</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="text-xs h-8">
                      Filter
                    </Button>
                    <Button
                      size="sm"
                      className="bg-violet-600 hover:bg-violet-700 text-white text-xs h-8 gap-1"
                    >
                      <span>+</span> Add task
                    </Button>
                  </div>
                </div>
                {/* Task List */}
                <div className="space-y-2">
                  {[
                    { title: "Review product designs", tag: "Design", priority: "High", done: true },
                    {
                      title: "Prepare Q2 roadmap presentation",
                      tag: "Planning",
                      priority: "High",
                      done: false,
                    },
                    {
                      title: "Sync with engineering team",
                      tag: "Meeting",
                      priority: "Medium",
                      done: false,
                    },
                    {
                      title: "Update landing page copy",
                      tag: "Marketing",
                      priority: "Medium",
                      done: false,
                    },
                    { title: "Review pull requests", tag: "Dev", priority: "Low", done: false },
                  ].map((task, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-3 p-3 rounded-xl border ${
                        task.done
                          ? "bg-gray-50 border-gray-100"
                          : "bg-white border-gray-200 shadow-sm"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                          task.done ? "border-violet-500 bg-violet-500" : "border-gray-300"
                        }`}
                      >
                        {task.done && <Check className="w-3 h-3 text-white" />}
                      </div>
                      <span
                        className={`flex-1 text-sm ${
                          task.done ? "line-through text-gray-400" : "text-gray-800"
                        }`}
                      >
                        {task.title}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          task.priority === "High"
                            ? "bg-red-50 text-red-600"
                            : task.priority === "Medium"
                            ? "bg-yellow-50 text-yellow-600"
                            : "bg-green-50 text-green-600"
                        }`}
                      >
                        {task.priority}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                        {task.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Floating notification badges */}
          <div className="absolute -left-6 top-1/3 hidden lg:flex items-center gap-2 bg-white rounded-xl shadow-lg border border-gray-100 px-4 py-3">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
              <Check className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-800">Task completed</p>
              <p className="text-xs text-gray-400">2 minutes ago</p>
            </div>
          </div>
          <div className="absolute -right-6 top-1/4 hidden lg:flex items-center gap-2 bg-white rounded-xl shadow-lg border border-gray-100 px-4 py-3">
            <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center">
              <Zap className="w-4 h-4 text-violet-600" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-800">AI suggestion ready</p>
              <p className="text-xs text-gray-400">3 overdue tasks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="container mx-auto px-4 py-16 text-center">
        <p className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-8">
          Trusted by 50,000+ teams worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale">
          {["Acme Corp", "Globex", "Initech", "Umbrella Co", "Stark Industries", "Wayne Ent"].map(
            (company) => (
              <span key={company} className="text-lg font-bold text-gray-700 tracking-tight">
                {company}
              </span>
            )
          )}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-violet-50 text-violet-700 border-violet-200 hover:bg-violet-50">
            Features
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Everything you need to stay organized</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Powerful features designed for modern teams and individuals who want to get things done.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: LayoutDashboard,
              title: "Smart Dashboard",
              desc: "Get a bird's-eye view of all your tasks with an intelligent dashboard that surfaces what matters most.",
              bg: "bg-violet-50",
              ic: "text-violet-600",
            },
            {
              icon: Users,
              title: "Team Collaboration",
              desc: "Assign tasks, leave comments, and collaborate in real-time. Everyone stays in sync, always.",
              bg: "bg-blue-50",
              ic: "text-blue-600",
            },
            {
              icon: Calendar,
              title: "Calendar & Timeline",
              desc: "Visualize your workload with beautiful calendar and Gantt views. Never miss another deadline.",
              bg: "bg-green-50",
              ic: "text-green-600",
            },
            {
              icon: Bell,
              title: "Smart Reminders",
              desc: "Automated reminders and notifications keep you and your team on track without micromanaging.",
              bg: "bg-orange-50",
              ic: "text-orange-600",
            },
            {
              icon: Zap,
              title: "AI-Powered Insights",
              desc: "Let AI analyze your work patterns and suggest the optimal schedule to maximize your productivity.",
              bg: "bg-yellow-50",
              ic: "text-yellow-600",
            },
            {
              icon: BarChart3,
              title: "Progress Analytics",
              desc: "Track completion rates, team velocity, and project health with beautiful charts and reports.",
              bg: "bg-pink-50",
              ic: "text-pink-600",
            },
          ].map(({ icon: Icon, title, desc, bg, ic }) => (
            <Card key={title} className="border-gray-100 hover:shadow-md transition-shadow duration-200">
              <CardHeader>
                <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${ic}`} />
                </div>
                <CardTitle className="text-lg">{title}</CardTitle>
                <CardDescription className="text-gray-500 leading-relaxed">{desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-violet-50 text-violet-700 border-violet-200 hover:bg-violet-50">
              How it works
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Get started in minutes</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              No complex setup. No steep learning curve. Just powerful task management from day one.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto relative">
            <div className="hidden md:block absolute top-8 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-violet-200 via-violet-300 to-violet-200" />
            {[
              {
                step: "01",
                title: "Create your workspace",
                desc: "Sign up and create your personal or team workspace in seconds. No credit card required.",
              },
              {
                step: "02",
                title: "Add your tasks",
                desc: "Import from existing tools or start fresh. Add tasks, set priorities, and assign due dates.",
              },
              {
                step: "03",
                title: "Track and complete",
                desc: "Watch your productivity soar as you organize, collaborate, and crush your goals every day.",
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative text-center">
                <div className="w-16 h-16 rounded-2xl bg-violet-600 text-white text-xl font-bold flex items-center justify-center mx-auto mb-6 shadow-lg shadow-violet-200">
                  {step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-violet-50 text-violet-700 border-violet-200 hover:bg-violet-50">
            Pricing
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Start free, upgrade when you need more. No hidden fees, cancel anytime.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
          {[
            {
              name: "Free",
              price: "$0",
              period: "forever",
              desc: "Perfect for individuals getting started",
              features: ["Up to 20 tasks", "1 project", "Basic reminders", "Mobile app access"],
              cta: "Get started free",
              highlight: false,
            },
            {
              name: "Pro",
              price: "$9",
              period: "per month",
              desc: "For power users who need more",
              features: [
                "Unlimited tasks",
                "Unlimited projects",
                "AI-powered insights",
                "Calendar & Timeline view",
                "Priority support",
              ],
              cta: "Start free trial",
              highlight: true,
            },
            {
              name: "Team",
              price: "$19",
              period: "per user/month",
              desc: "For teams who need to collaborate",
              features: [
                "Everything in Pro",
                "Team collaboration",
                "Admin controls",
                "Advanced analytics",
                "Custom integrations",
              ],
              cta: "Start free trial",
              highlight: false,
            },
          ].map(({ name, price, period, desc, features, cta, highlight }) => (
            <div
              key={name}
              className={`relative rounded-2xl p-8 ${
                highlight
                  ? "bg-violet-600 text-white shadow-2xl shadow-violet-200 scale-105"
                  : "bg-white border border-gray-200"
              }`}
            >
              {highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3
                  className={`text-sm font-semibold mb-1 uppercase tracking-wide ${
                    highlight ? "text-violet-200" : "text-gray-400"
                  }`}
                >
                  {name}
                </h3>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-4xl font-bold">{price}</span>
                  <span className={`text-sm mb-1.5 ${highlight ? "text-violet-200" : "text-gray-400"}`}>
                    /{period}
                  </span>
                </div>
                <p className={`text-sm ${highlight ? "text-violet-100" : "text-gray-500"}`}>{desc}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm">
                    <CheckCircle2
                      className={`w-4 h-4 flex-shrink-0 ${
                        highlight ? "text-violet-200" : "text-violet-600"
                      }`}
                    />
                    <span className={highlight ? "text-violet-50" : "text-gray-700"}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/signup">
                <Button
                  className={`w-full ${
                    highlight
                      ? "bg-white text-violet-600 hover:bg-violet-50"
                      : "bg-violet-600 hover:bg-violet-700 text-white"
                  }`}
                >
                  {cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-violet-50 text-violet-700 border-violet-200 hover:bg-violet-50">
              Reviews
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Loved by thousands</h2>
            <div className="flex justify-center items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-gray-500 text-sm">4.9/5 from 2,000+ reviews</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Sarah Chen",
                role: "Product Manager at Acme",
                quote:
                  "TaskFlow completely transformed how our team works. We've cut missed deadlines by 80% since switching. The AI suggestions are surprisingly accurate.",
              },
              {
                name: "Marcus Johnson",
                role: "Freelance Designer",
                quote:
                  "As a solo freelancer, keeping track of multiple client projects was chaos. TaskFlow brings everything together beautifully. Worth every penny of the Pro plan.",
              },
              {
                name: "Emily Rodriguez",
                role: "Engineering Lead at Globex",
                quote:
                  "The team collaboration features are top-notch. My engineers love the clean, distraction-free interface. 10/10 would recommend to any engineering team.",
              },
            ].map(({ name, role, quote }) => (
              <Card key={name} className="border-gray-100 bg-white shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">&ldquo;{quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-indigo-600 flex items-center justify-center text-white font-semibold text-sm">
                      {name[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-900">{name}</p>
                      <p className="text-xs text-gray-400">{role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-24">
        <div className="bg-gradient-to-br from-violet-600 to-indigo-700 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          <h2 className="text-4xl font-bold mb-4 relative z-10">
            Start managing smarter today
          </h2>
          <p className="text-violet-100 mb-8 max-w-md mx-auto relative z-10 text-lg">
            Join 50,000+ teams already using TaskFlow to get more done, every single day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-white text-violet-700 hover:bg-violet-50 gap-2 px-8 h-12"
              >
                Get started for free <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="ghost"
              className="text-white border border-white/30 hover:bg-white/10 px-8 h-12"
            >
              Schedule a demo
            </Button>
          </div>
          <p className="mt-4 text-xs text-violet-200 relative z-10">
            No credit card required. 7-day free trial on all paid plans.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-violet-600 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-bold text-gray-900">TaskFlow</span>
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-gray-700 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-gray-700 transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-gray-700 transition-colors">
                Blog
              </a>
              <a href="#" className="hover:text-gray-700 transition-colors">
                Support
              </a>
            </div>
            <p className="text-sm text-gray-400">© 2026 TaskFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
