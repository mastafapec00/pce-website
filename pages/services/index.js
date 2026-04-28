import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Zap, ShieldCheck, CreditCard, Send, Truck, Menu, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

// 🟢 Services Data (with Links to Sub-pages)
const servicesList = [
  { 
    title: "Western Union", 
    desc: "Send and receive money globally with speed and security. The most trusted way to move money.", 
    icon: <Globe size={40} className="text-green-600" />,
    link: "/services/western-union"
  },
  { 
    title: "MoneyGram", 
    desc: "Quick transfers built around speed and security for people who support family abroad.", 
    icon: <Zap size={40} className="text-green-600" />,
    link: "/services/moneygram"
  },
  { 
    title: "RIA Money Transfer", 
    desc: "Receive money from abroad with broad global coverage and multiple payout options.", 
    icon: <ShieldCheck size={40} className="text-green-600" />,
    link: "/services/ria"
  },
  { 
    title: "Telegraphic Transfer (TT)", 
    desc: "Secure way to send funds to an overseas bank account for education or approved purposes.", 
    icon: <CreditCard size={40} className="text-green-600" />,
    link: "/services/tt"
  },
  { 
    title: "Demand Draft (DD)", 
    desc: "Safe and reliable method for making international payments and academic fee transfers.", 
    icon: <Send size={40} className="text-green-600" />,
    link: "/services/dd"
  },
  { 
    title: "Home Delivery", 
    desc: "Get your exchanged currency or remitted cash delivered safely to your doorstep.", 
    icon: <Truck size={40} className="text-green-600" />,
    link: "/services/home-delivery"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* 🧭 Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg shadow-green-200">PCE</div>
            <span className="font-black text-xl tracking-tight text-green-900 uppercase">Pakistan Currency</span>
          </a>
          <div className="hidden md:flex gap-8 font-bold text-sm uppercase text-slate-600">
            <a href="/" className="hover:text-green-700 transition">Home</a>
            <a href="/about" className="hover:text-green-700 transition">About Us</a>
            <a href="/services" className="text-green-700 border-b-2 border-green-700 pb-1">Services</a>
            <a href="/branches" className="hover:text-green-700 transition">Branches</a>
            <a href="/rates" className="hover:text-green-700 transition">Live Rates</a>
          </div>
          <button className="md:hidden text-green-800"><Menu size={28} /></button>
        </div>
      </nav>

      {/* 🚀 Header Banner */}
      <section className="bg-green-900 py-24 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-6xl font-black mb-6">
            Our Premium Services
          </motion.h1>
          <p className="text-green-200 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore our wide range of financial solutions designed to make your international transactions seamless and secure.
          </p>
        </div>
      </section>

      {/* 💼 Services Grid Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <motion.a 
                href={service.link}
                key={index} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ delay: index * 0.1 }} 
                viewport={{ once: true }} 
                className="block bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:shadow-2xl hover:-translate-y-2 hover:border-green-200 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:bg-green-50 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-green-800 transition-colors">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8">{service.desc}</p>
                <div className="flex items-center gap-2 text-green-700 font-bold group-hover:gap-4 transition-all">
                  Explore Service <ArrowRight size={18} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* 🌐 Footer Section */}
      <footer className="bg-slate-950 text-slate-300 py-16 text-sm border-t-4 border-green-700">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg">PCE</div>
              <span className="font-black text-xl tracking-tight text-white uppercase">Pakistan Currency</span>
            </div>
            <p className="leading-relaxed opacity-80 mb-6">Pakistan's most trusted currency exchange network, providing secure, fast, and reliable financial solutions across the globe.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 opacity-80 font-medium">
              <li><a href="/about" className="hover:text-green-400 transition">About Us</a></li>
              <li><a href="/branches" className="hover:text-green-400 transition">Branch Locator</a></li>
              <li><a href="/services" className="hover:text-green-400 transition">Our Services</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider">Support</h4>
            <ul className="space-y-3 opacity-80 font-medium">
              <li><a href="/rates" className="hover:text-green-400 transition">Live Exchange Rates</a></li>
              <li><a href="#" className="hover:text-green-400 transition">File a Complaint</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-green-400 transition">Privacy Policy</a></li>
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
        <div className="container mx-auto px-6 pt-8 border-t border-slate-800 text-center opacity-60">
          <p>© 2026 Pakistan Currency Exchange. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
