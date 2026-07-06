import React, { useState, useEffect } from 'react';
import { 
  Crown, 
  Layers, 
  Brain, 
  Award, 
  TrendingUp, 
  Compass, 
  BookOpen, 
  CheckCircle2, 
  Info,
  Timer,
  ChevronLeft,
  ChevronRight,
  BookOpenCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GameStrategy {
  id: string;
  title: string;
  category: 'Board' | 'Card' | 'Logic';
  difficulty: 'Easy' | 'Medium' | 'High' | 'Very High';
  origin: string;
  history: string;
  complexityMetric: string;
  complexityLabel: string;
  statValue: string;
  statLabel: string;
  description: string;
  expertPrediction: string;
  tips: string[];
}

const STRATEGY_GAMES: GameStrategy[] = [
  {
    id: 'chess',
    title: 'Chess (The Royal Game)',
    category: 'Board',
    difficulty: 'Very High',
    origin: 'India (6th Century AD)',
    history: 'Originated as Chaturanga before evolving through Persia and Europe into the modern global standard of perfect-information cognitive competition.',
    complexityMetric: 'Shannon Number (~10¹²⁰)',
    complexityLabel: 'Decision Tree Complexity',
    statValue: '0% House Edge',
    statLabel: 'Pure Skill Determination',
    description: 'The ultimate battle of tactics and positional foresight. Played on an 8x8 grid, Chess contains no element of chance or hidden information, relying solely on sequential calculation and pattern recognition.',
    expertPrediction: 'To excel in high-level match analysis, players should master the transition between tactical calculation (short-term tactical combinations) and positional strategy (long-term pawn structures and space advantages).',
    tips: [
      'Control the four central squares (d4, d5, e4, e5) in the opening moves to gain spatial dominance.',
      'Develop your minor pieces (Knights and Bishops) early and castle within the first 10-12 moves for king safety.',
      'Maintain pawn structure harmony; avoid creating permanent isolated, backward, or doubled pawns.'
    ]
  },
  {
    id: 'minesweeper',
    title: 'Minesweeper Logic',
    category: 'Logic',
    difficulty: 'Medium',
    origin: 'Mainframe Systems (1960s)',
    history: 'Developed for early mainframe operating systems, Minesweeper evolved into a legendary default utility showcasing basic Boolean satisfiability algorithms.',
    complexityMetric: 'NP-Complete Logic',
    complexityLabel: 'Mathematical Class',
    statValue: '40% Expert Solve',
    statLabel: 'Avg. Winnable Probability',
    description: 'A single-player logic puzzle where the objective is to clear a grid containing hidden mines. Numerical clues indicate the exact count of adjacent mines, requiring strict analytical deduction.',
    expertPrediction: 'Minesweeper is highly deterministic, but includes statistical traps. When a 50/50 blind guess is mathematically required, execute it immediately rather than investing cognitive energy clearing the remainder of the board first.',
    tips: [
      'Utilize the 1-2-1 pattern rule: if a flat boundary wall of numbers displays 1-2-1, mines are guaranteed to sit directly adjacent to the 1s.',
      'Double-click / Chord-clearing saves action time; click numerical cells once flagged to auto-reveal cleared neighboring tiles.',
      'Flag mines systematically to visually isolate remaining blank cells and prevent accidental clicks.'
    ]
  },
  {
    id: 'solitaire',
    title: 'Classic Solitaire (Klondike)',
    category: 'Card',
    difficulty: 'Easy',
    origin: 'Baltic Regions (18th Century)',
    history: 'Emerged as a meditative patience exercise in Northern Europe before gaining global desktop ubiquity in the late 20th century.',
    complexityMetric: '52-Card Combinatorics',
    complexityLabel: 'Shuffling Space',
    statValue: '79% Theoretically Winnable',
    statLabel: 'Max Possible Success Rate',
    description: 'A classic patience card game where players attempt to sequence a shuffled 52-card deck into four suit foundations from Ace to King by moving and uncovering cards in seven tableau columns.',
    expertPrediction: 'The gap between the theoretical win rate (79%) and real success (approx 43% for skilled 3-card draw players) lies in the sequence of revealing face-down piles. Strategy prioritizes uncovering hidden cards.',
    tips: [
      'Always uncover cards from the largest face-down tableau pile first whenever a choice exists.',
      'Play Aces and Deuces immediately to the foundations; hold back higher cards momentarily to assist tableau transitions.',
      'Never empty a tableau column unless you have a King ready to fill the spot immediately.'
    ]
  },
  {
    id: 'hearts',
    title: 'Hearts (Trick Evasion)',
    category: 'Card',
    difficulty: 'Medium',
    origin: 'United States (1880s)',
    history: 'Developed as a derivative of the classic European game of Whist, Hearts rewards players for avoiding point-carrying penalty cards or taking them all.',
    complexityMetric: '4-Player Hidden Info',
    complexityLabel: 'Game State Variance',
    statValue: '75% Skill Dominance',
    statLabel: 'Statistical Win Bias',
    description: 'An evasion-type card game where the main objective is to avoid taking tricks containing point cards (Hearts = 1 point, Queen of Spades = 13 points), or collect all 26 points to "Shoot the Moon".',
    expertPrediction: 'An optimal player must consistently monitor trick counts to detect early signs of a competitor attempting to Shoot the Moon. Defensive trick-taking is vital to block a potential sweep.',
    tips: [
      'Pass your high Spades (Ace, King) during the swap phase unless you hold 4+ other Spades to protect against drawing the Queen.',
      'Keep precise track of which suits have been exhausted (voided) by other players to avoid bleeding points in late hands.',
      'If you have a weak hand with mostly low cards, play passively. If you hold a high card run, look for a Shoot the Moon opening.'
    ]
  },
  {
    id: 'backgammon',
    title: 'Backgammon Positionals',
    category: 'Board',
    difficulty: 'High',
    origin: 'Mesopotamia (5,000 Years Ago)',
    history: 'One of the oldest known strategic board games in human history, tracing its roots to the ancient Royal Game of Ur and Roman Duodecim Scripta.',
    complexityMetric: 'Dice Probabilities (36 Rules)',
    complexityLabel: 'Dice Roll Combinations',
    statValue: '90% Match Skill',
    statLabel: 'Long-Series Success Rate',
    description: 'A traditional two-player board game combining tactical racing checker movements with complex defensive blockade mechanics, governed by the statistical probabilities of two rolling dice.',
    expertPrediction: 'Backgammon is heavily influenced by short-term variance (the dice), but master-level match play is determined entirely by expected value calculations and smart utilization of the doubling cube.',
    tips: [
      'Prioritize building points (securing anchors) in your home board to trap the opponent\'s checkers on the bar.',
      'Avoid leaving a single checker vulnerable (a blot) within 6 steps (direct dice range) of an opponent checker.',
      'Understand doubling cube economics: mathematically, you should accept a double if your calculated win chance exceeds 25%.'
    ]
  }
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.95
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30, duration: 0.5 },
      opacity: { duration: 0.4 },
      scale: { duration: 0.4 }
    }
  },
  exit: (direction: number) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
    scale: 0.95,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30, duration: 0.5 },
      opacity: { duration: 0.4 },
      scale: { duration: 0.4 }
    }
  })
};

export default function SportsHub() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  // Auto-slide carousel every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + STRATEGY_GAMES.length) % STRATEGY_GAMES.length);
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % STRATEGY_GAMES.length);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Board': return <Crown className="w-4 h-4 text-gold" />;
      case 'Card': return <Layers className="w-4 h-4 text-neon-blue" />;
      case 'Logic': return <Brain className="w-4 h-4 text-electric-green" />;
      default: return <Compass className="w-4 h-4 text-gold" />;
    }
  };

  const getCategoryImage = (category: string) => {
    switch (category) {
      case 'Board':
        return '/src/assets/images/chess_strategy_1783000246955.jpg';
      case 'Card':
        return '/src/assets/images/card_strategy_1783000262511.jpg';
      case 'Logic':
        return '/src/assets/images/logic_strategy_1783000276804.jpg';
      default:
        return '/src/assets/images/chess_strategy_1783000246955.jpg';
    }
  };

  const activeGame = STRATEGY_GAMES[activeIndex];

  return (
    <section className="py-24 bg-[#0B0B0B] border-t border-white/5 relative overflow-hidden" id="live-hub">
      
      {/* Background Subtle Lighting Ornaments */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-neon-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="space-y-3">
            <span className="text-xs font-bold font-mono tracking-widest text-gold uppercase bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
              TRADITIONAL GAMES ACADEMY
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-white">
              Classic Strategy & <span className="text-gradient-gold">Probability Guides</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-xl font-light">
              Explore mathematical models, game theory, and historic playbooks inside our fully responsive interactive masterclass carousel.
            </p>
          </div>

          {/* Navigtion Info Badge */}
          <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-gray-400 font-mono">
            <BookOpenCheck className="w-4 h-4 text-gold" />
            <span>Pure Educational Analysis • {STRATEGY_GAMES.length} Guides Loaded</span>
          </div>
        </div>

        {/* Premium Segmented Carousel Track Navigation Indicators */}
        <div className="flex justify-start md:justify-center items-center gap-2.5 mb-8 overflow-x-auto pb-4 no-scrollbar max-w-full">
          {STRATEGY_GAMES.map((game, idx) => (
            <button
              key={game.id}
              onClick={() => {
                setDirection(idx > activeIndex ? 1 : -1);
                setActiveIndex(idx);
              }}
              className={`px-5 py-3 rounded-2xl text-xs font-mono font-bold transition-all border whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                activeIndex === idx
                  ? 'bg-gradient-to-r from-gold to-yellow-400 text-black border-gold shadow-lg shadow-gold/25 font-black scale-105'
                  : 'bg-[#141414]/90 text-gray-400 border-white/5 hover:text-white hover:border-white/15'
              }`}
            >
              <span className={activeIndex === idx ? 'text-black' : ''}>
                {getCategoryIcon(game.category)}
              </span>
              <span>{game.title.split(' ')[0].toUpperCase()}</span>
            </button>
          ))}
        </div>

        {/* Main Interactive Carousel Slide Container */}
        <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-8">
          
          {/* Previous Slide Button */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-1 sm:-left-4 z-30">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-black/80 hover:bg-gold hover:text-black text-white flex items-center justify-center border border-white/10 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/15 cursor-pointer transition-all active:scale-95"
              aria-label="Previous strategy guide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>

          {/* Next Slide Button */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-1 sm:-right-4 z-30">
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-black/80 hover:bg-gold hover:text-black text-white flex items-center justify-center border border-white/10 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/15 cursor-pointer transition-all active:scale-95"
              aria-label="Next strategy guide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Carousel Slide Stage */}
          <div className="min-h-[500px] overflow-hidden rounded-3xl bg-[#141414] border border-white/5 shadow-2xl relative">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full h-full p-6 sm:p-10 md:p-12 relative z-10"
              >
                
                {/* Visual Category Ornament Background */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  
                  {/* Left Column: Visual graphic, origin & quick stats */}
                  <div className="lg:col-span-5 space-y-6">
                    
                    {/* Immersive Cinematic Category Image */}
                    <div className="relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                      <img 
                        src={getCategoryImage(activeGame.category)} 
                        alt={activeGame.title}
                        className="w-full h-full object-cover object-center filter brightness-[0.6] hover:scale-105 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="text-[10px] font-mono font-bold tracking-widest text-gold bg-black/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-gold/25 uppercase flex items-center gap-1.5 shadow-md">
                          {getCategoryIcon(activeGame.category)} {activeGame.category} Masterclass
                        </span>
                      </div>
                    </div>

                    {/* Quick Metadata Card */}
                    <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-3.5">
                      <div className="flex justify-between items-center text-xs border-b border-white/5 pb-2">
                        <span className="text-gray-500 font-mono uppercase">Geographic Origin</span>
                        <span className="text-white font-medium flex items-center gap-1.5">
                          <Timer className="w-3.5 h-3.5 text-gold" /> {activeGame.origin}
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        <p className="text-[9px] font-mono text-gold uppercase tracking-wider">📜 Historical Context</p>
                        <p className="text-gray-400 text-xs leading-relaxed font-light">
                          {activeGame.history}
                        </p>
                      </div>
                    </div>

                    {/* Statistics Displays */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-black border border-white/5 space-y-1.5">
                        <span className="text-[9px] font-mono text-gray-500 uppercase flex items-center gap-1">
                          <TrendingUp className="w-3.5 h-3.5 text-gold" /> {activeGame.complexityLabel}
                        </span>
                        <p className="text-sm sm:text-base font-bold text-white font-mono truncate">
                          {activeGame.complexityMetric}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-black border border-white/5 space-y-1.5">
                        <span className="text-[9px] font-mono text-gray-500 uppercase flex items-center gap-1">
                          <Award className="w-3.5 h-3.5 text-emerald-400" /> {activeGame.statLabel}
                        </span>
                        <p className="text-sm sm:text-base font-bold text-emerald-400 font-mono truncate">
                          {activeGame.statValue}
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* Right Column: Title, description, guidelines, expert predictions */}
                  <div className="lg:col-span-7 space-y-6">
                    
                    {/* Header tags and title */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-mono uppercase bg-white/10 text-gold px-2 py-0.5 rounded border border-gold/15">
                          GUIDE {activeIndex + 1} OF {STRATEGY_GAMES.length}
                        </span>
                        <span className={`text-[9px] font-mono px-2 py-0.5 rounded border ${
                          activeGame.difficulty === 'Very High' || activeGame.difficulty === 'High'
                            ? 'text-orange-400 bg-orange-400/10 border-orange-400/20'
                            : 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20'
                        }`}>
                          DIFFICULTY: {activeGame.difficulty.toUpperCase()}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-display text-white tracking-tight leading-tight">
                        {activeGame.title}
                      </h3>
                    </div>

                    {/* Summary Description */}
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                      {activeGame.description}
                    </p>

                    {/* Step-by-Step Tactical Guidelines List */}
                    <div className="space-y-4 pt-2">
                      <h4 className="text-xs font-mono font-bold text-gold uppercase tracking-widest flex items-center gap-2">
                        <BookOpen className="w-4.5 h-4.5 text-gold" /> Mathematical Strategy Guidelines
                      </h4>

                      <div className="space-y-3">
                        {activeGame.tips.map((tip, idx) => (
                          <div key={idx} className="flex gap-3 items-start p-4 bg-black/40 border border-white/5 rounded-2xl hover:border-gold/20 hover:bg-black/60 transition-all">
                            <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
                              {tip}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Expert Strategic Notes Quote */}
                    <div className="pt-6 border-t border-white/5">
                      <p className="text-[9px] font-mono uppercase text-gold flex items-center gap-1.5">
                        <Compass className="w-4 h-4 text-gold" /> Expert Strategic Outlook
                      </p>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-2 italic font-light pl-4 border-l border-gold/30">
                        "{activeGame.expertPrediction}"
                      </p>
                    </div>

                  </div>

                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Quick Info Disclaimer Alert */}
          <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex gap-3 text-xs text-gray-400 leading-relaxed font-light mt-8 max-w-3xl mx-auto">
            <Info className="w-5 h-5 text-gold shrink-0 mt-0.5" />
            <p>
              This premium educational encyclopedia offers insights, probability theories, and game history for intellectual interest only. Khelofunofficial remains a 100% free informational platform.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
