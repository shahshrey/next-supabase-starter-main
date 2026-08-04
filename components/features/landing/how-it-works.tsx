const steps = [
  {
    step: "01",
    title: "Brain dump",
    description:
      "Empty your head into the inbox. Groceries, that bug you keep forgetting, the birthday gift. Everything in one place.",
  },
  {
    step: "02",
    title: "Organise in seconds",
    description:
      "Drop each task into a list, give it a date and a priority. Momentum suggests the next best thing to do.",
  },
  {
    step: "03",
    title: "Finish and feel it",
    description:
      "Tick things off, watch the progress bar fill, and end the day knowing exactly what moved forward.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 border-y bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Three steps to a clear head
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            No methodology to learn, no setup weekend required.
          </p>
        </div>

        <ol className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((item) => (
            <li key={item.step} className="relative rounded-2xl border bg-background p-6">
              <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text font-mono text-sm font-semibold text-transparent">
                {item.step}
              </span>
              <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-muted-foreground">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
