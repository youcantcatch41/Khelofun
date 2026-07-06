import React from 'react';
import { ShieldCheck, Smartphone, Zap, Trophy, Sparkles, BookOpen } from 'lucide-react';

export default function WhyChoose() {
  const benefits = [
    {
      id: 'b-1',
      title: '100% Free Information',
      description: 'Access premium game strategy files and instant sports updates entirely free of cost. No subscriptions, no real-money transactions.',
      icon: ShieldCheck,
      color: 'text-gold bg-gold/10 border-gold/20'
    },
    {
      id: 'b-2',
      title: 'Seamless Mobile Platform',
      description: 'Built with fluid mobile-first layouts so you can track live match stats and study traditional game guides on any phone anywhere.',
      icon: Smartphone,
      color: 'text-neon-blue bg-neon-blue/10 border-neon-blue/20'
    },
    {
      id: 'b-3',
      title: 'Real-Time Match Updates',
      description: 'Get immediate score tickers and dynamic play logs straight from pitch, wickets, and courts.',
      icon: Zap,
      color: 'text-electric-green bg-electric-green/10 border-electric-green/20'
    },
    {
      id: 'b-4',
      title: 'Diverse Sport Coverage',
      description: 'Access premier international tournament indexes including Test Cricket, European Football, Tennis, and Traditional Card Guides.',
      icon: Trophy,
      color: 'text-gold bg-gold/10 border-gold/20'
    },
    {
      id: 'b-5',
      title: 'Modern Gen-Z Design',
      description: 'No cluttered banner ads or complex grids. Our minimalist visual language focuses purely on readability and aesthetic pairing.',
      icon: Sparkles,
      color: 'text-neon-blue bg-neon-blue/10 border-neon-blue/20'
    }
  ];

  return (
    <section className="py-24 bg-[#0B0B0B] border-t border-white/5 relative" id="why-khelo">
      
      {/* Visual Accents */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-bold font-mono tracking-widest text-gold uppercase bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
            PLATFORM BENEFITS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-white">
            Why Choose <span className="text-gradient-gold">Khelofunofficial</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto font-light">
            We are redefining the sports and gaming knowledge landscape with rapid data, clean design, and detailed strategy documentation.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={benefit.id}
                className="p-6 rounded-2xl bg-[#141414] border border-white/5 hover:border-gold/25 transition-all group hover:-translate-y-1 duration-300 relative flex flex-col justify-between"
              >
                <div>
                  {/* Icon Container */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-6 ${benefit.color}`}>
                    <IconComponent className="w-5 h-5 stroke-[2]" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold font-display text-white group-hover:text-gold transition-colors mb-2.5">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-light">
                    {benefit.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 mt-5 flex items-center justify-between text-[10px] font-mono text-gray-500">
                  <span>ANALYSIS LEVEL 0{idx+1}</span>
                  <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity">SECURE ACCESS</span>
                </div>
              </div>
            );
          })}

          {/* Special Statistics Summary Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-tr from-gold/10 to-yellow-500/5 border border-gold/20 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[9px] font-mono tracking-wider text-gold uppercase block">TRUSTWORTHINESS RATINGS</span>
              <h3 className="text-xl font-black font-display text-white">Resource Database Stats</h3>
              <p className="text-xs text-gray-400 font-light leading-relaxed">
                We maintain active tracking metrics on win probability computations and strategic guidebook access.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="p-3.5 rounded-xl bg-black border border-white/5">
                <span className="text-[10px] text-gray-500 font-mono block">STRATEGY GUIDES</span>
                <span className="text-sm font-bold text-white font-mono">100% FREE</span>
              </div>
              <div className="p-3.5 rounded-xl bg-black border border-white/5">
                <span className="text-[10px] text-gray-500 font-mono block">LIVE TICKERS</span>
                <span className="text-sm font-bold text-electric-green font-mono">24/7 ACTIVE</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
