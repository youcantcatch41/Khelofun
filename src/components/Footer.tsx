import React from 'react';
import { Trophy, Mail, ShieldAlert, HeartHandshake, Globe, Info } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-8 text-xs relative overflow-hidden" id="footer">
      
      {/* Decorative gradient light */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Upper Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="/src/assets/images/khelo_logo_1783341906310.jpg"
                alt="Kheloexch Logo"
                className="h-10 w-auto object-contain filter brightness-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-gray-500 leading-relaxed font-light">
              Khelofunofficial is a premium, purely informational sports tracker, live match scoreboard analytics index, and traditional card games strategy directory. 
            </p>
          </div>

          {/* Column 2: Quick Navigation Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-white tracking-widest uppercase text-[10px]">Quick Sections</h4>
            <ul className="space-y-2.5 text-gray-500">
              <li><a href="#hero" className="hover:text-gold transition-colors">Home Dashboard</a></li>
              <li><a href="#live-hub" className="hover:text-gold transition-colors">Live Sports Hub</a></li>
              <li><a href="#casino-slots" className="hover:text-gold transition-colors">Casino Strategy</a></li>
              <li><a href="#promotions" className="hover:text-gold transition-colors">Rewards Hub</a></li>
            </ul>
          </div>

          {/* Column 3: Contact & Support */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-white tracking-widest uppercase text-[10px]">Contact Us</h4>
            <ul className="space-y-2.5 text-gray-500">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>support@khelofunofficial.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-gold shrink-0" />
                <span>khelofunofficial.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Platform Security Certification */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-white tracking-widest uppercase text-[10px]">Portal Policy</h4>
            <p className="text-gray-500 leading-relaxed font-light">
              We focus entirely on statistical data and game rules analysis. All documentation is checked by academic experts in probability theory and traditional game guidelines.
            </p>
          </div>

        </div>

        {/* Informational Disclaimer Notice Area */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/5 space-y-3">
          <div className="flex items-center gap-2 text-gold">
            <ShieldAlert className="w-5 h-5 shrink-0" />
            <span className="font-display font-bold tracking-wider uppercase text-[11px]">Purely Informational & Non-Commercial Portal</span>
          </div>
          <p className="text-gray-400 font-light leading-relaxed">
            Khelofunofficial is not a betting website, slot machine casino, or gambling operator. We do not support real-money or virtual-token betting, predictions placing, or wagers of any kind. No gaming engines are embedded on this application. All live match scoreboards, win probabilities, and mathematical tips are provided strictly for educational and analysis purposes. Please enjoy the informational guides.
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-[10px] font-mono pt-1">
            <Info className="w-4 h-4 text-gold" />
            <span>Educational & Scientific Game Theory Database</span>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-600 text-[11px]">
          <div>
            <p>© {currentYear} Khelofunofficial. All rights reserved. Purely Informational Portal.</p>
          </div>
          
          <div className="flex gap-6">
            <span className="hover:text-gold transition-all cursor-pointer">Strategy Terms</span>
            <span className="hover:text-gold transition-all cursor-pointer">Privacy Charter</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
