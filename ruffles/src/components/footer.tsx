import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Twitter, MessageCircle, FileText, Shield, ScrollText } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-yellow-400 to-cyan-400 flex items-center justify-center">
                <span className="text-slate-900 font-bold text-lg">R</span>
              </div>
              <span className="text-2xl font-bold text-white">Ruffles</span>
            </div>
            <p className="text-slate-400 text-sm">Trustless raffles and giveaways powered by the Aptos blockchain.</p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Product</h4>
            <div className="space-y-2">
              <a href="#" className="block text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                Raffles
              </a>
              <a href="#" className="block text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                Auctions
              </a>
              <a href="#" className="block text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                Giveaways
              </a>
              <a href="#" className="block text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                Treat Boxes
              </a>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Resources</h4>
            <div className="space-y-2">
              <a
                href="#"
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-sm transition-colors"
              >
                <FileText className="w-4 h-4" />
                Documentation
              </a>
              <a href="#" className="block text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                API
              </a>
              <a href="#" className="block text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                Support
              </a>
              <a href="#" className="block text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                Status
              </a>
            </div>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Community</h4>
            <div className="flex gap-3">
              <Button size="sm" variant="outline" className="border-slate-700 hover:border-cyan-500 p-2 bg-transparent">
                <Twitter className="w-4 h-4 text-cyan-400" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-slate-700 hover:border-purple-500 p-2 bg-transparent"
              >
                <MessageCircle className="w-4 h-4 text-purple-400" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-slate-800 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a href="#" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <ScrollText className="w-4 h-4" />
              Terms
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <Shield className="w-4 h-4" />
              Privacy
            </a>
          </div>

          <div className="text-sm text-slate-400">Made by the Ruffles Team | Powered by Aptos</div>
        </div>
      </div>
    </footer>
  )
}
