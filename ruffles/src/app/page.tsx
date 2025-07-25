import { Hero } from "@/components/hero"
import { LiveRaffles } from "@/components/live-raffles"
import { MainRaffles } from "@/components/main-raffles"
import { CoreModules } from "@/components/core-modules"
import { HowItWorks } from "@/components/how-it-works"
import { StatsAndCommunity } from "@/components/stats-and-community"
import { TokenUtility } from "@/components/token-utility"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Hero />
      <LiveRaffles />
      <HowItWorks />
      <MainRaffles />
      <CoreModules />
      <StatsAndCommunity />
      <TokenUtility />
      <Footer />
    </div>
  )
}
