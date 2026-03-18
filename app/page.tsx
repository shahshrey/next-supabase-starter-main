import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/server";
import {
  ArrowRight,
  BarChart3,
  BellRing,
  BrainCircuit,
  CalendarRange,
  CheckCircle2,
  ChevronRight,
  Clock3,
  KanbanSquare,
  Layers3,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
};

const proofPoints = [
  { value: "11 hrs", label: "saved per lead every week" },
  { value: "4 views", label: "board, list, timeline, and calendar" },
  { value: "24/7", label: "clarity across deadlines and handoffs" },
];

const featureCards: Feature[] = [
  {
    icon: BrainCircuit,
    eyebrow: "AI planner",
    title: "Auto-prioritize the messy backlog",
    description:
      "Turn scattered requests into a realistic plan with suggested owners, effort, and the next best task to tackle.",
  },
  {
    icon: CalendarRange,
    eyebrow: "Multiple views",
    title: "See work in the shape of the week",
    description:
      "Jump from Kanban to calendar to timeline without losing context, dependencies, or delivery confidence.",
  },
  {
    icon: BellRing,
    eyebrow: "Smart updates",
    title: "Keep everyone aligned automatically",
    description:
      "Daily digests, deadline nudges, and blocker alerts are generated from the work already happening.",
  },
  {
    icon: Users,
    eyebrow: "Collaboration",
    title: "Bring product, design, and ops together",
    description:
      "Tasks, docs, approvals, and conversations live in one calm workspace instead of five scattered tools.",
  },
  {
    icon: ShieldCheck,
    eyebrow: "Guardrails",
    title: "Protect the work that matters most",
    description:
      "Set owners, SLAs, and priority rules so critical tasks stay visible before they become urgent fire drills.",
  },
  {
    icon: BarChart3,
    eyebrow: "Visibility",
    title: "Spot bottlenecks before they snowball",
    description:
      "Track throughput, workload balance, and on-time delivery with dashboards leaders can trust at a glance.",
  },
];

const workflowSteps = [
  {
    icon: Zap,
    title: "Capture instantly",
    description:
      "Convert notes, Slack pings, and customer requests into structured tasks with context attached from day one.",
  },
  {
    icon: Layers3,
    title: "Shape the plan",
    description:
      "Balance workload across lists, boards, and timelines until the sprint feels realistic and the team feels focused.",
  },
  {
    icon: Target,
    title: "Deliver with confidence",
    description:
      "Automations keep reminders, approvals, and status updates moving while the team stays in deep work longer.",
  },
];

const boardColumns = [
  {
    title: "Inbox",
    count: "06",
    items: [
      {
        title: "Prep launch email brief",
        meta: "Marketing · Due today",
        dotClass: "bg-amber-300",
      },
      {
        title: "Scope onboarding fixes",
        meta: "Support feedback · New",
        dotClass: "bg-cyan-300",
      },
    ],
  },
  {
    title: "In Progress",
    count: "09",
    items: [
      {
        title: "Build mobile QA checklist",
        meta: "Product · 5 subtasks",
        dotClass: "bg-fuchsia-300",
      },
      {
        title: "Finalize client handoff",
        meta: "Ops · Awaiting review",
        dotClass: "bg-emerald-300",
      },
    ],
  },
  {
    title: "Ready to Ship",
    count: "04",
    items: [
      {
        title: "Homepage polish",
        meta: "Design · Approved",
        dotClass: "bg-emerald-300",
      },
      {
        title: "Sprint summary",
        meta: "Auto-generated update",
        dotClass: "bg-cyan-300",
      },
    ],
  },
];

const focusMetrics = [
  {
    label: "Deep work protected",
    value: "4.5 hrs",
    width: "78%",
    barClass: "bg-gradient-to-r from-cyan-400 to-blue-500",
  },
  {
    label: "Reviews cleared",
    value: "12 of 15",
    width: "80%",
    barClass: "bg-gradient-to-r from-emerald-400 to-teal-500",
  },
  {
    label: "Blocked items",
    value: "2 left",
    width: "22%",
    barClass: "bg-gradient-to-r from-fuchsia-400 to-pink-500",
  },
];

const workflowMoments = [
  {
    label: "Capture",
    title: "Customer request lands in the inbox",
    description:
      "TaskPilot tags it, assigns a priority, and turns the raw note into something the team can actually execute.",
  },
  {
    label: "Plan",
    title: "Sprint capacity updates live",
    description:
      "Drag work between lanes and instantly see who is overloaded, what slips, and what still fits this week.",
  },
  {
    label: "Share",
    title: "Stakeholders get polished updates",
    description:
      "Progress summaries write themselves, so everyone gets clarity without another sync meeting on the calendar.",
  },
];

const outcomes = [
  {
    value: "3.2x",
    label: "faster handoffs",
    description:
      "Tasks move from idea to owner without being copied between docs, chats, and trackers.",
  },
  {
    value: "0",
    label: "missed follow-ups",
    description:
      "Smart nudges keep reviews, blockers, and overdue work visible while there is still time to react.",
  },
  {
    value: "1",
    label: "source of truth",
    description:
      "Boards, timelines, notes, and progress all stay connected inside the same operating system for work.",
  },
  {
    value: "98%",
    label: "team adoption",
    description:
      "The UI feels obvious on day one, so people keep it updated and leaders finally trust the data.",
  },
];

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const primaryHref = user ? "/dashboard" : "/signup";
  const primaryLabel = user ? "Open workspace" : "Start free";

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-0 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute right-[-10%] top-24 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_28%)]" />
      </div>

      <header className="relative z-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 shadow-lg shadow-cyan-500/10 backdrop-blur">
              <KanbanSquare className="size-5 text-cyan-200" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide text-white">
                TaskPilot
              </p>
              <p className="text-xs text-white/50">
                Task management for fast-moving teams
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-white/60 md:flex">
            <Link href="#product" className="transition hover:text-white">
              Product
            </Link>
            <Link href="#features" className="transition hover:text-white">
              Features
            </Link>
            <Link href="#proof" className="transition hover:text-white">
              Proof
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            {!user && (
              <Button
                asChild
                variant="ghost"
                className="hidden rounded-full text-white/70 hover:bg-white/10 hover:text-white sm:inline-flex"
              >
                <Link href="/signin">Sign in</Link>
              </Button>
            )}
            <Button
              asChild
              className="h-10 rounded-full bg-white text-slate-950 hover:bg-white/90"
            >
              <Link href={primaryHref}>
                {primaryLabel}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto max-w-7xl px-6 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-14">
          <div className="grid gap-16 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
            <div>
              <Badge className="border border-white/10 bg-white/10 px-4 py-1 text-white shadow-lg shadow-cyan-500/10 backdrop-blur">
                <Sparkles className="mr-1 size-3.5 text-cyan-200" />
                AI planning + calm collaboration
              </Badge>

              <h1 className="mt-8 max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Run launches, sprints, and client work from
                <span className="bg-gradient-to-r from-fuchsia-300 via-white to-cyan-300 bg-clip-text text-transparent">
                  {" "}
                  one calm command center.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
                TaskPilot brings tasks, priorities, timelines, and updates into
                one elegant workspace so every team knows what matters next
                without the chaos.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-full bg-white text-slate-950 hover:bg-white/90"
                >
                  <Link href={primaryHref}>
                    {primaryLabel}
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="h-12 rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                >
                  <Link href="#workflow">
                    <PlayCircle className="size-4" />
                    See the workflow
                  </Link>
                </Button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {proofPoints.map((point) => (
                  <div
                    key={point.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                  >
                    <p className="text-3xl font-semibold">{point.value}</p>
                    <p className="mt-2 text-sm text-white/60">{point.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3 text-sm text-white/60">
                {["Product", "Marketing", "Operations", "Agencies", "Founders"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            <div id="product" className="relative lg:pl-6">
              <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.20),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.22),transparent_40%)] blur-2xl" />

              <Card className="relative overflow-hidden rounded-[2rem] border-white/10 bg-white/5 py-0 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl">
                <div className="border-b border-white/10 px-6 py-5">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                        TaskPilot workspace
                      </p>
                      <h2 className="mt-2 text-2xl font-semibold text-white">
                        Launch sprint
                      </h2>
                    </div>
                    <div className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                      83% on track
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                        Open tasks
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-white">
                        36
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                        Next release
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-white">
                        Friday
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-white/45">
                        SLA health
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-white">
                        94%
                      </p>
                    </div>
                  </div>
                </div>

                <CardContent className="space-y-4 px-6 py-6">
                  <div className="grid gap-4 xl:grid-cols-[1.12fr_0.88fr]">
                    <div className="rounded-2xl border border-white/10 bg-[#0b1022]/90 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-sm font-medium text-white">
                            Board view
                          </p>
                          <p className="mt-1 text-xs text-white/50">
                            Priority, ownership, and progress in one glance
                          </p>
                        </div>
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                          Week 24
                        </span>
                      </div>

                      <div className="mt-4 grid gap-3 md:grid-cols-3">
                        {boardColumns.map((column) => (
                          <div
                            key={column.title}
                            className="rounded-2xl border border-white/10 bg-white/[0.03] p-3"
                          >
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium text-white">
                                {column.title}
                              </p>
                              <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.24em] text-white/50">
                                {column.count}
                              </span>
                            </div>
                            <div className="mt-3 space-y-3">
                              {column.items.map((item) => (
                                <div
                                  key={item.title}
                                  className="rounded-xl border border-white/10 bg-white/5 p-3"
                                >
                                  <div className="flex items-start justify-between gap-3">
                                    <div>
                                      <p className="text-sm font-medium text-white">
                                        {item.title}
                                      </p>
                                      <p className="mt-1 text-xs text-white/55">
                                        {item.meta}
                                      </p>
                                    </div>
                                    <span
                                      className={`mt-1 size-2.5 rounded-full ${item.dotClass}`}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl border border-white/10 bg-[#0b1022]/90 p-4">
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <p className="text-sm font-medium text-white">
                              Today&apos;s focus
                            </p>
                            <p className="mt-1 text-xs text-white/55">
                              AI-balanced workload across the team
                            </p>
                          </div>
                          <div className="flex size-12 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-200">
                            <Clock3 className="size-5" />
                          </div>
                        </div>

                        <div className="mt-5 space-y-4">
                          {focusMetrics.map((item) => (
                            <div key={item.label}>
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-white/80">
                                  {item.label}
                                </span>
                                <span className="text-white/50">
                                  {item.value}
                                </span>
                              </div>
                              <div className="mt-2 h-2 rounded-full bg-white/10">
                                <div
                                  className={`h-full rounded-full ${item.barClass}`}
                                  style={{ width: item.width }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex size-11 items-center justify-center rounded-2xl bg-fuchsia-500/10 text-fuchsia-200">
                            <BellRing className="size-5" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-white">
                              Smart updates
                            </p>
                            <p className="mt-1 text-xs text-white/55">
                              Stakeholders get signal, not noise
                            </p>
                          </div>
                        </div>

                        <div className="mt-4 rounded-2xl border border-white/10 bg-[#0b1022]/80 p-4 text-sm text-white/70">
                          <p className="font-medium text-white">
                            Friday status update
                          </p>
                          <p className="mt-2">
                            Launch sprint is 83% complete. Two reviews are
                            blocked, one task was rescheduled, and mobile QA
                            needs attention before Friday.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.32em] text-cyan-200/80">
              Features
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Everything your team needs to move work forward without another
              noisy tool.
            </h2>
            <p className="mt-4 text-lg text-white/65">
              Capture requests, shape priorities, and keep delivery visible
              from kickoff to done.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {featureCards.map((feature) => (
              <Card
                key={feature.title}
                className="rounded-[1.75rem] border-white/10 bg-white/5 py-0 backdrop-blur"
              >
                <CardContent className="flex h-full flex-col px-6 py-6">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                    <feature.icon className="size-5" />
                  </div>
                  <p className="mt-6 text-xs uppercase tracking-[0.3em] text-white/45">
                    {feature.eyebrow}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/65">
                    {feature.description}
                  </p>
                  <div className="mt-auto flex items-center gap-1 pt-6 text-sm text-cyan-200">
                    Built for real operating rhythm
                    <ChevronRight className="size-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="workflow" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <Card className="rounded-[1.75rem] border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] py-0 backdrop-blur">
              <CardContent className="px-6 py-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.28em] text-white/45">
                      One workflow
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                      From intake to shipped, nothing gets re-entered.
                    </h2>
                  </div>
                  <div className="hidden size-14 items-center justify-center rounded-2xl bg-white/10 text-cyan-200 sm:flex">
                    <Workflow className="size-6" />
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {workflowMoments.map((moment, index) => (
                    <div
                      key={moment.title}
                      className="rounded-2xl border border-white/10 bg-[#0b1022]/75 p-5"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white">
                          0{index + 1}
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                            {moment.label}
                          </p>
                          <h3 className="mt-1 text-lg font-semibold text-white">
                            {moment.title}
                          </h3>
                        </div>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-white/65">
                        {moment.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 sm:grid-cols-3">
                  <div>
                    <p className="text-2xl font-semibold text-white">92%</p>
                    <p className="mt-2 text-sm text-white/60">
                      on-time work delivery
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-white">7 min</p>
                    <p className="mt-2 text-sm text-white/60">
                      average daily planning time
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-white">1 tap</p>
                    <p className="mt-2 text-sm text-white/60">
                      to convert notes into action
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4">
              {workflowSteps.map((step, index) => (
                <Card
                  key={step.title}
                  className="rounded-[1.75rem] border-white/10 bg-white/5 py-0 backdrop-blur"
                >
                  <CardContent className="flex flex-col gap-5 px-6 py-6 sm:flex-row sm:items-start">
                    <div className="flex items-center gap-4">
                      <div className="flex size-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                        <step.icon className="size-5" />
                      </div>
                      <span className="text-sm font-medium text-white/45">
                        0{index + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm leading-7 text-white/65">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="rounded-[1.75rem] border-cyan-300/20 bg-cyan-300/10 py-0 backdrop-blur">
                <CardContent className="px-6 py-6">
                  <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-100/80">
                    Why teams switch
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    The fastest way to reduce context switching.
                  </h3>
                  <div className="mt-5 space-y-3">
                    {[
                      "Tasks, docs, due dates, and updates live together.",
                      "Leaders get visibility without asking for manual status reports.",
                      "Every teammate knows what to do next the moment they log in.",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 size-5 text-cyan-200" />
                        <p className="text-sm text-white/75">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="proof" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <Card className="rounded-[1.75rem] border-white/10 bg-white/5 py-0 backdrop-blur">
              <CardContent className="px-6 py-6">
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/45">
                  Customer story
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                  &quot;TaskPilot replaced our sprint doc, status deck, and sticky
                  note wall in one week.&quot;
                </h2>
                <p className="mt-5 text-sm leading-7 text-white/65">
                  The team now plans launches in one workspace, auto-sends
                  weekly summaries to stakeholders, and catches blockers before
                  Friday crunch time starts.
                </p>

                <div className="mt-6 rounded-2xl border border-white/10 bg-[#0b1022]/75 p-5">
                  <div className="flex items-center gap-4">
                    <div className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-400 to-cyan-300 text-sm font-semibold text-slate-950">
                      AM
                    </div>
                    <div>
                      <p className="font-medium text-white">Ava Martinez</p>
                      <p className="text-sm text-white/55">
                        Head of Operations, Northstar Studio
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 space-y-3">
                    {[
                      "Launch meetings dropped from three per week to one.",
                      "Every request gets an owner before it gets discussed.",
                      "Stakeholders finally trust the timeline because it stays current.",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 size-5 text-emerald-300" />
                        <p className="text-sm text-white/70">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4 sm:grid-cols-2">
              {outcomes.map((outcome) => (
                <Card
                  key={outcome.label}
                  className="rounded-[1.75rem] border-white/10 bg-white/5 py-0 backdrop-blur"
                >
                  <CardContent className="px-6 py-6">
                    <p className="text-4xl font-semibold text-white">
                      {outcome.value}
                    </p>
                    <p className="mt-3 text-sm font-medium uppercase tracking-[0.24em] text-white/45">
                      {outcome.label}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-white/65">
                      {outcome.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20 pt-8 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(244,114,182,0.18),rgba(34,211,238,0.18))] p-[1px] shadow-2xl shadow-fuchsia-950/30">
            <div className="rounded-[calc(2rem-1px)] bg-[#09101f]/90 px-6 py-10 text-center sm:px-10">
              <p className="text-sm font-medium uppercase tracking-[0.32em] text-cyan-100/80">
                Start building calm
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Give your team a task manager they will actually enjoy opening.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-white/65">
                Swap the noise for clarity with a workspace that plans the week,
                shows the risk, and keeps everyone moving in sync.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-full bg-white text-slate-950 hover:bg-white/90"
                >
                  <Link href={primaryHref}>
                    {primaryLabel}
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                {!user && (
                  <Button
                    asChild
                    size="lg"
                    variant="ghost"
                    className="h-12 rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                  >
                    <Link href="/signin">Sign in to continue</Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
