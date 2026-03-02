import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { Navbar } from '@/components/features/landing/navbar'
import { ProductMockup } from '@/components/features/landing/product-mockup'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import {
  ArrowRight,
  BarChart3,
  Bell,
  Check,
  Layers,
  Kanban,
  Puzzle,
  Star,
  Target,
  Users,
  Zap,
  Clock,
} from 'lucide-react'

export default async function Home() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar user={user} />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-violet-300/25 rounded-full blur-3xl" />
          <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-indigo-300/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan-200/15 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-14">
            <Badge variant="secondary" className="mb-6 gap-1.5 px-3 py-1 text-sm">
              <Zap className="w-3.5 h-3.5 text-violet-600" />
              Trusted by 50,000+ teams worldwide
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Ship projects
              <br />
              <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                on time, every time
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              FlowTask brings your team&apos;s work together. Organize tasks, hit deadlines, and
              celebrate wins — all in one beautiful workspace.
            </p>

            <div className="flex gap-3 justify-center flex-wrap">
              {user ? (
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    className="gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white border-0 shadow-lg h-12 px-7"
                  >
                    Go to Dashboard <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              ) : (
                <>
                  <Link href="/signup">
                    <Button
                      size="lg"
                      className="gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white border-0 shadow-lg h-12 px-7"
                    >
                      Start for free <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href="/signin">
                    <Button size="lg" variant="outline" className="h-12 px-7">
                      Sign in
                    </Button>
                  </Link>
                </>
              )}
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              No credit card required &middot; Free forever plan &middot; Setup in 2 minutes
            </p>
          </div>

          {/* Product screenshot */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-6 bg-gradient-to-r from-violet-500/20 via-indigo-500/15 to-cyan-500/20 rounded-3xl blur-2xl" />
            <div className="relative ring-1 ring-border/50 rounded-xl shadow-2xl">
              <ProductMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section className="py-14 border-y bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-8">
            Trusted by teams at world-class companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
            {['Acme Corp', 'TechFlow', 'BuilderIO', 'PixelLabs', 'NorthStar', 'Vexa'].map(
              (company) => (
                <span
                  key={company}
                  className="text-base md:text-lg font-bold text-muted-foreground/40 font-mono tracking-tight"
                >
                  {company}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Features
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Everything your team needs
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Powerful tools designed to help teams move faster and stay perfectly aligned
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Kanban,
                iconClass: 'text-violet-600',
                bgClass: 'bg-violet-100',
                title: 'Kanban Boards',
                description:
                  'Visualize your workflow with customizable boards. Drag and drop tasks to update status instantly and keep your team aligned.',
              },
              {
                icon: Clock,
                iconClass: 'text-indigo-600',
                bgClass: 'bg-indigo-100',
                title: 'Smart Deadlines',
                description:
                  'Never miss a deadline again. Get smart reminders and see beautiful timeline views across all your active projects.',
              },
              {
                icon: Users,
                iconClass: 'text-cyan-600',
                bgClass: 'bg-cyan-100',
                title: 'Team Collaboration',
                description:
                  'Invite teammates, assign tasks, leave comments, and collaborate in real-time — no matter where your team is.',
              },
              {
                icon: Target,
                iconClass: 'text-pink-600',
                bgClass: 'bg-pink-100',
                title: 'Priority System',
                description:
                  'Focus on what matters most with a clear priority system. High, medium, and low priority tags keep your team laser-focused.',
              },
              {
                icon: BarChart3,
                iconClass: 'text-amber-600',
                bgClass: 'bg-amber-100',
                title: 'Progress Analytics',
                description:
                  'Track velocity, burndown charts, and project health at a glance with beautiful dashboards and weekly reports.',
              },
              {
                icon: Puzzle,
                iconClass: 'text-emerald-600',
                bgClass: 'bg-emerald-100',
                title: '100+ Integrations',
                description:
                  'Connect with GitHub, Slack, Figma, Google Drive, Notion, and all the tools your team already loves.',
              },
            ].map(({ icon: Icon, iconClass, bgClass, title, description }) => (
              <Card
                key={title}
                className="group hover:shadow-lg transition-all duration-200 border-border/50 hover:border-violet-200"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-xl ${bgClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}
                  >
                    <Icon className={`w-6 h-6 ${iconClass}`} />
                  </div>
                  <CardTitle className="text-lg">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              How it works
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight mb-4">Up and running in minutes</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Get your team organized and shipping faster in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto relative">
            <div className="hidden md:block absolute top-8 left-[calc(16.666%+2rem)] right-[calc(16.666%+2rem)] h-px bg-gradient-to-r from-violet-300 via-indigo-300 to-violet-300" />

            {[
              {
                step: '1',
                icon: Layers,
                title: 'Create your workspace',
                description:
                  'Set up your project with custom workflows, tags, and team members in seconds. Templates included.',
              },
              {
                step: '2',
                icon: Users,
                title: 'Invite your team',
                description:
                  'Add teammates with role-based permissions. Collaborate without friction from day one.',
              },
              {
                step: '3',
                icon: Zap,
                title: 'Start shipping',
                description:
                  'Track progress, hit deadlines, and ship projects on time — every single time.',
              },
            ].map(({ step, icon: Icon, title, description }) => (
              <div key={step} className="text-center relative">
                <div className="relative inline-flex mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/25">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-background border-2 border-violet-300 text-xs font-bold text-violet-600 flex items-center justify-center shadow-sm">
                    {step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METRICS BAND ── */}
      <section className="py-16 border-y">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '50K+', label: 'Teams worldwide' },
              { value: '2M+', label: 'Tasks completed' },
              { value: '99.9%', label: 'Uptime SLA' },
              { value: '4.9 ★', label: 'Average rating' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-1">
                  {value}
                </p>
                <p className="text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Testimonials
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight mb-4">Teams love FlowTask</h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of teams already using FlowTask
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "FlowTask completely transformed how our engineering team works. We ship 40% faster and everyone knows exactly what's happening at all times.",
                name: 'Sarah Chen',
                title: 'VP Engineering, TechFlow',
                avatar: 'SC',
                avatarClass: 'bg-violet-500',
              },
              {
                quote:
                  "I've tried every task manager out there. FlowTask is the only one that actually feels designed for real teams. The kanban view is stunning and the analytics are insightful.",
                name: 'Marcus Rodriguez',
                title: 'Product Lead, BuilderIO',
                avatar: 'MR',
                avatarClass: 'bg-indigo-500',
              },
              {
                quote:
                  'Our remote team finally feels in sync. Real-time collaboration and smart notifications keep everyone aligned without endless status meetings.',
                name: 'Aisha Patel',
                title: 'CTO, NorthStar',
                avatar: 'AP',
                avatarClass: 'bg-pink-500',
              },
            ].map(({ quote, name, title, avatar, avatarClass }) => (
              <Card key={name} className="border-border/50 flex flex-col">
                <CardContent className="pt-6 flex flex-col flex-1">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <blockquote className="text-sm leading-relaxed text-foreground/80 mb-6 flex-1">
                    &ldquo;{quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                    <div
                      className={`w-10 h-10 rounded-full ${avatarClass} flex items-center justify-center text-white text-sm font-semibold shrink-0`}
                    >
                      {avatar}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{name}</p>
                      <p className="text-xs text-muted-foreground">{title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Pricing
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              Start for free, upgrade as your team grows
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
            {/* Free */}
            <Card className="border-border/50">
              <CardHeader className="pb-4">
                <p className="text-sm font-semibold text-muted-foreground mb-2">Free</p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-muted-foreground text-sm">/month</span>
                </div>
                <p className="text-sm text-muted-foreground">Perfect for individuals and small teams getting started.</p>
              </CardHeader>
              <CardContent>
                <Link href="/signup">
                  <Button variant="outline" className="w-full mb-6">
                    Get started free
                  </Button>
                </Link>
                <ul className="space-y-2.5">
                  {[
                    'Up to 3 projects',
                    '5 team members',
                    'Basic kanban boards',
                    'Task comments',
                    '2 GB storage',
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Pro */}
            <Card className="border-2 border-violet-500 shadow-xl shadow-violet-500/10 relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white border-0 shadow-sm px-4">
                  Most Popular
                </Badge>
              </div>
              <CardHeader className="pb-4 pt-6">
                <p className="text-sm font-semibold text-violet-600 mb-2">Pro</p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-bold">$12</span>
                  <span className="text-muted-foreground text-sm">/month per user</span>
                </div>
                <p className="text-sm text-muted-foreground">For growing teams that need unlimited power and insights.</p>
              </CardHeader>
              <CardContent>
                <Link href="/signup">
                  <Button className="w-full mb-6 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white border-0">
                    Start 14-day free trial
                  </Button>
                </Link>
                <ul className="space-y-2.5">
                  {[
                    'Unlimited projects',
                    'Unlimited team members',
                    'Advanced analytics',
                    'Custom workflows',
                    'Priority support',
                    'GitHub & Slack integrations',
                    '50 GB storage',
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm">
                      <Check className="w-4 h-4 text-violet-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Enterprise */}
            <Card className="border-border/50">
              <CardHeader className="pb-4">
                <p className="text-sm font-semibold text-muted-foreground mb-2">Enterprise</p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-muted-foreground text-sm">/month per user</span>
                </div>
                <p className="text-sm text-muted-foreground">For large organizations with advanced security and compliance needs.</p>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full mb-6">
                  Contact sales
                </Button>
                <ul className="space-y-2.5">
                  {[
                    'Everything in Pro',
                    'SSO / SAML',
                    'Advanced security',
                    'Custom integrations',
                    'Dedicated support manager',
                    '99.9% SLA guarantee',
                    'Unlimited storage',
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              FAQ
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight mb-4">Frequently asked questions</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about FlowTask
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'Is there a free plan?',
                a: "Yes! Our free plan lets you create up to 3 projects with 5 team members and includes all core features. No credit card required to get started.",
              },
              {
                q: 'Can I switch plans at any time?',
                a: 'Absolutely. You can upgrade, downgrade, or cancel your subscription at any time. Changes take effect immediately and we pro-rate any billing differences.',
              },
              {
                q: 'How does team collaboration work?',
                a: 'Invite team members via email, assign them roles (admin, member, viewer), and start collaborating in real-time. Changes sync instantly across all devices.',
              },
              {
                q: 'What integrations do you support?',
                a: 'FlowTask integrates with GitHub, GitLab, Slack, Figma, Google Drive, Notion, Jira, and 100+ other tools through our REST API and webhooks.',
              },
              {
                q: 'Is my data secure?',
                a: "We take security seriously. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We're SOC 2 Type II certified and fully GDPR compliant.",
              },
              {
                q: 'Do you offer a free trial for Pro?',
                a: 'Yes! You get a 14-day free trial of Pro when you sign up. No credit card required during the trial. After 14 days, you can choose to upgrade or stay on the free plan.',
              },
            ].map(({ q, a }) => (
              <details
                key={q}
                className="group border border-border/50 rounded-xl overflow-hidden bg-card"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-muted/50 transition-colors list-none font-medium">
                  {q}
                  <svg
                    className="w-5 h-5 text-muted-foreground transition-transform duration-200 group-open:rotate-180 shrink-0 ml-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border/30 pt-4">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-violet-600 via-indigo-600 to-indigo-700 p-12 md:p-16 text-center">
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/3 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] pointer-events-none" />

            <div className="relative">
              <Badge className="bg-white/20 text-white border-white/30 mb-6 hover:bg-white/20">
                <Bell className="w-3 h-3 mr-1.5" />
                14-day free trial
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Ready to level up your team?
              </h2>
              <p className="text-xl text-violet-100 mb-10 max-w-xl mx-auto leading-relaxed">
                Join 50,000+ teams already using FlowTask to ship projects faster and smarter.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link href="/signup">
                  <Button
                    size="lg"
                    className="bg-white text-violet-700 hover:bg-violet-50 font-semibold h-12 px-8 shadow-lg"
                    variant="secondary"
                  >
                    Get started for free <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-white hover:text-white hover:bg-white/15 h-12 px-8 border border-white/20"
                >
                  View demo
                </Button>
              </div>
              <p className="mt-5 text-sm text-violet-200">
                No credit card required &middot; Free forever plan available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-14 border-t">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-5 gap-10 mb-10">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-sm">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                FlowTask
              </Link>
              <p className="text-sm text-muted-foreground max-w-xs leading-relaxed mb-5">
                The task management platform built for modern teams who want to ship faster and stay
                aligned.
              </p>
              <div className="flex gap-3">
                {['𝕏', 'GitHub', 'in'].map((s) => (
                  <Link
                    key={s}
                    href="#"
                    className="w-8 h-8 rounded-lg border border-border/50 flex items-center justify-center text-xs text-muted-foreground hover:text-foreground hover:border-border transition-colors"
                  >
                    {s}
                  </Link>
                ))}
              </div>
            </div>

            {[
              {
                title: 'Product',
                links: ['Features', 'Pricing', 'Changelog', 'Roadmap', 'Status'],
              },
              { title: 'Company', links: ['About', 'Blog', 'Careers', 'Press', 'Partners'] },
              { title: 'Legal', links: ['Privacy', 'Terms', 'Security', 'Cookies', 'DPA'] },
            ].map(({ title, links }) => (
              <div key={title}>
                <h4 className="text-sm font-semibold mb-4">{title}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Separator className="mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 FlowTask, Inc. All rights reserved.</p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                All systems operational
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
