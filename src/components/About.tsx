"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const points = [
    "Over 15 years of automotive excellence",
    "Strict 150-point vehicle inspection",
    "Transparent pricing with no hidden fees",
    "Dedicated after-sales support team",
    "Exclusive partnerships with major banks",
    "Premium showroom experience"
  ];

  return (
    <section id="about" className="py-24 bg-masila-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[600px] w-full rounded-3xl overflow-hidden border border-white/10 group">
              <Image
                src="https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1000&auto=format&fit=crop"
                alt="Masila Cars Showroom"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-masila-black via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-2xl border border-white/20 backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <div className="text-5xl font-heading font-bold text-masila-gold">15+</div>
                  <div className="text-sm font-medium text-white uppercase tracking-wider">Years of<br/>Trust & Excellence</div>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-masila-gold/50 rounded-tl-3xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-masila-gold/50 rounded-br-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Setting the Standard for <br/>
              <span className="text-masila-gold">Pre-Owned Luxury</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Founded with a vision to redefine the used car market in Kuwait, Masila Cars offers an unparalleled selection of premium vehicles. We believe that buying a pre-owned car should be as exciting and reliable as buying a new one. 
            </p>
            
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Our commitment to transparency, quality, and customer satisfaction has made us the trusted choice for thousands of drivers across the region.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-masila-gold flex-shrink-0" />
                  <span className="text-sm text-gray-300 font-medium">{point}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-8 border-t border-white/10 flex items-center gap-6">
              <div>
                <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">Dealership Location</div>
                <div className="font-bold text-white text-lg">Shuwaikh Industrial, Kuwait</div>
              </div>
              <div className="w-[1px] h-12 bg-white/10" />
              <div>
                <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">Contact Phone</div>
                <div className="font-bold text-masila-gold text-lg">+965 9986 2018</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
