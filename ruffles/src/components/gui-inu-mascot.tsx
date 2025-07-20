"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function GuiInuMascot() {
  const [isFloating, setIsFloating] = useState(false)

  useEffect(() => {
    setIsFloating(true)
  }, [])

  return (
    <div className={`relative transition-all duration-1000 ${isFloating ? "animate-bounce" : ""}`}>
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-cyan-400 rounded-full blur-xl opacity-30 scale-75" />

      {/* Logo Container */}
      <div className="relative w-96 h-96 flex items-center justify-center">
        <Image
          src="/logo.png"
          alt="Ruffles Logo"
          width={400}
          height={400}
          className="drop-shadow-2xl filter brightness-110 contrast-110 rotate-12"
          priority
        />
        
        {/* Popping Sparkle Effects - synchronized with bounce */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Random starburst sparkles - 1-5 stars with varied timing */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-yellow-400 animate-starburst-up text-xl">✨</div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400 animate-starburst-right text-xl">⭐</div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-purple-400 animate-starburst-down-left text-xl">💫</div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-green-400 animate-starburst-up-right text-xl">✨</div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-pink-400 animate-starburst-left text-xl">⭐</div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes starburst-up {
          0%, 15%, 85%, 100% { 
            opacity: 0; 
            transform: translate(-50%, -50%) translateY(0px) scale(0.2); 
          }
          40%, 60% { 
            opacity: 1; 
            transform: translate(-50%, -50%) translateY(-200px) scale(1.4); 
          }
        }
        
        @keyframes starburst-right {
          0%, 25%, 75%, 100% { 
            opacity: 0; 
            transform: translate(-50%, -50%) translateX(0px) scale(0.2); 
          }
          40%, 60% { 
            opacity: 1; 
            transform: translate(-50%, -50%) translateX(220px) scale(1.5); 
          }
        }
        
        @keyframes starburst-down-left {
          0%, 35%, 65%, 100% { 
            opacity: 0; 
            transform: translate(-50%, -50%) translate(0px, 0px) scale(0.2); 
          }
          40%, 60% { 
            opacity: 1; 
            transform: translate(-50%, -50%) translate(-180px, 180px) scale(1.3); 
          }
        }
        
        @keyframes starburst-up-right {
          0%, 10%, 90%, 100% { 
            opacity: 0; 
            transform: translate(-50%, -50%) translate(0px, 0px) scale(0.2); 
          }
          40%, 60% { 
            opacity: 1; 
            transform: translate(-50%, -50%) translate(160px, -160px) scale(1.2); 
          }
        }
        
        @keyframes starburst-left {
          0%, 30%, 70%, 100% { 
            opacity: 0; 
            transform: translate(-50%, -50%) translateX(0px) scale(0.2); 
          }
          40%, 60% { 
            opacity: 1; 
            transform: translate(-50%, -50%) translateX(-240px) scale(1.6); 
          }
        }
        
        .animate-starburst-up { animation: starburst-up 4s infinite; }
        .animate-starburst-right { animation: starburst-right 4s infinite 0.8s; }
        .animate-starburst-down-left { animation: starburst-down-left 4s infinite 1.6s; }
        .animate-starburst-up-right { animation: starburst-up-right 4s infinite 2.4s; }
        .animate-starburst-left { animation: starburst-left 4s infinite 3.2s; }
      `}</style>
    </div>
  )
}
