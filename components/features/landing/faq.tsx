import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Is Momentum really free?",
    answer:
      "Yes. The free plan has unlimited tasks and three projects, and it does not expire. Pro exists for people who want recurring tasks, reminders and saved filters.",
  },
  {
    question: "Does it work offline?",
    answer:
      "Add and complete tasks with no connection. Changes queue locally and merge as soon as you are back online, so nothing is lost.",
  },
  {
    question: "Can I import from another todo app?",
    answer:
      "Import from Todoist, Things, Apple Reminders or a plain CSV. Lists, due dates and completed history come across.",
  },
  {
    question: "Who can see my tasks?",
    answer:
      "Only you, unless you explicitly share a project. Every row in the database is guarded by row-level security policies tied to your account.",
  },
  {
    question: "Can I use it with my team?",
    answer:
      "The Teams plan adds shared projects, assignees and comments. Everyone keeps their own private lists alongside the shared ones.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="container mx-auto scroll-mt-20 px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Questions, answered
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Still curious? Email hello@momentum.app and a human will reply.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-xl border bg-card px-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-medium">
                {faq.question}
                <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
              </summary>
              <p className="pb-4 text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
