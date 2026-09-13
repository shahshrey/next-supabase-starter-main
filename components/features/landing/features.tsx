import {
  Bell,
  CalendarClock,
  FolderKanban,
  Repeat2,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FEATURES: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Zap,
    title: "Quick add that reads your mind",
    description:
      "Press ⌘K anywhere and type “pay rent friday 9am #home”. Tick parses the date, list, and priority for you.",
  },
  {
    icon: CalendarClock,
    title: "A Today view worth trusting",
    description:
      "Overdue, due today, and scheduled work in one place — so you stop re-reading the same list to decide what is next.",
  },
  {
    icon: FolderKanban,
    title: "Projects, lists, and labels",
    description:
      "Group work the way you think about it. Nest projects, tag across them, and filter down to a single next action.",
  },
  {
    icon: Repeat2,
    title: "Recurring without the nagging",
    description:
      "“Every second Tuesday” just works. Completed repeats roll forward instead of piling up as overdue guilt.",
  },
  {
    icon: Users,
    title: "Shared lists for real life",
    description:
      "Split the grocery run or a launch plan. Assign, comment, and watch items tick off in real time.",
  },
  {
    icon: Bell,
    title: "Reminders you can actually act on",
    description:
      "Location and time reminders on every device, batched into a single daily digest if you prefer quiet.",
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-brand text-sm font-semibold tracking-wide uppercase">Features</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Everything a to-do app should do, and nothing it shouldn&apos;t
        </h2>
        <p className="text-muted-foreground mt-4 text-lg text-pretty">
          No dashboards to configure, no productivity philosophy to adopt. Just fast capture and a
          list that stays honest.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(({ icon: Icon, title, description }) => (
          <Card key={title} className="hover:border-brand/40 h-full transition-colors">
            <CardHeader>
              <span className="bg-brand-muted text-brand mb-4 flex size-11 items-center justify-center rounded-xl">
                <Icon className="size-5" />
              </span>
              <CardTitle className="text-lg">{title}</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                {description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
