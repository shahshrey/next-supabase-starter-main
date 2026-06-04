import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  BarChart3,
  Bell,
  CheckCircle2,
  ChevronRight,
  Circle,
  Clock3,
  Command,
  KanbanSquare,
  Layers3,
  ListChecks,
  MessageSquareText,
  Sparkles,
  Users2,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { createClient } from "@/lib/supabase/server"

const stats = [
  { value: "42%", label: "fewer missed deadlines" },
  { value: "3.8x", label: "faster weekly planning" },
  { value: "18k+", label: "tasks completed daily" },
]

const features = [
  {
    icon: ListChecks,
    title: "Plan in plain language",
    description:
      "Capture quick thoughts, auto-sort priorities, and turn ideas into clean task lists.",
  },
  {
    icon: KanbanSquare,
    title: "See work from every angle",
    description:
      "Switch between focus lists, timelines, and team boards without duplicating work.",
  },
  {
    icon: Bell,
    title: "Gentle nudges, not noise",
    description:
      "Get smart reminders when work stalls, priorities change, or handoffs need attention.",
  },
]

const priorities = [
  { title: "Launch onboarding checklist", meta: "Due today", color: "bg-rose-500" },
  { title: "Review mobile task capture flow", meta: "Design sync", color: "bg-amber-500" },
  { title: "Prep sprint handoff notes", meta: "2 comments", color: "bg-sky-500" },
]

const workflow = [
  "Capture tasks from chat, meetings, or a quick command bar.",
  "Prioritize by deadline, energy, owner, and current team goals.",
  "Ship with shared views, reminders, and weekly progress rituals.",
]

export default async function Home() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const primaryCta = user
    ? { href: "/dashboard", label: "Open workspace" }
    : { href: "/signup", label: "Start organizing free" }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f3ec] text-slate-950">
      <section className="relative border-b border-slate-900/10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(251,146,60,0.24),transparent_32%),radial-gradient(circle_at_84%_12%,rgba(56,189,248,0.22),transparent_30%),linear-gradient(180deg,#fff7ed_0%,#f7f3ec_100%)]" />
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight">
            <span className="flex size-10 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-900/20">
              <Command className="size-5" />
            </span>
            <span className="text-xl">FlowPilot</span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#features" className="hover:text-slate-950">
              Features
            </a>
            <a href="#workflow" className="hover:text-slate-950">
              Workflow
            </a>
            <a href="#results" className="hover:text-slate-950">
              Results
            </a>
          </nav>
          <Button
            asChild
            variant="outline"
            className="hidden border-slate-300 bg-white/70 md:inline-flex"
          >
            <Link href={user ? "/dashboard" : "/signin"}>
              {user ? "Dashboard" : "Sign in"}
            </Link>
          </Button>
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-10 lg:grid-cols-[1fr_0.95fr] lg:pb-28 lg:pt-16">
          <div>
            <Badge
              variant="secondary"
              className="mb-6 rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-slate-700 shadow-sm"
            >
              <Sparkles className="size-3.5 text-orange-500" />
              New calm mode for busy teams
            </Badge>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 md:text-7xl">
              Turn scattered work into a calm, focused plan
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              FlowPilot keeps tasks, priorities, and team momentum in one beautiful
              workspace so every day starts with a plan you can trust.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-slate-950 px-7 text-base text-white shadow-xl shadow-slate-900/20 hover:bg-slate-800"
              >
                <Link href={primaryCta.href}>
                  {primaryCta.label}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              {!user && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-slate-300 bg-white/70 px-7 text-base"
                >
                  <Link href="/signin">
                    Watch workspace tour
                    <ChevronRight className="size-4" />
                  </Link>
                </Button>
              )}
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/70 bg-white/60 p-4 shadow-sm backdrop-blur"
                >
                  <div className="text-2xl font-semibold text-slate-950">{stat.value}</div>
                  <div className="mt-1 text-sm leading-5 text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-10 hidden rounded-3xl bg-white p-4 shadow-2xl shadow-slate-900/10 lg:block">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <CheckCircle2 className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold">17 tasks shipped</p>
                  <p className="text-xs text-slate-500">this sprint</p>
                </div>
              </div>
            </div>
            <Card className="rounded-[2rem] border-white/70 bg-white/75 p-3 shadow-2xl shadow-slate-900/15 backdrop-blur-xl">
              <CardContent className="rounded-[1.5rem] border border-slate-200/80 bg-slate-950 p-0 text-white">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="size-3 rounded-full bg-rose-400" />
                    <span className="size-3 rounded-full bg-amber-300" />
                    <span className="size-3 rounded-full bg-emerald-400" />
                  </div>
                  <Badge className="rounded-full bg-white/10 text-white hover:bg-white/10">
                    Today by priority
                  </Badge>
                </div>
                <div className="grid gap-4 p-5 md:grid-cols-[0.8fr_1fr]">
                  <div className="rounded-3xl bg-white/8 p-4">
                    <div className="mb-5 flex items-center justify-between">
                      <p className="font-medium">Focus queue</p>
                      <Zap className="size-4 text-orange-300" />
                    </div>
                    <div className="space-y-3">
                      {priorities.map((item) => (
                        <div
                          key={item.title}
                          className="rounded-2xl bg-white p-4 text-slate-950 shadow-lg shadow-black/10"
                        >
                          <div className="flex items-start gap-3">
                            <span className={`mt-1 size-2.5 rounded-full ${item.color}`} />
                            <div>
                              <p className="text-sm font-semibold">{item.title}</p>
                              <p className="mt-1 text-xs text-slate-500">{item.meta}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-3xl bg-white p-5 text-slate-950">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-slate-500">Project health</p>
                          <p className="mt-1 text-3xl font-semibold">92%</p>
                        </div>
                        <BarChart3 className="size-9 text-sky-500" />
                      </div>
                      <div className="mt-5 h-3 rounded-full bg-slate-100">
                        <div className="h-3 w-[92%] rounded-full bg-gradient-to-r from-orange-400 to-sky-400" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-3xl bg-sky-400 p-5 text-slate-950">
                        <Clock3 className="mb-8 size-6" />
                        <p className="text-2xl font-semibold">4.2h</p>
                        <p className="text-sm text-slate-700">focus time saved</p>
                      </div>
                      <div className="rounded-3xl bg-orange-300 p-5 text-slate-950">
                        <Users2 className="mb-8 size-6" />
                        <p className="text-2xl font-semibold">8</p>
                        <p className="text-sm text-slate-700">owners unblocked</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="mb-5 rounded-full border-slate-300 bg-white/70">
            Built for modern work
          </Badge>
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Everything your task list wanted to become
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            A focused operating system for teams that need clarity without another
            complicated project-management ritual.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="rounded-[2rem] border-white/80 bg-white/70 p-2 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/10"
            >
              <CardContent className="p-7">
                <span className="mb-8 flex size-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <feature.icon className="size-6" />
                </span>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="workflow" className="bg-slate-950 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.85fr_1fr]">
          <div>
            <Badge className="mb-5 rounded-full bg-white/10 text-white hover:bg-white/10">
              Weekly rhythm
            </Badge>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              From inbox chaos to done
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              FlowPilot gives every task a next step, owner, and context trail so nobody
              has to ask what matters next.
            </p>
          </div>
          <div className="grid gap-4">
            {workflow.map((step, index) => (
              <div
                key={step}
                className="flex gap-5 rounded-[2rem] border border-white/10 bg-white/[0.06] p-6"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white text-lg font-semibold text-slate-950">
                  {index + 1}
                </span>
                <div>
                  <p className="text-lg font-semibold">{step}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Smart defaults keep the process light while still giving managers and
                    makers the context they need.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
          <Card className="rounded-[2rem] border-white/80 bg-white/75 shadow-xl shadow-slate-900/5">
            <CardContent className="p-8 md:p-10">
              <MessageSquareText className="mb-10 size-10 text-orange-500" />
              <p className="text-2xl font-medium leading-10 md:text-3xl">
                &quot;FlowPilot replaced three weekly status meetings. The team opens one
                view, sees the plan, and gets back to work.&quot;
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-300 to-sky-300 font-semibold">
                  AR
                </div>
                <div>
                  <p className="font-semibold">Avery Reed</p>
                  <p className="text-sm text-slate-500">Head of Product, Northstar Labs</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="rounded-[2rem] border-slate-900 bg-slate-950 text-white shadow-xl shadow-slate-900/10">
            <CardContent className="p-8 md:p-10">
              <Layers3 className="mb-10 size-10 text-sky-300" />
              <h3 className="text-3xl font-semibold">Ready for the workday you wanted?</h3>
              <p className="mt-5 leading-7 text-slate-300">
                Start with your current tasks, invite your team, and let FlowPilot create
                the calm plan.
              </p>
              <div className="mt-8 space-y-3 text-sm text-slate-300">
                {["Unlimited personal tasks", "Shared team projects", "Calendar-aware reminders"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Circle className="size-2 fill-sky-300 text-sky-300" />
                      {item}
                    </div>
                  )
                )}
              </div>
              <Button
                asChild
                size="lg"
                className="mt-9 h-12 rounded-full bg-white px-7 text-base text-slate-950 hover:bg-slate-100"
              >
                <Link href={primaryCta.href}>
                  {primaryCta.label}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
