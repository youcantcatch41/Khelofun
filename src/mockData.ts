import { Match, Promotion, Testimonial, CasinoGameInfo } from './types';

export const INITIAL_MATCHES: Match[] = [
  // CRICKET
  {
    id: 'cricket-1',
    sport: 'Cricket',
    tournament: 'Border-Gavaskar Trophy • 4th Test',
    homeTeam: 'India',
    awayTeam: 'Australia',
    status: 'FEATURED',
    time: 'July 5 - July 9, 2026',
    analysis: {
      keyPlayer: 'Rishabh Pant (India)',
      venue: 'The Gabba, Brisbane',
      expertPrediction: 'A highly anticipated Test match. India looks strong with their stable middle-order, while Australia\'s pace battery is expected to exploit the bouncy Gabba wicket. Experts recommend studying session-by-session weather reports before performing tournament analysis.',
      formGuide: {
        home: ['W', 'D', 'W', 'L', 'W'],
        away: ['L', 'D', 'L', 'W', 'L']
      }
    },
    hotPercent: 98
  },
  {
    id: 'cricket-2',
    sport: 'Cricket',
    tournament: 'T20 International Series',
    homeTeam: 'England',
    awayTeam: 'West Indies',
    status: 'UPCOMING',
    time: 'Starts in 2 hours',
    analysis: {
      keyPlayer: 'Jos Buttler (England)',
      venue: 'Kensington Oval, Barbados',
      expertPrediction: 'High-scoring encounter expected on a flat wicket. Team selection and boundary-hitting capability in the first 6 overs will define the strategic advantage. Winning the toss usually prompts captains to bowl first.',
      formGuide: {
        home: ['W', 'L', 'W'],
        away: ['L', 'W', 'L']
      }
    },
    hotPercent: 82
  },
  {
    id: 'cricket-3',
    sport: 'Cricket',
    tournament: 'Indian Premier League (IPL)',
    homeTeam: 'Mumbai Indians',
    awayTeam: 'Chennai Super Kings',
    status: 'UPCOMING',
    time: 'Tomorrow, 19:30',
    analysis: {
      keyPlayer: 'Jasprit Bumrah (Mumbai)',
      venue: 'Wankhede Stadium, Mumbai',
      expertPrediction: 'The biggest rivalry in IPL history. Mumbai\'s bowling unit has a statistical advantage at home, but Chennai\'s experienced spin bowling options in the middle overs will be a crucial test.',
      formGuide: {
        home: ['W', 'W', 'L', 'W'],
        away: ['W', 'L', 'W', 'W']
      }
    },
    hotPercent: 99
  },

  // FOOTBALL
  {
    id: 'foot-1',
    sport: 'Football',
    tournament: 'UEFA Champions League • Semi-Final',
    homeTeam: 'Real Madrid',
    awayTeam: 'Manchester City',
    status: 'FEATURED',
    time: 'July 14, 21:00',
    analysis: {
      keyPlayer: 'Jude Bellingham (Real Madrid)',
      venue: 'Santiago Bernabéu, Madrid',
      expertPrediction: 'A high-intensity tactical battle. Real Madrid\'s counter-attacking speed faces Manchester City\'s possession-based positional play. Wing-back matchups will be the decider.',
      formGuide: {
        home: ['W', 'W', 'W', 'D', 'W'],
        away: ['W', 'D', 'W', 'W', 'L']
      }
    },
    hotPercent: 95
  },
  {
    id: 'foot-2',
    sport: 'Football',
    tournament: 'English Premier League',
    homeTeam: 'Arsenal',
    awayTeam: 'Chelsea',
    status: 'UPCOMING',
    time: 'Tonight, 19:45',
    analysis: {
      keyPlayer: 'Bukayo Saka (Arsenal)',
      venue: 'Emirates Stadium, London',
      expertPrediction: 'London Derby. Arsenal is expected to dominate wing-play and high-press, whereas Chelsea under new tactical systems will look for fast transition opportunities.',
      formGuide: {
        home: ['W', 'D', 'W'],
        away: ['L', 'W', 'D']
      }
    },
    hotPercent: 88
  },
  {
    id: 'foot-3',
    sport: 'Football',
    tournament: 'La Liga EA Sports',
    homeTeam: 'Barcelona',
    awayTeam: 'Atletico Madrid',
    status: 'UPCOMING',
    time: 'Tonight, 21:00',
    analysis: {
      keyPlayer: 'Lamine Yamal (Barcelona)',
      venue: 'Estadi Olímpic Lluís Companys',
      expertPrediction: 'Barcelona\'s quick transitions are set to test Atletico\'s traditional compact defensive low-block. Creative playmaking from deep midfield is key.',
      formGuide: {
        home: ['W', 'W', 'L'],
        away: ['W', 'D', 'W']
      }
    },
    hotPercent: 86
  },

  // TENNIS
  {
    id: 'tennis-1',
    sport: 'Tennis',
    tournament: 'Wimbledon • Men\'s Singles Final',
    homeTeam: 'Carlos Alcaraz',
    awayTeam: 'Jannik Sinner',
    status: 'FEATURED',
    time: 'July 12, 14:00',
    analysis: {
      keyPlayer: 'Carlos Alcaraz',
      venue: 'Centre Court, London',
      expertPrediction: 'A clash of styles. Sinner\'s explosive flat baseline game meets Alcaraz\'s versatile slice and drop-shot combinations. First-serve percentage will be a key performance indicator.',
      formGuide: {
        home: ['W', 'W', 'W', 'W'],
        away: ['W', 'W', 'W', 'W']
      }
    },
    hotPercent: 94
  },

  // BASKETBALL
  {
    id: 'bask-1',
    sport: 'Basketball',
    tournament: 'NBA Finals • Game 6',
    homeTeam: 'Boston Celtics',
    awayTeam: 'Golden State Warriors',
    status: 'FEATURED',
    time: 'July 10, 06:00',
    analysis: {
      keyPlayer: 'Stephen Curry (Warriors)',
      venue: 'TD Garden, Boston',
      expertPrediction: 'Tactical analysis suggests Warriors will prioritize perimeter screening and transition 3-pointers, whereas Celtics will look to dominate the paint and collect second-chance rebounds.',
      formGuide: {
        home: ['L', 'W', 'L', 'W'],
        away: ['W', 'L', 'W', 'L']
      }
    },
    hotPercent: 91
  }
];

export const CASINO_GAMES_INFO: CasinoGameInfo[] = [
  {
    id: 'andar-bahar',
    title: 'Andar Bahar Strategy',
    category: 'Cards',
    description: 'A traditional Indian betting game of pure chance, played with a single deck. The dealer deals a single card face up (the Joker) and then deals cards alternately to Andar (inside) and Bahar (outside) until a card matching the Joker appears.',
    rtp: '97.85% (Andar: 97.85%, Bahar: 97.00%)',
    volatility: 'Medium',
    strategyTips: [
      'Statistically, Andar has a slightly higher win probability (51.5%) because the first card is always dealt there.',
      'Manage bankrolls using the Martingale system carefully, as table limits can cap progression.',
      'Some live variants offer side wagers on the number of cards dealt before a match is made. These have lower RTP but higher payouts.'
    ],
    image: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=600&auto=format&fit=crop&q=80',
    popularityScore: 98
  },
  {
    id: 'teen-patti',
    title: 'Teen Patti Pro Guide',
    category: 'Cards',
    description: 'Also known as Indian Poker, Teen Patti is a highly strategic card game. Players wager based on the strength of their 3-card hands, utilizing bluffing, blind play, and psychological analysis to win the pot.',
    rtp: '96.40%',
    volatility: 'High',
    strategyTips: [
      'Playing "Blind" (without looking at your cards) can psych out opponents and keeps your stake requirement at half of "Seen" players.',
      'Always observe the betting pattern of seen players; a sudden raise usually indicates a high pair, sequence, or trail.',
      'Set strict loss limits. Fold early if you hold weak combinations like low high-card or minor pairs.'
    ],
    image: 'https://images.unsplash.com/photo-1543536448-d209d2d13a1c?w=600&auto=format&fit=crop&q=80',
    popularityScore: 97
  },
  {
    id: 'roulette-royale',
    title: 'European Roulette Guide',
    category: 'Roulette',
    description: 'An absolute classic. European Roulette features 37 pockets (numbers 1-36 and a single green 0). Players study ball statistics, hot/cold numbers, and wheel physics to find informational trends.',
    rtp: '97.30%',
    volatility: 'Medium',
    strategyTips: [
      'Prefer European over American Roulette (which has double zeros, dropping RTP to 94.74%).',
      'Focus on "even-money" outside bets (Red/Black, Odd/Even, High/Low) for stable statistical progression.',
      'Utilize the D\'Alembert progression: increase stakes by 1 unit after a loss, and decrease by 1 unit after a win.'
    ],
    image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=600&auto=format&fit=crop&q=80',
    popularityScore: 94
  },
  {
    id: 'blackjack-pro',
    title: 'Blackjack Basic Strategy',
    category: 'Cards',
    description: 'The highest-paying casino table game when played with optimal mathematical strategy. Players compete to get a hand value closer to 21 than the dealer without going over (busting).',
    rtp: '99.60% (With Basic Strategy)',
    volatility: 'Low',
    strategyTips: [
      'Never take insurance. It is a statistically disadvantageous side bet with a high house edge.',
      'Always split Aces and 8s, regardless of what card the dealer is showing.',
      'Double down when you have a hard 11 against any dealer card except an Ace.'
    ],
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600&auto=format&fit=crop&q=80',
    popularityScore: 96
  },
  {
    id: 'aviator-crash',
    title: 'Crash & Aviator Analysis',
    category: 'Dice',
    description: 'A modern, high-intensity multiplier-based mechanics. A plane takes off with a multiplier that starts at 1.00x and grows exponentially. The objective is to analyze historical trends and determine optimal risk crash targets.',
    rtp: '97.00%',
    volatility: 'Very High',
    strategyTips: [
      'Implement the "Two Bet Strategy": configure auto-cashout at 1.50x for a stable baseline return, and let a secondary guide run for higher multipliers.',
      'Study historical statistics: crash levels under 1.20x occur about 10-15% of the time consecutively. Wait for a series of low crashes before projecting high runs.',
      'Maintain an objective approach. Emotional play is the main cause of rapid bankroll depletion in fast-paced instant games.'
    ],
    image: 'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?w=600&auto=format&fit=crop&q=80',
    popularityScore: 99
  }
];

export const INITIAL_PROMOTIONS: Promotion[] = [
  {
    id: 'promo-1',
    title: 'Exclusive Sports Analyst Pass',
    description: 'Unlock our daily advanced algorithms, probability models, and expert commentary files for major football leagues and cricket series.',
    code: 'ANALYST500',
    bonusValue: 'Premium Pass',
    type: 'STRATEGY_PERK',
    eligibility: 'All new members on email verification'
  },
  {
    id: 'promo-2',
    title: 'Casino Guidebook & Payout Chart',
    description: 'Download the comprehensive PDF containing advanced strategies, payout tables, and table-selection guides for Teen Patti & Andar Bahar.',
    code: 'KHELOPRO',
    bonusValue: 'Strategy Kit',
    type: 'SIGNUP_GUIDE',
    eligibility: 'Instant access'
  },
  {
    id: 'promo-3',
    title: 'VIP Weekend Analytics Report',
    description: 'Get deep-dive weekly statistics, historical trends, wind conditions, and head-to-head ratios sent directly to your inbox every Friday.',
    code: 'WEEKENDSTATS',
    bonusValue: 'VIP Analytics',
    type: 'REWARDS_BONUS',
    eligibility: 'Active community contributors'
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Rohan Sharma (Sports Enthusiast)',
    rating: 5,
    comment: 'Khelofunofficial is a goldmine for real-time live scores and win probability trends. The expert match analysis section helps me stay updated on key player form guides. Clean, fast, and gorgeous UI!',
    date: '2 hours ago',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    favoriteSport: 'Cricket'
  },
  {
    id: 't-2',
    name: 'Ananya Deshmukh',
    rating: 5,
    comment: 'I really love the Casino Strategy section! The breakdown of Andar Bahar odds and Teen Patti blind playing guides are extremely detailed and professional. It is the best informational companion app ever.',
    date: '1 day ago',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    favoriteSport: 'Casino Games'
  },
  {
    id: 't-3',
    name: 'Kabir Mehta',
    rating: 5,
    comment: 'No betting noise, just high-quality live updates, probability tracking, and neat strategy sheets. Excellent user experience and beautiful dark theme. Strongly recommended for genuine sports & game strategy fans!',
    date: '3 days ago',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    favoriteSport: 'Football & Basketball'
  }
];

export const LIVE_SIMULATOR_TICKERS = [
  { sport: 'Cricket', message: 'Strategy Alert: India vs Australia key matchup profile has been updated.', matchId: 'cricket-1' },
  { sport: 'Cricket', message: 'Pitch Analysis: Wet conditions reported at Kensington Oval. Strategy notes adjusted.', matchId: 'cricket-2' },
  { sport: 'Football', message: 'Tactical Briefing: Real Madrid counter-press statistics released for the Semi-Final.', matchId: 'foot-1' },
  { sport: 'Football', message: 'Squad Update: Lineup changes for Arsenal may impact their high-pressing system.', matchId: 'foot-2' },
  { sport: 'Tennis', message: 'Surface Report: Grass wear-and-tear details published for Centre Court analysis.', matchId: 'tennis-1' },
  { sport: 'Basketball', message: 'Offensive Tracking: Golden State Warriors perimeter movement stats published.', matchId: 'bask-1' }
];
