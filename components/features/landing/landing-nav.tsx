import Link from "next/link";
import type { User } from "@supabase/supabase-js";

import { Button } from "@/components/ui/button";

type LandingNavProps = {
  user: User | null;
};

export function LandingNav({ user }: LandingNavProps) {
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[var(--harbor-ink)] md:text-2xl"
        >
          Harbor
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-[var(--harbor-ink)]/70 md:flex">
          <a href="#product" className="transition-colors hover:text-[var(--harbor-ink)]">
            Product
          </a>
          <a href="#rhythm" className="transition-colors hover:text-[var(--harbor-ink)]">
            Rhythm
          </a>
          <a href="#teams" className="transition-colors hover:text-[var(--harbor-ink)]">
            Teams
          </a>
        </nav>

        <div className="flex items-center gap-2">
          {user ? (
            <Button
              asChild
              className="h-10 rounded-md bg-[var(--harbor-sea)] px-4 text-white hover:bg-[var(--harbor-sea-deep)]"
            >
              <Link href="/dashboard">Open workspace</Link>
            </Button>
          ) : (
            <>
              <Button
                asChild
                variant="ghost"
                className="h-10 text-[var(--harbor-ink)]/80 hover:bg-transparent hover:text-[var(--harbor-ink)]"
              >
                <Link href="/signin">Sign in</Link>
              </Button>
              <Button
                asChild
                className="h-10 rounded-md bg-[var(--harbor-sea)] px-4 text-white hover:bg-[var(--harbor-sea-deep)]"
              >
                <Link href="/signup">Start free</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
