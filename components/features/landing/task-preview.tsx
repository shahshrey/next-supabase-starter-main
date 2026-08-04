"use client"

import { useState } from "react"
import { Calendar, Check, Flag, Inbox, Plus } from "lucide-react"

import { cn } from "@/lib/utils"

type PreviewTask = {
  id: number
  title: string
  list: string
  due: string
  priority: "high" | "medium" | "low"
  done: boolean
}

const initialTasks: PreviewTask[] = [
  { id: 1, title: "Ship the pricing page copy", list: "Work", due: "Today", priority: "high", done: false },
  { id: 2, title: "Reply to Dana about the offsite", list: "Work", due: "Today", priority: "medium", done: false },
  { id: 3, title: "Book dentist appointment", list: "Personal", due: "Tomorrow", priority: "low", done: false },
  { id: 4, title: "30 minute walk", list: "Health", due: "Every day", priority: "medium", done: true },
  { id: 5, title: "Renew library books", list: "Personal", due: "Fri", priority: "low", done: true },
]

const priorityStyles: Record<PreviewTask["priority"], string> = {
  high: "text-rose-500",
  medium: "text-amber-500",
  low: "text-muted-foreground",
}

export function TaskPreview() {
  const [tasks, setTasks] = useState(initialTasks)

  const completed = tasks.filter((task) => task.done).length
  const progress = Math.round((completed / tasks.length) * 100)

  function toggle(id: number) {
    setTasks((current) =>
      current.map((task) => (task.id === id ? { ...task, done: !task.done } : task))
    )
  }

  return (
    <div className="rounded-2xl border bg-card/80 p-4 shadow-2xl shadow-violet-500/10 backdrop-blur sm:p-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Inbox className="size-4 text-violet-500" />
          <p className="text-sm font-semibold">Today</p>
        </div>
        <p className="text-xs text-muted-foreground">
          {completed} of {tasks.length} done
        </p>
      </div>

      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <div
          role="progressbar"
          aria-label="Tasks completed today"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          className="h-full rounded-full bg-gradient-to-r from-violet-600 to-indigo-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <ul className="mt-4 flex flex-col gap-1">
        {tasks.map((task) => (
          <li key={task.id}>
            <button
              type="button"
              onClick={() => toggle(task.id)}
              aria-pressed={task.done}
              className="flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left transition-colors hover:bg-accent/60"
            >
              <span
                className={cn(
                  "flex size-5 shrink-0 items-center justify-center rounded-full border transition-colors",
                  task.done
                    ? "border-violet-600 bg-violet-600 text-white"
                    : "border-muted-foreground/40"
                )}
              >
                <Check className={cn("size-3 transition-opacity", task.done ? "opacity-100" : "opacity-0")} />
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
                <span className="mt-0.5 flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="rounded bg-muted px-1.5 py-0.5">{task.list}</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="size-3" />
                    {task.due}
                  </span>
                </span>
              </span>

              <Flag className={cn("size-3.5 shrink-0", priorityStyles[task.priority])} />
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-3 flex items-center gap-2 rounded-lg border border-dashed px-3 py-2.5 text-sm text-muted-foreground">
        <Plus className="size-4" />
        Add a task
        <kbd className="ml-auto rounded border bg-muted px-1.5 py-0.5 font-mono text-[10px]">⌘K</kbd>
      </div>
    </div>
  )
}
