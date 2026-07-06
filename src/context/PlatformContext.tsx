import React, { createContext, useContext, useState, useEffect } from 'react';
import { Match, Promotion, CasinoGameInfo } from '../types';
import { INITIAL_MATCHES, INITIAL_PROMOTIONS, CASINO_GAMES_INFO, LIVE_SIMULATOR_TICKERS } from '../mockData';

interface PlatformContextType {
  matches: Match[];
  casinoGames: CasinoGameInfo[];
  promotions: Promotion[];
  claimedPromos: string[];
  claimPromotionGuide: (promoId: string) => void;
  liveFeed: { message: string; sport: string; matchId: string } | null;
  triggerLiveFeed: (msg: string, sport: string, matchId: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedSportFilter: string;
  setSelectedSportFilter: (sport: string) => void;
}

const PlatformContext = createContext<PlatformContextType | undefined>(undefined);

export const PlatformProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [matches, setMatches] = useState<Match[]>(() => {
    try {
      const saved = localStorage.getItem('khelo_matches');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const isValid = parsed.every(m => 
            m && 
            typeof m === 'object' && 
            m.id && 
            m.homeTeam && 
            m.awayTeam && 
            m.status &&
            m.analysis
          );
          if (isValid) return parsed;
        }
      }
    } catch (e) {
      console.error("Failed to parse cached matches:", e);
    }
    localStorage.removeItem('khelo_matches');
    return INITIAL_MATCHES;
  });

  const [promotions, setPromotions] = useState<Promotion[]>(() => {
    try {
      const saved = localStorage.getItem('khelo_promotions');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].code) {
          return parsed;
        }
      }
    } catch (e) {
      console.error("Failed to parse cached promotions:", e);
    }
    localStorage.removeItem('khelo_promotions');
    return INITIAL_PROMOTIONS;
  });

  const [claimedPromos, setClaimedPromos] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('khelo_claimed_promos');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed;
        }
      }
    } catch (e) {
      console.error("Failed to parse claimed promos:", e);
    }
    localStorage.removeItem('khelo_claimed_promos');
    return [];
  });

  const [casinoGames] = useState<CasinoGameInfo[]>(CASINO_GAMES_INFO);
  const [liveFeed, setLiveFeed] = useState<{ message: string; sport: string; matchId: string } | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSportFilter, setSelectedSportFilter] = useState('All');

  useEffect(() => {
    localStorage.setItem('khelo_matches', JSON.stringify(matches));
  }, [matches]);

  useEffect(() => {
    localStorage.setItem('khelo_promotions', JSON.stringify(promotions));
  }, [promotions]);

  useEffect(() => {
    localStorage.setItem('khelo_claimed_promos', JSON.stringify(claimedPromos));
  }, [claimedPromos]);

  // Dynamic strategic update notification ticker
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.6) {
        const index = Math.floor(Math.random() * LIVE_SIMULATOR_TICKERS.length);
        const event = LIVE_SIMULATOR_TICKERS[index];
        
        setLiveFeed({
          message: event.message,
          sport: event.sport,
          matchId: event.matchId
        });

        setTimeout(() => {
          setLiveFeed(null);
        }, 4500);
      }
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const triggerLiveFeed = (message: string, sport: string, matchId: string) => {
    setLiveFeed({ message, sport, matchId });
    setTimeout(() => {
      setLiveFeed(null);
    }, 4500);
  };

  const claimPromotionGuide = (promoId: string) => {
    if (!claimedPromos.includes(promoId)) {
      setClaimedPromos(prev => [...prev, promoId]);
      triggerLiveFeed("🎉 Guide Access unlocked! Check your code below.", "Info", "");
    }
  };

  return (
    <PlatformContext.Provider
      value={{
        matches,
        casinoGames,
        promotions,
        claimedPromos,
        claimPromotionGuide,
        liveFeed,
        triggerLiveFeed,
        searchQuery,
        setSearchQuery,
        selectedSportFilter,
        setSelectedSportFilter
      }}
    >
      {children}
    </PlatformContext.Provider>
  );
};

export const usePlatform = () => {
  const context = useContext(PlatformContext);
  if (!context) {
    throw new Error('usePlatform must be used within a PlatformProvider');
  }
  return context;
};
