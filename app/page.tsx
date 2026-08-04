import { Cta } from "@/components/features/landing/cta"
import { Faq } from "@/components/features/landing/faq"
import { Features } from "@/components/features/landing/features"
import { Hero } from "@/components/features/landing/hero"
import { HowItWorks } from "@/components/features/landing/how-it-works"
import { Pricing } from "@/components/features/landing/pricing"
import { SiteFooter } from "@/components/features/landing/site-footer"
import { SiteHeader } from "@/components/features/landing/site-header"
import { Testimonials } from "@/components/features/landing/testimonials"
import { createClient } from "@/lib/supabase/server"

export default async function Home() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  const isSignedIn = Boolean(user)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader isSignedIn={isSignedIn} />
      <main className="flex-1">
        <Hero isSignedIn={isSignedIn} />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <Faq />
        <Cta isSignedIn={isSignedIn} />
      </main>
      <SiteFooter />
    </div>
  )
}
