import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRightLeft, Menu, RefreshCcw } from 'lucide-react';

const ratesData = [
  { code: 'USD', name: 'US Dollar', flag: '🇺🇸', buy: 278.50, sell: 281.20 },
  { code: 'GBP', name: 'UK Pound', flag: '🇬🇧', buy: 352.10, sell: 356.40 },
  { code: 'EUR', name: 'Euro', flag: '🇪🇺', buy: 301.20, sell: 305.80 },
  { code: 'SAR', name: 'Saudi Riyal', flag: '🇸🇦', buy: 74.15, sell: 74.90 },
  { code: 'AED', name: 'UAE Dirham', flag: '🇦🇪', buy: 75.80, sell: 76.55 },
];

export default function Home() {
  const [amount, setAmount] = useState(100);
  const [selectedCurrency, setSelectedCurrency] = useState(ratesData[0]);

  const result = (amount * selectedCurrency.sell).toLocaleString();

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* 🟢 Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg shadow-green-200">PCE</div>
            <span className="font-black text-xl tracking-tight text-green-900 uppercase">Pakistan Currency</span>
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
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-block bg-green-100 text-green-800 font-bold px-4 py-2 rounded-full mb-6 text-sm">🏆 No.1 Currency Exchange in Pakistan</div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight mb-6">Exchange with <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-900">Confidence</span></h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">Transparent open-market rates and secure transactions at 150+ branches. Your gateway to global finance.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-700 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-green-200 hover:bg-green-800 transition flex items-center justify-center gap-3">Check Today's Rates <ArrowRightLeft size={20} /></button>
              <button className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:border-green-700 hover:text-green-700 transition flex items-center justify-center gap-3"><Phone size={20} /> WhatsApp Us</button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
            <div className="aspect-square bg-gradient-to-br from-green-50 to-green-100 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white flex items-center justify-center">
               <p className="text-green-800/50 font-bold text-2xl text-center px-10">[ Main Banner Visual ]</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🟢 Live Rates & Converter Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
          
          {/* Left: Rates Table */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
            <h3 className="text-2xl font-black mb-6 flex items-center gap-3 text-green-900">
              <RefreshCcw size={28} className="text-green-600" /> Today's Live Rates
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-slate-400 text-sm uppercase tracking-wider border-b-2 border-slate-100">
                    <th className="pb-4 font-bold">Currency</th>
                    <th className="pb-4 font-bold text-green-700">Buying</th>
                    <th className="pb-4 font-bold text-red-600">Selling</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {ratesData.map((rate) => (
                    <tr key={rate.code} className="hover:bg-slate-50 transition-colors group">
                      <td className="py-5 flex items-center gap-4">
                        <span className="text-3xl shadow-sm rounded-full">{rate.flag}</span>
                        <div>
                          <p className="font-black text-slate-900 text-lg leading-none">{rate.code}</p>
                          <p className="text-sm text-slate-500 font-medium">{rate.name}</p>
                        </div>
                      </td>
                      <td className="py-5 font-black text-green-700 text-lg">{rate.buy.toFixed(2)}</td>
                      <td className="py-5 font-black text-red-600 text-lg">{rate.sell.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-sm text-slate-500 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <span className="font-bold text-slate-700">Note:</span> Open-market figures for reference — confirm live rates at your branch before transacting.
            </p>
          </motion.div>

          {/* Right: Modern Converter */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-green-800 to-green-950 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-700 rounded-full blur-3xl -mr-20 -mt-20 opacity-30"></div>
            
            <h3 className="text-3xl font-black mb-8 relative z-10 flex items-center gap-3">
              Instant Converter 💱
            </h3>
            
            <div className="space-y-6 relative z-10">
              <div className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-sm">
                <label className="text-sm font-bold uppercase tracking-widest text-green-200 block mb-3">You Give (Amount)</label>
                <input 
                  type="number" 
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-white text-slate-900 p-4 rounded-xl text-3xl font-black focus:outline-none focus:ring-4 focus:ring-green-400/50 transition shadow-inner"
                />
              </div>

              <div className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-sm">
                <label className="text-sm font-bold uppercase tracking-widest text-green-200 block mb-3">Select Currency</label>
                <select 
                  className="w-full bg-white text-slate-900 p-4 rounded-xl text-xl font-bold focus:outline-none focus:ring-4 focus:ring-green-400/50 transition cursor-pointer"
                  onChange={(e) => setSelectedCurrency(ratesData.find(r => r.code === e.target.value))}
                >
                  {ratesData.map(r => <option key={r.code} value={r.code}>{r.flag} {r.name} ({r.code})</option>)}
                </select>
              </div>

              <div className="pt-6 border-t border-green-700 mt-8 text-center">
                <p className="text-green-300 text-sm mb-2 uppercase font-bold tracking-widest">Estimated PKR Receiving</p>
                <h4 className="text-5xl sm:text-6xl font-black tracking-tighter text-white">Rs. {result}</h4>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
