import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, Lock, CreditCard, Shuffle, Trophy } from "lucide-react"

const steps = [
  {
    icon: Rocket,
    title: "Launch",
    description: "Create your raffle or auction with custom parameters",
  },
  {
    icon: Lock,
    title: "Vault Prize",
    description: "Smart contract securely holds prizes until draw completion",
  },
  {
    icon: CreditCard,
    title: "Enter with $APT or $GUI",
    description: "Participants purchase tickets using $APT or $GUI tokens",
  },
  {
    icon: Shuffle,
    title: "Verifiable Draw",
    description: "Provably fair random selection using blockchain entropy",
  },
  {
    icon: Trophy,
    title: "Claim or Withdraw",
    description: "Winners claim prizes, others get refunds automatically",
  },
]

const features = ["No Middlemen", "Provably Fair", "Fast & Cheap"]

export function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-slate-800/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
            Simple, transparent, and secure. Built on Aptos for maximum efficiency.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative p-[2px] rounded-full bg-gradient-to-r from-yellow-400 via-cyan-400 to-green-400"
              >
                <div className="bg-slate-800 rounded-full px-4 py-2">
                  <span className="bg-gradient-to-r from-yellow-400 via-cyan-400 to-green-400 bg-clip-text text-transparent text-sm font-semibold">
                    {feature}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 h-full">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-white font-bold text-lg">{step.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 items-center justify-center w-8 h-8">
                  <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                    →
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
