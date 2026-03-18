import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  Flame,
  Kanban,
  LayoutDashboard,
  ListTodo,
  MousePointerClick,
  Repeat,
  Sparkles,
  Star,
  Target,
  Timer,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { createClient } from "@/lib/supabase/server"
import { MobileNav } from "@/components/features/landing/mobile-nav"

export default async function Home() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600">
              <CheckCircle2 className="size-4.5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight">TaskFlow</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              How it Works
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Pricing
            </Link>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            {user ? (
              <Link href="/dashboard">
                <Button size="sm" className="gap-1.5">
                  Dashboard <ArrowRight className="size-3.5" />
                </Button>
              </Link>
            ) : (
              <>
                <Link href="/signin">
                  <Button variant="ghost" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button
                    size="sm"
                    className="gap-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/25 hover:from-violet-700 hover:to-indigo-700"
                  >
                    Get Started Free
                  </Button>
                </Link>
              </>
            )}
          </div>

          <MobileNav isLoggedIn={!!user} />
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
            <div className="h-[600px] w-[600px] rounded-full bg-violet-500/10 blur-[120px]" />
          </div>
          <div className="absolute right-0 top-1/4">
            <div className="h-[400px] w-[400px] rounded-full bg-indigo-500/8 blur-[100px]" />
          </div>
        </div>

        <div className="container mx-auto px-6 pb-20 pt-20 md:pt-28 lg:pt-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 flex justify-center">
              <Badge
                variant="outline"
                className="gap-1.5 rounded-full border-violet-200 bg-violet-50 px-4 py-1.5 text-violet-700 dark:border-violet-800 dark:bg-violet-950/50 dark:text-violet-300"
              >
                <Sparkles className="size-3" />
                Now in public beta
              </Badge>
            </div>

            <h1 className="mb-6 text-5xl font-extrabold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
              Organize work.
              <br />
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Ship faster.
              </span>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              TaskFlow is the task management platform that keeps your team
              aligned. Track projects, hit deadlines, and move work forward —
              all in one place.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              {user ? (
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    className="h-12 gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-8 text-base text-white shadow-lg shadow-violet-500/25 hover:from-violet-700 hover:to-indigo-700"
                  >
                    Go to Dashboard <ArrowRight className="size-4" />
                  </Button>
                </Link>
              ) : (
                <>
                  <Link href="/signup">
                    <Button
                      size="lg"
                      className="h-12 gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-8 text-base text-white shadow-lg shadow-violet-500/25 hover:from-violet-700 hover:to-indigo-700"
                    >
                      Start for Free <ArrowRight className="size-4" />
                    </Button>
                  </Link>
                  <Link href="#how-it-works">
                    <Button
                      size="lg"
                      variant="outline"
                      className="h-12 rounded-xl px-8 text-base"
                    >
                      See How It Works
                    </Button>
                  </Link>
                </>
              )}
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              Free forever for up to 10 users. No credit card required.
            </p>
          </div>

          {/* Task Board Mockup */}
          <div className="mx-auto mt-16 max-w-5xl md:mt-20">
            <div className="rounded-2xl border bg-card/50 p-3 shadow-2xl shadow-violet-500/5 backdrop-blur-sm md:p-5">
              {/* Board header */}
              <div className="mb-4 flex items-center justify-between rounded-xl bg-muted/50 px-4 py-3">
                <div className="flex items-center gap-3">
                  <Kanban className="size-4 text-violet-600" />
                  <span className="text-sm font-semibold">
                    Product Launch Sprint
                  </span>
                  <Badge
                    variant="secondary"
                    className="ml-1 rounded-full text-xs"
                  >
                    12 tasks
                  </Badge>
                </div>
                <div className="hidden items-center gap-2 sm:flex">
                  <div className="flex -space-x-2">
                    {["bg-violet-500", "bg-sky-500", "bg-emerald-500", "bg-amber-500"].map(
                      (color, i) => (
                        <div
                          key={i}
                          className={`flex size-7 items-center justify-center rounded-full border-2 border-card text-[10px] font-medium text-white ${color}`}
                        >
                          {["JD", "SK", "AM", "LR"][i]}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Kanban columns */}
              <div className="grid gap-3 md:grid-cols-3">
                {/* To Do */}
                <div className="rounded-xl bg-muted/30 p-3">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="size-2 rounded-full bg-zinc-400" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      To Do
                    </span>
                    <span className="ml-auto text-xs text-muted-foreground">
                      4
                    </span>
                  </div>
                  <div className="space-y-2">
                    <TaskCard
                      title="Design onboarding flow"
                      tag="Design"
                      tagColor="bg-pink-100 text-pink-700 dark:bg-pink-950 dark:text-pink-300"
                      priority="high"
                      avatar="SK"
                      avatarColor="bg-sky-500"
                    />
                    <TaskCard
                      title="Write API documentation"
                      tag="Docs"
                      tagColor="bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
                      priority="medium"
                      avatar="AM"
                      avatarColor="bg-emerald-500"
                    />
                    <TaskCard
                      title="Set up CI/CD pipeline"
                      tag="DevOps"
                      tagColor="bg-cyan-100 text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300"
                      priority="medium"
                      avatar="JD"
                      avatarColor="bg-violet-500"
                    />
                  </div>
                </div>

                {/* In Progress */}
                <div className="rounded-xl bg-muted/30 p-3">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="size-2 rounded-full bg-blue-500" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      In Progress
                    </span>
                    <span className="ml-auto text-xs text-muted-foreground">
                      3
                    </span>
                  </div>
                  <div className="space-y-2">
                    <TaskCard
                      title="Build dashboard analytics"
                      tag="Frontend"
                      tagColor="bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300"
                      priority="high"
                      avatar="LR"
                      avatarColor="bg-amber-500"
                      progress={65}
                    />
                    <TaskCard
                      title="Implement notifications"
                      tag="Backend"
                      tagColor="bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
                      priority="high"
                      avatar="JD"
                      avatarColor="bg-violet-500"
                      progress={40}
                    />
                    <TaskCard
                      title="User settings page"
                      tag="Frontend"
                      tagColor="bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300"
                      priority="low"
                      avatar="SK"
                      avatarColor="bg-sky-500"
                      progress={80}
                    />
                  </div>
                </div>

                {/* Done */}
                <div className="rounded-xl bg-muted/30 p-3">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="size-2 rounded-full bg-emerald-500" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Done
                    </span>
                    <span className="ml-auto text-xs text-muted-foreground">
                      5
                    </span>
                  </div>
                  <div className="space-y-2">
                    <TaskCard
                      title="Authentication system"
                      tag="Backend"
                      tagColor="bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
                      priority="high"
                      avatar="JD"
                      avatarColor="bg-violet-500"
                      done
                    />
                    <TaskCard
                      title="Landing page redesign"
                      tag="Design"
                      tagColor="bg-pink-100 text-pink-700 dark:bg-pink-950 dark:text-pink-300"
                      priority="medium"
                      avatar="SK"
                      avatarColor="bg-sky-500"
                      done
                    />
                    <TaskCard
                      title="Database schema v2"
                      tag="Backend"
                      tagColor="bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
                      priority="medium"
                      avatar="AM"
                      avatarColor="bg-emerald-500"
                      done
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="border-y bg-muted/30 py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-8 text-sm font-medium text-muted-foreground">
            Trusted by 10,000+ teams shipping great products
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-50 grayscale">
            {["Vercel", "Stripe", "Linear", "Notion", "Figma", "GitHub"].map(
              (brand) => (
                <span
                  key={brand}
                  className="text-lg font-bold tracking-tight text-foreground"
                >
                  {brand}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <Badge
              variant="outline"
              className="mb-4 gap-1.5 rounded-full border-violet-200 bg-violet-50 px-3 py-1 text-violet-700 dark:border-violet-800 dark:bg-violet-950/50 dark:text-violet-300"
            >
              <Zap className="size-3" />
              Features
            </Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Everything you need to stay on track
            </h2>
            <p className="text-lg text-muted-foreground">
              From Kanban boards to time tracking, TaskFlow gives your team the
              tools to plan, execute, and deliver.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Kanban className="size-5" />}
              iconBg="bg-violet-100 dark:bg-violet-950/50"
              iconColor="text-violet-600 dark:text-violet-400"
              title="Kanban Boards"
              description="Visualize your workflow with drag-and-drop boards. Move tasks between stages effortlessly."
            />
            <FeatureCard
              icon={<ListTodo className="size-5" />}
              iconBg="bg-blue-100 dark:bg-blue-950/50"
              iconColor="text-blue-600 dark:text-blue-400"
              title="Smart Task Lists"
              description="Break down complex projects into actionable tasks with subtasks, labels, and due dates."
            />
            <FeatureCard
              icon={<Users className="size-5" />}
              iconBg="bg-emerald-100 dark:bg-emerald-950/50"
              iconColor="text-emerald-600 dark:text-emerald-400"
              title="Team Collaboration"
              description="Assign tasks, leave comments, and @mention teammates to keep everyone in the loop."
            />
            <FeatureCard
              icon={<Timer className="size-5" />}
              iconBg="bg-orange-100 dark:bg-orange-950/50"
              iconColor="text-orange-600 dark:text-orange-400"
              title="Time Tracking"
              description="Log hours on tasks and get insights into where your team's time is going."
            />
            <FeatureCard
              icon={<TrendingUp className="size-5" />}
              iconBg="bg-pink-100 dark:bg-pink-950/50"
              iconColor="text-pink-600 dark:text-pink-400"
              title="Analytics & Reports"
              description="Track velocity, burndown charts, and team performance with real-time dashboards."
            />
            <FeatureCard
              icon={<Repeat className="size-5" />}
              iconBg="bg-cyan-100 dark:bg-cyan-950/50"
              iconColor="text-cyan-600 dark:text-cyan-400"
              title="Automations"
              description="Set up rules to auto-assign, move, and update tasks. Less busywork, more focus."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="border-y bg-muted/20 py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <Badge
              variant="outline"
              className="mb-4 gap-1.5 rounded-full border-violet-200 bg-violet-50 px-3 py-1 text-violet-700 dark:border-violet-800 dark:bg-violet-950/50 dark:text-violet-300"
            >
              <MousePointerClick className="size-3" />
              How it works
            </Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Up and running in minutes
            </h2>
            <p className="text-lg text-muted-foreground">
              No complex setup. Create a workspace, invite your team, and start
              managing tasks right away.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
            <StepCard
              number="1"
              title="Create your workspace"
              description="Sign up and set up your project in seconds. Import from Trello, Asana, or start fresh."
              icon={<LayoutDashboard className="size-5" />}
            />
            <StepCard
              number="2"
              title="Add your team"
              description="Invite teammates by email. Set roles and permissions to match your workflow."
              icon={<Users className="size-5" />}
            />
            <StepCard
              number="3"
              title="Start shipping"
              description="Create tasks, set priorities, and track progress. Watch your team's velocity grow."
              icon={<Flame className="size-5" />}
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-4xl gap-8 text-center md:grid-cols-4">
            <StatItem value="10K+" label="Teams" />
            <StatItem value="2M+" label="Tasks Completed" />
            <StatItem value="99.9%" label="Uptime" />
            <StatItem value="4.9/5" label="User Rating" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y bg-muted/20 py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <Badge
              variant="outline"
              className="mb-4 gap-1.5 rounded-full border-violet-200 bg-violet-50 px-3 py-1 text-violet-700 dark:border-violet-800 dark:bg-violet-950/50 dark:text-violet-300"
            >
              <Star className="size-3" />
              Testimonials
            </Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Loved by teams everywhere
            </h2>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            <TestimonialCard
              quote="TaskFlow transformed how our engineering team plans sprints. We shipped 40% faster in the first month."
              name="Sarah Chen"
              role="VP of Engineering"
              company="TechCorp"
              initials="SC"
              color="bg-violet-500"
            />
            <TestimonialCard
              quote="The Kanban boards are incredibly intuitive. Our design team adopted it in a day — no training needed."
              name="Marcus Rodriguez"
              role="Design Lead"
              company="PixelStudio"
              initials="MR"
              color="bg-sky-500"
            />
            <TestimonialCard
              quote="We replaced three different tools with TaskFlow. The automations alone save us hours every week."
              name="Emily Nakamura"
              role="Product Manager"
              company="ScaleUp"
              initials="EN"
              color="bg-emerald-500"
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <Badge
              variant="outline"
              className="mb-4 gap-1.5 rounded-full border-violet-200 bg-violet-50 px-3 py-1 text-violet-700 dark:border-violet-800 dark:bg-violet-950/50 dark:text-violet-300"
            >
              <Target className="size-3" />
              Pricing
            </Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              Start free, scale as you grow. No hidden fees, no surprises.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            <PricingCard
              tier="Free"
              price="$0"
              description="Perfect for individuals and small teams getting started."
              features={[
                "Up to 10 users",
                "Unlimited tasks",
                "3 project boards",
                "Basic analytics",
                "Email support",
              ]}
              cta="Get Started"
              ctaHref="/signup"
              isLoggedIn={!!user}
            />
            <PricingCard
              tier="Pro"
              price="$12"
              description="For growing teams that need more power and flexibility."
              features={[
                "Unlimited users",
                "Unlimited boards",
                "Time tracking",
                "Advanced analytics",
                "Automations",
                "Priority support",
              ]}
              cta="Start Free Trial"
              ctaHref="/signup"
              popular
              isLoggedIn={!!user}
            />
            <PricingCard
              tier="Enterprise"
              price="Custom"
              description="For large organizations with advanced security needs."
              features={[
                "Everything in Pro",
                "SSO / SAML",
                "Audit logs",
                "Custom integrations",
                "Dedicated account manager",
                "99.99% SLA",
              ]}
              cta="Contact Sales"
              ctaHref="/signup"
              isLoggedIn={!!user}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 p-12 text-center text-white md:p-16">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-20 -top-20 size-60 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-20 -right-20 size-60 rounded-full bg-white/10 blur-3xl" />
            </div>

            <div className="relative z-10">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Ready to take control of your workflow?
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-lg text-violet-100">
                Join thousands of teams already using TaskFlow to ship better
                products, faster.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href={user ? "/dashboard" : "/signup"}>
                  <Button
                    size="lg"
                    className="h-12 gap-2 rounded-xl bg-white px-8 text-base text-violet-700 shadow-lg hover:bg-violet-50"
                  >
                    {user ? "Go to Dashboard" : "Get Started for Free"}
                    <ArrowRight className="size-4" />
                  </Button>
                </Link>
              </div>
              <p className="mt-4 text-sm text-violet-200">
                No credit card required. Free plan available forever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/20 py-12">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <Link href="/" className="mb-4 flex items-center gap-2.5">
                <div className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600">
                  <CheckCircle2 className="size-4.5 text-white" />
                </div>
                <span className="text-lg font-bold tracking-tight">
                  TaskFlow
                </span>
              </Link>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                The modern task management platform for teams that ship.
              </p>
            </div>

            <div>
              <h4 className="mb-3 text-sm font-semibold">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#features" className="hover:text-foreground">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-foreground">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-sm font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-sm font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} TaskFlow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

/* ─── Sub-components ─── */

function TaskCard({
  title,
  tag,
  tagColor,
  priority,
  avatar,
  avatarColor,
  done,
  progress,
}: {
  title: string
  tag: string
  tagColor: string
  priority: "high" | "medium" | "low"
  avatar: string
  avatarColor: string
  done?: boolean
  progress?: number
}) {
  return (
    <div
      className={`rounded-lg border bg-card p-3 shadow-sm transition-shadow hover:shadow-md ${done ? "opacity-70" : ""}`}
    >
      <div className="mb-2 flex items-start justify-between">
        <span
          className={`inline-flex items-center rounded-md px-1.5 py-0.5 text-[10px] font-medium ${tagColor}`}
        >
          {tag}
        </span>
        {priority === "high" && (
          <Flame className="size-3.5 text-red-500" />
        )}
        {priority === "medium" && (
          <Clock className="size-3.5 text-amber-500" />
        )}
      </div>
      <p
        className={`mb-2 text-xs font-medium leading-tight ${done ? "line-through text-muted-foreground" : ""}`}
      >
        {title}
      </p>
      {progress !== undefined && (
        <div className="mb-2">
          <div className="h-1 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
      <div className="flex items-center justify-between">
        <div
          className={`flex size-5 items-center justify-center rounded-full text-[8px] font-bold text-white ${avatarColor}`}
        >
          {avatar}
        </div>
        {done && <Check className="size-3.5 text-emerald-500" />}
      </div>
    </div>
  )
}

function FeatureCard({
  icon,
  iconBg,
  iconColor,
  title,
  description,
}: {
  icon: React.ReactNode
  iconBg: string
  iconColor: string
  title: string
  description: string
}) {
  return (
    <Card className="border-transparent bg-card/50 shadow-sm transition-all hover:border-violet-200 hover:shadow-md dark:hover:border-violet-800">
      <CardContent className="pt-0">
        <div
          className={`mb-4 flex size-10 items-center justify-center rounded-lg ${iconBg}`}
        >
          <span className={iconColor}>{icon}</span>
        </div>
        <h3 className="mb-2 text-base font-semibold">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}

function StepCard({
  number,
  title,
  description,
  icon,
}: {
  number: string
  title: string
  description: string
  icon: React.ReactNode
}) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/20">
        {icon}
      </div>
      <div className="mb-2 text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">
        Step {number}
      </div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  )
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="mb-1 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
        {value}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  )
}

function TestimonialCard({
  quote,
  name,
  role,
  company,
  initials,
  color,
}: {
  quote: string
  name: string
  role: string
  company: string
  initials: string
  color: string
}) {
  return (
    <Card className="border-transparent bg-card/50 shadow-sm">
      <CardContent className="pt-0">
        <div className="mb-3 flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="size-4 fill-amber-400 text-amber-400"
            />
          ))}
        </div>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          &ldquo;{quote}&rdquo;
        </p>
        <div className="flex items-center gap-3">
          <div
            className={`flex size-9 items-center justify-center rounded-full text-xs font-bold text-white ${color}`}
          >
            {initials}
          </div>
          <div>
            <div className="text-sm font-semibold">{name}</div>
            <div className="text-xs text-muted-foreground">
              {role}, {company}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function PricingCard({
  tier,
  price,
  description,
  features,
  cta,
  ctaHref,
  popular,
  isLoggedIn,
}: {
  tier: string
  price: string
  description: string
  features: string[]
  cta: string
  ctaHref: string
  popular?: boolean
  isLoggedIn: boolean
}) {
  return (
    <Card
      className={`relative ${popular ? "border-violet-500 shadow-lg shadow-violet-500/10" : "border-transparent bg-card/50 shadow-sm"}`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-3 text-white">
            Most Popular
          </Badge>
        </div>
      )}
      <CardContent className="pt-0">
        <h3 className="mb-1 text-lg font-semibold">{tier}</h3>
        <div className="mb-1 flex items-baseline gap-1">
          <span className="text-3xl font-extrabold tracking-tight">
            {price}
          </span>
          {price !== "Custom" && (
            <span className="text-sm text-muted-foreground">/user/mo</span>
          )}
        </div>
        <p className="mb-6 text-sm text-muted-foreground">{description}</p>

        <Link href={isLoggedIn ? "/dashboard" : ctaHref}>
          <Button
            className={`mb-6 w-full gap-1.5 ${popular ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/25 hover:from-violet-700 hover:to-indigo-700" : ""}`}
            variant={popular ? "default" : "outline"}
          >
            {isLoggedIn ? "Dashboard" : cta}
            <ChevronRight className="size-3.5" />
          </Button>
        </Link>

        <ul className="space-y-2.5">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <Check className="mt-0.5 size-4 shrink-0 text-emerald-500" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
