import React from 'react';
import { Stay } from '../types';
import { ArrowLeft, Star, MapPin, Wifi, Coffee, Wind } from 'lucide-react';

interface StayDetailProps {
  stay: Stay;
  onBack: () => void;
}

export const StayDetail: React.FC<StayDetailProps> = ({ stay, onBack }) => {
  return (
    <div className="min-h-screen bg-stone-50 pb-24 relative">
       {/* Navbar */}
       <div className="absolute top-0 left-0 right-0 z-10 p-4 flex justify-between items-center">
        <button onClick={onBack} className="p-2 border-2 border-black bg-white/90 backdrop-blur shadow-[2px_2px_0_0_#000] active:shadow-none active:translate-y-0.5">
            <ArrowLeft size={20} />
        </button>
        <button className="p-2 border-2 border-black bg-white/90 backdrop-blur shadow-[2px_2px_0_0_#000]">
            <Star size={20} className={stay.rating > 4.5 ? "fill-yellow-400 text-yellow-400" : ""} />
        </button>
      </div>

      <div className="h-72 w-full border-b-2 border-black">
        <img src={stay.image} className="w-full h-full object-cover" />
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
            <h1 className="text-2xl font-black uppercase w-2/3 leading-tight">{stay.title}</h1>
            <div className="flex flex-col items-end">
                <span className="text-2xl font-black text-blue-600">¥{stay.price}</span>
                <span className="text-sm font-bold text-stone-400">/ NIGHT</span>
            </div>
        </div>

        <div className="flex items-center gap-2 mb-6 text-stone-600 font-bold border-b-2 border-dashed border-stone-300 pb-4">
            <MapPin size={18} />
            {stay.location}
        </div>

        <div className="mb-6">
            <h3 className="font-bold text-lg mb-3">AMENITIES</h3>
            <div className="grid grid-cols-3 gap-3">
                <div className="border-2 border-black bg-white p-3 flex flex-col items-center gap-1 shadow-[2px_2px_0_0_#000]">
                    <Wifi size={20} />
                    <span className="text-xs font-bold">WIFI</span>
                </div>
                <div className="border-2 border-black bg-white p-3 flex flex-col items-center gap-1 shadow-[2px_2px_0_0_#000]">
                    <Coffee size={20} />
                    <span className="text-xs font-bold">COFFEE</span>
                </div>
                <div className="border-2 border-black bg-white p-3 flex flex-col items-center gap-1 shadow-[2px_2px_0_0_#000]">
                    <Wind size={20} />
                    <span className="text-xs font-bold">AC</span>
                </div>
            </div>
        </div>

        <div>
            <h3 className="font-bold text-lg mb-2">DESCRIPTION</h3>
            <div className="bg-white border-2 border-black p-4 text-stone-800 leading-relaxed font-medium">
                Experience the ultimate eco-living at {stay.title}. 
                Designed for digital nomads and nature lovers. 
                Enjoy high-speed internet in the middle of a forest.
            </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t-2 border-black max-w-md mx-auto">
        <button className="w-full bg-black text-white border-2 border-black font-black text-lg py-3 shadow-[4px_4px_0_0_#888] active:translate-y-1 active:shadow-none transition-all">
            BOOK RESERVATION
        </button>
      </div>
    </div>
  );
};