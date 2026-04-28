import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRightLeft, Menu, RefreshCcw, ShieldCheck, Zap, Globe, CreditCard, Headphones, MapPin, Mail, Building, LineChart, ClipboardList, Wallet, HelpCircle, ChevronRight } from 'lucide-react';

const ratesData = [
  { code: 'USD', name: 'US Dollar', flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/120px-Flag_of_the_United_States.svg.png', buy: 278.50, sell: 281.20 },
  { code: 'GBP', name: 'UK Pound', flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/120px-Flag_of_the_United_Kingdom.svg.png', buy: 352.10, sell: 356.40 },
  { code: 'EUR', name: 'Euro', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/120px-Flag_of_Europe.svg.png', buy: 301.20, sell: 305.80 },
  { code: 'SAR', name: 'Saudi Riyal', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/120px-Flag_of_Saudi_Arabia.svg.png', buy: 74.15, sell: 74.90 },
  { code: 'AED', name: 'UAE Dirham', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/120px-Flag_of_the_United_Arab_Emirates.svg.png', buy: 75.80, sell: 76.55 },
];

const newServicesData = [
  { title: "Visit a branch", desc: "Buy and sell currency, collect remittance, and get in-person help at 150+ locations across Pakistan.", linkText: "Locate branches", linkUrl: "/branches", icon: <Building size={32} /> },
  { title: "Live exchange rates", desc: "Check today's open-market buy and sell figures for USD, SAR, AED, EUR, GBP and more against PKR.", linkText: "View rates", linkUrl: "/rates", icon: <LineChart size={32} /> },
  { title: "What we offer", desc: "Explore currency exchange, remittance, telegraphic transfers, and other solutions we provide.", linkText: "Browse services", linkUrl: "/services", icon: <ClipboardList size={32} /> },
  { title: "Home remittance", desc: "Receive funds from abroad safely through our branch network with clear guidance at every step.", linkText: "Learn more", linkUrl: "/services/home-remittance", icon: <Wallet size={32} /> },
  { title: "Help & contact", desc: "Questions about rates, paperwork, or transfers? Reach our team by phone, email, or WhatsApp.", linkText: "Contact us", linkUrl: "/contact", icon: <HelpCircle size={32} /> }
];

const reasonsData = [
  { title: "Safe & Secure", desc: "State-of-the-art security for every transaction you make.", icon: <ShieldCheck size={32} /> },
  { title: "Fast Processing", desc: "Swift remittance and exchange services without delays.", icon: <Zap size={32} /> },
  { title: "Global Reach", desc: "Connected with top global financial partners worldwide.", icon: <Globe size={32} /> },
  { title: "24/7 Support", desc: "Dedicated customer care team for your peace of mind.", icon: <Headphones size={32} /> }
];

const statsData = [
  { label: "Years' Expertise", value: "25+" },
  { label: "Branches in Pakistan", value: "150+" },
  { label: "Trusted Customers", value: "10M+" }
];

// Asli Logos aur unke pages ke links
const partnerLogos = [
  { name: "Western Union", url: "/WU logo 2023 (1).png", linkUrl: "/services/western-union" },
  { name: "MoneyGram", url: "/MoneyGram_Logo.png", linkUrl: "/services/moneygram" },
  { name: "RIA", url: "/Ria update logo (1).png", linkUrl: "/services/ria" },
  { name: "IME", url: "/IME Logo (1).png", linkUrl: "/services/ime" },
  { name: "URemit", url: "/Uremit Logo png.png", linkUrl: "/services/uremit" },
  { name: "Speed Remit", url: "/Speed Remit Logo.png", linkUrl: "/services/speed-remit" },
  { name: "HelloPaisa", url: "/HelloPaisa LOGO.jpg.jpeg", linkUrl: "/services/hellopaisa" },
  { name: "ARY Exchange", url: "/ARY Logo.png", linkUrl: "/services/ary-exchange" },
  { name: "Aussie Forex", url: "/Aussie Forex&Finance.png", linkUrl: "/services/aussie-forex" }
];

export default function Home() {
  const [amount, setAmount] = useState(100);
  const [selectedCurrency, setSelectedCurrency] = useState(ratesData[0]);
  const result = (amount * selectedCurrency.sell).toLocaleString();

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* 🧭 Navigation Bar - Centered Content */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm flex flex-col items-center">
        <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 w-full">
          <a href="/" className="flex items-center">
             <img src="/Pakistan Currency Logo.png" alt="PCE Logo" className="h-14 sm:h-16 w-auto object-contain" />
          </a>
          <div className="hidden md:flex gap-8 justify-center items-center font-bold text-sm uppercase text-slate-700">
            <a href="/" className="text-green-700 border-b-2 border-green-700 pb-1">Home</a>
            <a href="/about" className="hover:text-green-700 transition">About Us</a>
            <a href="/services" className="hover:text-green-700 transition">Services</a>
            <a href="/branches" className="hover:text-green-700 transition">Branches</a>
            <a href="/rates" className="hover:text-green-700 transition">Live Rates</a>
          </div>
          <button className="md:hidden text-green-800"><Menu size={28} /></button>
        </div>
      </nav>

      {/* 🚀 Hero Banner Section - Centered */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-32">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center text-center lg:text-left">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center lg:items-start">
            <div className="inline-block bg-green-50 text-green-800 font-bold px-4 py-2 rounded-full mb-6 text-sm border border-green-100">🏆 No.1 Currency Exchange in Pakistan</div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight mb-6">Exchange with <span className="text-green-700">Confidence</span></h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">Transparent open-market rates and secure transactions at 150+ branches.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="/rates" className="bg-green-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-green-800 transition flex items-center justify-center gap-3">Check Today's Rates <ArrowRightLeft size={20} /></a>
              <button className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:border-green-700 hover:text-green-700 transition flex items-center justify-center gap-3"><Phone size={20} /> WhatsApp Us</button>
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex justify-center">
            <div className="aspect-square w-full max-w-md bg-gradient-to-br from-green-700 to-green-900 rounded-[3rem] overflow-hidden shadow-xl border-4 border-white flex items-center justify-center relative">
               {/* 🟢 Fallback Text agar image na ho toh khubsurat design aayega */}
               <div className="absolute text-center text-white p-8">
                  <h2 className="text-3xl font-black mb-2">Premium Exchange</h2>
                  <p className="text-green-200">Since 25+ Years</p>
               </div>
               {/* 🟢 Asli banner /banner.jpg upload hone par khud ajayega */}
               <img 
                 src="/banner.jpg" 
                 alt="PCE Banner" 
                 className="w-full h-full object-cover absolute inset-0 z-10" 
                 onError={(e) => { e.target.style.display = 'none'; }} 
               />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 💱 Live Rates & Converter Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col items-center">
            <h3 className="text-2xl font-black mb-6 flex items-center gap-3 text-green-900">
              <RefreshCcw size={28} className="text-green-600" /> Today's Live Rates
            </h3>
            <div className="overflow-x-auto w-full">
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
                        <img src={rate.flag} alt={rate.code} className="w-10 h-7 object-cover rounded-sm shadow-sm border border-slate-200" />
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
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-green-800 to-green-950 rounded-3xl p-10 text-white shadow-xl relative overflow-hidden flex flex-col items-center text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-700 rounded-full blur-3xl -mr-20 -mt-20 opacity-30"></div>
            <h3 className="text-3xl font-black mb-8 relative z-10 flex items-center gap-3">Instant Converter</h3>
            <div className="space-y-6 relative z-10 w-full">
              <div className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-sm w-full">
                <label className="text-sm font-bold uppercase tracking-widest text-green-200 block mb-3">You Give (Amount)</label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full bg-white text-slate-900 p-4 rounded-xl text-3xl font-black focus:outline-none focus:ring-4 focus:ring-green-400/50 transition shadow-inner text-center" />
              </div>
              <div className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-sm w-full">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <img src={selectedCurrency.flag} alt="Selected Flag" className="w-8 h-5 rounded-sm object-cover border border-white/30" />
                  <label className="text-sm font-bold uppercase tracking-widest text-green-200 block">Select Currency</label>
                </div>
                <select className="w-full bg-white text-slate-900 p-4 rounded-xl text-xl font-bold focus:outline-none focus:ring-4 focus:ring-green-400/50 transition cursor-pointer text-center" onChange={(e) => setSelectedCurrency(ratesData.find(r => r.code === e.target.value))}>
                  {ratesData.map(r => <option key={r.code} value={r.code}>{r.name} ({r.code})</option>)}
                </select>
              </div>
              <div className="pt-6 border-t border-green-700 mt-8">
                <p className="text-green-300 text-sm mb-2 uppercase font-bold tracking-widest">Estimated PKR Receiving</p>
                <h4 className="text-5xl sm:text-6xl font-black tracking-tighter text-white">Rs. {result}</h4>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 📊 Stats Counter Section - Centered */}
      <section className="py-20 bg-green-900 text-white overflow-hidden relative flex justify-center">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 text-center w-full">
            {statsData.map((stat, index) => (
              <motion.div key={index} initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: index * 0.2 }} viewport={{ once: true }} className="p-8 rounded-3xl bg-green-800/50 border border-green-700/50 backdrop-blur-sm flex flex-col items-center">
                <h3 className="text-6xl font-black mb-2 text-white tracking-tighter">{stat.value}</h3>
                <p className="text-green-300 font-bold uppercase tracking-widest text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 💼 Our Services Section (Nayi tasveer wala design, Centered, Hover effect) */}
      <section className="py-24 bg-white flex justify-center text-center">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Our services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Currency exchange, live rates, remittance, and support—online and at branches across Pakistan.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 w-full">
            {newServicesData.map((service, index) => (
              <motion.a 
                href={service.linkUrl} 
                key={index} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ delay: index * 0.1 }} 
                viewport={{ once: true }} 
                className="bg-white border border-slate-200 p-8 rounded-2xl hover:shadow-xl hover:border-green-200 transition duration-300 flex flex-col items-center justify-between text-center w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] group"
              >
                {/* 🟢 Beautiful Hover: Icon Box Green Ho Jayega */}
                <div className="w-20 h-20 bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-green-700 shadow-sm transition-all duration-300 group-hover:bg-green-700 group-hover:text-white group-hover:scale-110 group-hover:shadow-md">
                  {service.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm mb-6">{service.desc}</p>
                <div className="text-green-700 font-bold flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                  {service.linkText} <ChevronRight size={18} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* 🛡️ Why Choose Us Section - Centered, Hover Effect */}
      <section className="py-24 bg-slate-50 border-t border-slate-200 flex justify-center text-center">
        <div className="container mx-auto px-6">
          <div className="mb-16 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">🛡️ Why Choose Us?</h2>
            <div className="h-1 w-20 bg-green-600 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {reasonsData.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 border border-slate-100 group flex flex-col items-center text-center">
                <div className="mb-6 bg-green-50 w-20 h-20 rounded-2xl flex items-center justify-center text-green-700 transition-all duration-300 group-hover:bg-green-700 group-hover:text-white group-hover:shadow-md">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🤝 Valued Partners Ticker - CLICKABLE LINKS */}
      <section className="py-12 bg-white border-t border-slate-100 flex justify-center">
        <div className="container mx-auto px-6 mb-8 text-center">
          <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">🤝 Our Valued Partners</p>
        </div>
        <div className="flex whitespace-nowrap overflow-hidden w-full">
          <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ ease: "linear", duration: 20, repeat: Infinity }} className="flex items-center gap-16 pr-16">
            {[...partnerLogos, ...partnerLogos].map((partner, index) => (
              /* 🟢 Yeh 'a' tag hai yani is par CLICK kar ke aglay page par ja sakte hain */
              <a href={partner.linkUrl} key={index} className="px-8 py-4 flex flex-col items-center justify-center w-48 h-24 bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden group hover:shadow-md transition-all hover:border-green-300">
                <img 
                  src={partner.url} 
                  alt={partner.name} 
                  className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-all grayscale group-hover:grayscale-0 group-hover:scale-105" 
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} 
                />
                <span style={{display: 'none'}} className="text-slate-800 font-black text-lg tracking-wider text-center">{partner.name}</span>
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 🌐 Footer Section - Centered Properly */}
      <footer className="bg-slate-950 text-slate-300 py-16 text-sm border-t-4 border-green-700">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-6">
              <img src="/Pakistan Currency Logo.png" alt="PCE Logo" className="h-12 w-auto object-contain bg-white rounded-lg p-1" />
            </div>
            <p className="leading-relaxed opacity-80">Pakistan's most trusted currency exchange network, providing secure and fast financial solutions.</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 font-medium">
              <li><a href="/about" className="hover:text-green-400 transition">About Us</a></li>
              <li><a href="/branches" className="hover:text-green-400 transition">Branch Locator</a></li>
              <li><a href="/services" className="hover:text-green-400 transition">Our Services</a></li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Support</h4>
            <ul className="space-y-3 font-medium">
              <li><a href="/rates" className="hover:text-green-400 transition">Live Exchange Rates</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4 font-medium">
              <li className="flex items-center justify-center md:justify-start gap-3 w-full"><MapPin size={20} className="text-green-500 shrink-0" /><span>Head Office, Karachi, Pakistan</span></li>
              <li className="flex items-center justify-center md:justify-start gap-3 w-full"><Phone size={20} className="text-green-500 shrink-0" /><span>UAN: 111-XXX-XXX</span></li>
              <li className="flex items-center justify-center md:justify-start gap-3 w-full"><Mail size={20} className="text-green-500 shrink-0" /><span>info@pce.com.pk</span></li>
            </ul>
          </div>
        </div>
         <div className="container mx-auto px-6 pt-8 border-t border-slate-800 text-center opacity-60">
          <p>© 2026 Pakistan Currency Exchange. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
