import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRightLeft, Menu, RefreshCcw, ShieldCheck, Zap, Globe, CreditCard, Headphones, MapPin, Mail } from 'lucide-react';

const ratesData = [
  { code: 'USD', name: 'US Dollar', flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/120px-Flag_of_the_United_States.svg.png', buy: 278.50, sell: 281.20 },
  { code: 'GBP', name: 'UK Pound', flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/120px-Flag_of_the_United_Kingdom.svg.png', buy: 352.10, sell: 356.40 },
  { code: 'EUR', name: 'Euro', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/120px-Flag_of_Europe.svg.png', buy: 301.20, sell: 305.80 },
  { code: 'SAR', name: 'Saudi Riyal', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/120px-Flag_of_Saudi_Arabia.svg.png', buy: 74.15, sell: 74.90 },
  { code: 'AED', name: 'UAE Dirham', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/120px-Flag_of_the_United_Arab_Emirates.svg.png', buy: 75.80, sell: 76.55 },
];

// 🟢 Aap ke bataye hue exact filenames
const partnerLogos = [
  { name: "Western Union", url: "/logos/WU logo 2023 (1).png" },
  { name: "MoneyGram", url: "/logos/MoneyGram_Logo.png" },
  { name: "RIA", url: "/logos/Ria update logo (1).png" },
  { name: "IME", url: "/logos/IME Logo (1).png" },
  { name: "URemit", url: "/logos/Uremit Logo png.png" },
  { name: "Speed Remit", url: "/logos/Speed Remit Logo.png" },
  { name: "HelloPaisa", url: "/logos/HelloPaisa LOGO.jpg.jpeg" },
  { name: "ARY Exchange", url: "/logos/ARY Logo.png" },
  { name: "Aussie Forex", url: "/logos/Aussie Forex&Finance.png" }
];

export default function Home() {
  const [amount, setAmount] = useState(100);
  const [selectedCurrency, setSelectedCurrency] = useState(ratesData[0]);
  const result = (amount * selectedCurrency.sell).toLocaleString();

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* 🧭 Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white shadow-lg overflow-hidden border-2 border-green-700">
               {/* 🟢 Aap ka asli PCE logo */}
               <img src="/logos/Pakistan Currency Logo.png" alt="PCE Logo" className="w-full h-full object-contain p-1" />
            </div>
            <span className="font-black text-xl tracking-tight text-green-900 uppercase">Pakistan Currency</span>
          </a>
          <div className="hidden md:flex gap-8 font-bold text-sm uppercase text-slate-600">
            <a href="/" className="text-green-700 border-b-2 border-green-700 pb-1">Home</a>
            <a href="/about" className="hover:text-green-700 transition">About Us</a>
            <a href="/services" className="hover:text-green-700 transition">Services</a>
            <a href="/branches" className="hover:text-green-700 transition">Branches</a>
            <a href="/rates" className="hover:text-green-700 transition">Live Rates</a>
          </div>
          <button className="md:hidden text-green-800"><Menu size={28} /></button>
        </div>
      </nav>

      {/* 🚀 Hero Banner Section */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-32">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-block bg-green-100 text-green-800 font-bold px-4 py-2 rounded-full mb-6 text-sm">🏆 No.1 Currency Exchange in Pakistan</div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight mb-6">Exchange with <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-900">Confidence</span></h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">Transparent open-market rates and secure transactions at 150+ branches.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/rates" className="bg-green-700 text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:bg-green-800 transition flex items-center justify-center gap-3">Check Today's Rates <ArrowRightLeft size={20} /></a>
              <button className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:border-green-700 hover:text-green-700 transition flex items-center justify-center gap-3"><Phone size={20} /> WhatsApp Us</button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="aspect-square bg-gradient-to-br from-green-50 to-green-100 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
               {/* 🟢 Banner image path */}
               <img src="/logos/banner.jpg" alt="PCE Banner" className="w-full h-full object-cover" onError={(e) => {e.target.src = "https://images.unsplash.com/photo-1580519542036-ed47f3e42214?auto=format&fit=crop&w=800&q=80"}} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🤝 Valued Partners Ticker */}
      <section className="py-12 bg-slate-100 overflow-hidden border-t border-slate-200">
        <div className="container mx-auto px-6 mb-8 text-center">
          <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">🤝 Our Valued Partners</p>
        </div>
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ ease: "linear", duration: 20, repeat: Infinity }} className="flex items-center gap-16 pr-16">
            {[...partnerLogos, ...partnerLogos].map((partner, index) => (
              <div key={index} className="px-8 py-4 flex items-center justify-center w-48 h-24 bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                <img 
                  src={partner.url} 
                  alt={partner.name} 
                  className="w-full h-full object-contain opacity-90 hover:opacity-100 transition" 
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }} 
                />
                <span style={{display: 'none'}} className="text-slate-800 font-black text-xl tracking-wider">{partner.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 🌐 Footer Section */}
      <footer className="bg-slate-950 text-slate-300 py-16 text-sm border-t-4 border-green-700">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden border border-green-700">
                 {/* 🟢 Footer mein asli PCE logo */}
                 <img src="/logos/Pakistan Currency Logo.png" alt="PCE Logo" className="w-full h-full object-contain p-1" />
              </div>
              <span className="font-black text-xl tracking-tight text-white uppercase">Pakistan Currency</span>
            </div>
            <p className="leading-relaxed opacity-80">Pakistan's most trusted currency exchange network, providing secure and fast financial solutions.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 opacity-80 font-medium">
              <li><a href="/about" className="hover:text-green-400 transition">About Us</a></li>
              <li><a href="/branches" className="hover:text-green-400 transition">Branch Locator</a></li>
              <li><a href="/services" className="hover:text-green-400 transition">Our Services</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Support</h4>
            <ul className="space-y-3 opacity-80 font-medium">
              <li><a href="/rates" className="hover:text-green-400 transition">Live Exchange Rates</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4 opacity-80 font-medium">
              <li className="flex items-start gap-3"><MapPin size={20} className="text-green-500 shrink-0 mt-0.5" /><span>Head Office, Karachi, Pakistan</span></li>
              <li className="flex items-center gap-3"><Phone size={20} className="text-green-500 shrink-0" /><span>UAN: 111-XXX-XXX</span></li>
              <li className="flex items-center gap-3"><Mail size={20} className="text-green-500 shrink-0" /><span>info@pce.com.pk</span></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
