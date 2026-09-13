import { Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const TESTIMONIALS = [
  {
    quote:
      "I have tried every to-do app on the market. Tick is the first one where my list is shorter on Friday than it was on Monday.",
    name: "Maya Okonkwo",
    role: "Freelance designer",
    initials: "MO",
  },
  {
    quote:
      "Quick add is the whole product for me. I type one line between meetings and it ends up in the right project with the right date.",
    name: "Daniel Reyes",
    role: "Engineering manager, Northbeam",
    initials: "DR",
  },
  {
    quote:
      "Our household shopping list and my work backlog finally live in the same app without getting tangled up.",
    name: "Priya Raman",
    role: "Operations lead",
    initials: "PR",
  },
];

export function Testimonials() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <div className="flex items-center justify-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="size-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Loved by people with too much to remember
        </h2>
        <p className="text-muted-foreground mt-3">
          4.9 average rating across 12,000+ reviews on the App Store and Play Store.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((testimonial) => (
          <Card key={testimonial.name} className="h-full">
            <CardContent className="flex h-full flex-col gap-6">
              <p className="leading-relaxed text-pretty">“{testimonial.quote}”</p>
              <div className="mt-auto flex items-center gap-3">
                <span className="bg-brand-muted text-brand flex size-10 items-center justify-center rounded-full text-sm font-semibold">
                  {testimonial.initials}
                </span>
                <span className="text-sm">
                  <span className="block font-medium">{testimonial.name}</span>
                  <span className="text-muted-foreground block">{testimonial.role}</span>
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
