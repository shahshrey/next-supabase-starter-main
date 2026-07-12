import Link from "next/link";
import type { User } from "@supabase/supabase-js";
import { ArrowRight } from "lucide-react";

import { HeroBoard } from "@/components/features/landing/hero-board";
import { LandingNav } from "@/components/features/landing/landing-nav";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";

async function getOptionalUser(): Promise<User | null> {
  try {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      return null;
    }
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user;
  } catch {
    return null;
  }
}

export default async function Home() {
  const user = await getOptionalUser();

  return (
    <div className="harbor-page min-h-screen text-[var(--harbor-ink)]">
      <LandingNav user={user} />

      {/* Hero — one composition */}
      <section className="relative isolate overflow-hidden pt-24 md:pt-28">
        <div className="harbor-atmosphere pointer-events-none absolute inset-0 -z-10" aria-hidden />
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="harbor-fade-up mx-auto max-w-3xl text-center">
            <p className="font-[family-name:var(--font-display)] text-5xl font-semibold tracking-tight text-[var(--harbor-ink)] sm:text-6xl md:text-7xl">
              Harbor
            </p>
            <h1 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-medium leading-[1.15] tracking-tight text-[var(--harbor-ink)] sm:text-4xl md:text-5xl">
              Your work, finally at rest.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[var(--harbor-ink)]/65 sm:text-lg">
              Plan, prioritize, and finish what matters — a calm task workspace for people who ship.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {user ? (
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-md bg-[var(--harbor-sea)] px-6 text-base text-white hover:bg-[var(--harbor-sea-deep)]"
                >
                  <Link href="/dashboard">
                    Open workspace <ArrowRight className="size-4" />
                  </Link>
                </Button>
              ) : (
                <>
                  <Button
                    asChild
                    size="lg"
                    className="h-12 rounded-md bg-[var(--harbor-sea)] px-6 text-base text-white hover:bg-[var(--harbor-sea-deep)]"
                  >
                    <Link href="/signup">
                      Start free <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-12 rounded-md border-[var(--harbor-ink)]/15 bg-white/40 px-6 text-base text-[var(--harbor-ink)] backdrop-blur-sm hover:bg-white/70"
                  >
                    <Link href="/signin">Sign in</Link>
                  </Button>
                </>
              )}
            </div>
          </div>

          <div id="product" className="harbor-float mt-14 md:mt-20">
            <HeroBoard />
          </div>
        </div>
      </section>

      {/* Rhythm — one job */}
      <section id="rhythm" className="relative border-t border-[var(--harbor-ink)]/8 bg-[var(--harbor-foam)] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-[0.14em] text-[var(--harbor-sea)] uppercase">
              Daily rhythm
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight md:text-4xl">
              A quieter way to move work forward.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--harbor-ink)]/65 md:text-lg">
              Harbor keeps today, this week, and waiting lanes in one glance — so priorities stay visible without a dashboard full of noise.
            </p>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-12">
            {[
              {
                step: "01",
                title: "Capture once",
                body: "Drop tasks into clear lanes the moment they appear. No more hunting across notes, chats, and tabs.",
              },
              {
                step: "02",
                title: "Choose the next right thing",
                body: "Today surfaces what deserves attention. Everything else waits without guilt or clutter.",
              },
              {
                step: "03",
                title: "Close the loop",
                body: "Check it off, leave a trail, and keep the board honest. Progress feels tangible again.",
              },
            ].map((item) => (
              <div key={item.step} className="border-t border-[var(--harbor-ink)]/12 pt-6">
                <span className="font-[family-name:var(--font-display)] text-sm text-[var(--harbor-sea)]">
                  {item.step}
                </span>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--harbor-ink)]/65 md:text-base">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teams — one job */}
      <section id="teams" className="relative overflow-hidden py-20 md:py-28">
        <div className="harbor-atmosphere-soft pointer-events-none absolute inset-0 -z-10" aria-hidden />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
          <div>
            <p className="text-sm font-medium tracking-[0.14em] text-[var(--harbor-sea)] uppercase">
              Built for teams
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight md:text-4xl">
              Shared focus without shared chaos.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--harbor-ink)]/65 md:text-lg">
              Owners, handoffs, and blockers stay attached to the work itself — so standup is a glance, not a scavenger hunt.
            </p>
            <ul className="mt-8 space-y-4 text-[var(--harbor-ink)]/80">
              {[
                "Clear owners on every task",
                "Waiting lane for true blockers",
                "A board that stays readable at scale",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm md:text-base">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--harbor-sea)]" />
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <div className="harbor-panel relative rounded-2xl border border-[var(--harbor-ink)]/10 bg-white/55 p-6 backdrop-blur-sm md:p-8">
            <p className="font-[family-name:var(--font-display)] text-sm font-medium text-[var(--harbor-ink)]/50">
              This morning
            </p>
            <div className="mt-5 space-y-4">
              {[
                { name: "Maya", action: "moved Launch checklist to Today", time: "8:14" },
                { name: "Jonah", action: "cleared API latency spike", time: "8:41" },
                { name: "Priya", action: "parked Legal review in Waiting", time: "9:02" },
              ].map((row) => (
                <div
                  key={row.time}
                  className="flex items-baseline justify-between gap-4 border-b border-[var(--harbor-ink)]/8 pb-4 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="text-sm font-medium text-[var(--harbor-ink)]">{row.name}</p>
                    <p className="mt-0.5 text-sm text-[var(--harbor-ink)]/55">{row.action}</p>
                  </div>
                  <span className="shrink-0 text-xs text-[var(--harbor-ink)]/35">{row.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-[var(--harbor-ink)]/8 bg-[var(--harbor-ink)] py-20 text-[var(--harbor-foam)] md:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight md:text-5xl">
            Bring your work to Harbor.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-[var(--harbor-foam)]/65 md:text-lg">
            Start free in minutes. No credit card. Just a calmer board for the work that matters.
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-md bg-[var(--harbor-sea)] px-7 text-base text-white hover:bg-[var(--harbor-sea-deep)]"
            >
              <Link href={user ? "/dashboard" : "/signup"}>
                {user ? "Open workspace" : "Create your board"} <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--harbor-ink)]/10 bg-[var(--harbor-foam)] py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-sm text-[var(--harbor-ink)]/45 md:flex-row md:px-8">
          <span className="font-[family-name:var(--font-display)] text-[var(--harbor-ink)]/70">
            Harbor
          </span>
          <p>Task management with room to breathe.</p>
        </div>
      </footer>
    </div>
  );
}
