import { CheckCheck } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2 font-semibold tracking-tight", className)}
    >
      <span className="from-brand to-brand-accent flex size-8 items-center justify-center rounded-lg bg-gradient-to-br shadow-sm">
        <CheckCheck className="size-4.5 text-white" strokeWidth={2.5} />
      </span>
      <span className="text-lg">Tick</span>
    </Link>
  );
}
