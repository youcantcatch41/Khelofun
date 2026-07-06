import React, { useState } from 'react';
import { usePlatform } from '../context/PlatformContext';
import { CasinoGameInfo } from '../types';
import { BookOpen, Award, TrendingUp, ShieldCheck, CheckCircle2, Zap, Eye, EyeOff } from 'lucide-react';

export default function SlotsMiniGame() {
  const { casinoGames } = usePlatform();
  const [selectedGameId, setSelectedGameId] = useState<string | null>('andar-bahar');

  const selectedGame = casinoGames.find(g => g.id === selectedGameId) || casinoGames[0];

  return (
    <section className="py-24 bg-[#0B0B0B] border-t border-white/5 relative" id="casino-slots">
      
      {/* Decorative Lights */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-[#185adb]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-bold font-mono tracking-widest text-gold uppercase bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
            CASINO GAMES STRATEGY HUB
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-white">
            Traditional Game Rules & <span className="text-gradient-gold">Mathematical Analysis</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto font-light">
            An academic and informational breakdown of popular casino game structures. Study the Return-To-Player (RTP) metrics, volatility indexes, and professional play guidelines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Column 1: Games Directory List */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-mono font-bold text-gray-400 uppercase tracking-widest border-b border-white/5 pb-3">
              Select Game Guide
            </h3>
            
            <div className="space-y-3">
              {casinoGames.map((game) => {
                const isSelected = game.id === selectedGameId;
                return (
                  <button
                    key={game.id}
                    onClick={() => setSelectedGameId(game.id)}
                    className={`w-full text-left p-4 rounded-2xl transition-all border flex items-center justify-between group cursor-pointer ${
                      isSelected
                        ? 'bg-gradient-to-r from-gold/15 to-yellow-400/5 border-gold/40 text-white shadow-lg'
                        : 'bg-[#141414]/70 border-white/5 text-gray-400 hover:text-white hover:border-white/15'
                    }`}
                  >
                    <div className="space-y-1 pr-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono uppercase bg-white/10 text-gold px-1.5 py-0.5 rounded border border-gold/20">
                          {game.category}
                        </span>
                        <span className="text-xs text-gray-500 font-mono">Score: {game.popularityScore}%</span>
                      </div>
                      <h4 className="font-display font-bold text-sm text-white group-hover:text-gold transition-colors">
                        {game.title}
                      </h4>
                    </div>
                    
                    <div className="shrink-0">
                      {isSelected ? (
                        <Eye className="w-5 h-5 text-gold animate-pulse" />
                      ) : (
                        <EyeOff className="w-5 h-5 text-gray-600 group-hover:text-gray-400" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3 text-xs text-gray-400 leading-relaxed">
              <ShieldCheck className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <p>
                <strong>Educational Disclaimer:</strong> This directory contains theoretical strategy, historical context, and probability calculations. We do not support real-money placing or wagering of any kind.
              </p>
            </div>
          </div>

          {/* Column 2: Selected Game Deep Dive Analysis */}
          <div className="lg:col-span-7">
            {selectedGame ? (
              <div className="rounded-3xl bg-[#141414] border border-white/5 p-6 sm:p-8 space-y-6 relative overflow-hidden">
                {/* Background gradient hint */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-gold/5 rounded-full blur-2xl" />
                
                {/* Game Header Visual */}
                <div className="h-44 rounded-2xl overflow-hidden relative border border-white/10">
                  <img
                    src={selectedGame.image}
                    alt={selectedGame.title}
                    className="w-full h-full object-cover filter brightness-75 contrast-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/40" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider bg-gold text-black px-2 py-0.5 rounded mr-2">
                      {selectedGame.category} CLASSIC
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black font-display text-white mt-1.5 drop-shadow-md">
                      {selectedGame.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed font-light">
                  {selectedGame.description}
                </p>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-gray-500 uppercase flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5 text-gold" /> Theoretical RTP
                    </span>
                    <p className="text-lg font-bold text-white font-mono">{selectedGame.rtp}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono text-gray-500 uppercase flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-yellow-400" /> Volatility Level
                    </span>
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold font-mono uppercase bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">
                      {selectedGame.volatility}
                    </span>
                  </div>
                </div>

                {/* Strategy Guidelines Checklist */}
                <div className="space-y-3.5 pt-2">
                  <h4 className="text-xs font-mono font-bold text-gold uppercase tracking-widest flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4" /> Mathematical Strategy Notes
                  </h4>
                  
                  <div className="space-y-2.5">
                    {selectedGame.strategyTips.map((tip, i) => (
                      <div key={i} className="flex gap-3 items-start p-3 bg-black/20 border border-white/5 rounded-xl">
                        <CheckCircle2 className="w-4 h-4 text-electric-green shrink-0 mt-0.5" />
                        <p className="text-gray-300 text-xs leading-relaxed font-light">
                          {tip}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Guide promo footer */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500 font-mono">
                  <span className="flex items-center gap-1">
                    <Award className="w-4 h-4 text-gold" /> Strategy Checked
                  </span>
                  <span>Khelofunofficial Academy</span>
                </div>

              </div>
            ) : (
              <div className="py-20 text-center text-gray-500 bg-[#141414] rounded-3xl border border-white/5">
                <p className="text-sm font-mono uppercase text-gold/60">No Strategy Loaded</p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
