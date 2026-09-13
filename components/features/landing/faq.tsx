import { Plus } from "lucide-react";

const QUESTIONS = [
  {
    question: "Do I need a paid plan to be useful?",
    answer:
      "No. The free plan covers unlimited tasks, five lists, and the Today view — which is all most people need. Pro exists for recurring tasks, calendar sync, and unlimited devices.",
  },
  {
    question: "Can I import from another to-do app?",
    answer:
      "Yes. Tick imports from Todoist, Things, Apple Reminders, and any CSV export. Lists, due dates, and completion history come across intact.",
  },
  {
    question: "Does it work offline?",
    answer:
      "Every change is written locally first and synced when you reconnect, so a plane or a dead spot on the train never stops you from capturing something.",
  },
  {
    question: "What happens to my data if I cancel?",
    answer:
      "Your account drops to the free plan and nothing is deleted. You can export everything to JSON or CSV at any time, cancelled or not.",
  },
  {
    question: "Which platforms are supported?",
    answer:
      "Web, macOS, Windows, iOS, and Android, plus a command-line client for the people who asked for it loudly enough.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-muted/40 scroll-mt-20 border-y">
      <div className="mx-auto w-full max-w-3xl px-4 py-20">
        <h2 className="text-center text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Questions people ask before signing up
        </h2>

        <div className="mt-12 flex flex-col gap-3">
          {QUESTIONS.map(({ question, answer }) => (
            <details
              key={question}
              className="bg-background group rounded-xl border px-5 py-4 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-medium">
                {question}
                <Plus className="text-muted-foreground size-4 shrink-0 transition-transform duration-200 group-open:rotate-45" />
              </summary>
              <p className="text-muted-foreground mt-3 leading-relaxed">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
