import { CheckCircle2, Inbox, ListChecks } from "lucide-react";

const STEPS = [
  {
    icon: Inbox,
    step: "01",
    title: "Capture it before you forget",
    description:
      "One shortcut, one line of text. Everything lands in your inbox so nothing lives in your head or a sticky note.",
  },
  {
    icon: ListChecks,
    step: "02",
    title: "Sort it once, in seconds",
    description:
      "Drag to a list, give it a day, flag what is urgent. Tick suggests dates and lists based on how you have sorted before.",
  },
  {
    icon: CheckCircle2,
    step: "03",
    title: "Work the Today view",
    description:
      "Open Tick in the morning and everything you agreed to is already there, in order. Tick things off and finish the day empty.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-muted/40 scroll-mt-20 border-y">
      <div className="mx-auto w-full max-w-6xl px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-brand text-sm font-semibold tracking-wide uppercase">How it works</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Three steps, then get on with your day
          </h2>
        </div>

        <ol className="mt-14 grid gap-8 md:grid-cols-3">
          {STEPS.map(({ icon: Icon, step, title, description }) => (
            <li key={step} className="relative">
              <div className="flex items-center gap-3">
                <span className="bg-brand text-brand-foreground flex size-10 items-center justify-center rounded-xl">
                  <Icon className="size-5" />
                </span>
                <span className="text-muted-foreground/40 text-3xl font-bold tabular-nums">
                  {step}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="text-muted-foreground mt-2 leading-relaxed">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
