"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { TrendingUp, Flame, DollarSign, Users } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    label: "Raffles Hosted",
    value: 12847,
    suffix: "",
    color: "text-yellow-400",
  },
  {
    icon: Flame,
    label: "$GUI Burned",
    value: 2.4,
    suffix: "M",
    color: "text-cyan-400",
  },
  {
    icon: DollarSign,
    label: "Prize Value Distributed",
    value: 8.9,
    suffix: "M",
    color: "text-green-400",
  },
  {
    icon: Users,
    label: "Active Users",
    value: 45.2,
    suffix: "K",
    color: "text-purple-400",
  },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count < value) {
        setCount(Math.min(count + Math.ceil(value / 50), value))
      }
    }, 50)

    return () => clearTimeout(timer)
  }, [count, value])

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function StatsAndCommunity() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Stats & Community</h2>
          <p className="text-slate-300 text-lg">Join thousands of users in the Ruffles ecosystem</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div
                  className={`w-12 h-12 mx-auto rounded-xl bg-slate-700 flex items-center justify-center ${stat.color}`}
                >
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className={`text-3xl font-bold ${stat.color} mb-1`}>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-slate-300 text-sm">{stat.label}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Links */}
        <div className="text-center space-y-8">
          <h3 className="text-2xl font-bold text-white">Join Our Community</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              variant="outline"
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-6 py-3 bg-transparent"
            >
              Top Organizers Dashboard
            </Button>
            <Button
              variant="outline"
              className="border-green-500 text-green-400 hover:bg-green-500/10 px-6 py-3 bg-transparent"
            >
              Community Hub
            </Button>
            <Button
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-6 py-3 bg-transparent"
            >
              Leaderboards
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
