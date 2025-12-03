import React from 'react';
import { Activity } from '../types';
import { ArrowLeft, MapPin, Calendar, Clock, Share2 } from 'lucide-react';

interface ActivityDetailProps {
  activity: Activity;
  onBack: () => void;
}

export const ActivityDetail: React.FC<ActivityDetailProps> = ({ activity, onBack }) => {
  return (
    <div className="min-h-screen bg-stone-50 pb-24 relative">
      {/* Navbar */}
      <div className="sticky top-0 z-10 bg-stone-50/90 backdrop-blur border-b-2 border-black p-4 flex justify-between items-center">
        <button onClick={onBack} className="p-2 border-2 border-black bg-white hover:bg-stone-100 active:translate-y-1">
            <ArrowLeft size={20} />
        </button>
        <span className="font-bold text-lg uppercase truncate max-w-[200px]">{activity.title}</span>
        <button className="p-2 border-2 border-black bg-white hover:bg-stone-100 active:translate-y-1">
            <Share2 size={20} />
        </button>
      </div>

      {/* Hero Image */}
      <div className="w-full h-64 border-b-2 border-black relative">
        <img src={activity.image} alt={activity.title} className="w-full h-full object-cover" />
        <div className="absolute bottom-4 left-4 bg-black text-white px-3 py-1 font-bold text-sm border-2 border-white shadow-[4px_4px_0_0_rgba(255,255,255,0.5)]">
            {activity.status === 'recruiting' ? 'RECRUITING' : 'CLOSED'}
        </div>
      </div>

      {/* Info Block */}
      <div className="p-4 space-y-6">
        <div>
            <div className="flex gap-2 mb-2">
                {activity.tags.map(tag => (
                    <span key={tag} className="text-xs font-bold border border-black px-2 py-0.5 bg-blue-100">#{tag}</span>
                ))}
            </div>
            <h1 className="text-2xl font-black uppercase leading-tight">{activity.title}</h1>
            <div className="mt-4 space-y-3 bg-white border-2 border-black p-4 shadow-[4px_4px_0_0_#000]">
                <div className="flex items-center gap-3">
                    <Calendar className="text-blue-600" size={20} />
                    <span className="font-bold">{activity.date}</span>
                </div>
                <div className="flex items-center gap-3">
                    <MapPin className="text-blue-600" size={20} />
                    <span className="font-bold">{activity.location}</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border border-black bg-stone-200"></div>
                    <span className="font-bold text-sm">Organized by {activity.organizer}</span>
                </div>
            </div>
        </div>

        {/* Description */}
        <div>
            <h3 className="text-lg font-bold border-b-2 border-black inline-block mb-3 px-1">ABOUT</h3>
            <p className="text-stone-700 leading-relaxed text-lg font-medium">
                Join us for an immersive experience at {activity.location}. 
                This event is designed for eco-conscious youth who want to connect, learn, and grow. 
                Don't miss out on the opportunity to meet like-minded individuals!
            </p>
        </div>

        {/* Participants */}
        <div>
            <div className="flex justify-between items-end mb-3">
                <h3 className="text-lg font-bold border-b-2 border-black inline-block px-1">WHO'S GOING ({activity.participantCount})</h3>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2">
                {activity.participants.map((p, i) => (
                    <img key={i} src={p} className="w-12 h-12 border-2 border-black bg-stone-300 flex-shrink-0" />
                ))}
                 <div className="w-12 h-12 border-2 border-black border-dashed flex items-center justify-center font-bold bg-white flex-shrink-0">
                    +
                </div>
            </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t-2 border-black max-w-md mx-auto">
        <div className="flex gap-4">
            <div className="flex-1 flex flex-col justify-center">
                <span className="text-xs text-stone-500">TOTAL PRICE</span>
                <span className="text-2xl font-black text-blue-600">{activity.price}</span>
            </div>
            <button className="flex-[2] bg-lime-300 border-2 border-black text-black font-black text-lg py-3 shadow-[4px_4px_0_0_#000] active:translate-y-1 active:shadow-none transition-all">
                JOIN NOW
            </button>
        </div>
      </div>
    </div>
  );
};