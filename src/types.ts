export type SportCategory = 'Cricket' | 'Football' | 'Tennis' | 'Basketball' | 'Horse Racing' | 'Casino Games';

export interface MatchAnalysis {
  keyPlayer: string;
  weatherCondition?: string;
  venue: string;
  expertPrediction: string;
  formGuide: {
    home: string[]; // e.g. ['W', 'L', 'W']
    away: string[];
  }
}

export interface Match {
  id: string;
  sport: SportCategory;
  tournament: string;
  homeTeam: string;
  awayTeam: string;
  homeLogo?: string;
  awayLogo?: string;
  status: 'UPCOMING' | 'FEATURED';
  time: string; // e.g., "July 12, 18:30" or "Scheduled"
  analysis: MatchAnalysis;
  hotPercent?: number; // Excitement/interest rating
}

export interface CasinoGameInfo {
  id: string;
  title: string;
  category: 'Slots' | 'Cards' | 'Roulette' | 'Dice';
  description: string;
  rtp: string; // e.g. "96.5%"
  volatility: 'Low' | 'Medium' | 'High' | 'Very High';
  strategyTips: string[];
  image: string;
  popularityScore: number; // e.g. 98
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  code: string;
  bonusValue: string; // e.g. "₹50,000 Package"
  type: 'SIGNUP_GUIDE' | 'REWARDS_BONUS' | 'STRATEGY_PERK';
  eligibility: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
  favoriteSport?: string;
}
