import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCcw } from 'lucide-react';

const ratesData = [
  { code: 'USD', name: 'US Dollar', flag: '🇺🇸', buy: 278.50, sell: 281.20 },
  { code: 'GBP', name: 'UK Pound', flag: '🇬🇧', buy: 352.10, sell: 356.40 },
  { code: 'EUR', name: 'Euro', flag: '🇪🇺', buy: 301.20, sell: 305.80 },
  { code: 'SAR', name: 'Saudi Riyal', flag: '🇸🇦', buy: 74.15, sell: 74.90 },
  { code: 'AED', name: 'UAE Dirham', flag: '🇦🇪', buy: 75.80, sell: 76.55 },
];

export default function RatesAndConverter() {
  const [amount, setAmount] = useState(1);
  const [selectedCurrency, setSelectedCurrency] = useState(ratesData[0]);

  const result = (amount * selectedCurrency.sell).toLocaleString();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
        
        {/* Left: Rates Table */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-green-900">
            <RefreshCcw size={24} className="text-green-600" /> Today's Live Rates
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-slate-400 text-sm uppercase tracking-wider border-b border-slate-200">
                  <th className="pb-4 font-semibold">Currency</th>
                  <th className="pb-4 font-semibold">Buying</th>
                  <th className="pb-4 font-semibold">Selling</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {ratesData.map((rate) => (
                  <tr key={rate.code} className="hover:bg-white transition-all group">
                    <td className="py-4 flex items-center gap-3">
                      <span className="text-2xl">{rate.flag}</span>
                      <div>
                        <p className="font-bold text-slate-900 leading-none">{rate.code}</p>
                        <p className="text-xs text-slate-500">{rate.name}</p>
                      </div>
                    </td>
                    <td className="py-4 font-bold text-green-600 tracking-tight">{rate.buy.toFixed(2)}</td>
                    <td className="py-4 font-bold text-red-600 tracking-tight">{rate.sell.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-[10px] text-slate-400 italic">
            Open-market figures for reference — confirm live rates at your branch before transacting.
          </p>
        </motion.div>

        {/* Right: Modern Converter */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-green-900 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden"
        >
          {/* Design Element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-800 rounded-full -mr-16 -mt-16 opacity-50"></div>
          
          <h3 className="text-2xl font-bold mb-8 relative z-10">Instant Currency Converter</h3>
          
          <div className="space-y-6 relative z-10">
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-green-300 block mb-2">You Give (Amount)</label>
              <input 
                type="number" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-green-800 border border-green-700 p-5 rounded-2xl text-3xl font-black focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-green-300 block mb-2">Select Currency</label>
              <select 
                className="w-full bg-green-800 border border-green-700 p-5 rounded-2xl text-xl font-bold focus:outline-none transition appearance-none"
                onChange={(e) => setSelectedCurrency(ratesData.find(r => r.code === e.target.value))}
              >
                {ratesData.map(r => <option key={r.code} value={r.code}>{r.flag} {r.name} ({r.code})</option>)}
              </select>
            </div>

            <div className="pt-6 border-t border-green-800 mt-8">
              <p className="text-green-300 text-sm mb-1 uppercase font-bold">Estimated PKR Receiving</p>
              <h4 className="text-6xl font-black tracking-tighter">Rs. {result}</h4>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
