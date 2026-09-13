import Link from "next/link"
import { Check } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Free",
    price: "$0",
    cadence: "forever",
    description: "For one person and a very full head.",
    cta: "Start for free",
    featured: false,
    features: [
      "Unlimited tasks",
      "Up to 3 projects",
      "Due dates and priorities",
      "Web and mobile apps",
    ],
  },
  {
    name: "Pro",
    price: "$6",
    cadence: "per month",
    description: "For everything you are juggling at once.",
    cta: "Start 14-day trial",
    featured: true,
    features: [
      "Everything in Free",
      "Unlimited projects",
      "Recurring tasks and reminders",
      "Labels, filters and saved views",
      "Priority support",
    ],
  },
  {
    name: "Teams",
    price: "$12",
    cadence: "per user / month",
    description: "For small teams that hate status meetings.",
    cta: "Talk to us",
    featured: false,
    features: [
      "Everything in Pro",
      "Shared projects",
      "Assignees and comments",
      "Admin controls and audit log",
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="container mx-auto scroll-mt-20 px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple pricing</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Start free and stay free. Upgrade only when your list outgrows you.
        </p>
      </div>

      <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={cn(
              "relative h-full",
              plan.featured && "border-violet-500/60 shadow-lg shadow-violet-500/10 lg:scale-[1.03]"
            )}
          >
            {plan.featured && (
              <Badge className="absolute -top-3 left-6 bg-gradient-to-r from-violet-600 to-indigo-500">
                Most popular
              </Badge>
            )}
            <CardHeader>
              <CardTitle className="text-lg">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <p className="mt-4 flex items-baseline gap-1.5">
                <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.cadence}</span>
              </p>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <ul className="flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-violet-600 dark:text-violet-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button asChild variant={plan.featured ? "default" : "outline"} className="w-full">
                <Link href="/signup">{plan.cta}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
