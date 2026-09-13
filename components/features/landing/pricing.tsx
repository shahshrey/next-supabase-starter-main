"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

type Plan = {
  name: string;
  description: string;
  monthly: number;
  yearly: number;
  unit: string;
  cta: string;
  href: string;
  featured?: boolean;
  features: string[];
};

const PLANS: Plan[] = [
  {
    name: "Free",
    description: "For keeping your own life in order.",
    monthly: 0,
    yearly: 0,
    unit: "forever",
    cta: "Start for free",
    href: "/signup",
    features: [
      "Unlimited tasks and 5 lists",
      "Today and Upcoming views",
      "Quick add with natural dates",
      "Sync across two devices",
    ],
  },
  {
    name: "Pro",
    description: "For people juggling more than one thing.",
    monthly: 6,
    yearly: 5,
    unit: "per month",
    cta: "Try Pro free for 14 days",
    href: "/signup",
    featured: true,
    features: [
      "Everything in Free",
      "Unlimited lists, labels, and filters",
      "Recurring tasks and reminders",
      "Calendar sync and offline mode",
      "Unlimited devices",
    ],
  },
  {
    name: "Team",
    description: "For small teams that share the work.",
    monthly: 12,
    yearly: 10,
    unit: "per user / month",
    cta: "Talk to us",
    href: "/signup",
    features: [
      "Everything in Pro",
      "Shared projects and assignments",
      "Comments and activity history",
      "Admin controls and SSO",
    ],
  },
];

export function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <section id="pricing" className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-brand text-sm font-semibold tracking-wide uppercase">Pricing</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Start free. Upgrade when your list outgrows it.
        </h2>

        <Tabs
          value={billing}
          onValueChange={(value) => setBilling(value as "monthly" | "yearly")}
          className="mt-8 items-center"
        >
          <TabsList>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="yearly">Yearly · save 20%</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
        {PLANS.map((plan) => {
          const price = billing === "monthly" ? plan.monthly : plan.yearly;

          return (
            <Card
              key={plan.name}
              className={cn(
                "h-full",
                plan.featured && "border-brand ring-brand/20 relative shadow-lg ring-1"
              )}
            >
              {plan.featured && (
                <Badge className="bg-brand text-brand-foreground absolute -top-3 left-6">
                  Most popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                <p className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-bold tracking-tight tabular-nums">${price}</span>
                  <span className="text-muted-foreground text-sm">{plan.unit}</span>
                </p>

                <Button
                  asChild
                  className="w-full"
                  variant={plan.featured ? "default" : "outline"}
                >
                  <Link href={plan.href}>{plan.cta}</Link>
                </Button>

                <ul className="flex flex-col gap-3 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check className="text-brand mt-0.5 size-4 shrink-0" strokeWidth={3} />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
