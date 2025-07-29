import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { FileText } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Ruffles Logo" className="w-10 h-10" />
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
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Resources</h4>
            <div className="space-y-2">
              <a
                href="https://ruffles.gitbook.io/docs/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-sm transition-colors"
              >
                <FileText className="w-4 h-4" />
                Documentation
              </a>
            </div>
          </div>
        </div>

        <Separator className="bg-slate-800 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-400">Made by the Ruffles Team | Powered by Aptos</div>
        </div>
      </div>
    </footer>
  )
}
