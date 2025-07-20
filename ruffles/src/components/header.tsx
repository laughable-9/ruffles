"use client";

import { useState, useEffect } from "react";

export function Header() {
  const [connected, setConnected] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling past hero section (assuming hero is ~100vh)
      const heroHeight = window.innerHeight;
      setIsVisible(window.scrollY > heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full z-20 py-4 px-6 flex items-center justify-between bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-md border-b border-slate-700/50 fixed top-0 left-0 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Ruffles Logo" className="h-10 w-10" />
          <span className="text-2xl font-bold text-yellow-400 select-none tracking-tight">Ruffles</span>
        </div>
        <nav className="flex items-center gap-6">
          <a href="#" className="text-lg font-semibold text-white hover:text-slate-300 transition-colors">Raffles</a>
          <a href="#" className="text-lg font-semibold text-white hover:text-slate-300 transition-colors">Statistics</a>
        </nav>
      </div>
      <button
        className={`transition-all duration-200 px-6 py-2 rounded-xl font-semibold text-lg shadow-lg bg-slate-700 text-white hover:bg-slate-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-500/50 ${connected ? 'opacity-60 cursor-not-allowed' : ''}`}
        onClick={() => setConnected(true)}
        disabled={connected}
      >
        {connected ? "Wallet Connected" : "Connect Wallet"}
      </button>
    </header>
  );
}
