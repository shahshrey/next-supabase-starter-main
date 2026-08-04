"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Logo } from "@/components/features/landing/logo"

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
]

export function SiteHeader({ isSignedIn = false }: { isSignedIn?: boolean }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          {isSignedIn ? (
            <Button asChild>
              <Link href="/dashboard">Open my tasks</Link>
            </Button>
          ) : (
            <>
              <Button asChild variant="ghost">
                <Link href="/signin">Sign in</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Start for free</Link>
              </Button>
            </>
          )}
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" aria-label="Open menu">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle className="text-left">
                <Logo />
              </SheetTitle>
            </SheetHeader>
            <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-2 p-4">
              {isSignedIn ? (
                <Button asChild>
                  <Link href="/dashboard">Open my tasks</Link>
                </Button>
              ) : (
                <>
                  <Button asChild>
                    <Link href="/signup">Start for free</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/signin">Sign in</Link>
                  </Button>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
