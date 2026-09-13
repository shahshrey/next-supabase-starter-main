"use client";

import { Calendar, Check, Flag, Plus } from "lucide-react";
import { useId, useRef, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type PreviewTask = {
  id: string;
  title: string;
  list: string;
  due?: string;
  priority?: boolean;
  done: boolean;
};

const INITIAL_TASKS: PreviewTask[] = [
  {
    id: "1",
    title: "Ship the Q3 launch checklist",
    list: "Work",
    due: "Today, 4:00 PM",
    priority: true,
    done: false,
  },
  { id: "2", title: "Review Dana's design handoff", list: "Work", due: "Today", done: false },
  { id: "3", title: "Book flights for the offsite", list: "Travel", due: "Fri", done: false },
  { id: "4", title: "Water the fiddle leaf fig", list: "Home", done: true },
  { id: "5", title: "Renew gym membership", list: "Personal", done: true },
];

const LIST_STYLES: Record<string, string> = {
  Work: "bg-brand-muted text-brand border-transparent",
  Travel: "bg-amber-100 text-amber-800 border-transparent dark:bg-amber-500/15 dark:text-amber-300",
  Home: "bg-emerald-100 text-emerald-800 border-transparent dark:bg-emerald-500/15 dark:text-emerald-300",
  Personal: "bg-sky-100 text-sky-800 border-transparent dark:bg-sky-500/15 dark:text-sky-300",
};

export function TaskPreview() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [draft, setDraft] = useState("");
  const inputId = useId();
  const nextId = useRef(INITIAL_TASKS.length);

  const completed = tasks.filter((task) => task.done).length;
  const progress = Math.round((completed / tasks.length) * 100);

  function toggle(id: string) {
    setTasks((current) =>
      current.map((task) => (task.id === id ? { ...task, done: !task.done } : task))
    );
  }

  function addTask(event: React.FormEvent) {
    event.preventDefault();
    const title = draft.trim();
    if (!title) return;

    nextId.current += 1;
    setTasks((current) => [
      { id: String(nextId.current), title, list: "Personal", due: "Today", done: false },
      ...current,
    ]);
    setDraft("");
  }

  return (
    <div className="bg-card w-full rounded-2xl border shadow-2xl shadow-black/5 dark:shadow-black/40">
      <div className="flex items-center justify-between border-b px-5 py-4">
        <div>
          <p className="text-base font-semibold">Today</p>
          <p className="text-muted-foreground text-xs">
            {completed} of {tasks.length} done
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-muted h-1.5 w-24 overflow-hidden rounded-full">
            <div
              className="from-brand to-brand-accent h-full rounded-full bg-gradient-to-r transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-muted-foreground w-9 text-right text-xs tabular-nums">
            {progress}%
          </span>
        </div>
      </div>

      <form onSubmit={addTask} className="flex items-center gap-2 border-b px-5 py-3">
        <label htmlFor={inputId} className="sr-only">
          Add a task
        </label>
        <Plus className="text-muted-foreground size-4" />
        <input
          id={inputId}
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Add a task — try “call the vet tomorrow 9am”"
          className="placeholder:text-muted-foreground min-w-0 flex-1 bg-transparent text-sm outline-none"
        />
        <kbd className="text-muted-foreground bg-muted hidden rounded border px-1.5 py-0.5 text-[10px] font-medium sm:block">
          ⌘K
        </kbd>
      </form>

      <ul className="divide-y">
        {tasks.map((task) => (
          <li key={task.id}>
            <button
              type="button"
              onClick={() => toggle(task.id)}
              className="hover:bg-accent/50 flex w-full items-center gap-3 px-5 py-3 text-left transition-colors"
            >
              <span
                className={cn(
                  "flex size-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                  task.done ? "bg-brand border-brand" : "border-muted-foreground/40"
                )}
              >
                {task.done && <Check className="size-3 text-white" strokeWidth={3} />}
              </span>

              <span className="min-w-0 flex-1">
                <span
                  className={cn(
                    "block truncate text-sm transition-colors",
                    task.done && "text-muted-foreground line-through"
                  )}
                >
                  {task.title}
                </span>
                {task.due && !task.done && (
                  <span className="text-muted-foreground mt-0.5 flex items-center gap-1 text-xs">
                    <Calendar className="size-3" />
                    {task.due}
                  </span>
                )}
              </span>

              {task.priority && !task.done && (
                <Flag className="size-3.5 shrink-0 text-rose-500" fill="currentColor" />
              )}
              <Badge variant="outline" className={cn("shrink-0", LIST_STYLES[task.list])}>
                {task.list}
              </Badge>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
