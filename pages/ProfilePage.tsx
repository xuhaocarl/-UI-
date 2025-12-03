import React from 'react';
import { currentUser } from '../services/mockData';
import { Settings, CreditCard, Bookmark, Award, ChevronRight } from 'lucide-react';

export const ProfilePage: React.FC = () => {
  return (
    <div className="pb-24 bg-stone-50 min-h-screen relative">
      {/* Header Background Pattern */}
      <div className="bg-black h-40 border-b-2 border-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '10px 10px'}}></div>
        <div className="absolute top-4 right-4">
             <button className="p-2 bg-white border-2 border-black active:translate-y-0.5">
                <Settings size={20} />
             </button>
        </div>
      </div>
      
      {/* Profile Card */}
      <div className="px-4 -mt-16 relative z-10">
        <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0_0_#000] flex flex-col items-center">
            <div className="w-24 h-24 border-2 border-black bg-white -mt-16 mb-3 p-1">
                <img src={currentUser.avatar} alt="profile" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-2xl font-black text-black uppercase">{currentUser.name}</h2>
            <div className="flex items-center gap-2 mt-1 mb-6">
                <span className="bg-lime-300 border border-black text-xs font-bold px-2 py-0.5">LV.{currentUser.level}</span>
                <span className="text-xs font-bold text-stone-500 uppercase">Eco-Citizen</span>
            </div>
            
            <div className="flex w-full justify-between mt-2 pt-4 border-t-2 border-dashed border-stone-300">
                <div className="flex flex-col items-center flex-1 border-r-2 border-stone-200">
                    <span className="font-black text-xl text-black">12</span>
                    <span className="text-xs font-bold text-stone-500">EVENTS</span>
                </div>
                <div className="flex flex-col items-center flex-1 border-r-2 border-stone-200">
                    <span className="font-black text-xl text-black">340</span>
                    <span className="text-xs font-bold text-stone-500">POINTS</span>
                </div>
                <div className="flex flex-col items-center flex-1">
                    <span className="font-black text-xl text-black">5</span>
                    <span className="text-xs font-bold text-stone-500">STAYS</span>
                </div>
            </div>
        </div>
      </div>

      {/* Menu List */}
      <div className="px-4 mt-6 flex flex-col gap-4">
        <MenuButton icon={<CreditCard size={20}/>} label="MY ORDERS" />
        <MenuButton icon={<Bookmark size={20}/>} label="SAVED" />
        <MenuButton icon={<Award size={20}/>} label="BADGES" />
      </div>
    </div>
  );
};

const MenuButton = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
    <button className="w-full bg-white p-4 flex items-center justify-between border-2 border-black shadow-[2px_2px_0_0_#000] active:translate-y-1 active:shadow-none transition-all group">
        <div className="flex items-center gap-3">
            <div className="text-black group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <span className="font-bold text-black text-lg">{label}</span>
        </div>
        <ChevronRight size={20} className="text-black" />
    </button>
)