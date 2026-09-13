import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Cta({ isSignedIn = false }: { isSignedIn?: boolean }) {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 to-indigo-600 px-6 py-16 text-center text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-white/10 blur-2xl"
        />
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Clear your list tonight
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-violet-50">
          Two minutes to set up, free forever for personal use. Your future self will thank you.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          {isSignedIn ? (
            <Button asChild size="lg" variant="secondary">
              <Link href="/dashboard">
                Open my tasks <ArrowRight className="size-4" />
              </Link>
            </Button>
          ) : (
            <>
              <Button asChild size="lg" variant="secondary">
                <Link href="/signup">
                  Create your free account <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="text-white hover:bg-white/15 hover:text-white"
              >
                <Link href="/signin">I already have an account</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
