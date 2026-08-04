import { ListChecks } from "lucide-react"
import Link from "next/link"

import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 font-semibold", className)}>
      <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-indigo-500 text-white shadow-sm">
        <ListChecks className="size-4.5" />
      </span>
      <span className="text-lg tracking-tight">Momentum</span>
    </Link>
  )
}
