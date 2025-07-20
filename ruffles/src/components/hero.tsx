"use client"

import { Button } from "@/components/ui/button"
import { Ticket } from "lucide-react"
import { GuiInuMascot } from "./gui-inu-mascot"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-yellow-400 via-cyan-400 to-green-400 bg-clip-text text-transparent text-5xl lg:text-7xl">
                  Aptos raffles, made easy.
                </span>
              </h1>

              <p className="text-xl lg:text-3xl text-slate-300 max-w-lg mt-4">
                On-chain Raffles, powered by <span className="text-yellow-400 font-semibold">$GUI</span>.
              </p>
            </div>

            <div className="flex justify-start">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-yellow-400 text-yellow-400 font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:bg-yellow-400/10 hover:shadow-yellow-500/50 hover:ring-2 hover:ring-yellow-400/50 transition-all duration-300 bg-transparent hover:text-yellow-400 focus:text-yellow-400 active:text-yellow-400"
                onClick={() => {
                  const liveRafflesSection = document.querySelector('[data-section="live-raffles"]');
                  if (liveRafflesSection) {
                    const headerHeight = 80; // Approximate header height
                    const elementPosition = liveRafflesSection.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - headerHeight;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                <Ticket className="w-5 h-5 mr-2 text-yellow-400 group-hover:text-yellow-400 group-focus:text-yellow-400 group-active:text-yellow-400" />
                Start Winning
              </Button>
            </div>
          </div>

          {/* Right Content - Mascot */}
          <div className="flex justify-center lg:justify-end">
            <GuiInuMascot />
          </div>
        </div>
      </div>
    </section>
  )
}
