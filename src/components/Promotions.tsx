import React, { useState } from 'react';
import { usePlatform } from '../context/PlatformContext';
import { Gift, CheckCircle, Sparkles, AlertCircle, FileText, Download } from 'lucide-react';

export default function Promotions() {
  const { promotions, claimedPromos, claimPromotionGuide } = usePlatform();
  const [justClaimed, setJustClaimed] = useState<string | null>(null);

  const handleClaim = (promoId: string) => {
    claimPromotionGuide(promoId);
    setJustClaimed(promoId);
    setTimeout(() => {
      setJustClaimed(null);
    }, 2500);
  };

  return (
    <section className="py-24 bg-[#0B0B0B] border-t border-white/5 relative" id="promotions">
      
      {/* Background radial accent */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-bold font-mono tracking-widest text-gold uppercase bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
            STRATEGY ACCESS & VOUCHERS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-white">
            Resource Kits & <span className="text-gradient-gold">Rewards Info</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto font-light">
            Unlock premium strategy books, download mathematical cheat sheets, and copy unique promotional vouchers for academic analysis.
          </p>
        </div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promotions.map((promo) => {
            const isClaimed = claimedPromos.includes(promo.id);
            const isJustClaimed = justClaimed === promo.id;
            return (
              <div 
                key={promo.id}
                className={`rounded-2xl p-6 bg-[#141414] border transition-all flex flex-col justify-between relative overflow-hidden group ${
                  isClaimed 
                    ? 'border-white/5 opacity-90' 
                    : 'border-white/10 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5'
                }`}
              >
                {/* Visual Glow Ornament for HOT promotion */}
                {promo.id === 'promo-1' && (
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-gold/10 rounded-full blur-2xl group-hover:bg-gold/20 transition-all duration-500" />
                )}

                <div>
                  {/* Promo Badge header */}
                  <div className="flex justify-between items-start mb-5">
                    <div className="p-3 rounded-xl bg-gold/10 border border-gold/20 text-gold">
                      <Gift className="w-5 h-5" />
                    </div>
                    {isClaimed ? (
                      <span className="text-xs font-mono text-gold bg-gold/10 border border-gold/40 px-2.5 py-1 rounded-lg font-bold">
                        CODE: {promo.code}
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono text-gray-500 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">
                        LOCKED
                      </span>
                    )}
                  </div>

                  {/* Promo Details */}
                  <div className="space-y-2.5 mb-6">
                    <h3 className="text-lg font-bold font-display text-white group-hover:text-gold transition-colors">
                      {promo.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-light">
                      {promo.description}
                    </p>
                    <div className="pt-2 text-[10px] text-gray-500 font-mono">
                      <span className="text-gray-400 font-bold">Eligibility:</span> {promo.eligibility}
                    </div>
                  </div>
                </div>

                {/* Bottom value indicator and CTA */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] text-gray-500 font-mono uppercase block">REWARD LEVEL</span>
                    <span className="text-base font-bold text-gold font-mono">
                      {promo.bonusValue}
                    </span>
                  </div>

                  {isClaimed ? (
                    <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-electric-green px-3 py-1.5 bg-electric-green/10 rounded-xl">
                      <CheckCircle className="w-3.5 h-3.5" /> Guide Unlocked
                    </span>
                  ) : (
                    <button
                      onClick={() => handleClaim(promo.id)}
                      className="px-4 py-2.5 text-xs font-bold font-display uppercase tracking-wider bg-gold text-black hover:bg-yellow-400 rounded-xl transition-all cursor-pointer shadow-lg shadow-gold/5 flex items-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5" /> Unlock Free Guide
                    </button>
                  )}
                </div>

                {/* Success claimed badge overlay */}
                {isJustClaimed && (
                  <div className="absolute inset-0 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 text-center z-20">
                    <Sparkles className="w-8 h-8 text-gold animate-bounce mb-2" />
                    <p className="text-sm font-bold text-white font-display">RESOURCE UNLOCKED!</p>
                    <p className="text-[10px] text-gray-400 mt-1">Check Code: <span className="text-gold font-mono font-bold">{promo.code}</span> in the card above.</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Promotional T&C Note */}
        <div className="mt-10 p-4 rounded-xl bg-white/5 border border-white/10 max-w-2xl mx-auto flex gap-3 text-xs text-gray-400">
          <AlertCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
          <p className="font-light">
            All strategy guides, access codes, analytics PDFs, and promotion vouchers provided on this website are 100% free of charge and purely informational. This platform does not process payments or facilitate real-money gambling.
          </p>
        </div>

      </div>
    </section>
  );
}
