import React from 'react';
import { PlatformProvider, usePlatform } from './context/PlatformContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SportsHub from './components/SportsHub';
import SlotsMiniGame from './components/SlotsMiniGame';
import WhyChoose from './components/WhyChoose';
import Promotions from './components/Promotions';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { Flame } from 'lucide-react';

function PlatformAppContent() {
  const { liveFeed } = usePlatform();

  return (
    <div className="relative min-h-screen bg-dark-bg selection:bg-gold selection:text-black">
      
      {/* Top Navigation */}
      <Navbar />

      {/* Main Section Content layout */}
      <main className="relative">
        <Hero />
        
        {/* Interactive Sports Hub (Tournament Schedules & Strategy Guides) */}
        <SportsHub />

        {/* Casino Strategy Guides & Payout Analysis */}
        <SlotsMiniGame />

        {/* Benefits showcase */}
        <WhyChoose />

        {/* Campaigns Hub (Vouchers & PDFs) */}
        <Promotions />

        {/* Community feedback lists */}
        <Testimonials />
      </main>

      {/* Footer information section */}
      <Footer />

      {/* FLOATING REAL-TIME MATCH EVENT TICKER BANNER (BOTTOM-LEFT) */}
      {liveFeed && (
        <div className="fixed bottom-6 left-6 z-40 max-w-sm rounded-2xl p-4 bg-[#141414]/95 border-l-4 border-electric-green text-xs neon-green-glow shadow-2xl flex gap-3.5 items-start animate-fadeIn">
          <div className="p-2 rounded-xl bg-electric-green/15 text-electric-green animate-bounce">
            <Flame className="w-4.5 h-4.5 fill-electric-green" />
          </div>
          <div className="space-y-1 pr-3 flex-1">
            <div className="flex justify-between items-center text-[10px] font-mono tracking-wider text-gray-400">
              <span className="text-electric-green uppercase font-bold">• Analysis Alert</span>
              <span>Just now</span>
            </div>
            <p className="text-white font-medium leading-relaxed">
              {liveFeed.message}
            </p>
          </div>
        </div>
      )}

    </div>
  );
}

export default function App() {
  return (
    <PlatformProvider>
      <PlatformAppContent />
    </PlatformProvider>
  );
}
