import React, { useState, useEffect } from 'react';
import { INITIAL_TESTIMONIALS } from '../mockData';
import { Testimonial } from '../types';
import { Star, MessageSquare, Quote, Check, PlusCircle, Award } from 'lucide-react';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    const saved = localStorage.getItem('khelo_reviews');
    return saved ? JSON.parse(saved) : INITIAL_TESTIMONIALS;
  });

  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [favoriteSport, setFavoriteSport] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    localStorage.setItem('khelo_reviews', JSON.stringify(testimonials));
  }, [testimonials]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !comment) return;

    const avatars = [
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
    ];
    const selectedAvatar = avatars[Math.floor(Math.random() * avatars.length)];

    const newReview: Testimonial = {
      id: `review-${Date.now()}`,
      name,
      rating,
      comment,
      date: 'Just now',
      avatar: selectedAvatar,
      favoriteSport: favoriteSport ? favoriteSport : undefined
    };

    setTestimonials(prev => [newReview, ...prev]);
    setName('');
    setComment('');
    setFavoriteSport('');
    setSubmitSuccess(true);

    setTimeout(() => {
      setSubmitSuccess(false);
    }, 4000);
  };

  return (
    <section className="py-24 bg-[#0B0B0B] border-t border-white/5 relative" id="reviews">
      
      {/* Background Ornaments */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#185adb]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-bold font-mono tracking-widest text-gold uppercase bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
            COMMUNITY FEEDBACK
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-white">
            What Our <span className="text-gradient-gold">Community Says</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto font-light">
            Read authentic feedback from sports analysts, traditional game researchers, and strategy fans on our data timeliness and guide quality.
          </p>
        </div>

        {/* Double-column grid: Left reviews list, Right submit review form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Reviews List */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs text-gray-500 font-mono block">RECENT FEEDBACK ({testimonials.length})</span>
            
            <div className="space-y-6 max-h-[550px] overflow-y-auto pr-3 scrollbar-thin">
              {testimonials.map((t) => (
                <div 
                  key={t.id}
                  className="p-6 rounded-2xl bg-[#141414] border border-white/5 relative group hover:border-gold/20 hover:shadow-lg transition-all"
                >
                  {/* Quote mark decoration */}
                  <Quote className="absolute right-6 top-6 w-10 h-10 text-white/5" />

                  {/* Star rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < t.rating ? 'text-gold fill-gold' : 'text-gray-600'}`} 
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light mb-5">
                    "{t.comment}"
                  </p>

                  {/* Reviewer details & Favorite Sport tag */}
                  <div className="flex justify-between items-center pt-4 border-t border-white/5">
                    <div className="flex items-center gap-3">
                      <img 
                        src={t.avatar} 
                        alt={t.name} 
                        className="w-10 h-10 rounded-full object-cover border border-white/15"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold text-white font-display">
                          {t.name}
                        </h4>
                        <span className="text-[10px] text-gray-500 font-mono">
                          {t.date}
                        </span>
                      </div>
                    </div>

                    {t.favoriteSport && (
                      <div className="flex items-center gap-1 bg-gold/10 border border-gold/25 text-[10px] font-mono text-gold px-2.5 py-1 rounded-xl">
                        <Award className="w-3.5 h-3.5 text-gold shrink-0" />
                        <span>Interest: {t.favoriteSport}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Review Form */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-[#141414] border border-white/10 relative">
            
            <div className="flex items-center gap-2 border-b border-white/5 pb-4 mb-6">
              <MessageSquare className="w-5 h-5 text-gold" />
              <h3 className="text-base font-bold font-display text-white">Post Your Experience</h3>
            </div>

            {submitSuccess ? (
              <div className="p-8 text-center space-y-4 rounded-2xl bg-electric-green/10 border border-electric-green/30 text-electric-green">
                <Check className="w-12 h-12 mx-auto bg-electric-green/20 rounded-full p-2" />
                <div>
                  <h4 className="font-bold text-sm">Feedback Posted!</h4>
                  <p className="text-xs text-gray-300 mt-1">Thank you for sharing your thoughts with the community.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-gray-400 font-mono font-medium block">YOUR NAME</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="e.g. Priyesh Sen"
                    className="w-full bg-black border border-white/10 rounded-xl p-3.5 text-white focus:outline-none focus:border-gold"
                  />
                </div>

                {/* Rating selection */}
                <div className="space-y-1.5">
                  <label className="text-gray-400 font-mono font-medium block">RATING STARS</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="p-1"
                      >
                        <Star className={`w-6 h-6 ${star <= rating ? 'text-gold fill-gold' : 'text-gray-600 hover:text-gold'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Favorite game/sport */}
                <div className="space-y-1.5">
                  <label className="text-gray-400 font-mono font-medium block">FAVORITE SPORT OR GAME GUIDE</label>
                  <input
                    type="text"
                    value={favoriteSport}
                    onChange={(e) => setFavoriteSport(e.target.value)}
                    placeholder="e.g. Cricket / Teen Patti"
                    className="w-full bg-black border border-white/10 rounded-xl p-3.5 text-white focus:outline-none focus:border-gold"
                  />
                </div>

                {/* Review Message */}
                <div className="space-y-1.5">
                  <label className="text-gray-400 font-mono font-medium block">COMMENT MESSAGE</label>
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                    rows={4}
                    placeholder="What do you think about our match probability analytics or mathematical strategy notes?"
                    className="w-full bg-black border border-white/10 rounded-xl p-3.5 text-white focus:outline-none focus:border-gold resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gold hover:bg-yellow-400 text-black font-bold font-display uppercase tracking-wider text-center flex justify-center items-center gap-1.5 cursor-pointer shadow-lg shadow-gold/10"
                >
                  <PlusCircle className="w-4.5 h-4.5" /> Post My Experience
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
