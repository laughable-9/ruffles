"use client"

import { Button } from "@/components/ui/button"
import { Search, Filter } from "lucide-react"
import { useState } from "react"
import { RaffleCard } from "./raffle-card"

const raffles = [
  {
    id: 1,
    title: "5M $GUI",
    prize: "/token-1.jpg",
    timeLeft: "1m 17s",
    ticketsSold: 234,
    totalTickets: 500,
    category: "Token" as const,
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    owner: "@lancebading"
  },
  {
    id: 2,
    title: "5 $APT",
    prize: "/token-2.png",
    timeLeft: "6m 17s",
    ticketsSold: 67,
    totalTickets: 150,
    category: "Token" as const,
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    owner: "@lancebading"
  },
  {
    id: 3,
    title: "GUI Gang",
    prize: "/nft-2.png",
    timeLeft: "16m 17s",
    ticketsSold: 156,
    totalTickets: 300,
    category: "NFT" as const,
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    owner: "@lancebading"
  },
  {
    id: 4,
    title: "Penguin Chronicles",
    prize: "/nft-1.png",
    timeLeft: "32m 17s",
    ticketsSold: 847,
    totalTickets: 1000,
    category: "NFT" as const,
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    owner: "@lancebading"
  },
  {
    id: 5,
    title: "10M $GUI",
    prize: "/token-1.jpg",
    timeLeft: "45m 12s",
    ticketsSold: 89,
    totalTickets: 200,
    category: "Token" as const,
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    owner: "@lancebading"
  },
  {
    id: 6,
    title: "15 $APT",
    prize: "/token-2.png",
    timeLeft: "1h 23m",
    ticketsSold: 45,
    totalTickets: 100,
    category: "Token" as const,
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    owner: "@lancebading"
  },
  {
    id: 7,
    title: "Hyper Nova Squad",
    prize: "/HyperNovaSquad-1.png",
    timeLeft: "2h 15m",
    ticketsSold: 123,
    totalTickets: 300,
    category: "NFT" as const,
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    owner: "@lancebading"
  },
  {
    id: 8,
    title: "Spooks",
    prize: "/spooks-1.png",
    timeLeft: "3h 45m",
    ticketsSold: 78,
    totalTickets: 150,
    category: "NFT" as const,
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    owner: "@lancebading"
  },
  {
    id: 9,
    title: "GUI Gang",
    prize: "/GUI-2.png",
    timeLeft: "4h 30m",
    ticketsSold: 234,
    totalTickets: 500,
    category: "NFT" as const,
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    owner: "@lancebading"
  },
  {
    id: 10,
    title: "25M $GUI",
    prize: "/token-1.jpg",
    timeLeft: "5h 12m",
    ticketsSold: 156,
    totalTickets: 250,
    category: "Token" as const,
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    owner: "@lancebading"
  },
  {
    id: 11,
    title: "50 $APT",
    prize: "/token-2.png",
    timeLeft: "6h 30m",
    ticketsSold: 78,
    totalTickets: 150,
    category: "Token" as const,
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    owner: "@lancebading"
  },
  {
    id: 12,
    title: "Hyper Nova Squad",
    prize: "/HyperNovaSquad-2.png",
    timeLeft: "7h 15m",
    ticketsSold: 234,
    totalTickets: 500,
    category: "NFT" as const,
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    owner: "@lancebading"
  },
  {
    id: 13,
    title: "100M $GUI",
    prize: "/token-1.jpg",
    timeLeft: "8h 45m",
    ticketsSold: 156,
    totalTickets: 250,
    category: "Token" as const,
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    owner: "@lancebading"
  },
  {
    id: 14,
    title: "Spooks",
    prize: "/spooks-2.png",
    timeLeft: "9h 12m",
    ticketsSold: 89,
    totalTickets: 200,
    category: "NFT" as const,
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    owner: "@lancebading"
  },
  {
    id: 15,
    title: "GUI Gang",
    prize: "/GUI-3.png",
    timeLeft: "10h 30m",
    ticketsSold: 123,
    totalTickets: 300,
    category: "NFT" as const,
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    owner: "@lancebading"
  },
  {
    id: 16,
    title: "75 $APT",
    prize: "/token-2.png",
    timeLeft: "11h 45m",
    ticketsSold: 67,
    totalTickets: 150,
    category: "Token" as const,
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    owner: "@lancebading"
  },
  {
    id: 17,
    title: "Spooks",
    prize: "/Spooks-3.png",
    timeLeft: "12h 20m",
    ticketsSold: 178,
    totalTickets: 400,
    category: "NFT" as const,
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    owner: "@lancebading"
  },
  {
    id: 18,
    title: "200M $GUI",
    prize: "/token-1.jpg",
    timeLeft: "13h 15m",
    ticketsSold: 345,
    totalTickets: 600,
    category: "Token" as const,
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    owner: "@lancebading"
  }
]

export function MainRaffles() {
  const [activeTab, setActiveTab] = useState("All Raffles")
  const [searchQuery, setSearchQuery] = useState("")
  const [ticketQuantities, setTicketQuantities] = useState<{[key: number]: number}>({})

  const handleQuantityChange = (id: number, quantity: number) => {
    setTicketQuantities(prev => ({
      ...prev,
      [id]: quantity
    }))
  }

  return (
    <section className="py-8 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto">
        {/* Navigation Tabs */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveTab("All Raffles")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "All Raffles" 
                  ? "bg-white/20 text-white border border-white/30" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              All Raffles
            </button>
            <button
              onClick={() => setActiveTab("Past Raffles")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "Past Raffles" 
                  ? "bg-white/20 text-white border border-white/30" 
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Past Raffles
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search raffles"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-600 text-white placeholder-slate-400 rounded-full w-80 outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <Button className="bg-slate-700 hover:bg-slate-600 text-white rounded-full px-6">
              <Filter className="w-4 h-4 mr-2" />
              Filters / Sort
            </Button>
          </div>
        </div>

        {/* Raffles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {raffles.map((raffle) => (
            <RaffleCard
              key={raffle.id}
              raffle={raffle}
              variant="grid"
              showControls={true}
              onQuantityChange={handleQuantityChange}
              currentQuantity={ticketQuantities[raffle.id] || 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
