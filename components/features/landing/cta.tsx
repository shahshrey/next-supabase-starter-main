import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Cta({ isAuthenticated }: { isAuthenticated: boolean }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-20">
      <div className="from-brand to-brand-accent relative overflow-hidden rounded-3xl bg-gradient-to-br px-6 py-16 text-center text-white sm:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-white/10 blur-2xl"
        />
        <h2 className="relative text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Ready to clear your head?
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-lg text-white/85 text-pretty">
          Set up your first list in under a minute. Bring the chaos — Tick will sort it into
          something you can actually finish.
        </p>
        <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" variant="secondary">
            <Link href={isAuthenticated ? "/dashboard" : "/signup"}>
              {isAuthenticated ? "Go to your lists" : "Start for free"}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="text-white hover:bg-white/15 hover:text-white"
          >
            <a href="#features">Take the tour</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
