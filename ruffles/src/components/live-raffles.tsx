"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"
import { RaffleCard } from "./raffle-card"

// Helper function to format time remaining
const formatTimeRemaining = (seconds: number) => {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60
  return `${hours}h ${minutes}m ${secs}s`
}

const raffles = [
  {
    id: 1,
    title: "5M $GUI",
    prize: "/token-1.jpg",
    timeLeft: "1m 17s",
    ticketsSold: 234,
    totalTickets: 500,
    category: "Token",
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    endTime: Date.now() + (1 * 60 + 17) * 1000, // 1m 17s from now
    owner: "@lancebading"
  },
  {
    id: 2,
    title: "5 $APT",
    prize: "/token-2.png",
    timeLeft: "6m 17s",
    ticketsSold: 67,
    totalTickets: 150,
    category: "Token",
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    endTime: Date.now() + (6 * 60 + 17) * 1000, // 6m 17s from now
    owner: "@lancebading"
  },
  {
    id: 3,
    title: "GUI Gang",
    prize: "/nft-2.png",
    timeLeft: "16m 17s",
    ticketsSold: 156,
    totalTickets: 300,
    category: "NFT",
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    endTime: Date.now() + (16 * 60 + 17) * 1000, // 16m 17s from now
    owner: "@lancebading"
  },
  {
    id: 4,
    title: "Penguin Chronicles",
    prize: "/nft-1.png",
    timeLeft: "32m 17s",
    ticketsSold: 847,
    totalTickets: 1000,
    category: "NFT",
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    endTime: Date.now() + (32 * 60 + 17) * 1000, // 32m 17s from now
    owner: "@lancebading"
  },
  {
    id: 5,
    title: "10M $GUI",
    prize: "/token-1.jpg",
    timeLeft: "45m 12s",
    ticketsSold: 89,
    totalTickets: 200,
    category: "Token",
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    endTime: Date.now() + (45 * 60 + 12) * 1000, // 45m 12s from now
    owner: "@lancebading"
  },
  {
    id: 6,
    title: "15 $APT",
    prize: "/token-2.png",
    timeLeft: "1h 23m",
    ticketsSold: 45,
    totalTickets: 100,
    category: "Token",
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    endTime: Date.now() + (1 * 3600 + 23 * 60) * 1000, // 1h 23m from now
    owner: "@lancebading"
  },
  {
    id: 7,
    title: "Hyper Nova Squad",
    prize: "/HyperNovaSquad-1.png",
    timeLeft: "2h 15m",
    ticketsSold: 123,
    totalTickets: 300,
    category: "NFT",
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    endTime: Date.now() + (2 * 3600 + 15 * 60) * 1000, // 2h 15m from now
    owner: "@lancebading"
  },
  {
    id: 8,
    title: "Spooks",
    prize: "/spooks-1.png",
    timeLeft: "3h 45m",
    ticketsSold: 78,
    totalTickets: 150,
    category: "NFT",
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    endTime: Date.now() + (3 * 3600 + 45 * 60) * 1000, // 3h 45m from now
    owner: "@lancebading"
  },
  {
    id: 9,
    title: "GUI Gang",
    prize: "/GUI-2.png",
    timeLeft: "4h 30m",
    ticketsSold: 234,
    totalTickets: 500,
    category: "NFT",
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    endTime: Date.now() + (4 * 3600 + 30 * 60) * 1000, // 4h 30m from now
    owner: "@lancebading"
  },
  {
    id: 10,
    title: "25M $GUI",
    prize: "/token-1.jpg",
    timeLeft: "5h 12m",
    ticketsSold: 156,
    totalTickets: 250,
    category: "Token",
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    endTime: Date.now() + (5 * 3600 + 12 * 60) * 1000, // 5h 12m from now
    owner: "@lancebading"
  }
]

export function LiveRaffles() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ticketQuantities, setTicketQuantities] = useState<{[key: number]: number}>({})
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [userInteractionTimeout, setUserInteractionTimeout] = useState<NodeJS.Timeout | null>(null)
  const [currentTime, setCurrentTime] = useState(Date.now())

  // Update current time every second for countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(Date.now())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % raffles.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  useEffect(() => {
    return () => {
      if (userInteractionTimeout) {
        clearTimeout(userInteractionTimeout)
      }
    }
  }, [userInteractionTimeout])

  const handleUserInteraction = () => {
    // Stop auto-play when user interacts
    setIsAutoPlaying(false)
    
    // Clear existing timeout
    if (userInteractionTimeout) {
      clearTimeout(userInteractionTimeout)
    }
    
    // Set new timeout to resume auto-play after 5 seconds
    const newTimeout = setTimeout(() => {
      setIsAutoPlaying(true)
    }, 5000)
    
    setUserInteractionTimeout(newTimeout)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % raffles.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + raffles.length) % raffles.length)
  }

  const updateQuantity = (id: number, change: number) => {
    handleUserInteraction()
    const raffle = raffles.find(r => r.id === id)
    if (raffle) {
      const remainingTickets = raffle.totalTickets - raffle.ticketsSold
      const maxAllowed = Math.floor(raffle.totalTickets * 0.1) // 10% of total tickets
      const actualMax = Math.min(maxAllowed, remainingTickets)
      const currentQuantity = ticketQuantities[id] || 0
      const newQuantity = currentQuantity + change
      
      // Ensure quantity doesn't go below 0 or above the max allowed
      const validQuantity = Math.max(0, Math.min(newQuantity, actualMax))
      
      setTicketQuantities(prev => ({
        ...prev,
        [id]: validQuantity
      }))
    }
  }

  const handleQuantityChange = (id: number, quantity: number) => {
    handleUserInteraction()
    setTicketQuantities(prev => ({
      ...prev,
      [id]: quantity
    }))
  }

  const getVisibleRaffles = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % raffles.length
      visible.push({ ...raffles[index], displayIndex: i })
    }
    return visible
  }

  return (
    <section 
      className="py-12 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" 
      data-section="live-raffles"
    >
      <div className="container mx-auto">
        <div className="text-left mb-6">
          <h2 className="text-3xl font-bold text-white mb-4">Raffles Ending Soon</h2>
        </div>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-4 z-10 p-3 rounded-full bg-slate-800/80 hover:bg-slate-700/80 text-white hover:text-yellow-400 transition-all duration-300 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-4 z-10 p-3 rounded-full bg-slate-800/80 hover:bg-slate-700/80 text-white hover:text-yellow-400 transition-all duration-300 shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Container */}
          <div className="flex gap-4 overflow-hidden max-w-5xl">
            <div 
              className="flex gap-4 transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (280 + 16)}px)` }}
            >
              {raffles.concat(raffles).map((raffle, index) => {
                const timeRemaining = Math.max(0, Math.floor((raffle.endTime - currentTime) / 1000))
                const currentQuantity = ticketQuantities[raffle.id] || 0
                
                return (
                  <RaffleCard
                    key={`${raffle.id}-${index}`}
                    raffle={raffle}
                    variant="carousel"
                    showControls={true}
                    onQuantityChange={handleQuantityChange}
                    currentQuantity={currentQuantity}
                    timeRemaining={timeRemaining}
                  />
                )
              })}
            </div>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-4 gap-2">
          {raffles.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-yellow-400' : 'bg-slate-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
