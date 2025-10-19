import React, { useState } from 'react';
import { Heart, Share2, Bookmark, TrendingUp, Users, Award } from 'lucide-react';

const ModernCard = ({ 
  variant = 'default',
  title = 'Amazing Product',
  description = 'Discover the future of design with our innovative solutions',
  image = 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&q=80',
  stats = { likes: 2420, shares: 389, views: 12500 },
  badge = 'Featured',
  onAction = () => {}
}) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [hovering, setHovering] = useState(false);

  const variants = {
    default: 'bg-gradient-to-br from-slate-900 to-slate-800',
    gradient: 'bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500',
    glass: 'bg-white/10 backdrop-blur-xl border border-white/20',
    neon: 'bg-slate-950 border-2 border-cyan-400/50'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center p-6">
      <div 
        className={`relative w-full max-w-md rounded-3xl overflow-hidden transition-all duration-500 ease-out ${
          hovering ? 'scale-105 shadow-2xl shadow-purple-500/30' : 'scale-100 shadow-xl'
        } ${variants[variant]}`}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {/* Animated Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20 opacity-0 transition-opacity duration-500 ${
          hovering ? 'opacity-100' : ''
        }`} />
        
        {/* Badge */}
        <div className="absolute top-4 left-4 z-10">
          <div className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
            <Award className="w-3 h-3" />
            {badge}
          </div>
        </div>

        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              hovering ? 'scale-110' : 'scale-100'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative p-6 space-y-4">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">
              {title}
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              {description}
            </p>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between py-3 border-t border-white/10">
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1.5 text-slate-400">
                <TrendingUp className="w-4 h-4" />
                <span>{(stats.views / 1000).toFixed(1)}k</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-400">
                <Users className="w-4 h-4" />
                <span>{stats.shares}</span>
              </div>
            </div>
            <div className="text-slate-400 text-sm font-medium">
              {stats.likes.toLocaleString()} likes
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={() => setLiked(!liked)}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all duration-300 ${
                liked 
                  ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/30' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
              {liked ? 'Liked' : 'Like'}
            </button>
            
            <button
              onClick={() => setSaved(!saved)}
              className={`p-3 rounded-xl transition-all duration-300 ${
                saved
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <Bookmark className={`w-5 h-5 ${saved ? 'fill-current' : ''}`} />
            </button>
            
            <button
              onClick={onAction}
              className="p-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all duration-300"
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>

          {/* Animated Progress Bar */}
          <div className="relative h-1 bg-white/10 rounded-full overflow-hidden">
            <div 
              className={`absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transition-all duration-1000 ${
                hovering ? 'w-full' : 'w-0'
              }`}
            />
          </div>
        </div>

        {/* Glow Effect */}
        <div className={`absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl opacity-0 blur-2xl transition-opacity duration-500 -z-10 ${
          hovering ? 'opacity-30' : ''
        }`} />
      </div>
    </div>
  );
};

export default ModernCard;
