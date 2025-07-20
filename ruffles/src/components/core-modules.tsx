import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Ticket, RotateCcw, Gift, Package } from "lucide-react"

const modules = [
  {
    icon: Ticket,
    title: "Raffles",
    description: "Create and join provably fair raffles with instant payouts",
    color: "from-yellow-500 to-yellow-600",
    borderColor: "border-yellow-500/50",
  },
  {
    icon: RotateCcw,
    title: "Auctions",
    description: "Bid on exclusive items with transparent on-chain mechanics",
    color: "from-cyan-500 to-cyan-600",
    borderColor: "border-cyan-500/50",
  },
  {
    icon: Gift,
    title: "Giveaways",
    description: "Host community giveaways with verifiable random selection",
    color: "from-green-500 to-green-600",
    borderColor: "border-green-500/50",
  },
  {
    icon: Package,
    title: "Treat Boxes",
    description: "Mystery loot boxes with guaranteed value and rare surprises",
    color: "from-purple-500 to-purple-600",
    borderColor: "border-purple-500/50",
  },
]

export function CoreModules() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Core Modules</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Four powerful ways to engage your community and distribute value on-chain
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((module, index) => (
            <Card
              key={index}
              className={`bg-slate-800/50 border-2 ${module.borderColor} hover:scale-105 transition-all duration-300 group cursor-pointer`}
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <module.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-xl">{module.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-slate-300 text-sm leading-relaxed">{module.description}</p>
                <Button
                  variant="outline"
                  className={`w-full border-2 ${module.borderColor} text-white hover:bg-gradient-to-r ${module.color} hover:border-transparent transition-all duration-300`}
                >
                  Explore
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
