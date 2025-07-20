import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Crown, TrendingUp, Star } from "lucide-react"

const campaigns = [
  {
    id: 1,
    organizer: "CryptoKings",
    avatar: "/placeholder.svg?height=40&width=40",
    totalPrizes: "$50,000",
    rafflesHosted: 23,
    badge: "Top Organizer",
  },
  {
    id: 2,
    organizer: "NFT Masters",
    avatar: "/placeholder.svg?height=40&width=40",
    totalPrizes: "$35,000",
    rafflesHosted: 18,
    badge: "Rising Star",
  },
  {
    id: 3,
    organizer: "GameFi Hub",
    avatar: "/placeholder.svg?height=40&width=40",
    totalPrizes: "$28,000",
    rafflesHosted: 15,
    badge: "Community Favorite",
  },
]

const winners = [
  { address: "0x1234...5678", prize: "Golden NFT", luck: "99.8%" },
  { address: "0x9876...5432", prize: "1000 $GUI", luck: "97.2%" },
  { address: "0x5555...1111", prize: "Gaming Setup", luck: "95.5%" },
]

export function FeaturedCampaigns() {
  return (
    <section className="py-20 px-4 bg-slate-800/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Top Organizers */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Crown className="w-8 h-8 text-yellow-400" />
              Top Organizers
            </h3>
            <div className="space-y-4">
              {campaigns.map((campaign, index) => (
                <Card
                  key={campaign.id}
                  className="bg-slate-800/50 border-slate-700 hover:border-yellow-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <img
                          src={campaign.avatar || "/placeholder.svg"}
                          alt={campaign.organizer}
                          className="w-12 h-12 rounded-full border-2 border-yellow-400"
                        />
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-slate-900 text-xs font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-white font-semibold">{campaign.organizer}</h4>
                          <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400 text-xs">
                            {campaign.badge}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-slate-300">
                          <span>{campaign.totalPrizes} distributed</span>
                          <span>{campaign.rafflesHosted} raffles</span>
                        </div>
                      </div>
                      <TrendingUp className="w-5 h-5 text-green-400" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Hall of Luck */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Star className="w-8 h-8 text-cyan-400" />
              Hall of Luck
            </h3>
            <div className="space-y-4">
              {winners.map((winner, index) => (
                <Card
                  key={index}
                  className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-white font-mono text-sm mb-1">{winner.address}</div>
                        <div className="text-slate-300 text-sm">Won: {winner.prize}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-cyan-400 font-bold text-lg">{winner.luck}</div>
                        <div className="text-slate-400 text-xs">Luck Score</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
