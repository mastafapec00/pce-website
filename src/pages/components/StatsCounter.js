import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: "Years' Expertise", value: "25+" },
  { label: "Branches across Pakistan", value: "150+" },
  { label: "Trusted customers worldwide", value: "10M+" }
];

export default function StatsCounter() {
  return (
    <section className="py-20 bg-green-900 text-white overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black mb-4"
          >
            Reliable Currency Exchange Services You Can Trust
          </motion.h2>
          <p className="text-green-200 max-w-2xl mx-auto opacity-80">
            Customers across Pakistan and around the world choose Pakistan Currency Exchange for transparent rates, secure remittance, and dependable service.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="p-8 rounded-3xl bg-green-800/50 border border-green-700/50 backdrop-blur-sm"
            >
              <h3 className="text-6xl font-black mb-2 text-white tracking-tighter">{stat.value}</h3>
              <p className="text-green-300 font-bold uppercase tracking-widest text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-12 text-center text-[10px] text-green-400/60 italic max-w-xl mx-auto">
          Figures reflect our commitment to scale and experience; visit a branch or contact us for services available in your area.
        </p>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
