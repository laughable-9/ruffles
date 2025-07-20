"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, Zap } from "lucide-react"
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-cyan-500/20 border border-yellow-500/30">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium text-yellow-400">Powered by Aptos Blockchain</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-yellow-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                  Trustless Raffles.
                </span>
                <br />
                <span className="text-white">Instant Luck.</span>
              </h1>

              <p className="text-xl text-slate-300 max-w-lg">
                On-Chain Raffles & Giveaways, Powered by <span className="text-yellow-400 font-semibold">$GUI</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-slate-900 font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-yellow-500/25 transition-all duration-300"
              >
                <Zap className="w-5 h-5 mr-2" />
                Start Raffle
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-6 text-lg rounded-xl font-semibold transition-all duration-300 bg-transparent"
              >
                Browse Live Draws
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
