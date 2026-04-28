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

// 🟢 Services Data with Actual Logos
const servicesData = [
  { title: "Western Union", desc: "Send and receive money globally with speed and security.", logo: "/WU logo 2023 (1).png" },
  { title: "MoneyGram", desc: "Quick transfers built around speed and security for your family.", logo: "/MoneyGram_Logo.png" },
  { title: "RIA Money Transfer", desc: "Receive money from abroad with broad global coverage.", logo: "/Ria update logo (1).png" },
  { title: "Telegraphic Transfer", desc: "Secure way to send funds to an overseas bank account.", icon: <CreditCard size={40} className="text-green-600" /> },
];

const reasonsData = [
  { title: "Safe & Secure", desc: "State-of-the-art security for every transaction you make.", icon: <ShieldCheck className="text-green-600" size={32} /> },
  { title: "Fast Processing", desc: "Swift remittance and exchange services without delays.", icon: <Zap className="text-green-600" size={32} /> },
  { title: "Global Reach", desc: "Connected with top global financial partners worldwide.", icon: <Globe className="text-green-600" size={32} /> },
  { title: "24/7 Support", desc: "Dedicated customer care team for your peace of mind.", icon: <Headphones className="text-green-600" size={32} /> }
];

const statsData = [
  { label: "Years' Expertise", value: "25+" },
  { label: "Branches in Pakistan", value: "150+" },
  { label: "Trusted Customers", value: "10M+" }
];

const partnerLogos = [
  { name: "Western Union", url: "/WU logo 2023 (1).png" },
  { name: "MoneyGram", url: "/MoneyGram_Logo.png" },
  { name: "RIA", url: "/Ria update logo (1).png" },
  { name: "IME", url: "/IME Logo (1).png" },
  { name: "URemit", url: "/Uremit Logo png.png" },
  { name: "Speed Remit", url: "/Speed Remit Logo.png" },
  { name: "HelloPaisa", url: "/HelloPaisa LOGO.jpg.jpeg" },
  { name: "ARY Exchange", url: "/ARY Logo.png" },
  { name: "Aussie Forex", url: "/Aussie Forex&Finance.png" }
];

export default function Home() {
  const [amount, setAmount] = useState(100);
  const [selectedCurrency, setSelectedCurrency] = useState(ratesData[0]);
  const result = (amount * selectedCurrency.sell).toLocaleString();

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* 🧭 Navigation Bar - Fixed Logo to match Reference */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="/" className="flex items-center">
             <img src="/Pakistan Currency Logo.png" alt="PCE Logo" className="h-14 sm:h-16 w-auto object-contain" />
          </a>
          <div className="hidden md:flex gap-8 font-bold text-sm uppercase text-slate-700">
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
            <div className="inline-block bg-green-50 text-green-800 font-bold px-4 py-2 rounded-full mb-6 text-sm border border-green-100">🏆 No.1 Currency Exchange in Pakistan</div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight mb-6">Exchange with <span className="text-green-700">Confidence</span></h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">Transparent open-market rates and secure transactions at 150+ branches.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/rates" className="bg-green-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-green-800 transition flex items-center justify-center gap-3">Check Today's Rates <ArrowRightLeft size={20} /></a>
              <button className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:border-green-700 hover:text-green-700 transition flex items-center justify-center gap-3"><Phone size={20} /> WhatsApp Us</button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
            <div className="aspect-square bg-gradient-to-br from-green-50 to-green-100 rounded-[3rem] overflow-hidden shadow-xl border-4 border-white">
               <img src="https://images.unsplash.com/photo-1580519542036-ed47f3e42214?auto=format&fit=crop&w=800&q=80" alt="Banner" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 💱 Live Rates & Converter Section (RESTORED) */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
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

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-green-800 to-green-950 rounded-3xl p-10 text-white shadow-xl relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-700 rounded-full blur-3xl -mr-20 -mt-20 opacity-30"></div>
            <h3 className="text-3xl font-black mb-8 relative z-10 flex items-center gap-3">Instant Converter</h3>
            <div className="space-y-6 relative z-10">
              <div className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-sm">
                <label className="text-sm font-bold uppercase tracking-widest text-green-200 block mb-3">You Give (Amount)</label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full bg-white text-slate-900 p-4 rounded-xl text-3xl font-black focus:outline-none focus:ring-4 focus:ring-green-400/50 transition shadow-inner" />
              </div>
              <div className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <img src={selectedCurrency.flag} alt="Selected Flag" className="w-8 h-5 rounded-sm object-cover border border-white/30" />
                  <label className="text-sm font-bold uppercase tracking-widest text-green-200 block">Select Currency</label>
                </div>
                <select className="w-full bg-white text-slate-900 p-4 rounded-xl text-xl font-bold focus:outline-none focus:ring-4 focus:ring-green-400/50 transition cursor-pointer" onChange={(e) => setSelectedCurrency(ratesData.find(r => r.code === e.target.value))}>
                  {ratesData.map(r => <option key={r.code} value={r.code}>{r.name} ({r.code})</option>)}
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

      {/* 📊 Stats Counter Section (RESTORED) */}
      <section className="py-20 bg-green-900 text-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {statsData.map((stat, index) => (
              <motion.div key={index} initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: index * 0.2 }} viewport={{ once: true }} className="p-8 rounded-3xl bg-green-800/50 border border-green-700/50 backdrop-blur-sm">
                <h3 className="text-6xl font-black mb-2 text-white tracking-tighter">{stat.value}</h3>
                <p className="text-green-300 font-bold uppercase tracking-widest text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 💼 Our Services Section (WITH ACTUAL LOGOS NOW) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">🌟 Our Premium Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Providing fast, secure, and reliable financial solutions.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesData.map((service, index) => (
              <motion.a href="/services" key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className="bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:shadow-xl hover:shadow-green-100 transition duration-300 group block">
                {/* 🟢 Yahan Asli Logo Dikhaya Hai */}
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition p-3 border border-slate-100">
                  {service.logo ? (
                    <img src={service.logo} alt={service.title} className="w-full h-full object-contain" />
                  ) : (
                    service.icon
                  )}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{service.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* 🛡️ Why Choose Us Section (RESTORED) */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">🛡️ Why Choose Us?</h2>
            <div className="h-1 w-20 bg-green-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasonsData.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 border border-slate-100 group">
                <div className="mb-6 bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🤝 Valued Partners Ticker */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 mb-8 text-center">
          <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">🤝 Our Valued Partners</p>
        </div>
        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ ease: "linear", duration: 20, repeat: Infinity }} className="flex items-center gap-16 pr-16">
            {[...partnerLogos, ...partnerLogos].map((partner, index) => (
              <div key={index} className="px-8 py-4 flex items-center justify-center w-48 h-24 bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                <img 
                  src={partner.url} 
                  alt={partner.name} 
                  className="w-full h-full object-contain opacity-90 hover:opacity-100 transition grayscale hover:grayscale-0" 
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} 
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
            <div className="flex items-center mb-6">
              <img src="/Pakistan Currency Logo.png" alt="PCE Logo" className="h-12 w-auto object-contain bg-white rounded-lg p-1" />
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
