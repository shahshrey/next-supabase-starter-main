import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TaskPreview } from "@/components/features/landing/task-preview"

export function Hero({ isSignedIn = false }: { isSignedIn?: boolean }) {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 size-[42rem] -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-40 -z-10 size-[28rem] rounded-full bg-indigo-500/15 blur-3xl"
      />

      <div className="container mx-auto grid items-center gap-12 px-4 py-20 lg:grid-cols-2 lg:py-28">
        <div className="flex flex-col items-start">
          <Badge variant="secondary" className="gap-1.5 px-3 py-1">
            <Sparkles className="size-3" />
            New: recurring tasks and smart reminders
          </Badge>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            The to-do list that
            <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
              {" "}actually gets done
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Momentum turns scattered notes, half-remembered errands and someday-maybes into one
            calm list. Capture a task in a keystroke, sort it in a second, and see it sync
            everywhere instantly.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {isSignedIn ? (
              <Button asChild size="lg">
                <Link href="/dashboard">
                  Open my tasks <ArrowRight className="size-4" />
                </Link>
              </Button>
            ) : (
              <>
                <Button asChild size="lg">
                  <Link href="/signup">
                    Start for free <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/signin">Sign in</Link>
                </Button>
              </>
            )}
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Free forever for personal use. No credit card, no onboarding call.
          </p>
        </div>

        <div className="relative lg:pl-6">
          <TaskPreview />
        </div>
      </div>
    </section>
  )
}
