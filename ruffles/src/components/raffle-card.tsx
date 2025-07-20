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
}

interface RaffleCardProps {
  raffle: RaffleData
  showControls?: boolean
  variant?: 'carousel' | 'grid'
  onQuantityChange?: (id: number, quantity: number) => void
  currentQuantity?: number
  timeRemaining?: number
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
  timeRemaining
}: RaffleCardProps) {
  const [localQuantity, setLocalQuantity] = useState(currentQuantity)
  
  const remainingTickets = raffle.totalTickets - raffle.ticketsSold
  const maxAllowed = Math.floor(raffle.totalTickets * 0.1) // 10% of total tickets
  const actualMax = Math.min(maxAllowed, remainingTickets)
  const canDecrease = localQuantity > 0
  const canIncrease = localQuantity < actualMax
  
  const updateQuantity = (change: number) => {
    const newQuantity = localQuantity + change
    const validQuantity = Math.max(0, Math.min(newQuantity, actualMax))
    setLocalQuantity(validQuantity)
    onQuantityChange?.(raffle.id, validQuantity)
  }

  const handleQuantityInput = (value: string) => {
    const numValue = parseInt(value) || 0
    const validQuantity = Math.max(0, Math.min(numValue, actualMax))
    setLocalQuantity(validQuantity)
    onQuantityChange?.(raffle.id, validQuantity)
  }

  const setMaxQuantity = () => {
    setLocalQuantity(actualMax)
    onQuantityChange?.(raffle.id, actualMax)
  }

  const displayTimeRemaining = timeRemaining !== undefined ? timeRemaining : 0

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
      <Card className={`${
        variant === 'carousel' 
          ? 'min-w-70 h-full bg-gradient-to-br from-slate-800/90 to-slate-700/90 border-slate-600 hover:border-yellow-400/50 transition-all duration-300 shadow-xl flex flex-col' 
          : 'bg-gradient-to-br from-slate-800/90 to-slate-700/90 border-slate-600 hover:border-yellow-400/50 transition-all duration-300 shadow-xl'
      }`}>
        <CardHeader className="pb-2 flex-shrink-0">
          <div className="aspect-square rounded-lg overflow-hidden mb-2 bg-slate-900/50">
            <img
              src={raffle.prize}
              alt={raffle.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          
          {variant === 'carousel' ? (
            <div className="flex justify-between items-center mb-1">
              <p className="text-green-400 font-medium text-xs flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                Ends in {displayTimeRemaining > 0 ? formatTimeRemaining(displayTimeRemaining) : "0h 0m 0s"}
              </p>
              <span className="text-slate-400 text-xs font-medium flex-shrink-0">{raffle.owner}</span>
            </div>
          ) : (
            <div className="flex justify-between items-center mb-1">
              <p className="text-green-400 font-medium text-xs flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                Ends {raffle.timeLeft || "soon"}
              </p>
              <span className="text-slate-400 text-xs font-medium flex-shrink-0">{raffle.owner}</span>
            </div>
          )}
          
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
      
        <CardContent className={`${variant === 'carousel' ? 'space-y-4 flex-1 flex flex-col justify-between' : 'space-y-3'}`}>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <p className="text-slate-400">Tickets remaining</p>
              <p className="text-green-400 font-bold min-h-[1.2rem]">{remainingTickets} / {raffle.totalTickets}</p>
            </div>
            <div>
              <p className="text-slate-400">Price per ticket</p>
              <p className="text-yellow-400 font-bold min-h-[1.2rem]">{raffle.ticketPrice} <span className="text-slate-400">({raffle.usdPrice})</span></p>
            </div>
          </div>

          {showControls && (
            <div className="flex items-stretch gap-1">
              {/* Quantity controls container */}
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

              {/* Buy button */}
              <Button className="w-28 h-8 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-500 hover:to-yellow-600 text-black hover:text-white font-semibold text-xs transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/50 hover:scale-[1.02] overflow-hidden">
                <span className="truncate">Buy • {((localQuantity) * 0.5).toFixed(1)} APT</span>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  )
}
