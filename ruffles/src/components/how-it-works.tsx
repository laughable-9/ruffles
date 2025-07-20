import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, Lock, CreditCard, Shuffle, Trophy } from "lucide-react"

const steps = [
  {
    icon: Rocket,
    title: "Launch",
    description: "Create your raffle or auction with custom parameters",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    icon: Lock,
    title: "Vault Prize",
    description: "Smart contract securely holds prizes until draw completion",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: CreditCard,
    title: "Buy with $GUI",
    description: "Participants purchase tickets using $GUI tokens",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Shuffle,
    title: "Verifiable Draw",
    description: "Provably fair random selection using blockchain entropy",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Trophy,
    title: "Claim or Withdraw",
    description: "Winners claim prizes, others get refunds automatically",
    color: "from-pink-500 to-pink-600",
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
              <Badge
                key={index}
                variant="secondary"
                className="bg-gradient-to-r from-cyan-500/20 to-green-500/20 text-cyan-400 border border-cyan-500/30 px-4 py-2 text-sm font-semibold"
              >
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 h-full">
                <CardContent className="p-6 text-center space-y-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4`}
                  >
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
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-cyan-400 text-2xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
