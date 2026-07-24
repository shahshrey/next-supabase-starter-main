import Link from "next/link";

import { Logo } from "@/components/features/landing/logo";

const FOOTER_LINKS = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Help center", href: "#" },
      { label: "Import guide", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.5fr_repeat(3,1fr)]">
        <div>
          <Logo />
          <p className="text-muted-foreground mt-4 max-w-xs text-sm leading-relaxed">
            A calm to-do app for people with more to remember than they have room for.
          </p>
        </div>

        {FOOTER_LINKS.map((group) => (
          <div key={group.heading}>
            <p className="text-sm font-semibold">{group.heading}</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {group.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 border-t px-4 py-6 sm:flex-row">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Tick. All rights reserved.
        </p>
        <p className="text-muted-foreground text-sm">Built with Next.js and Supabase.</p>
      </div>
    </footer>
  );
}
