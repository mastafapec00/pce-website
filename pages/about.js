import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Eye, CheckCircle2, MapPin, Phone, Mail, Menu } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      {/* 🧭 Navigation Bar (Links updated) */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg shadow-green-200">PCE</div>
            <span className="font-black text-xl tracking-tight text-green-900 uppercase">Pakistan Currency</span>
          </a>
          <div className="hidden md:flex gap-8 font-bold text-sm uppercase text-slate-600">
            <a href="/" className="hover:text-green-700 transition">Home</a>
            <a href="/about" className="text-green-700 border-b-2 border-green-700 pb-1">About Us</a>
            <a href="/services" className="hover:text-green-700 transition">Services</a>
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
            About Pakistan Currency Exchange
          </motion.h1>
          <p className="text-green-200 max-w-2xl mx-auto text-lg leading-relaxed">
            Leading the financial market with trust, transparency, and innovation for over 25 years.
          </p>
        </div>
      </section>

      {/* 🏢 Who We Are Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-black text-slate-900 mb-6">Who We Are?</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Pakistan Currency Exchange (PCE) is the most trusted and widely recognized foreign exchange company in Pakistan. Established with a commitment to providing secure, fast, and reliable financial solutions, we have grown into a massive network of over 150 branches nationwide.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              We cater to millions of customers every year, offering competitive open-market exchange rates, global remittance payouts, and seamless corporate solutions.
            </p>
            <ul className="space-y-4">
              {["Licensed by State Bank of Pakistan", "150+ Branches Nationwide", "Millions of Satisfied Customers", "Premium Corporate Partnerships"].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-800 font-bold">
                  <CheckCircle2 className="text-green-600" size={24} /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
            <div className="aspect-[4/3] bg-green-50 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&w=800&q=80" alt="Corporate Office" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🎯 Mission & Vision */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
              <Target size={32} className="text-green-700" />
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              To provide our customers with the most reliable, efficient, and transparent currency exchange and remittance services. We strive to bridge the gap in global finance with cutting-edge technology and unparalleled customer care.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
              <Eye size={32} className="text-green-700" />
            </div>
            <h3 className="text-3xl font-black text-slate-900 mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              To be the undisputed leader in the foreign exchange market of Pakistan, recognized globally for our integrity, massive network, and dedication to financial excellence.
            </p>
          </motion.div>
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
