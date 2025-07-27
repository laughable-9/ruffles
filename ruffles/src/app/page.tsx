import { Hero } from "@/components/hero"
import { LiveRaffles } from "@/components/live-raffles"
import { MainRaffles } from "@/components/main-raffles"
import { HowItWorks } from "@/components/how-it-works"
import { CreateRaffleSection } from "@/components/create-raffle-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Hero />
      <LiveRaffles />
      <HowItWorks />
      <CreateRaffleSection />
      <MainRaffles />
      <Footer />
    </div>
  )
}
