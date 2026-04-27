import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Globe, ArrowRightLeft, Menu } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* 1. Animated Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            {/* Logo Placeholder - Yahan aapka animated logo ayega */}
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">P</div>
            <span className="font-black text-xl tracking-tight text-green-800 uppercase">Pakistan Currency</span>
          </motion.div>

          <div className="hidden md:flex gap-8 font-semibold text-sm uppercase text-slate-600">
            <a href="#" className="text-green-600 border-b-2 border-green-600">Home</a>
            <a href="#" className="hover:text-green-600 transition">About Us</a>
            <div className="group relative cursor-pointer">
              <span className="hover:text-green-600 transition">Services</span>
              {/* Dropdown menu items yahan ayenge */}
            </div>
            <a href="#" className="hover:text-green-600 transition">Branches</a>
            <a href="#" className="hover:text-green-600 transition">Live Rates</a>
            <a href="#" className="hover:text-green-600 transition">Contact</a>
          </div>

          <button className="md:hidden"><Menu /></button>
        </div>
      </nav>

      {/* 2. Modern Hero Banner */}
      <section className="relative overflow-hidden bg-slate-50 py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-6">
              Exchange with <span className="text-green-600">Confidence</span>, Trust the Leaders.
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Transparent open-market rates and secure transactions at 150+ branches across Pakistan. Your gateway to global finance.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-green-200 hover:bg-green-700 transition flex items-center gap-2">
                Check Today's Rates <ArrowRightLeft size={18} />
              </button>
              <button className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:border-green-600 hover:text-green-600 transition flex items-center gap-2">
                <Phone size={18} /> WhatsApp
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-square bg-green-100 rounded-[3rem] overflow-hidden shadow-2xl">
              {/* Yahan banner visual ayega */}
              <div className="w-full h-full flex items-center justify-center text-green-200 italic">Visual Component</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Live Rates Table Header Placeholder */}
      <section className="py-20 container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Live Currency Exchange Rates</h2>
          <p className="text-slate-500">Real-time updates from the open market</p>
        </div>
        {/* Yahan aapka rates table ayega jo hum agle step mein banayenge */}
      </section>

    </div>
  );
}
