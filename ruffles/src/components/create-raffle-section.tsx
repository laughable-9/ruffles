"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { CreateRaffleForm } from "./create-raffle-form"

export function CreateRaffleSection() {
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">Create Your Own Raffle</h2>
              <p className="text-slate-300 text-lg">
                Launch your own trustless raffle on the Aptos blockchain. 
                Set your prizes, ticket prices, and let the community participate.
              </p>
            </div>

            <div className="flex justify-center">
              <Button
                onClick={() => setShowForm(true)}
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-yellow-500/50 hover:ring-2 hover:ring-yellow-400/50 transition-all duration-300"
              >
                <Plus className="w-6 h-6 mr-2" />
                Create New Raffle
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Set Your Prize</h3>
                <p className="text-slate-400 text-sm">
                  Upload NFTs or set token amounts as prizes for your raffle
                </p>
              </div>

              <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Configure Settings</h3>
                <p className="text-slate-400 text-sm">
                  Set ticket prices, quantities, duration, and participation limits
                </p>
              </div>

              <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Go Live</h3>
                <p className="text-slate-400 text-sm">
                  Your raffle goes live instantly and appears in the marketplace
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showForm && (
        <CreateRaffleForm onClose={() => setShowForm(false)} />
      )}
    </>
  )
}
