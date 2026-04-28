import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Phone, ArrowRightLeft, Menu, RefreshCcw, ShieldCheck, Zap, Globe, CreditCard, Headphones, MapPin, Mail, Building, LineChart, ClipboardList, Wallet, HelpCircle, ChevronRight, ChevronDown, ChevronUp, Facebook, Instagram, MessageCircle, Plus, Minus, ArrowRight } from 'lucide-react';

const ratesData = [
  { code: 'USD', name: 'US Dollar', flag: 'https://flagcdn.com/w80/us.png', buy: 278.50, sell: 281.20 },
  { code: 'GBP', name: 'UK Pound Sterling', flag: 'https://flagcdn.com/w80/gb.png', buy: 352.10, sell: 356.40 },
  { code: 'EUR', name: 'Euro', flag: 'https://flagcdn.com/w80/eu.png', buy: 301.20, sell: 305.80 },
  { code: 'SAR', name: 'Saudi Riyal', flag: 'https://flagcdn.com/w80/sa.png', buy: 74.15, sell: 74.90 },
  { code: 'AED', name: 'UAE Dirham', flag: 'https://flagcdn.com/w80/ae.png', buy: 75.80, sell: 76.55 },
  { code: 'CAD', name: 'Canadian Dollar', flag: 'https://flagcdn.com/w80/ca.png', buy: 205.10, sell: 207.50 },
  { code: 'AUD', name: 'Australian Dollar', flag: 'https://flagcdn.com/w80/au.png', buy: 181.50, sell: 183.80 },
  { code: 'JPY', name: 'Japanese Yen', flag: 'https://flagcdn.com/w80/jp.png', buy: 1.80, sell: 1.85 },
  { code: 'CNY', name: 'Chinese Yuan', flag: 'https://flagcdn.com/w80/cn.png', buy: 38.40, sell: 39.10 }
];

const newServicesData = [
  { title: "Visit a branch", desc: "Buy and sell currency, collect remittance, and get in-person help at 150+ locations across Pakistan.", linkText: "Locate branches", linkUrl: "/branches", icon: <Building size={32} /> },
  { title: "Live exchange rates", desc: "Check today's open-market buy and sell figures for USD, SAR, AED, EUR, GBP and more against PKR.", linkText: "View rates", linkUrl: "/rates", icon: <LineChart size={32} /> },
  { title: "What we offer", desc: "Explore currency exchange, remittance, telegraphic transfers, and other solutions we provide.", linkText: "Browse services", linkUrl: "/services", icon: <ClipboardList size={32} /> },
  { title: "Home remittance", desc: "Receive funds from abroad safely through our branch network with clear guidance at every step.", linkText: "Learn more", linkUrl: "/services/home-remittance", icon: <Wallet size={32} /> },
  { title: "Help & contact", desc: "Questions about rates, paperwork, or transfers? Reach our team by phone, email, or WhatsApp.", linkText: "Contact us", linkUrl: "/contact", icon: <HelpCircle size={32} /> }
];

const faqsData = [
  { q: "How can I check today's exchange rates?", a: "You can check today's latest buying and selling rates on our website's live rates section or by visiting any Pakistan Currency Exchange branch across the country." },
  { q: "Where can I exchange foreign currency in Pakistan?", a: "Pakistan Currency Exchange has a massive network of over 150 branches across Pakistan. Simply visit our nearest branch with your valid identification." },
  { q: "Does PCE offer corporate exchange services?", a: "Yes, we provide specialized foreign exchange and remittance solutions for businesses and corporate clients with competitive rates and dedicated support." },
  { q: "Can I convert PKR to foreign currency online?", a: "Currently, currency conversion is performed in-person at our branches to comply with SBP regulations, but you can check rates and book transactions via phone." }
];

const reasonsData = [
  { title: "Safe & Secure", desc: "State-of-the-art security for every transaction you make.", icon: <ShieldCheck size={32} /> },
  { title: "Fast Processing", desc: "Swift remittance and exchange services without delays.", icon: <Zap size={32} /> },
  { title: "Global Reach", desc: "Connected with top global financial partners worldwide.", icon: <Globe size={32} /> },
  { title: "24/7 Support", desc: "Dedicated customer care team for your peace of mind.", icon: <Headphones size={32} /> }
];

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

const blogData = [
  { date: "Oct 04, 2026", title: "Navigating the Foreign Exchange Market", desc: "Expert tips on navigating the complexities of foreign exchange and making smart decisions.", img: "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?auto=format&fit=crop&w=800&q=80", link: "/blogs/foreign-exchange-guide" },
  { date: "Sep 28, 2026", title: "Top 5 Reasons to Choose Open Market", desc: "Understand why official open market channels are best for your family's remittance.", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80", link: "/blogs/remittance-reasons" },
  { date: "Sep 15, 2026", title: "Future of Digital Currency", desc: "Discover how technology is reshaping global money transfers across borders.", img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80", link: "/blogs/digital-currency-future" }
];

function AnimatedCounter({ value, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useSpring(count, { stiffness: 50, damping: 20 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      const numericValue = parseInt(value.replace(/\D/g, ''));
      count.set(numericValue);
    }
  }, [inView, count, value]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [rounded]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
}

function FaqItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full py-5 flex items-center justify-between text-left transition-colors group">
        <span className="text-lg font-bold text-green-950 group-hover:text-green-700">{faq.q}</span>
        {isOpen ? <Minus size={20} className="text-green-600" /> : <Plus size={20} className="text-slate-400 group-hover:text-green-600" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <p className="pb-6 text-slate-600 leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  const [amount, setAmount] = useState(100);
  const [selectedCurrency, setSelectedCurrency] = useState(ratesData[0]);
  const [showAllRates, setShowAllRates] = useState(false);
  
  const displayedRates = showAllRates ? ratesData : ratesData.slice(0, 5);
  const result = (amount * selectedCurrency.sell).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* 1. Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm flex flex-col items-center">
        <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 w-full">
          <a href="/"><img src="/Pakistan Currency Logo.png" alt="PCE Logo" className="h-14 sm:h-16 w-auto object-contain" /></a>
          <div className="hidden md:flex gap-8 items-center font-bold text-sm uppercase text-slate-700">
            <a href="/" className="text-green-700 border-b-2 border-green-700 pb-1">Home</a>
            <a href="/about" className="hover:text-green-700 transition">About Us</a>
            <a href="/services" className="hover:text-green-700 transition">Services</a>
            <a href="/branches" className="hover:text-green-700 transition">Branches</a>
            <a href="/rates" className="hover:text-green-700 transition">Live Rates</a>
          </div>
          <button className="md:hidden text-green-800"><Menu size={28} /></button>
        </div>
      </nav>

      {/* 2. Hero */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-32">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-block bg-green-50 text-green-800 font-bold px-4 py-2 rounded-full mb-6 text-sm border border-green-100 uppercase tracking-wide">Cat-A Exchange Company</div>
            <h1 className="text-5xl lg:text-7xl font-black text-green-950 leading-tight mb-6">Exchange with <span className="text-green-700">Confidence</span></h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">Over 25 years of trust, offering transparent open-market rates at 150+ branches nationwide.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="/rates" className="bg-green-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-green-800 transition flex items-center justify-center gap-3">Check Today's Rates <ArrowRightLeft size={20} /></a>
              <button className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:border-green-700 hover:text-green-700 transition flex items-center justify-center gap-3"><Phone size={20} /> WhatsApp Us</button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex justify-center w-full">
            <div className="w-full max-w-2xl bg-white rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white inline-block">
               <img src="/Banner.png" alt="PCE Banner" className="w-full h-auto block" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Rates & Converter */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200 flex flex-col items-center">
            <div className="p-8 w-full bg-white flex items-center justify-center gap-3"><RefreshCcw size={28} className="text-green-600" /><h3 className="text-3xl font-black text-green-950 text-center">Today's Live Rates</h3></div>
            <div className="flex-grow w-full border-t border-b border-slate-100">
              <table className="w-full text-left border-collapse">
                <thead className="sticky top-0 z-10"><tr className="bg-green-900 text-white text-sm uppercase tracking-wider"><th className="py-4 px-6 font-bold">Currency</th><th className="py-4 px-6 font-bold text-green-300">Buying</th><th className="py-4 px-6 font-bold text-red-300">Selling</th></tr></thead>
                <tbody className="divide-y divide-slate-100">
                  {displayedRates.map((rate) => (
                    <tr key={rate.code} className="transition-colors group even:bg-green-50 odd:bg-white">
                      <td className="py-4 px-6 flex items-center gap-4"><img src={rate.flag} alt={rate.code} className="w-10 h-7 object-cover rounded-sm shadow-sm border border-slate-200" />
                      <div><p className="font-black text-green-950 text-lg leading-none">{rate.code}</p><p className="text-sm text-slate-500 font-medium">{rate.name}</p></div></td>
                      <td className="py-4 px-6 font-black text-green-700 text-lg">{rate.buy.toFixed(2)}</td><td className="py-4 px-6 font-black text-red-600 text-lg">{rate.sell.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button onClick={() => setShowAllRates(!showAllRates)} className="w-full py-4 bg-slate-50 hover:bg-green-700 hover:text-white text-green-800 font-bold flex items-center justify-center gap-2 transition-colors border-t border-slate-200">
              {showAllRates ? <>View Less Currencies <ChevronUp size={20} /></> : <>View All Currencies <ChevronDown size={20} /></>}
            </button>
          </motion.div>
          <div className="sticky top-24"><motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-green-800 to-green-950 rounded-3xl p-10 text-white shadow-xl relative overflow-hidden h-[620px] flex flex-col justify-center text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-700 rounded-full blur-3xl -mr-20 -mt-20 opacity-30"></div>
            <h3 className="text-3xl font-black mb-8 relative z-10 flex items-center justify-center gap-3">Instant Converter</h3>
            <div className="space-y-6 relative z-10 w-full flex-grow flex flex-col justify-center">
              <div className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-sm w-full"><label className="text-sm font-bold uppercase tracking-widest text-green-200 block mb-3">You Give (Amount)</label>
              <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full bg-white text-green-950 p-4 rounded-xl text-3xl font-black focus:outline-none text-center" /></div>
              <div className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-sm w-full"><div className="flex items-center justify-center gap-3 mb-3"><img src={selectedCurrency.flag} alt="Selected" className="w-8 h-5 rounded-sm" /><label className="text-sm font-bold uppercase tracking-widest text-green-200 block">Select Currency</label></div>
              <select className="w-full bg-white text-green-950 p-4 rounded-xl text-xl font-bold focus:outline-none cursor-pointer text-center" onChange={(e) => setSelectedCurrency(ratesData.find(r => r.code === e.target.value))}>
                {ratesData.map(r => <option key={r.code} value={r.code}>{r.name} ({r.code})</option>)}
              </select></div>
              <div className="pt-6 border-t border-green-700 mt-8 text-center"><p className="text-green-300 text-sm mb-2 uppercase font-bold tracking-widest">Estimated PKR Receiving</p><h4 className="text-5xl sm:text-6xl font-black tracking-tighter text-white">Rs. {result}</h4></div>
            </div></motion.div></div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16 flex flex-col items-center"><h2 className="text-4xl md:text-5xl font-black text-green-950 mb-4">Why Choose Us?</h2><div className="h-1 w-20 bg-green-600 rounded-full"></div></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">{reasonsData.map((item, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-slate-50 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all border border-slate-100 group flex flex-col items-center">
              <div className="mb-6 bg-white w-20 h-20 rounded-2xl flex items-center justify-center text-green-700 transition-all duration-300 group-hover:bg-green-700 group-hover:text-white border border-slate-100">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-green-950">{item.title}</h3><p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          ))}</div>
        </div>
      </section>

      {/* 5. Services */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6">
          <div className="mb-16 flex flex-col items-center"><h2 className="text-4xl md:text-5xl font-black text-green-950 mb-4">Our services</h2><div className="h-1 w-20 bg-green-600 mx-auto rounded-full mt-4"></div></div>
          <div className="flex flex-wrap justify-center gap-6 w-full">{newServicesData.map((service, index) => (
            <motion.a href={service.linkUrl} key={index} className="bg-white border border-slate-200 p-8 rounded-2xl hover:shadow-xl hover:border-green-200 transition duration-300 flex flex-col items-center justify-between text-center w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] group">
              <div className="w-20 h-20 bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-green-700 shadow-sm transition-all duration-300 group-hover:bg-green-700 group-hover:text-white group-hover:scale-110">{service.icon}</div>
              <h3 className="text-xl font-bold text-green-950 mb-3">{service.title}</h3><p className="text-slate-500 leading-relaxed text-sm mb-6">{service.desc}</p>
              <div className="text-green-700 font-bold flex items-center justify-center gap-1 group-hover:gap-2 transition-all">{service.linkText} <ChevronRight size={18} /></div>
            </motion.a>
          ))}</div>
        </div>
      </section>

      {/* 6. Partners (Placed below Services) */}
      <section className="py-16 bg-slate-50 border-t border-b border-slate-200 text-center">
        <div className="container mx-auto px-6 mb-12 flex flex-col items-center"><h2 className="text-4xl md:text-5xl font-black text-green-950 mb-4">Our Valued Partners</h2><div className="h-1 w-20 bg-green-600 rounded-full"></div></div>
        <div className="flex whitespace-nowrap overflow-hidden"><motion.div animate={{ x: ["0%", "-50%"] }} transition={{ ease: "linear", duration: 25, repeat: Infinity }} className="flex items-center gap-10 pr-10">
          {[...partnerLogos, ...partnerLogos].map((partner, index) => (
            <a href={partner.linkUrl} key={index} className="px-6 py-4 flex items-center justify-center w-48 h-24 bg-white rounded-xl shadow-sm border border-slate-100 group hover:shadow-md shrink-0 transition-all">
              <img src={partner.url} alt={partner.name} className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all" />
            </a>
          ))}
        </motion.div></div>
      </section>

      {/* 7. Stats Counter */}
      <section className="py-24 bg-green-900 text-white overflow-hidden relative text-center">
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center mb-16"><h2 className="text-4xl md:text-5xl font-black text-white mb-4">Pakistan's Most Trusted</h2><div className="h-1 w-20 bg-white rounded-full"></div></div>
        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="p-8 rounded-3xl bg-green-800/50 border border-green-700/50 shadow-xl">
            <h3 className="text-6xl font-black mb-2 text-white"><AnimatedCounter value="25" suffix="+" /></h3>
            <p className="text-green-300 font-bold uppercase tracking-widest text-sm">Years' Expertise</p>
          </div>
          <div className="p-8 rounded-3xl bg-green-800/50 border border-green-700/50 shadow-xl">
            <h3 className="text-6xl font-black mb-2 text-white"><AnimatedCounter value="150" suffix="+" /></h3>
            <p className="text-green-300 font-bold uppercase tracking-widest text-sm">Branches in Pakistan</p>
          </div>
          <div className="p-8 rounded-3xl bg-green-800/50 border border-green-700/50 shadow-xl">
            <h3 className="text-6xl font-black mb-2 text-white"><AnimatedCounter value="10" suffix="M+" /></h3>
            <p className="text-green-300 font-bold uppercase tracking-widest text-sm">Trusted Customers</p>
          </div>
        </div>
      </section>

      {/* 8. Blogs */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16 flex flex-col items-center"><h2 className="text-4xl md:text-5xl font-black text-green-950 mb-4">Blogs & News</h2><div className="h-1 w-20 bg-green-600 mx-auto rounded-full mt-4"></div></div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogData.map((blog, index) => (
              <motion.div key={index} className="bg-slate-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all border border-slate-100 flex flex-col group text-left">
                <div className="h-56 overflow-hidden relative border-b border-slate-100">
                  <img src={blog.img} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-green-600 font-bold text-sm mb-3 tracking-wider uppercase">{blog.date}</span>
                  <h3 className="text-xl font-bold text-green-950 mb-3 line-clamp-2">{blog.title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-6 flex-grow line-clamp-3 text-sm">{blog.desc}</p>
                  <a href={blog.link} className="inline-flex items-center gap-2 text-green-700 font-bold hover:text-green-800 transition-colors">Read more <ArrowRight size={18} /></a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQs */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl border border-slate-200 bg-white p-12 rounded-[2.5rem] shadow-xl">
          <div className="mb-16 flex flex-col items-center"><h2 className="text-4xl md:text-5xl font-black text-green-950 mb-4">Frequently Asked Questions</h2><div className="h-1 w-20 bg-green-600 mx-auto rounded-full mt-4"></div></div>
          <div className="">{faqsData.map((faq, index) => (<FaqItem key={index} faq={faq} />))}</div>
        </div>
      </section>

      {/* 10. Facebook Feed */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-black text-green-950 mb-4">Official Market Updates</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto lg:mx-0 rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">Stay updated with our latest daily open-market exchange rates directly from our official Facebook page.</p>
            <a href="https://www.facebook.com/pkcurrency/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg">Follow us on Facebook</a>
          </div>
          <div className="flex justify-center w-full">
            <div className="bg-slate-50 rounded-3xl shadow-xl border border-slate-200 overflow-hidden w-full max-w-[500px]">
              <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpkcurrency&tabs=timeline&width=500&height=650&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="500" height="650" style={{border:"none", overflow:"hidden", maxWidth: '100%'}} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" title="PCE Facebook Feed"></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Contact */}
      <section className="py-24 bg-green-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-800/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">Get in touch</h2>
          <div className="h-1 w-20 bg-white mx-auto rounded-full mt-4"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <a href="https://api.whatsapp.com/send?phone=923046668810" target="_blank" className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all group flex items-center justify-between text-white shadow-xl">
            <div className="flex items-center gap-5"><div className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center"><MessageCircle size={32} /></div><span className="text-xl font-bold">WhatsApp us</span></div>
            <ChevronRight size={24} />
          </a>
          <a href="/branches" className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all group flex items-center justify-between text-white shadow-xl">
            <div className="flex items-center gap-5"><div className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center"><MapPin size={32} /></div><span className="text-xl font-bold">Find branch</span></div>
            <ChevronRight size={24} />
          </a>
          <a href="/contact" className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all group flex items-center justify-between text-white shadow-xl">
            <div className="flex items-center gap-5"><div className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center"><Building size={32} /></div><span className="text-xl font-bold">Complaint</span></div>
            <ChevronRight size={24} />
          </a>
        </div>
      </section>

      {/* 12. Footer */}
      <footer className="bg-slate-950 text-slate-300 py-16 text-sm border-t-4 border-green-700">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <img src="/Pakistan Currency Logo.png" alt="PCE" className="h-12 w-auto bg-white rounded-lg p-1 mb-6" />
            <p className="leading-relaxed opacity-80 mb-6 text-center md:text-left">Pakistan's most trusted currency exchange network.</p>
            <div className="flex items-center gap-4">
              <a href="https://facebook.com/pkcurrency/" target="_blank" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition-all"><Facebook size={20} /></a>
              <a href="https://instagram.com/pakistancurrency" target="_blank" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition-all"><Instagram size={20} /></a>
            </div>
          </div>
          <div><h4 className="text-white font-bold mb-6 uppercase tracking-wider">Company</h4><ul className="space-y-3 font-medium"><li><a href="/about" className="hover:text-green-400">About Us</a></li><li><a href="/branches" className="hover:text-green-400">Branch Locator</a></li></ul></div>
          <div><h4 className="text-white font-bold mb-6 uppercase tracking-wider">Support</h4><ul className="space-y-3 font-medium"><li><a href="/rates" className="hover:text-green-400">Live Rates</a></li><li><a href="/contact" className="hover:text-green-400">Terms & Conditions</a></li></ul></div>
          <div><h4 className="text-white font-bold mb-6 uppercase tracking-wider">Contact Us</h4><ul className="space-y-4 font-medium">
            <li className="flex items-center justify-center md:justify-start gap-3"><MapPin size={20} className="text-green-500 shrink-0" /><span>Karachi, Pakistan</span></li>
            <li className="flex items-center justify-center md:justify-start gap-3"><Phone size={20} className="text-green-500 shrink-0" /><span>UAN: 0800-13537</span></li>
            <li className="flex items-center justify-center md:justify-start gap-3"><MessageCircle size={20} className="text-green-500 shrink-0" /><span>0304-6668810</span></li>
          </ul></div>
        </div>
        <div className="container mx-auto px-6 pt-8 border-t border-slate-800 text-center opacity-60 mt-12"><p>© 2026 Pakistan Currency Exchange. All rights reserved.</p></div>
      </footer>
    </div>
  );
}
