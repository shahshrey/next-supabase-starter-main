import { Star } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      "I have tried every todo app on the internet. Momentum is the first one where adding a task is faster than forgetting it.",
    name: "Priya Raman",
    role: "Product designer",
    initials: "PR",
  },
  {
    quote:
      "The daily list is short enough that I actually finish it. That alone changed how my week feels.",
    name: "Marcus Webb",
    role: "Freelance developer",
    initials: "MW",
  },
  {
    quote:
      "We moved our small team off a shared spreadsheet in an afternoon. Nobody has asked for the spreadsheet back.",
    name: "Elena Duarte",
    role: "Operations lead",
    initials: "ED",
  },
]

export function Testimonials() {
  return (
    <section className="border-y bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Loved by list makers
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Rated 4.9 out of 5 across the App Store and Play Store.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-background">
              <CardContent className="flex h-full flex-col gap-6">
                <div className="flex gap-0.5" aria-label="Rated 5 out of 5">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="size-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-base leading-relaxed">
                  “{testimonial.quote}”
                </blockquote>
                <div className="mt-auto flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-500 text-xs font-semibold text-white">
                    {testimonial.initials}
                  </span>
                  <span className="text-sm">
                    <span className="block font-medium">{testimonial.name}</span>
                    <span className="block text-muted-foreground">{testimonial.role}</span>
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
