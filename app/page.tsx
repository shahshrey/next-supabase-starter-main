import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";
import {
  CheckCircle2,
  Zap,
  Users,
  BarChart3,
  Brain,
  Smartphone,
  Puzzle,
  ArrowRight,
  Star,
  Check,
  ChevronRight,
  Circle,
  Clock,
  Flag,
  ListTodo,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600">
                <CheckCircle2 className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-900">TaskFlow</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">How it works</a>
              <a href="#testimonials" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Testimonials</a>
              <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
            </nav>
            <div className="flex items-center gap-3">
              {user ? (
                <Link href="/dashboard">
                  <Button className="bg-violet-600 hover:bg-violet-700 text-white rounded-full px-5">
                    Go to Dashboard
                  </Button>
                </Link>
              ) : (
                <>
                  <Link href="/signin">
                    <Button variant="ghost" className="text-sm text-gray-600 hover:text-gray-900">
                      Login
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button className="bg-violet-600 hover:bg-violet-700 text-white rounded-full px-5 text-sm">
                      Get Started Free
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Announcement Banner */}
      <div className="flex justify-center pt-8 px-4">
        <a href="#features" className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm text-violet-700 hover:bg-violet-100 transition-colors">
          <Sparkles className="h-3.5 w-3.5" />
          <span className="font-medium">Introducing AI-powered task suggestions</span>
          <ChevronRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
          Manage tasks,{" "}
          <span className="text-violet-600">ship faster</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500 leading-relaxed">
          The smart task manager built for teams that move fast. Organize,
          prioritize, and get things done — all in one place.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {user ? (
            <Link href="/dashboard">
              <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-white rounded-full px-8 h-12 text-base font-semibold shadow-lg shadow-violet-200">
                Go to Dashboard <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          ) : (
            <>
              <Link href="/signup">
                <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-white rounded-full px-8 h-12 text-base font-semibold shadow-lg shadow-violet-200">
                  Get started for free <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base border-gray-200 text-gray-700 hover:bg-gray-50">
                  See how it works
                </Button>
              </Link>
            </>
          )}
        </div>
        <p className="mt-4 text-sm text-gray-400">
          Free 14-day trial · No credit card required
        </p>

        {/* Product Mockup */}
        <div className="mt-16 mx-auto max-w-5xl">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 shadow-2xl shadow-gray-200/80 overflow-hidden">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-white border-b border-gray-100">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
              <div className="ml-3 flex-1 flex justify-center">
                <div className="w-64 h-6 rounded-md bg-gray-100 flex items-center justify-center">
                  <span className="text-xs text-gray-400">app.taskflow.io/my-tasks</span>
                </div>
              </div>
            </div>
            {/* App UI */}
            <div className="flex h-[440px] text-left">
              {/* Sidebar */}
              <div className="w-52 border-r border-gray-200 bg-white flex flex-col py-4 px-3 shrink-0">
                <div className="flex items-center gap-2 px-2 mb-6">
                  <div className="h-6 w-6 rounded-md bg-violet-600 flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-bold text-gray-900">TaskFlow</span>
                </div>
                <div className="space-y-0.5">
                  {[
                    { icon: ListTodo, label: "My Tasks", count: 12, active: true },
                    { icon: Clock, label: "Today", count: 5, active: false },
                    { icon: Flag, label: "Important", count: 3, active: false },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`flex items-center justify-between px-2 py-1.5 rounded-lg text-xs cursor-pointer ${
                        item.active
                          ? "bg-violet-50 text-violet-700 font-medium"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <item.icon className="h-3.5 w-3.5" />
                        {item.label}
                      </div>
                      <span className={`text-xs rounded-full px-1.5 py-0.5 ${item.active ? "bg-violet-100 text-violet-700" : "bg-gray-100 text-gray-500"}`}>{item.count}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs font-semibold text-gray-400 px-2 mb-1 uppercase tracking-wider">Projects</p>
                  {["Website Redesign", "Mobile App", "Marketing Q2", "API v3"].map((p) => (
                    <div key={p} className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs text-gray-600 hover:bg-gray-50 cursor-pointer">
                      <Circle className="h-3 w-3 fill-current text-violet-400" />
                      {p}
                    </div>
                  ))}
                </div>
              </div>
              {/* Main content */}
              <div className="flex-1 p-6 overflow-hidden bg-white">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-base font-bold text-gray-900">My Tasks</h2>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400 bg-gray-100 rounded-full px-2 py-0.5">12 tasks</span>
                    <div className="h-6 w-6 rounded-md bg-violet-600 flex items-center justify-center cursor-pointer">
                      <span className="text-white text-xs font-bold">+</span>
                    </div>
                  </div>
                </div>
                {/* Task items */}
                <div className="space-y-2">
                  {[
                    { title: "Redesign onboarding flow", priority: "High", tag: "Design", done: true, assignee: "A" },
                    { title: "Set up CI/CD pipeline", priority: "High", tag: "Engineering", done: false, assignee: "B" },
                    { title: "Write API documentation", priority: "Medium", tag: "Docs", done: false, assignee: "C" },
                    { title: "Update homepage copy", priority: "Low", tag: "Marketing", done: false, assignee: "D" },
                    { title: "Fix login page bug", priority: "High", tag: "Engineering", done: false, assignee: "A" },
                    { title: "Conduct user interviews", priority: "Medium", tag: "Research", done: false, assignee: "E" },
                  ].map((task, i) => (
                    <div key={i} className={`flex items-center gap-3 p-3 rounded-lg border ${task.done ? "bg-gray-50 border-gray-100" : "bg-white border-gray-100 hover:border-violet-200 hover:bg-violet-50/30"} transition-colors cursor-pointer group`}>
                      <div className={`h-4 w-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${task.done ? "border-green-400 bg-green-400" : "border-gray-300 group-hover:border-violet-400"}`}>
                        {task.done && <Check className="h-2.5 w-2.5 text-white" />}
                      </div>
                      <span className={`flex-1 text-xs ${task.done ? "line-through text-gray-400" : "text-gray-700"}`}>{task.title}</span>
                      <span className={`text-xs px-1.5 py-0.5 rounded-full font-medium ${task.priority === "High" ? "bg-red-50 text-red-600" : task.priority === "Medium" ? "bg-yellow-50 text-yellow-600" : "bg-green-50 text-green-600"}`}>{task.priority}</span>
                      <span className="text-xs px-1.5 py-0.5 rounded-full bg-gray-100 text-gray-500">{task.tag}</span>
                      <div className="h-5 w-5 rounded-full bg-violet-200 flex items-center justify-center text-xs font-bold text-violet-700">{task.assignee}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Right panel */}
              <div className="w-64 border-l border-gray-200 bg-gray-50/50 p-4 shrink-0 overflow-hidden">
                <h3 className="text-xs font-semibold text-gray-700 mb-3">Task Details</h3>
                <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
                  <p className="text-xs font-semibold text-gray-800 mb-3">Set up CI/CD pipeline</p>
                  <div className="space-y-2.5">
                    {[
                      { label: "Assignee", value: "Ben K.", color: "bg-blue-100 text-blue-700" },
                      { label: "Due date", value: "Mar 8, 2026", color: "" },
                      { label: "Priority", value: "High", color: "bg-red-50 text-red-600" },
                      { label: "Project", value: "Mobile App", color: "bg-violet-50 text-violet-700" },
                    ].map((detail) => (
                      <div key={detail.label} className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">{detail.label}</span>
                        <span className={`text-xs font-medium px-1.5 py-0.5 rounded-md ${detail.color || "text-gray-600"}`}>{detail.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <p className="text-xs text-gray-400 mb-2">Progress</p>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full w-2/5 bg-violet-500 rounded-full" />
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-gray-400">2/5 subtasks</span>
                      <span className="text-xs text-violet-600 font-medium">40%</span>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2 p-3 bg-violet-50 rounded-xl border border-violet-100">
                  <Brain className="h-3.5 w-3.5 text-violet-500 shrink-0" />
                  <p className="text-xs text-violet-700"><span className="font-semibold">AI suggests:</span> Break into 3 subtasks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Logos */}
      <section className="border-y border-gray-100 py-10 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-400 mb-8 uppercase tracking-widest font-medium">Trusted by teams at</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {["Stripe", "Linear", "Vercel", "Notion", "Figma", "Loom"].map((name) => (
              <span key={name} className="text-lg font-bold text-gray-300 tracking-tight hover:text-gray-400 transition-colors cursor-default">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 rounded-full bg-violet-50 text-violet-700 border-violet-200 hover:bg-violet-50">Features</Badge>
          <h2 className="text-4xl font-bold text-gray-900">Everything your team needs</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            Powerful features to help you organize work, collaborate seamlessly, and ship faster.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Brain,
              title: "AI-Powered Prioritization",
              description: "Let AI analyze your tasks and automatically surface what needs attention first based on deadlines, dependencies, and team workload.",
              color: "bg-violet-50 text-violet-600",
            },
            {
              icon: Users,
              title: "Team Collaboration",
              description: "Assign tasks, leave comments, share files, and keep your whole team in sync with real-time updates and notifications.",
              color: "bg-blue-50 text-blue-600",
            },
            {
              icon: Zap,
              title: "Smart Automations",
              description: "Create custom workflows that automatically move tasks, send reminders, and trigger actions — no code required.",
              color: "bg-yellow-50 text-yellow-600",
            },
            {
              icon: BarChart3,
              title: "Analytics & Reports",
              description: "Track velocity, spot bottlenecks, and understand team performance with beautiful charts and exportable reports.",
              color: "bg-green-50 text-green-600",
            },
            {
              icon: Puzzle,
              title: "100+ Integrations",
              description: "Connect TaskFlow with your favorite tools — GitHub, Slack, Figma, Notion, Google Calendar, and many more.",
              color: "bg-pink-50 text-pink-600",
            },
            {
              icon: Smartphone,
              title: "Mobile First",
              description: "Full-featured native apps for iOS and Android so you can manage tasks, capture ideas, and stay on top of things anywhere.",
              color: "bg-orange-50 text-orange-600",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-gray-100 bg-white p-6 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-50 transition-all duration-200"
            >
              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.color}`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 rounded-full bg-violet-50 text-violet-700 border-violet-200 hover:bg-violet-50">How it works</Badge>
            <h2 className="text-4xl font-bold text-gray-900">Up and running in minutes</h2>
            <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
              No complicated setup. No lengthy onboarding. Just sign up and start getting things done.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-px bg-gradient-to-r from-violet-200 via-violet-400 to-violet-200" />
            {[
              {
                step: "01",
                title: "Create your workspace",
                description: "Sign up and set up your workspace in under 2 minutes. Invite your team and start with a template or from scratch.",
              },
              {
                step: "02",
                title: "Add & organize tasks",
                description: "Create tasks, set priorities, assign them to team members, and group them into projects with a drag-and-drop interface.",
              },
              {
                step: "03",
                title: "Track & ship faster",
                description: "Monitor progress with real-time dashboards, get AI suggestions, and celebrate every win as your team ships faster.",
              },
            ].map((step, i) => (
              <div key={step.step} className="relative text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white border border-violet-200 shadow-lg shadow-violet-50">
                  <span className="text-2xl font-bold text-violet-600">{step.step}</span>
                </div>
                <h3 className="mb-3 text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 rounded-full bg-violet-50 text-violet-700 border-violet-200 hover:bg-violet-50">Testimonials</Badge>
          <h2 className="text-4xl font-bold text-gray-900">Loved by teams worldwide</h2>
          <p className="mt-4 text-lg text-gray-500">
            Join thousands of teams already using TaskFlow to get more done.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              quote: "TaskFlow completely changed how our engineering team works. We shipped 40% more features in Q1 after switching. The AI prioritization is genuinely magic.",
              name: "Sarah Chen",
              role: "VP of Engineering",
              company: "Stripe",
              avatar: "SC",
              color: "bg-violet-100 text-violet-700",
            },
            {
              quote: "We tried Jira, Asana, Linear — TaskFlow is the one that stuck. It's simple enough for the whole team to use but powerful enough for complex projects.",
              name: "Marcus Reid",
              role: "Co-founder & CTO",
              company: "Vercel",
              avatar: "MR",
              color: "bg-blue-100 text-blue-700",
            },
            {
              quote: "The automation features saved us 5+ hours per week on administrative work. Now the team focuses on what matters — building great products.",
              name: "Aisha Thompson",
              role: "Head of Product",
              company: "Figma",
              avatar: "AT",
              color: "bg-pink-100 text-pink-700",
            },
          ].map((t) => (
            <div key={t.name} className="rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-lg hover:shadow-gray-100 transition-all duration-200">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold ${t.color}`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 rounded-full bg-violet-50 text-violet-700 border-violet-200 hover:bg-violet-50">Pricing</Badge>
            <h2 className="text-4xl font-bold text-gray-900">Simple, transparent pricing</h2>
            <p className="mt-4 text-lg text-gray-500">Start free, scale as you grow. No hidden fees.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Free",
                price: "$0",
                period: "forever",
                description: "Perfect for individuals and small teams getting started.",
                features: ["Up to 3 projects", "10 tasks per project", "2 team members", "Basic analytics", "Mobile app access"],
                cta: "Get started free",
                highlight: false,
              },
              {
                name: "Pro",
                price: "$12",
                period: "per user / month",
                description: "For growing teams that need more power and collaboration.",
                features: ["Unlimited projects", "Unlimited tasks", "Unlimited members", "Advanced analytics", "AI prioritization", "Custom automations", "Priority support"],
                cta: "Start 14-day trial",
                highlight: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "contact us",
                description: "For large organizations with advanced security and compliance needs.",
                features: ["Everything in Pro", "SSO / SAML", "Custom integrations", "Dedicated CSM", "SLA guarantee", "Advanced security", "Custom contracts"],
                cta: "Contact sales",
                highlight: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-6 flex flex-col ${
                  plan.highlight
                    ? "bg-violet-600 text-white shadow-2xl shadow-violet-200 scale-105"
                    : "bg-white border border-gray-100"
                }`}
              >
                <div className="mb-6">
                  {plan.highlight && (
                    <span className="inline-block mb-3 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white">Most popular</span>
                  )}
                  <h3 className={`text-lg font-bold mb-1 ${plan.highlight ? "text-white" : "text-gray-900"}`}>{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className={`text-4xl font-bold ${plan.highlight ? "text-white" : "text-gray-900"}`}>{plan.price}</span>
                    <span className={`text-sm ${plan.highlight ? "text-violet-200" : "text-gray-400"}`}>{plan.period}</span>
                  </div>
                  <p className={`text-sm ${plan.highlight ? "text-violet-200" : "text-gray-500"}`}>{plan.description}</p>
                </div>
                <ul className="flex-1 space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check className={`h-4 w-4 flex-shrink-0 ${plan.highlight ? "text-violet-200" : "text-violet-500"}`} />
                      <span className={plan.highlight ? "text-violet-100" : "text-gray-600"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href={plan.name === "Enterprise" ? "#" : "/signup"}>
                  <Button
                    className={`w-full rounded-full h-11 font-semibold ${
                      plan.highlight
                        ? "bg-white text-violet-600 hover:bg-violet-50"
                        : "bg-violet-600 hover:bg-violet-700 text-white"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-violet-600 to-violet-700 p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1),transparent_60%)]" />
          <div className="relative">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to get more done?
            </h2>
            <p className="text-violet-200 text-lg mb-8 max-w-xl mx-auto">
              Join 50,000+ teams already using TaskFlow. Start your free trial today — no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="bg-white text-violet-600 hover:bg-violet-50 rounded-full px-8 h-12 text-base font-semibold shadow-lg">
                  Get started for free <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/signin">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 h-12 text-base bg-transparent">
                  Sign in
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-600">
                  <CheckCircle2 className="h-4 w-4 text-white" />
                </div>
                <span className="text-base font-bold text-gray-900">TaskFlow</span>
              </div>
              <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
                The smart task manager for teams that move fast. Trusted by 50,000+ teams worldwide.
              </p>
            </div>
            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "Changelog", "Roadmap"],
              },
              {
                title: "Company",
                links: ["About", "Blog", "Careers", "Press"],
              },
              {
                title: "Legal",
                links: ["Privacy", "Terms", "Security", "Cookies"],
              },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-semibold text-gray-900 mb-4">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-gray-400 hover:text-gray-700 transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-400">© 2026 TaskFlow, Inc. All rights reserved.</p>
            <div className="flex items-center gap-1 mt-4 sm:mt-0">
              <div className="h-2 w-2 rounded-full bg-green-400" />
              <span className="text-sm text-gray-400">All systems operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
