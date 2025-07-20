"use client"

import { Button } from "@/components/ui/button"
import { Search, Filter, ChevronLeft, ChevronRight, ArrowUp } from "lucide-react"
import { useState, useEffect, useRef } from "react"
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
  },
  // Additional raffles for pagination (19-50)
  {
    id: 19,
    title: "GUI Gang",
    prize: "/nft-2.png",
    timeLeft: "14h 30m",
    ticketsSold: 156,
    totalTickets: 300,
    category: "NFT" as const,
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    owner: "@lancebading"
  },
  {
    id: 20,
    title: "300M $GUI",
    prize: "/token-1.jpg",
    timeLeft: "15h 45m",
    ticketsSold: 234,
    totalTickets: 500,
    category: "Token" as const,
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    owner: "@lancebading"
  },
  {
    id: 21,
    title: "100 $APT",
    prize: "/token-2.png",
    timeLeft: "16h 20m",
    ticketsSold: 89,
    totalTickets: 200,
    category: "Token" as const,
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    owner: "@lancebading"
  },
  {
    id: 22,
    title: "Penguin Chronicles",
    prize: "/nft-1.png",
    timeLeft: "17h 10m",
    ticketsSold: 456,
    totalTickets: 800,
    category: "NFT" as const,
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    owner: "@lancebading"
  },
  {
    id: 23,
    title: "Hyper Nova Squad",
    prize: "/HyperNovaSquad-1.png",
    timeLeft: "18h 5m",
    ticketsSold: 123,
    totalTickets: 300,
    category: "NFT" as const,
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    owner: "@lancebading"
  },
  {
    id: 24,
    title: "400M $GUI",
    prize: "/token-1.jpg",
    timeLeft: "19h 15m",
    ticketsSold: 567,
    totalTickets: 900,
    category: "Token" as const,
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    owner: "@lancebading"
  },
  {
    id: 25,
    title: "Spooks",
    prize: "/spooks-1.png",
    timeLeft: "20h 30m",
    ticketsSold: 78,
    totalTickets: 150,
    category: "NFT" as const,
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    owner: "@lancebading"
  },
  {
    id: 26,
    title: "125 $APT",
    prize: "/token-2.png",
    timeLeft: "21h 45m",
    ticketsSold: 234,
    totalTickets: 400,
    category: "Token" as const,
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    owner: "@lancebading"
  },
  {
    id: 27,
    title: "GUI Gang",
    prize: "/GUI-2.png",
    timeLeft: "22h 20m",
    ticketsSold: 345,
    totalTickets: 600,
    category: "NFT" as const,
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    owner: "@lancebading"
  },
  {
    id: 28,
    title: "500M $GUI",
    prize: "/token-1.jpg",
    timeLeft: "23h 10m",
    ticketsSold: 678,
    totalTickets: 1000,
    category: "Token" as const,
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    owner: "@lancebading"
  },
  {
    id: 29,
    title: "Spooks",
    prize: "/spooks-2.png",
    timeLeft: "1d 1h",
    ticketsSold: 123,
    totalTickets: 250,
    category: "NFT" as const,
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    owner: "@lancebading"
  },
  {
    id: 30,
    title: "150 $APT",
    prize: "/token-2.png",
    timeLeft: "1d 2h",
    ticketsSold: 89,
    totalTickets: 180,
    category: "Token" as const,
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    owner: "@lancebading"
  },
  // Page 2 starts here (31-60)
  {
    id: 31,
    title: "Hyper Nova Squad",
    prize: "/HyperNovaSquad-2.png",
    timeLeft: "1d 3h",
    ticketsSold: 456,
    totalTickets: 700,
    category: "NFT" as const,
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    owner: "@lancebading"
  },
  {
    id: 32,
    title: "600M $GUI",
    prize: "/token-1.jpg",
    timeLeft: "1d 4h",
    ticketsSold: 789,
    totalTickets: 1200,
    category: "Token" as const,
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    owner: "@lancebading"
  },
  {
    id: 33,
    title: "GUI Gang",
    prize: "/GUI-3.png",
    timeLeft: "1d 5h",
    ticketsSold: 234,
    totalTickets: 400,
    category: "NFT" as const,
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    owner: "@lancebading"
  },
  {
    id: 34,
    title: "200 $APT",
    prize: "/token-2.png",
    timeLeft: "1d 6h",
    ticketsSold: 123,
    totalTickets: 300,
    category: "Token" as const,
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    owner: "@lancebading"
  },
  {
    id: 35,
    title: "Spooks",
    prize: "/Spooks-3.png",
    timeLeft: "1d 7h",
    ticketsSold: 345,
    totalTickets: 500,
    category: "NFT" as const,
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    owner: "@lancebading"
  },
  {
    id: 36,
    title: "700M $GUI",
    prize: "/token-1.jpg",
    timeLeft: "1d 8h",
    ticketsSold: 567,
    totalTickets: 900,
    category: "Token" as const,
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    owner: "@lancebading"
  },
  {
    id: 37,
    title: "Penguin Chronicles",
    prize: "/nft-1.png",
    timeLeft: "1d 9h",
    ticketsSold: 678,
    totalTickets: 1000,
    category: "NFT" as const,
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    owner: "@lancebading"
  },
  {
    id: 38,
    title: "250 $APT",
    prize: "/token-2.png",
    timeLeft: "1d 10h",
    ticketsSold: 234,
    totalTickets: 450,
    category: "Token" as const,
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    owner: "@lancebading"
  },
  {
    id: 39,
    title: "Hyper Nova Squad",
    prize: "/HyperNovaSquad-1.png",
    timeLeft: "1d 11h",
    ticketsSold: 456,
    totalTickets: 800,
    category: "NFT" as const,
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    owner: "@lancebading"
  },
  {
    id: 40,
    title: "800M $GUI",
    prize: "/token-1.jpg",
    timeLeft: "1d 12h",
    ticketsSold: 789,
    totalTickets: 1100,
    category: "Token" as const,
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    owner: "@lancebading"
  },
  {
    id: 41,
    title: "GUI Gang",
    prize: "/nft-2.png",
    timeLeft: "1d 13h",
    ticketsSold: 123,
    totalTickets: 250,
    category: "NFT" as const,
    ticketPrice: "0.5 APT",
    usdPrice: "$2.72",
    owner: "@lancebading"
  },
  {
    id: 42,
    title: "300 $APT",
    prize: "/token-2.png",
    timeLeft: "1d 14h",
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
  const [currentPage, setCurrentPage] = useState(1)
  const [showScrollToTop, setShowScrollToTop] = useState(false)

  const RAFFLES_PER_PAGE = 12
  const TOTAL_PAGES = Math.ceil(raffles.length / RAFFLES_PER_PAGE)

  // Get raffles for current page
  const getCurrentPageRaffles = () => {
    const startIndex = (currentPage - 1) * RAFFLES_PER_PAGE
    const endIndex = startIndex + RAFFLES_PER_PAGE
    return raffles.slice(startIndex, endIndex)
  }

  // Filter raffles based on search
  const getFilteredRaffles = () => {
    const currentPageRaffles = getCurrentPageRaffles()
    if (!searchQuery) return currentPageRaffles
    
    return currentPageRaffles.filter(raffle => 
      raffle.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      raffle.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      raffle.owner.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  // Handle page change
  const changePage = (newPage: number) => {
    setCurrentPage(newPage)
    
    // Small delay to ensure state updates before scrolling
    setTimeout(() => {
      // Scroll to the top of the main raffles section
      const mainRafflesSection = document.querySelector('[data-section="main-raffles"]')
      if (mainRafflesSection) {
        mainRafflesSection.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }, 100)
  }

  // Scroll to top function
  const scrollToTop = () => {
    // Scroll to the top of the main raffles section
    const mainRafflesSection = document.querySelector('[data-section="main-raffles"]')
    if (mainRafflesSection) {
      mainRafflesSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // Check scroll position for jump to top button
  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled past the main-raffles section header
      const mainRafflesSection = document.querySelector('[data-section="main-raffles"]')
      if (mainRafflesSection) {
        const rect = mainRafflesSection.getBoundingClientRect()
        const isPassedMainRaffles = rect.top < -100 // Show when scrolled 100px past the top
        setShowScrollToTop(isPassedMainRaffles)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleQuantityChange = (id: number, quantity: number) => {
    setTicketQuantities(prev => ({
      ...prev,
      [id]: quantity
    }))
  }

  const displayedRafflesList = getFilteredRaffles()
  const showPagination = TOTAL_PAGES > 1

  return (
    <section className="py-8 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" data-section="main-raffles">
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
          {displayedRafflesList.map((raffle) => (
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

        {/* Pagination */}
        {showPagination && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => changePage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                currentPage === 1
                  ? 'text-slate-500 cursor-not-allowed'
                  : 'text-white hover:bg-slate-700'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => changePage(page)}
                  className={`w-10 h-10 rounded-full transition-colors ${
                    currentPage === page
                      ? 'bg-white/20 text-white border border-white/30'
                      : 'text-slate-400 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => changePage(currentPage + 1)}
              disabled={currentPage === TOTAL_PAGES}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                currentPage === TOTAL_PAGES
                  ? 'text-slate-500 cursor-not-allowed'
                  : 'text-white hover:bg-slate-700'
              }`}
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Results info */}
        <div className="text-center mt-4 text-slate-400 text-sm">
          Showing {displayedRafflesList.length} of {raffles.length} raffles 
          {showPagination && ` (Page ${currentPage} of ${TOTAL_PAGES})`}
        </div>

        {/* Jump to Top Button */}
        {showScrollToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-white rounded-full shadow-lg hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 flex items-center justify-center group"
            aria-label="Jump to Top of Raffles"
          >
            <ArrowUp className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
          </button>
        )}
      </div>
    </section>
  )
}
