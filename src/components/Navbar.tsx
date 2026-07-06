import React, { useState } from 'react';
import { usePlatform } from '../context/PlatformContext';
import { Trophy, Bell, Menu, X, Flame, ShieldAlert } from 'lucide-react';

export default function Navbar() {
  const { liveFeed } = usePlatform();
  const [isOpen, setIsOpen] = useState(false);
  const [showAlerts, setShowAlerts] = useState(false);

  const navLinks = [
    { name: 'Traditional Games Strategy', href: '#live-hub' },
    { name: 'Casino Strategy Guides', href: '#casino-slots' },
    { name: 'Why Khelo', href: '#why-khelo' },
    { name: 'Rewards & Passes', href: '#promotions' },
    { name: 'Reviews', href: '#reviews' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B0B0B]/90 backdrop-blur-xl border-b border-white/5" id="nav-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center">
              <img
                src="/src/assets/images/khelo_logo_1783341906310.jpg"
                alt="Kheloexch Logo"
                className="h-10 sm:h-12 w-auto object-contain filter brightness-110"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white hover:border-b-2 hover:border-gold px-1 py-1 text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Alerts / Info Banner */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Informational badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs text-gray-300">
              <ShieldAlert className="w-3.5 h-3.5 text-gold shrink-0" />
              <span>Purely Informational Portal</span>
            </div>
            
            {/* Live Alerts Trigger */}
            <div className="relative">
              <button 
                onClick={() => setShowAlerts(!showAlerts)}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all relative"
                aria-label="Alerts"
              >
                <Bell className="w-5 h-5" />
                {liveFeed && (
                  <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-electric-green rounded-full pulse-live" />
                )}
              </button>

              {/* Alerts Dropdown */}
              {showAlerts && (
                <div className="absolute right-0 mt-3 w-80 bg-[#141414] border border-white/10 rounded-2xl shadow-2xl p-4 overflow-hidden z-50">
                  <div className="flex justify-between items-center pb-2 border-b border-white/5 mb-2">
                    <h4 className="font-display font-semibold text-sm text-gold flex items-center gap-1.5">
                      <Flame className="w-4 h-4 text-orange-500" /> Platform Feed
                    </h4>
                    <span className="text-[10px] text-gray-500 font-mono">Live Logs</span>
                  </div>
                  <div className="space-y-3.5 max-h-64 overflow-y-auto">
                    {liveFeed ? (
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs animate-fadeIn">
                        <span className="text-[10px] uppercase text-electric-green font-mono block mb-1">
                          • {liveFeed.sport} Update
                        </span>
                        <p className="text-gray-200">{liveFeed.message}</p>
                      </div>
                    ) : (
                      <p className="text-xs text-gray-400 text-center py-4 leading-relaxed">
                        No active strategic notifications. See tournament guides below!
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Right Bar */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Informational badge mobile */}
            <div className="flex items-center gap-1 px-2 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] text-gray-300">
              <ShieldAlert className="w-3 h-3 text-gold shrink-0" />
              <span>Info Only</span>
            </div>

            {/* Hamburger Trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0B0B0B] border-b border-white/10 px-4 pt-2 pb-6 space-y-3 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-white px-3 py-2.5 rounded-xl hover:bg-white/5 text-base font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="pt-4 border-t border-white/5 flex flex-col gap-2">
            <div className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-gray-300">
              <ShieldAlert className="w-4 h-4 text-gold shrink-0" />
              <span>Purely Informational & Sports Strategy Portal</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
