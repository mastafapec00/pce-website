import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRightLeft, Menu } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* 🟢 Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg shadow-green-200">
              PCE
            </div>
            <span className="font-black text-xl tracking-tight text-green-900 uppercase">
              Pakistan Currency
            </span>
          </motion.div>

          <div className="hidden md:flex gap-8 font-bold text-sm uppercase text-slate-600">
            <a href="#" className="text-green-700 border-b-2 border-green-700 pb-1">Home</a>
            <a href="#" className="hover:text-green-700 transition">About Us</a>
            <a href="#" className="hover:text-green-700 transition">Services</a>
            <a href="#" className="hover:text-green-700 transition">Branches</a>
            <a href="#" className="hover:text-green-700 transition">Live Rates</a>
          </div>

          <button className="md:hidden text-green-800"><Menu size={28} /></button>
        </div>
      </nav>

      {/* 🟢 Hero Banner Section */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-32">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-green-100 text-green-800 font-bold px-4 py-2 rounded-full mb-6 text-sm">
              🏆 No.1 Currency Exchange in Pakistan
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight mb-6">
              Exchange with <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-900">Confidence</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
              Transparent open-market rates and secure transactions at 150+ branches. 
              Your gateway to global finance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-700 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-green-200 hover:bg-green-800 transition flex items-center justify-center gap-3">
                Check Today's Rates <ArrowRightLeft size={20} />
              </button>
              <button className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:border-green-700 hover:text-green-700 transition flex items-center justify-center gap-3">
                <Phone size={20} /> WhatsApp Us
              </button>
            </div>
          </motion.div>
          
          {/* Right Side Visual Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-green-50 to-green-100 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white flex items-center justify-center">
              <p className="text-green-800/50 font-bold text-2xl text-center px-10">
                [ Yahan Hum Aap Ki Bheji Hui Khoobsurat Picture Lagayenge ]
              </p>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
