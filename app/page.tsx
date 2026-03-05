import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Zap,
  BarChart3,
  Calendar,
  Shield,
  Bell,
  Star,
  Sparkles,
  ListChecks,
  Kanban,
  Clock,
  TrendingUp,
  ChevronRight,
  Circle,
  Timer,
  Flag,
  MoreHorizontal,
  Plus,
  Globe,
  Repeat2,
  MessageSquare,
} from "lucide-react";

function Navbar({ user }: { user: unknown }) {
  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
              <ListChecks className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">TaskFlow</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              How it works
            </Link>
            <Link
              href="#pricing"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {user ? (
            <Link href="/dashboard">
              <Button size="sm" className="gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white border-0 hover:opacity-90">
                Dashboard <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          ) : (
            <>
              <Link href="/signin">
                <Button variant="ghost" size="sm">
                  Sign in
                </Button>
              </Link>
              <Link href="/signup">
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white border-0 hover:opacity-90"
                >
                  Get started free
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

function AppMockup() {
  return (
    <div className="relative w-full max-w-3xl mx-auto rounded-2xl shadow-2xl overflow-hidden border border-violet-200/50 bg-white">
      {/* Window chrome */}
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 mx-4 bg-white border border-gray-200 rounded-md px-3 py-1 text-xs text-gray-400 text-center">
          app.taskflow.io/board
        </div>
      </div>

      {/* App header */}
      <div className="bg-white border-b border-gray-100 px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
            <ListChecks className="w-3 h-3 text-white" />
          </div>
          <span className="font-semibold text-sm text-gray-800">TaskFlow</span>
          <span className="text-gray-300">/</span>
          <span className="text-sm text-gray-500">Q1 Sprint Board</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex -space-x-1.5">
            {["bg-violet-400", "bg-indigo-400", "bg-pink-400", "bg-emerald-400"].map((c, i) => (
              <div key={i} className={`w-6 h-6 rounded-full ${c} border-2 border-white flex items-center justify-center text-white text-[9px] font-bold`}>
                {["A", "B", "C", "D"][i]}
              </div>
            ))}
          </div>
          <div className="w-6 h-6 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-[10px]">
            +
          </div>
          <button className="ml-1 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs px-2.5 py-1 rounded-md flex items-center gap-1">
            <Plus className="w-3 h-3" /> New Task
          </button>
        </div>
      </div>

      {/* Kanban board */}
      <div className="bg-gray-50/80 p-4 grid grid-cols-3 gap-3 min-h-[320px]">
        {/* To Do Column */}
        <div className="space-y-2">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1.5">
              <Circle className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">To Do</span>
              <span className="text-xs bg-gray-200 text-gray-600 rounded-full w-4 h-4 flex items-center justify-center font-bold">3</span>
            </div>
            <MoreHorizontal className="w-3.5 h-3.5 text-gray-400" />
          </div>

          <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-2">
              <span className="text-xs font-medium text-gray-800 leading-tight">Redesign onboarding flow</span>
              <Flag className="w-3 h-3 text-red-400 shrink-0 mt-0.5" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] bg-red-50 text-red-500 px-1.5 py-0.5 rounded font-medium">High</span>
              <div className="flex items-center gap-1 text-gray-400">
                <Clock className="w-3 h-3" />
                <span className="text-[10px]">2d</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-2">
              <span className="text-xs font-medium text-gray-800 leading-tight">Write API documentation</span>
              <Flag className="w-3 h-3 text-yellow-400 shrink-0 mt-0.5" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] bg-yellow-50 text-yellow-600 px-1.5 py-0.5 rounded font-medium">Medium</span>
              <div className="flex items-center gap-1 text-gray-400">
                <Clock className="w-3 h-3" />
                <span className="text-[10px]">5d</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-2">
              <span className="text-xs font-medium text-gray-800 leading-tight">Set up CI/CD pipeline</span>
              <Flag className="w-3 h-3 text-gray-300 shrink-0 mt-0.5" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded font-medium">Low</span>
              <div className="flex items-center gap-1 text-gray-400">
                <Clock className="w-3 h-3" />
                <span className="text-[10px]">1w</span>
              </div>
            </div>
          </div>

          <button className="w-full text-[11px] text-gray-400 flex items-center gap-1 py-1.5 hover:text-violet-500 transition-colors">
            <Plus className="w-3 h-3" /> Add card
          </button>
        </div>

        {/* In Progress Column */}
        <div className="space-y-2">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1.5">
              <Timer className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">In Progress</span>
              <span className="text-xs bg-blue-100 text-blue-600 rounded-full w-4 h-4 flex items-center justify-center font-bold">2</span>
            </div>
            <MoreHorizontal className="w-3.5 h-3.5 text-gray-400" />
          </div>

          <div className="bg-white rounded-xl p-3 shadow-sm border border-blue-100 hover:shadow-md transition-shadow ring-1 ring-blue-100">
            <div className="flex items-start justify-between mb-2">
              <span className="text-xs font-medium text-gray-800 leading-tight">Build authentication module</span>
              <Flag className="w-3 h-3 text-red-400 shrink-0 mt-0.5" />
            </div>
            <div className="mb-2">
              <div className="w-full bg-gray-100 rounded-full h-1">
                <div className="bg-gradient-to-r from-violet-500 to-indigo-500 h-1 rounded-full w-[65%]" />
              </div>
              <span className="text-[10px] text-gray-400 mt-0.5 block">65% complete</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="w-5 h-5 rounded-full bg-violet-400 border-2 border-white flex items-center justify-center text-white text-[8px] font-bold">A</div>
              <div className="flex items-center gap-1 text-gray-400">
                <Clock className="w-3 h-3" />
                <span className="text-[10px] text-orange-500 font-medium">Today</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-2">
              <span className="text-xs font-medium text-gray-800 leading-tight">Database schema design</span>
              <Flag className="w-3 h-3 text-yellow-400 shrink-0 mt-0.5" />
            </div>
            <div className="mb-2">
              <div className="w-full bg-gray-100 rounded-full h-1">
                <div className="bg-gradient-to-r from-violet-500 to-indigo-500 h-1 rounded-full w-[40%]" />
              </div>
              <span className="text-[10px] text-gray-400 mt-0.5 block">40% complete</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="w-5 h-5 rounded-full bg-pink-400 border-2 border-white flex items-center justify-center text-white text-[8px] font-bold">C</div>
              <div className="flex items-center gap-1 text-gray-400">
                <Clock className="w-3 h-3" />
                <span className="text-[10px]">3d</span>
              </div>
            </div>
          </div>

          <button className="w-full text-[11px] text-gray-400 flex items-center gap-1 py-1.5 hover:text-violet-500 transition-colors">
            <Plus className="w-3 h-3" /> Add card
          </button>
        </div>

        {/* Done Column */}
        <div className="space-y-2">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Done</span>
              <span className="text-xs bg-emerald-100 text-emerald-600 rounded-full w-4 h-4 flex items-center justify-center font-bold">4</span>
            </div>
            <MoreHorizontal className="w-3.5 h-3.5 text-gray-400" />
          </div>

          {[
            "User research completed",
            "Wireframes approved",
            "Tech stack finalized",
            "Project kickoff meeting",
          ].map((task, i) => (
            <div key={i} className="bg-white/60 rounded-xl p-3 shadow-sm border border-gray-100 opacity-70">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span className="text-xs text-gray-500 line-through leading-tight">{task}</span>
              </div>
            </div>
          ))}

          <button className="w-full text-[11px] text-gray-400 flex items-center gap-1 py-1.5 hover:text-violet-500 transition-colors">
            <Plus className="w-3 h-3" /> Add card
          </button>
        </div>
      </div>
    </div>
  );
}

function HeroSection({ user }: { user: unknown }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-violet-50/70 via-white to-white">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-violet-300/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-20 pb-16 relative">
        <div className="text-center mb-12">
          <Badge
            variant="secondary"
            className="mb-6 px-4 py-1.5 bg-violet-100 text-violet-700 border-violet-200 hover:bg-violet-100"
          >
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            The task manager built for modern teams
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Get more done,
            <br />
            <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              together
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            TaskFlow helps teams organize work, track progress, and hit
            deadlines — with beautiful kanban boards, smart reminders, and
            real-time collaboration.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {user ? (
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="gap-2 h-12 px-8 bg-gradient-to-r from-violet-600 to-indigo-600 border-0 text-white hover:opacity-90 shadow-lg shadow-violet-200"
                >
                  Go to Dashboard <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            ) : (
              <>
                <Link href="/signup">
                  <Button
                    size="lg"
                    className="gap-2 h-12 px-8 bg-gradient-to-r from-violet-600 to-indigo-600 border-0 text-white hover:opacity-90 shadow-lg shadow-violet-200"
                  >
                    Start for free <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/signin">
                  <Button size="lg" variant="outline" className="h-12 px-8 border-gray-200">
                    See a demo
                  </Button>
                </Link>
              </>
            )}
          </div>

          <p className="text-sm text-muted-foreground mt-4">
            No credit card required · Free forever for small teams
          </p>
        </div>

        {/* App mockup */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-violet-200/30 via-indigo-200/30 to-purple-200/30 rounded-3xl blur-2xl" />
          <div className="relative">
            <AppMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialProofSection() {
  const companies = [
    "Notion", "Linear", "Figma", "Vercel", "Stripe", "Loom", "Arc", "Raycast",
  ];
  return (
    <section className="border-y border-border/50 bg-gray-50/50 py-10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground mb-6 font-medium uppercase tracking-widest">
          Trusted by teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {companies.map((name) => (
            <span
              key={name}
              className="text-lg font-bold text-gray-300 hover:text-gray-400 transition-colors tracking-tight"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: Kanban,
    color: "bg-violet-100 text-violet-600",
    title: "Visual Kanban Boards",
    description:
      "Drag-and-drop tasks across customizable columns. See exactly what's in progress and what's blocked.",
  },
  {
    icon: Users,
    color: "bg-blue-100 text-blue-600",
    title: "Real-time Collaboration",
    description:
      "Work alongside your team in real time. See live updates, assign tasks, and leave comments instantly.",
  },
  {
    icon: Bell,
    color: "bg-orange-100 text-orange-600",
    title: "Smart Reminders",
    description:
      "Never miss a deadline. Set due dates, get smart notifications, and stay on top of priorities.",
  },
  {
    icon: BarChart3,
    color: "bg-emerald-100 text-emerald-600",
    title: "Progress Analytics",
    description:
      "Track velocity, identify bottlenecks, and report on team performance with beautiful dashboards.",
  },
  {
    icon: Repeat2,
    color: "bg-pink-100 text-pink-600",
    title: "Recurring Tasks",
    description:
      "Automate repetitive workflows. Create recurring tasks for standups, reviews, and sprints.",
  },
  {
    icon: Shield,
    color: "bg-gray-100 text-gray-600",
    title: "Enterprise Security",
    description:
      "SSO, 2FA, audit logs, and role-based permissions. Built to meet the highest compliance standards.",
  },
];

function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-violet-100 text-violet-700 border-violet-200"
          >
            Features
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Everything your team needs
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            TaskFlow brings together the tools you need to plan, execute, and
            deliver great work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, color, title, description }) => (
            <Card
              key={title}
              className="border-border/50 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-50 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div
                  className={`w-11 h-11 rounded-xl ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-base mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    step: "01",
    icon: ListChecks,
    title: "Create your workspace",
    description:
      "Set up a project in seconds. Invite your team, create boards, and define your workflow — no setup friction.",
    highlight: "Takes less than 2 minutes",
  },
  {
    step: "02",
    icon: Kanban,
    title: "Organize with boards",
    description:
      "Break work into tasks, assign owners, set priorities and deadlines. Visualize everything in one place.",
    highlight: "Drag-and-drop simplicity",
  },
  {
    step: "03",
    icon: TrendingUp,
    title: "Track and ship faster",
    description:
      "Monitor progress in real time. Celebrate completions, spot blockers early, and ship with confidence.",
    highlight: "Ship 2x faster on average",
  },
];

function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-indigo-100 text-indigo-700 border-indigo-200"
          >
            How it works
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Up and running in minutes
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Three simple steps to transform how your team works.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-px bg-gradient-to-r from-violet-200 to-indigo-200" />

          {steps.map(({ step, icon: Icon, title, description, highlight }) => (
            <div key={step} className="relative text-center group">
              <div className="w-24 h-24 rounded-2xl bg-white border-2 border-violet-100 shadow-lg shadow-violet-50 flex items-center justify-center mx-auto mb-6 group-hover:border-violet-300 group-hover:shadow-violet-100 transition-all duration-300">
                <Icon className="w-10 h-10 text-violet-600" />
                <span className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 text-white text-xs font-bold flex items-center justify-center shadow-md">
                  {step.replace("0", "")}
                </span>
              </div>
              <h3 className="font-bold text-lg mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {description}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-violet-600 bg-violet-50 px-3 py-1 rounded-full">
                <Zap className="w-3 h-3" />
                {highlight}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const stats = [
  { value: "50,000+", label: "Teams worldwide", icon: Globe },
  { value: "2M+", label: "Tasks completed", icon: CheckCircle2 },
  { value: "98%", label: "Customer satisfaction", icon: Star },
  { value: "4.9/5", label: "Average rating", icon: TrendingUp },
];

function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-violet-600 to-indigo-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="text-center text-white">
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="text-4xl font-bold mb-1">{value}</div>
              <div className="text-sm text-violet-200">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "TaskFlow completely changed how our engineering team ships features. We went from chaotic Slack threads to clean, organized sprints in one week.",
    author: "Sarah Chen",
    role: "Engineering Manager at Stripe",
    avatar: "SC",
    avatarColor: "bg-violet-400",
    stars: 5,
  },
  {
    quote:
      "The kanban boards are gorgeous and the real-time sync is flawless. It's the only tool our distributed team of 40 uses for project tracking.",
    author: "Marcus Johnson",
    role: "CTO at Loom",
    avatar: "MJ",
    avatarColor: "bg-indigo-400",
    stars: 5,
  },
  {
    quote:
      "We tried Jira, Asana, Monday — nothing stuck. TaskFlow's simplicity is its superpower. Our whole company adopted it without any training.",
    author: "Priya Patel",
    role: "Head of Product at Figma",
    avatar: "PP",
    avatarColor: "bg-pink-400",
    stars: 5,
  },
];

function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-emerald-100 text-emerald-700 border-emerald-200"
          >
            Testimonials
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Loved by teams everywhere
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Don't just take our word for it — here's what teams are saying.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(
            ({ quote, author, role, avatar, avatarColor, stars }) => (
              <Card
                key={author}
                className="border-border/50 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-50 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {Array.from({ length: stars }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-6 italic">
                    &ldquo;{quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full ${avatarColor} flex items-center justify-center text-white text-sm font-bold`}
                    >
                      {avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{author}</div>
                      <div className="text-xs text-muted-foreground">{role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </div>
    </section>
  );
}

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for individuals and small teams just getting started.",
    features: [
      "Up to 5 members",
      "10 active boards",
      "Unlimited tasks",
      "Basic analytics",
      "Mobile app",
      "Email support",
    ],
    cta: "Get started free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "per seat/month",
    description: "Everything you need to run a high-performing team.",
    features: [
      "Unlimited members",
      "Unlimited boards",
      "Advanced analytics",
      "Custom fields",
      "Priority support",
      "Integrations (Slack, GitHub)",
      "Recurring tasks",
      "Time tracking",
    ],
    cta: "Start Pro trial",
    highlighted: true,
    badge: "Most popular",
  },
  {
    name: "Enterprise",
    price: "$29",
    period: "per seat/month",
    description:
      "Advanced security and compliance for large organizations.",
    features: [
      "Everything in Pro",
      "SSO / SAML",
      "Audit logs",
      "Custom roles & permissions",
      "SLA guarantee",
      "Dedicated success manager",
      "Custom contracts",
      "Priority onboarding",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

function PricingSection({ user }: { user: unknown }) {
  return (
    <section id="pricing" className="py-24 bg-gray-50/70">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-violet-100 text-violet-700 border-violet-200"
          >
            Pricing
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Start free, upgrade when you're ready. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingPlans.map(
            ({
              name,
              price,
              period,
              description,
              features,
              cta,
              highlighted,
              badge,
            }) => (
              <div
                key={name}
                className={`relative rounded-2xl p-6 flex flex-col ${
                  highlighted
                    ? "bg-gradient-to-b from-violet-600 to-indigo-700 text-white shadow-2xl shadow-violet-200 scale-[1.03]"
                    : "bg-white border border-border/60 shadow-sm"
                }`}
              >
                {badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-500 to-indigo-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                    {badge}
                  </span>
                )}
                <div className="mb-6">
                  <div
                    className={`text-sm font-semibold uppercase tracking-widest mb-2 ${highlighted ? "text-violet-200" : "text-violet-600"}`}
                  >
                    {name}
                  </div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold">{price}</span>
                    <span
                      className={`text-sm ${highlighted ? "text-violet-200" : "text-muted-foreground"}`}
                    >
                      /{period}
                    </span>
                  </div>
                  <p
                    className={`text-sm leading-relaxed ${highlighted ? "text-violet-100" : "text-muted-foreground"}`}
                  >
                    {description}
                  </p>
                </div>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5">
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 ${highlighted ? "text-violet-200" : "text-violet-500"}`}
                      />
                      <span
                        className={`text-sm ${highlighted ? "text-violet-50" : "text-foreground/80"}`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link href={user ? "/dashboard" : "/signup"} className="block">
                  <Button
                    className={`w-full h-11 font-semibold ${
                      highlighted
                        ? "bg-white text-violet-700 hover:bg-violet-50"
                        : "bg-gradient-to-r from-violet-600 to-indigo-600 text-white border-0 hover:opacity-90"
                    }`}
                  >
                    {cta} <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

function CTASection({ user }: { user: unknown }) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center rounded-3xl bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 p-16 relative overflow-hidden shadow-2xl shadow-violet-200">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
          </div>
          <div className="relative">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/20">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              Join 50,000+ teams
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Start shipping faster today
            </h2>
            <p className="text-lg text-violet-100 mb-10 max-w-xl mx-auto">
              Get your team organized in minutes. No credit card required.
              Cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={user ? "/dashboard" : "/signup"}>
                <Button
                  size="lg"
                  className="h-12 px-8 bg-white text-violet-700 hover:bg-violet-50 font-semibold shadow-lg"
                >
                  Get started for free <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="ghost"
                className="h-12 px-8 text-white hover:bg-white/20 border border-white/30"
              >
                <MessageSquare className="w-4 h-4 mr-2" /> Talk to sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const links = {
    Product: ["Features", "Pricing", "Changelog", "Roadmap"],
    Company: ["About", "Blog", "Careers", "Press"],
    Resources: ["Documentation", "API Reference", "Community", "Status"],
    Legal: ["Privacy", "Terms", "Security", "Cookies"],
  };

  return (
    <footer className="border-t border-border/50 bg-gray-50/50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
                <ListChecks className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg">TaskFlow</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The modern task manager for teams that move fast.
            </p>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-semibold text-sm mb-4 text-foreground">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TaskFlow, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar user={user} />
      <HeroSection user={user} />
      <SocialProofSection />
      <FeaturesSection />
      <HowItWorksSection />
      <StatsSection />
      <TestimonialsSection />
      <PricingSection user={user} />
      <CTASection user={user} />
      <Footer />
    </div>
  );
}
