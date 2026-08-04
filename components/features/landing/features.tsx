import {
  CalendarClock,
  FolderKanban,
  Keyboard,
  RefreshCw,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Keyboard,
    title: "Capture in a keystroke",
    description:
      "Press ⌘K anywhere and the thought is on your list before it slips away. No forms, no fields, no friction.",
    accent: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  },
  {
    icon: FolderKanban,
    title: "Lists that match your life",
    description:
      "Group tasks into projects for work, home and side quests, then filter down to the one thing that matters now.",
    accent: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
  },
  {
    icon: CalendarClock,
    title: "Due dates and reminders",
    description:
      "Schedule once and let recurring tasks handle the rest. Momentum nudges you before things go overdue.",
    accent: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
  },
  {
    icon: Sparkles,
    title: "Priorities without guilt",
    description:
      "Flag what is urgent, snooze what is not, and end the day with a short list instead of a long one.",
    accent: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
  {
    icon: RefreshCw,
    title: "Real-time everywhere",
    description:
      "Check something off on your laptop and watch it disappear on your phone. Offline edits merge when you reconnect.",
    accent: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: ShieldCheck,
    title: "Private by default",
    description:
      "Every task is protected by row-level security, so only you and the people you invite can ever read it.",
    accent: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
  },
]

export function Features() {
  return (
    <section id="features" className="container mx-auto scroll-mt-20 px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Everything a todo app should be
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Fast to add, easy to organise, impossible to lose. The rest is just noise.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="transition-shadow hover:shadow-md">
            <CardHeader>
              <div
                className={`mb-4 flex size-11 items-center justify-center rounded-xl ${feature.accent}`}
              >
                <feature.icon className="size-5" />
              </div>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription className="text-base">{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}
