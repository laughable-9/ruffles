import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Coins, CreditCard, Zap, Crown } from "lucide-react"

const utilities = [
  {
    icon: CreditCard,
    title: "Buying Tickets",
    description: "Use $GUI to purchase raffle tickets and auction bids",
    color: "from-yellow-500 to-yellow-600",
    borderColor: "border-yellow-500/50",
  },
  {
    icon: Coins,
    title: "Platform Fees",
    description: "Pay minimal platform fees for hosting raffles and auctions",
    color: "from-cyan-500 to-cyan-600",
    borderColor: "border-cyan-500/50",
  },
  {
    icon: Crown,
    title: "Premium Tiers",
    description: "Unlock advanced campaign tools and exclusive features",
    color: "from-purple-500 to-purple-600",
    borderColor: "border-purple-500/50",
  },
]

export function TokenUtility() {
  return (
    <section className="py-20 px-4 bg-slate-800/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-cyan-400 flex items-center justify-center">
              <Zap className="w-6 h-6 text-slate-900" />
            </div>
            <h2 className="text-4xl font-bold text-white">$GUI Token Utility</h2>
          </div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            The native token powering the entire Ruffles ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {utilities.map((utility, index) => (
            <Card
              key={index}
              className={`bg-slate-800/50 border-2 ${utility.borderColor} hover:scale-105 transition-all duration-300 group`}
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${utility.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <utility.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-xl">{utility.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-300 text-sm leading-relaxed">{utility.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Badge
            variant="secondary"
            className="bg-gradient-to-r from-yellow-500/20 to-cyan-500/20 text-yellow-400 border border-yellow-500/30 px-6 py-3 text-lg font-semibold"
          >
            Built on Aptos for Lightning-Fast Transactions
          </Badge>
        </div>
      </div>
    </section>
  )
}
