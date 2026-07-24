import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

import { TaskPreview } from "@/components/features/landing/task-preview";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero({ isAuthenticated }: { isAuthenticated: boolean }) {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="from-brand/15 pointer-events-none absolute inset-x-0 -top-40 h-[32rem] bg-gradient-to-b via-transparent to-transparent blur-3xl"
      />
      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-4 pt-16 pb-20 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:pt-24 lg:pb-28">
        <div className="animate-fade-up">
          <Badge variant="secondary" className="mb-5 gap-1.5 px-3 py-1">
            <Sparkles className="size-3" />
            Natural language quick add is here
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Your to-do list,{" "}
            <span className="from-brand to-brand-accent bg-gradient-to-r bg-clip-text text-transparent">
              finally under control
            </span>
          </h1>

          <p className="text-muted-foreground mt-6 max-w-xl text-lg text-pretty">
            Tick turns scattered notes, half-remembered errands, and “I’ll get to it later” into
            one calm, ordered list. Capture in a keystroke, see what matters today, and let the
            rest wait its turn.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {isAuthenticated ? (
              <Button asChild size="lg">
                <Link href="/dashboard">
                  Go to your lists <ArrowRight className="size-4" />
                </Link>
              </Button>
            ) : (
              <Button asChild size="lg">
                <Link href="/signup">
                  Start for free <ArrowRight className="size-4" />
                </Link>
              </Button>
            )}
            <Button asChild size="lg" variant="outline">
              <a href="#how-it-works">See how it works</a>
            </Button>
          </div>

          <p className="text-muted-foreground mt-4 text-sm">
            Free forever for personal lists · No credit card required
          </p>
        </div>

        <div className="animate-fade-up [animation-delay:150ms]">
          <TaskPreview />
          <p className="text-muted-foreground mt-3 text-center text-xs">
            A live preview — tick things off, add your own.
          </p>
        </div>
      </div>
    </section>
  );
}
