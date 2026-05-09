import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  BellRing,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Gauge,
  Kanban,
  LockKeyhole,
  Play,
  Sparkles,
  Target,
  UsersRound,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { createClient } from "@/lib/supabase/server"

const workflowColumns = [
  {
    title: "Today",
    count: "8",
    accent: "bg-emerald-500",
    tasks: ["Review launch copy", "Confirm design QA", "Send sprint recap"],
  },
  {
    title: "In progress",
    count: "5",
    accent: "bg-blue-500",
    tasks: ["Mobile task board", "Customer feedback tags", "Billing handoff"],
  },
  {
    title: "Done",
    count: "21",
    accent: "bg-violet-500",
    tasks: ["Weekly roadmap", "Priority matrix", "Onboarding checklist"],
  },
]

const metrics = [
  { value: "42%", label: "less status chasing" },
  { value: "3.6x", label: "faster handoffs" },
  { value: "18k", label: "tasks organized" },
]

const features = [
  {
    icon: Kanban,
    title: "Visual task boards",
    description: "Plan every project from backlog to done with flexible swimlanes, filters, and saved views.",
  },
  {
    icon: Target,
    title: "Priority matrix",
    description: "Score work by effort, urgency, and owner so the team always knows what matters next.",
  },
  {
    icon: BellRing,
    title: "Gentle reminders",
    description: "Nudges land before work slips, with quiet hours and digest controls for focused teams.",
  },
  {
    icon: Gauge,
    title: "Live momentum",
    description: "See bottlenecks, blocked tasks, and sprint health without building a separate report.",
  },
]

const timeline = [
  "Capture every request in one shared inbox",
  "Assign owners and due dates in seconds",
  "Track delivery across projects and squads",
]

export default async function Home() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f3ea] text-slate-950">
      <section className="relative isolate px-6 py-6 sm:px-8 lg:px-12">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.22),_transparent_36%),radial-gradient(circle_at_80%_10%,_rgba(16,185,129,0.18),_transparent_30%),linear-gradient(135deg,_#fff7ed_0%,_#eef2ff_48%,_#ecfeff_100%)]" />
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/70 bg-white/70 px-4 py-3 shadow-sm shadow-slate-200/70 backdrop-blur">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="flex size-9 items-center justify-center rounded-full bg-slate-950 text-white">
              <CheckCircle2 className="size-5" />
            </span>
            TaskPilot
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#features" className="transition hover:text-slate-950">Features</a>
            <a href="#workflow" className="transition hover:text-slate-950">Workflow</a>
            <a href="#security" className="transition hover:text-slate-950">Security</a>
          </nav>
          <Link href={user ? "/dashboard" : "/signin"}>
            <Button variant="outline" className="rounded-full border-slate-300 bg-white/70">
              {user ? "Open dashboard" : "Sign in"}
            </Button>
          </Link>
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 pb-24 pt-20 lg:grid-cols-[0.92fr_1.08fr] lg:pb-32 lg:pt-28">
          <div>
            <Badge className="mb-6 rounded-full border-emerald-200 bg-white/80 px-4 py-2 text-emerald-700 shadow-sm">
              <Sparkles className="size-4" />
              Built for calm, high-output teams
            </Badge>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Turn busywork into momentum.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Plan, assign, and ship tasks from one beautiful command center that keeps priorities, blockers, and deadlines in plain view.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={user ? "/dashboard" : "/signup"}>
                <Button size="lg" className="h-12 rounded-full bg-slate-950 px-7 text-white hover:bg-slate-800">
                  {user ? "Go to dashboard" : "Start organizing"}
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
              <Link href="#workflow">
                <Button size="lg" variant="outline" className="h-12 rounded-full border-slate-300 bg-white/70 px-7">
                  <Play className="size-4 fill-current" />
                  See workflow
                </Button>
              </Link>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-3xl border border-white/80 bg-white/60 p-4 shadow-sm backdrop-blur">
                  <div className="text-2xl font-semibold">{metric.value}</div>
                  <div className="mt-1 text-sm text-slate-500">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-16 hidden rounded-3xl border border-white/80 bg-white/75 p-4 shadow-xl shadow-slate-300/30 backdrop-blur lg:block">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-amber-100 p-3 text-amber-700">
                  <Clock3 className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Next deadline</p>
                  <p className="text-xs text-slate-500">Brand launch, 2:00 PM</p>
                </div>
              </div>
            </div>
            <Card className="border-white/80 bg-white/85 p-3 shadow-2xl shadow-slate-300/40 backdrop-blur">
              <CardHeader className="rounded-3xl bg-slate-950 p-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/60">Mission control</p>
                    <CardTitle className="mt-2 text-2xl">Launch workspace</CardTitle>
                  </div>
                  <Badge className="rounded-full bg-emerald-400/20 text-emerald-100">87% on track</Badge>
                </div>
              </CardHeader>
              <CardContent className="grid gap-4 p-4 lg:grid-cols-3">
                {workflowColumns.map((column) => (
                  <div key={column.title} className="rounded-3xl bg-slate-50 p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`size-2.5 rounded-full ${column.accent}`} />
                        <span className="text-sm font-semibold">{column.title}</span>
                      </div>
                      <span className="rounded-full bg-white px-2 py-1 text-xs text-slate-500">{column.count}</span>
                    </div>
                    <div className="space-y-3">
                      {column.tasks.map((task) => (
                        <div key={task} className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                          <div className="mb-3 h-2 w-16 rounded-full bg-slate-200" />
                          <p className="text-sm font-medium">{task}</p>
                          <div className="mt-4 flex items-center justify-between">
                            <div className="flex -space-x-2">
                              <span className="size-6 rounded-full border-2 border-white bg-blue-200" />
                              <span className="size-6 rounded-full border-2 border-white bg-emerald-200" />
                            </div>
                            <CalendarDays className="size-4 text-slate-400" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="features" className="bg-slate-950 px-6 py-24 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <Badge className="mb-5 rounded-full bg-white/10 text-white">Everything in motion</Badge>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">One place for priorities, people, and progress.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              TaskPilot keeps the whole operating rhythm visible, from tiny follow-ups to cross-functional launches.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="border-white/10 bg-white/[0.06] text-white shadow-none">
                <CardHeader>
                  <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-white text-slate-950">
                    <feature.icon className="size-6" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <p className="pt-2 text-sm leading-6 text-slate-300">{feature.description}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="px-6 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Badge className="mb-5 rounded-full bg-blue-100 text-blue-700">Simple by default</Badge>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">From first idea to finished work.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              A focused workflow means fewer meetings, cleaner handoffs, and a shared understanding of what shipped.
            </p>
          </div>
          <div className="grid gap-4">
            {timeline.map((step, index) => (
              <div key={step} className="flex gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{step}</h3>
                  <p className="mt-2 text-slate-600">
                    Keep context attached to the task so decisions, files, owners, and blockers travel together.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="security" className="px-6 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-300/40 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <Badge className="mb-5 rounded-full bg-white/10 text-white">
                <LockKeyhole className="size-4" />
                Built for teams that move fast
              </Badge>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Ready to make work feel lighter?</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Bring projects, deadlines, and teammates into one calm space with a task manager people actually want to open.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={user ? "/dashboard" : "/signup"}>
                  <Button size="lg" className="h-12 rounded-full bg-white px-7 text-slate-950 hover:bg-slate-100">
                    {user ? "Open TaskPilot" : "Create free workspace"}
                    <ArrowRight className="size-4" />
                  </Button>
                </Link>
                <Link href="/signin">
                  <Button size="lg" variant="ghost" className="h-12 rounded-full px-7 text-white hover:bg-white/10 hover:text-white">
                    Talk to sales
                  </Button>
                </Link>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-emerald-300 p-3 text-emerald-950">
                  <UsersRound className="size-6" />
                </div>
                <div>
                  <p className="font-semibold">Team health</p>
                  <p className="text-sm text-slate-300">12 members synced this week</p>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                {["Tasks completed", "Blocked work cleared", "Meetings replaced"].map((label, index) => (
                  <div key={label}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span>{label}</span>
                      <span>{[84, 68, 51][index]}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div className="h-2 rounded-full bg-emerald-300" style={{ width: `${[84, 68, 51][index]}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-2 rounded-2xl bg-white/10 p-4 text-sm">
                <Zap className="size-4 text-amber-300" />
                Your team saved 14 hours of coordination this month.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
