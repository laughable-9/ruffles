"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Minus, Plus, Clock } from "lucide-react"
import { useState } from "react"

interface RaffleData {
  id: number
  title: string
  prize: string
  timeLeft?: string
  ticketsSold: number
  totalTickets: number
  category: 'NFT' | 'Token'
  ticketPrice: string
  usdPrice: string
  endTime?: number
  owner: string
  status?: "active" | "ended"
}

interface RaffleCardProps {
  raffle: RaffleData
  showControls?: boolean
  variant?: 'carousel' | 'grid'
  onQuantityChange?: (id: number, quantity: number) => void
  currentQuantity?: number
  timeRemaining?: number
  currency?: "APT" | "GUI"
}

// Helper function to format time remaining
const formatTimeRemaining = (seconds: number) => {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60
  return `${hours}h ${minutes}m ${secs}s`
}

export function RaffleCard({ 
  raffle, 
  showControls = true, 
  variant = 'carousel',
  onQuantityChange,
  currentQuantity = 0,
  timeRemaining,
  currency = "APT"
}: RaffleCardProps) {
  const [localQuantity, setLocalQuantity] = useState(currentQuantity)
  
  const handleQuantityInput = (value: string) => {
    const quantity = Math.max(0, parseInt(value) || 0)
    const maxTickets = raffle.totalTickets - raffle.ticketsSold
    const actualQuantity = Math.min(quantity, maxTickets)
    setLocalQuantity(actualQuantity)
    onQuantityChange?.(raffle.id, actualQuantity)
  }

  const updateQuantity = (change: number) => {
    const newQuantity = Math.max(0, localQuantity + change)
    const maxTickets = raffle.totalTickets - raffle.ticketsSold
    const actualQuantity = Math.min(newQuantity, maxTickets)
    setLocalQuantity(actualQuantity)
    onQuantityChange?.(raffle.id, actualQuantity)
  }

  const setMaxQuantity = () => {
    const maxTickets = raffle.totalTickets - raffle.ticketsSold
    setLocalQuantity(maxTickets)
    onQuantityChange?.(raffle.id, maxTickets)
  }

  const calculateTotalPrice = (quantity: number) => {
    const pricePerTicket = parseFloat(raffle.ticketPrice.replace(/[^0-9.]/g, ''))
    const total = (pricePerTicket * quantity).toFixed(1)
    const currencyType = raffle.ticketPrice.includes('GUI') ? 'GUI' : 'APT'
    
    if (currencyType === 'GUI') {
      const totalNum = parseFloat(total)
      if (totalNum >= 1000000) {
        return `${(totalNum / 1000000).toFixed(1)}M GUI`
      } else if (totalNum >= 1000) {
        return `${(totalNum / 1000).toFixed(0)}K GUI`
      }
      return `${totalNum.toFixed(0)} GUI`
    }
    
    return `${total} APT`
  }

  const availableTickets = raffle.totalTickets - raffle.ticketsSold
  const actualMax = Math.min(availableTickets, 10)
  const canIncrease = localQuantity < actualMax
  const canDecrease = localQuantity > 0
  const displayTimeRemaining = timeRemaining || 0

  return (
    <Card className={`bg-slate-800/90 border-slate-700 hover:bg-slate-800 transition-all duration-300 overflow-hidden ${
      variant === 'carousel' ? 'w-70 flex-shrink-0' : 'w-full'
    }`}>
      <CardHeader className="pb-3">
        <div className="relative">
          <img 
            src={raffle.prize} 
            alt={raffle.title}
            className="w-full aspect-square object-contain rounded-lg mb-3 bg-slate-700"
          />
          <div className="absolute top-2 left-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              raffle.category === 'NFT' 
                ? 'bg-purple-500/80 text-white' 
                : 'bg-yellow-500/80 text-black'
            }`}>
              {raffle.category}
            </span>
          </div>
        </div>
        
        {timeRemaining !== undefined ? (
          <div className="flex justify-between items-center mb-1">
            <p className="text-green-400 font-medium text-xs flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {raffle.status === "ended" ? "Ended" : `Ends in ${displayTimeRemaining > 0 ? formatTimeRemaining(displayTimeRemaining) : "0h 0m 0s"}`}
            </p>
            <span className="text-slate-400 text-xs font-medium flex-shrink-0">{raffle.owner}</span>
          </div>
        ) : (
          <div className="flex justify-between items-center mb-1">
            <p className="text-green-400 font-medium text-xs flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {raffle.status === "ended" ? "Ended" : `Ends ${raffle.timeLeft || "soon"}`}
            </p>
            <span className="text-slate-400 text-xs font-medium flex-shrink-0">{raffle.owner}</span>
          </div>
        )}
        
        <div className="mb-1">
          <CardTitle className="text-white text-lg font-bold truncate">{raffle.title}</CardTitle>
        </div>
        <div className="flex items-center gap-1">
          <div className="flex-1 bg-slate-700 rounded-full h-1.5 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 transition-all duration-300"
              style={{ width: `${(raffle.ticketsSold / raffle.totalTickets) * 100}%` }}
            />
          </div>
          <span className="text-slate-400 text-xs ml-2 flex-shrink-0">
            {raffle.totalTickets - raffle.ticketsSold}/{raffle.totalTickets}
          </span>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex justify-between items-start mb-3">
          <div>
            <p className="text-slate-400">Tickets remaining</p>
            <p className="text-white font-bold">{raffle.totalTickets - raffle.ticketsSold} / {raffle.totalTickets}</p>
          </div>
          <div>
            <p className="text-slate-400">Price per ticket</p>
            <p className="text-yellow-400 font-bold min-h-[1.2rem]">{raffle.ticketPrice} <span className="text-slate-400">({raffle.usdPrice})</span></p>
          </div>
        </div>

        {showControls && (
          <div className="flex items-stretch gap-1">
            {/* Quantity controls container - only show for active raffles */}
            {raffle.status !== "ended" && (
              <div className="flex items-center bg-slate-800 rounded-lg border border-slate-600 text-xs h-8 w-32">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    updateQuantity(-1)
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
                  value={localQuantity}
                  onChange={(e) => handleQuantityInput(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                  className={`px-1 bg-transparent w-8 h-full text-center text-xs border-0 outline-none transition-colors ${
                    localQuantity > 0 ? 'text-white' : 'text-slate-500'
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
                    updateQuantity(1)
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
                    setMaxQuantity()
                  }}
                  className="px-2 h-full flex items-center hover:bg-slate-700 text-slate-300 hover:text-white transition-all duration-200 text-xs font-medium rounded-r-lg"
                >
                  Max
                </button>
              </div>
            )}

            {/* Buy button or Winner info */}
            {raffle.status === "ended" ? (
              <div className="w-full h-8 bg-slate-700 text-slate-300 rounded-lg flex items-center justify-center text-xs font-medium">
                Winner: @lancepanalo
              </div>
            ) : (
              <Button className={`w-28 h-8 ${
                currency === "GUI" 
                  ? "bg-gradient-to-r from-yellow-400 via-cyan-400 to-green-400 hover:from-yellow-300 hover:via-cyan-300 hover:to-green-300" 
                  : "bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-500 hover:to-yellow-600"
              } text-black hover:text-white font-semibold text-xs transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/50 hover:scale-[1.02] overflow-hidden`}>
                <span className="truncate">Buy • {calculateTotalPrice(localQuantity)}</span>
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
