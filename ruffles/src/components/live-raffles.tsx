import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Trophy } from "lucide-react"

const raffles = [
  {
    id: 1,
    title: "Golden NFT Collection",
    prize: "/placeholder.svg?height=200&width=200",
    timeLeft: "2h 34m",
    ticketsSold: 847,
    totalTickets: 1000,
    category: "NFT",
  },
  {
    id: 2,
    title: "1000 $GUI Tokens",
    prize: "/placeholder.svg?height=200&width=200",
    timeLeft: "5h 12m",
    ticketsSold: 234,
    totalTickets: 500,
    category: "Crypto",
  },
  {
    id: 3,
    title: "Rare Gaming Setup",
    prize: "/placeholder.svg?height=200&width=200",
    timeLeft: "1d 8h",
    ticketsSold: 156,
    totalTickets: 300,
    category: "Gaming",
  },
]

export function LiveRaffles() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Live Raffles</h2>
          <p className="text-slate-300 text-lg">Join the action and win amazing prizes</p>

          <div className="flex justify-center gap-4 mt-8">
            <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 bg-transparent">
              Newest
            </Button>
            <Button variant="outline" className="border-green-500 text-green-400 hover:bg-green-500/10 bg-transparent">
              Ending Soon
            </Button>
            <Button
              variant="outline"
              className="border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 bg-transparent"
            >
              Biggest Prize
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {raffles.map((raffle) => (
            <Card
              key={raffle.id}
              className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <CardHeader className="pb-4">
                <div className="aspect-square rounded-lg overflow-hidden mb-4">
                  <img
                    src={raffle.prize || "/placeholder.svg"}
                    alt={raffle.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-white text-lg">{raffle.title}</CardTitle>
                  <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400">
                    {raffle.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-yellow-400">
                    <Clock className="w-4 h-4" />
                    {raffle.timeLeft}
                  </div>
                  <div className="flex items-center gap-2 text-green-400">
                    <Users className="w-4 h-4" />
                    {raffle.ticketsSold}/{raffle.totalTickets}
                  </div>
                </div>

                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-green-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(raffle.ticketsSold / raffle.totalTickets) * 100}%` }}
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white font-semibold">
                  <Trophy className="w-4 h-4 mr-2" />
                  Enter Raffle
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
