import React, { useEffect, useState } from 'react';
import { ArrowRight, BookOpen, Clock, ShieldCheck, Flame, BookMarked, Users } from 'lucide-react';

export default function Hero() {
  const [onlineCount, setOnlineCount] = useState(12840);
  const [reportsToday, setReportsToday] = useState(482);

  // Small live counters drift to mimic realistic live systems
  useEffect(() => {
    const timer = setInterval(() => {
      setOnlineCount(prev => prev + Math.floor(Math.random() * 5) - 2);
      if (Math.random() > 0.8) {
        setReportsToday(prev => prev + 1);
      }
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black" id="hero">
      
      {/* Background Graphic Image with Advanced Masking & Radial Gradients */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="/src/assets/images/hero_sports_banner_1782996776758.jpg"
          alt="Khelofunofficial Sports Arena"
          className="w-full h-full object-cover opacity-25 filter brightness-50 scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Masking gradients to make it look professional and blend with pure dark black */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-transparent to-[#0B0B0B]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#0B0B0B_100%)]" />
      </div>

      {/* Decorative Golden Spotlights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold/10 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#185adb]/5 blur-[150px] pointer-events-none z-0" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Typography & Text Columns */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Live Event Hot Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-mono tracking-wider uppercase mx-auto lg:mx-0 shadow-lg shadow-gold/5">
              <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500" /> 
              Gen-Z Ultimate Sports Schedules & Strategy Guides
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-[1.1]">
              Sports Intelligence.<br />
              <span className="text-gradient-gold">Unrivaled Game Strategy.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Welcome to <span className="text-white font-medium">Khelofunofficial</span>, your premium, purely informational portal. Access comprehensive cricket, football, and tennis tournament schedule guides, together with professional mathematical strategy sheets for traditional games. <span className="text-gold font-medium">No betting engines, no scoreboards, no real-money wagering</span>—just peak sports data and pro game guides.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#live-hub"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold font-display tracking-wide uppercase text-black bg-gradient-to-r from-gold to-yellow-400 hover:from-yellow-400 hover:to-gold shadow-lg shadow-gold/20 hover:shadow-gold/35 transform hover:-translate-y-0.5 transition-all text-center flex items-center justify-center gap-2 group cursor-pointer"
              >
                Explore Tournaments
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#casino-slots"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold font-display tracking-wide uppercase text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-4.5 h-4.5 text-gold" /> Pro Casino Guides
              </a>
            </div>

            {/* Premium Highlights Grid */}
            <div className="grid grid-cols-3 gap-4 pt-6 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-electric-green" />
                <span className="text-xs text-gray-400 font-mono">100% Free Info</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold" />
                <span className="text-xs text-gray-400 font-mono">Schedules & Guides</span>
              </div>
              <div className="flex items-center gap-2">
                <BookMarked className="w-4 h-4 text-neon-blue" />
                <span className="text-xs text-gray-400 font-mono">Detailed Analysis</span>
              </div>
            </div>

          </div>

          {/* Right side Dashboard Visual Preview Card */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <div className="relative w-full max-w-[420px] rounded-3xl p-6 glass-card shadow-2xl overflow-hidden group border border-white/5 bg-[#141414]/60 backdrop-blur-md">
              
              {/* Card design highlights */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/15 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-neon-blue/5 rounded-full blur-2xl" />

              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-gold" />
                  <span className="text-xs font-mono font-bold tracking-widest text-gold uppercase">Strategy & Schedules Hub</span>
                </div>
                <span className="text-[10px] font-mono text-gray-400 bg-white/5 border border-white/10 px-2 py-1 rounded-lg">PORTAL PREVIEW</span>
              </div>

              {/* Match Preview replacement */}
              <div className="space-y-5">
                <div className="p-4 rounded-2xl bg-black/40 border border-white/5 relative">
                  <span className="absolute -top-2 left-3 px-2 py-0.5 text-[8px] font-mono font-bold text-black bg-gold rounded uppercase">FEATURED REPORT</span>
                  <div className="flex justify-between items-center mb-2 pt-1">
                    <span className="text-[10px] text-gold font-bold">Border-Gavaskar Trophy</span>
                    <span className="text-[10px] text-gray-400 font-mono">Strategic Briefing</span>
                  </div>
                  <div className="space-y-2 py-1">
                    <p className="text-xs text-gray-300">
                      An extensive, session-by-session tactical analysis of the Gabba wicket and team composition history. Covers batting order projections and dew factors.
                    </p>
                  </div>
                </div>

                {/* Animated Stats in Card */}
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1 font-mono text-gray-400">
                      <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-gold" /> Strategic Observers Online</span>
                      <span className="text-white font-bold">{onlineCount.toLocaleString()}</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-gold rounded-full" style={{ width: '78%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1 font-mono text-gray-400">
                      <span className="flex items-center gap-1"><BookMarked className="w-3.5 h-3.5 text-electric-green" /> Analysis Sheets Downloaded</span>
                      <span className="text-electric-green font-bold">{reportsToday.toLocaleString()}</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-electric-green rounded-full" style={{ width: '85%' }} />
                    </div>
                  </div>
                </div>

                {/* Secure Badge */}
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-500">
                  <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-gold" /> Free Strategy Guides</span>
                  <span>Purely Informational Portal</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
