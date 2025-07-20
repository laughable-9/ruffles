"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Trophy, ChevronLeft, ChevronRight, Minus, Plus, CheckCircle } from "lucide-react"
import { useEffect, useState } from "react"

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
    title: "Penguin Chronicles",
    prize: "/nft-1.png",
    timeLeft: "2h 34m",
    ticketsSold: 847,
    totalTickets: 1000,
    category: "NFT",
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    endTime: Date.now() + (2 * 3600 + 34 * 60) * 1000, // 2h 34m from now
    owner: "@lancebading"
  },
  {
    id: 2,
    title: "5M $GUI",
    prize: "/token-1.jpg", 
    timeLeft: "5h 12m",
    ticketsSold: 234,
    totalTickets: 500,
    category: "Token",
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    endTime: Date.now() + (5 * 3600 + 12 * 60) * 1000, // 5h 12m from now
    owner: "@lancebading"
  },
  {
    id: 3,
    title: "GUI Gang",
    prize: "/nft-2.png",
    timeLeft: "1d 8h",
    ticketsSold: 156,
    totalTickets: 300,
    category: "NFT",
    ticketPrice: "0.5 APT", 
    usdPrice: "$2.72",
    endTime: Date.now() + (1 * 24 * 3600 + 8 * 3600) * 1000, // 1d 8h from now
    owner: "@lancebading"
  },
  {
    id: 4,
    title: "5 $APT",
    prize: "/token-2.png",
    timeLeft: "3h 45m",
    ticketsSold: 67,
    totalTickets: 150,
    category: "Token",
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    endTime: Date.now() + (3 * 3600 + 45 * 60) * 1000, // 3h 45m from now
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

  const handleQuantityInput = (id: number, value: string) => {
    handleUserInteraction()
    const raffle = raffles.find(r => r.id === id)
    if (raffle) {
      const remainingTickets = raffle.totalTickets - raffle.ticketsSold
      const maxAllowed = Math.floor(raffle.totalTickets * 0.1) // 10% of total tickets
      const actualMax = Math.min(maxAllowed, remainingTickets)
      
      // Parse the input value
      const numValue = parseInt(value) || 0
      const validQuantity = Math.max(0, Math.min(numValue, actualMax))
      
      setTicketQuantities(prev => ({
        ...prev,
        [id]: validQuantity
      }))
    }
  }

  const setMaxQuantity = (id: number) => {
    handleUserInteraction()
    const raffle = raffles.find(r => r.id === id)
    if (raffle) {
      const remainingTickets = raffle.totalTickets - raffle.ticketsSold
      const maxAllowed = Math.floor(raffle.totalTickets * 0.1) // 10% of total tickets
      const actualMax = Math.min(maxAllowed, remainingTickets)
      setTicketQuantities(prev => ({
        ...prev,
        [id]: actualMax
      }))
    }
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
    <>
      <style jsx>{`
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type="number"] {
          -moz-appearance: textfield;
        }
      `}</style>
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
                const remainingTickets = raffle.totalTickets - raffle.ticketsSold
                const maxAllowed = Math.floor(raffle.totalTickets * 0.1) // 10% of total tickets
                const actualMax = Math.min(maxAllowed, remainingTickets)
                const canDecrease = currentQuantity > 0
                const canIncrease = currentQuantity < actualMax
                
                return (
                <Card
                  key={`${raffle.id}-${index}`}
                  className="min-w-70 h-full bg-gradient-to-br from-slate-800/90 to-slate-700/90 border-slate-600 hover:border-yellow-400/50 transition-all duration-300 shadow-xl flex flex-col"
                >
                  <CardHeader className="pb-2 flex-shrink-0">
                    <div className="aspect-square rounded-lg overflow-hidden mb-2 bg-slate-900/50">
                      <img
                        src={raffle.prize}
                        alt={raffle.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-orange-400 font-medium text-xs">
                        Ends in {timeRemaining > 0 ? formatTimeRemaining(timeRemaining) : "0h 0m 0s"}
                      </p>
                      <span className="text-slate-400 text-xs font-medium flex-shrink-0">{raffle.owner}</span>
                    </div>
                    <div className="mb-1">
                      <CardTitle className="text-white text-lg font-bold truncate">{raffle.title}</CardTitle>
                    </div>
                    <div className="flex items-center gap-1">
                      <p className="text-slate-300 text-xs font-bold">
                        {raffle.category === 'NFT' ? 'Verified Collection' : 'Verified Token'}
                      </p>
                      <CheckCircle className="w-3 h-3 text-green-400" />
                    </div>
                  </CardHeader>
                
                <CardContent className="space-y-4 flex-1 flex flex-col justify-between">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <p className="text-slate-400">Tickets remaining</p>
                      <p className="text-green-400 font-bold min-h-[1.2rem]">{raffle.totalTickets - raffle.ticketsSold} / {raffle.totalTickets}</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Price per ticket</p>
                      <p className="text-yellow-400 font-bold min-h-[1.2rem]">{raffle.ticketPrice} <span className="text-slate-400">({raffle.usdPrice})</span></p>
                    </div>
                  </div>

                  <div className="flex items-stretch gap-1">
                    {/* Quantity controls container */}
                    <div className="flex items-center bg-slate-800 rounded-lg border border-slate-600 text-xs h-8 w-32">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          updateQuantity(raffle.id, -1)
                        }}
                        disabled={!canDecrease}
                        className={`px-1.5 h-full flex items-center transition-colors rounded-l-lg ${
                          canDecrease 
                            ? 'hover:bg-slate-700 text-white' 
                            : 'text-slate-500 cursor-not-allowed'
                        }`}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <input
                        type="number"
                        min="0"
                        max={actualMax}
                        value={currentQuantity}
                        onChange={(e) => handleQuantityInput(raffle.id, e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        className={`px-1 bg-transparent w-8 h-full text-center text-xs border-0 outline-none transition-colors ${
                          currentQuantity > 0 ? 'text-white' : 'text-slate-500'
                        }`}
                        style={{ 
                          appearance: 'textfield',
                          MozAppearance: 'textfield',
                          WebkitAppearance: 'none'
                        }}
                      />
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          updateQuantity(raffle.id, 1)
                        }}
                        disabled={!canIncrease}
                        className={`px-1.5 h-full flex items-center transition-colors ${
                          canIncrease 
                            ? 'hover:bg-slate-700 text-white' 
                            : 'text-slate-500 cursor-not-allowed'
                        }`}
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <div className="w-px h-4 bg-slate-600"></div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setMaxQuantity(raffle.id)
                        }}
                        className="px-2 h-full flex items-center hover:bg-slate-700 text-slate-300 hover:text-white transition-all duration-200 text-xs font-medium rounded-r-lg"
                      >
                        Max
                      </button>
                    </div>

                    {/* Buy button */}
                    <Button className="w-28 h-8 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-500 hover:to-yellow-600 text-black hover:text-white font-semibold text-xs transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/50 hover:scale-[1.02] overflow-hidden">
                      <span className="truncate">Buy • {((currentQuantity) * 0.5).toFixed(1)} APT</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
    </>
  )
}
