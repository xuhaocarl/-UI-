import React from 'react';
import { posts } from '../services/mockData';
import { PostCard } from '../components/PostCard';
import { Bell, ArrowUpRight } from 'lucide-react';

export const SquarePage: React.FC = () => {
  return (
    <div className="pb-24 pt-4 px-4 bg-stone-50 min-h-screen">
       {/* Top Bar */}
       <div className="flex justify-between items-center mb-6 py-2 z-10">
        <h1 className="text-3xl font-black text-black uppercase tracking-tighter">Community</h1>
        <div className="relative p-2 border-2 border-black bg-white shadow-[2px_2px_0_0_#000]">
            <Bell size={20} className="text-black" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 border-2 border-black"></span>
        </div>
      </div>

      {/* Featured Banner - Retro Style */}
      <div className="w-full bg-blue-600 mb-8 p-4 border-2 border-black shadow-[4px_4px_0_0_#000] relative overflow-hidden">
        <div className="relative z-10 text-white">
            <span className="bg-lime-300 text-black text-xs font-black px-2 py-0.5 border border-black mb-2 inline-block">HOT TOPIC</span>
            <h2 className="font-black text-xl w-3/4 leading-tight mb-4">"HOW TO LIVE SUSTAINABLY IN A BIG CITY?"</h2>
            <button className="bg-white text-black px-3 py-1 text-xs font-bold border-2 border-black flex items-center gap-1 active:translate-y-0.5">
                READ <ArrowUpRight size={12}/>
            </button>
        </div>
        {/* Pattern Background */}
        <div className="absolute top-0 right-0 w-32 h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/pixel-weave.png')]"></div>
      </div>

      {/* Feed Tabs - Retro */}
      <div className="flex gap-4 mb-4 border-b-2 border-black pb-0">
        <button className="text-black font-bold text-sm px-4 py-2 border-x-2 border-t-2 border-black bg-white -mb-0.5 relative z-10">
            FOLLOWING
        </button>
        <button className="text-stone-500 font-bold text-sm px-4 py-2 hover:bg-stone-200">NEARBY</button>
        <button className="text-stone-500 font-bold text-sm px-4 py-2 hover:bg-stone-200">NEWEST</button>
      </div>

      {/* Posts */}
      <div>
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};