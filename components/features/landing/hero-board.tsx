"use client";

const columns = [
  {
    title: "Today",
    count: 3,
    tasks: [
      {
        title: "Ship onboarding checklist",
        meta: "Product · 11:30",
        tone: "sea" as const,
        done: false,
      },
      {
        title: "Review sprint risks",
        meta: "Ops · 14:00",
        tone: "mist" as const,
        done: false,
      },
      {
        title: "Approve design tokens",
        meta: "Design · Done",
        tone: "sand" as const,
        done: true,
      },
    ],
  },
  {
    title: "This week",
    count: 4,
    tasks: [
      {
        title: "Rewrite launch brief",
        meta: "Marketing",
        tone: "mist" as const,
        done: false,
      },
      {
        title: "Cut dashboard latency",
        meta: "Engineering",
        tone: "sea" as const,
        done: false,
      },
      {
        title: "Customer interview notes",
        meta: "Research",
        tone: "sand" as const,
        done: false,
      },
      {
        title: "Billing edge cases",
        meta: "Support",
        tone: "mist" as const,
        done: false,
      },
    ],
  },
  {
    title: "Waiting",
    count: 2,
    tasks: [
      {
        title: "Legal review on TOS",
        meta: "Blocked · 2d",
        tone: "sand" as const,
        done: false,
      },
      {
        title: "Vendor API keys",
        meta: "Waiting · Ava",
        tone: "mist" as const,
        done: false,
      },
    ],
  },
];

const toneClass = {
  sea: "bg-[var(--harbor-sea)]/12 text-[var(--harbor-sea-deep)]",
  mist: "bg-[var(--harbor-ink)]/6 text-[var(--harbor-ink)]/80",
  sand: "bg-[#d9cfc0]/55 text-[var(--harbor-ink)]/75",
};

export function HeroBoard() {
  return (
    <div className="harbor-board relative mx-auto w-full max-w-6xl overflow-hidden rounded-t-[1.25rem] border border-[var(--harbor-ink)]/10 bg-[var(--harbor-foam)]/90 shadow-[0_-20px_60px_rgba(14,31,36,0.08)] backdrop-blur-sm">
      <div className="flex items-center justify-between border-b border-[var(--harbor-ink)]/8 px-4 py-3 md:px-6">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-[var(--harbor-ink)]/15" />
            <span className="size-2.5 rounded-full bg-[var(--harbor-ink)]/15" />
            <span className="size-2.5 rounded-full bg-[var(--harbor-ink)]/15" />
          </div>
          <p className="font-[family-name:var(--font-display)] text-sm font-medium text-[var(--harbor-ink)]">
            Harbor · Spring launch
          </p>
        </div>
        <p className="hidden text-xs tracking-wide text-[var(--harbor-ink)]/45 sm:block">
          9 of 14 moving · focus mode on
        </p>
      </div>

      <div className="grid gap-4 p-4 md:grid-cols-3 md:gap-5 md:p-6">
        {columns.map((column, columnIndex) => (
          <div key={column.title} className="min-w-0">
            <div className="mb-3 flex items-baseline justify-between px-1">
              <h3 className="font-[family-name:var(--font-display)] text-sm font-semibold text-[var(--harbor-ink)]">
                {column.title}
              </h3>
              <span className="text-xs text-[var(--harbor-ink)]/40">{column.count}</span>
            </div>
            <ul className="space-y-2.5">
              {column.tasks.map((task, taskIndex) => (
                <li
                  key={task.title}
                  className="harbor-task group rounded-lg border border-[var(--harbor-ink)]/6 bg-white/70 px-3.5 py-3 transition-transform duration-500"
                  style={{
                    animationDelay: `${columnIndex * 120 + taskIndex * 90}ms`,
                  }}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-[4px] border ${
                        task.done
                          ? "border-[var(--harbor-sea)] bg-[var(--harbor-sea)] text-white"
                          : "border-[var(--harbor-ink)]/20 bg-transparent"
                      }`}
                      aria-hidden
                    >
                      {task.done ? (
                        <svg viewBox="0 0 12 12" className="size-2.5" fill="none">
                          <path
                            d="M2.5 6.2 4.8 8.5 9.5 3.5"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : null}
                    </span>
                    <div className="min-w-0">
                      <p
                        className={`truncate text-sm font-medium ${
                          task.done
                            ? "text-[var(--harbor-ink)]/40 line-through"
                            : "text-[var(--harbor-ink)]"
                        }`}
                      >
                        {task.title}
                      </p>
                      <span
                        className={`mt-1.5 inline-block rounded px-1.5 py-0.5 text-[11px] ${toneClass[task.tone]}`}
                      >
                        {task.meta}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
