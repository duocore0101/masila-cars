"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, ShieldCheck, Banknote, Award } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const stats = [
    { value: "500+", label: "Cars Sold", icon: Award },
    { value: "100+", label: "Financing Approvals", icon: Banknote },
    { value: "15+", label: "Years Experience", icon: ShieldCheck },
  ];

  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-banner.png"
          alt="Premium Used Cars Showroom in Kuwait"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-masila-black/70 via-masila-black/50 to-masila-black/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-masila-gold text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-masila-gold animate-pulse" />
              #1 Premium Dealership in Kuwait
            </div>
            
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Find Your Perfect <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-masila-gold to-[#f9e596]">
                Used Car
              </span> in Kuwait
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl font-light">
              Quality Inspected Vehicles • Easy Financing • Trusted Dealership. 
              Drive your dream car today with Masila Cars.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="#cars" 
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-masila-gold text-masila-black font-semibold rounded-full overflow-hidden transition-transform active:scale-95"
              >
                <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative flex items-center gap-2">
                  Browse Cars
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 glass text-white font-semibold rounded-full hover:bg-white/10 transition-colors active:scale-95 border border-white/20 hover:border-masila-gold/50"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Floating Stats */}
          <div className="lg:col-span-5 hidden lg:flex flex-col gap-6 justify-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                className="glass p-6 rounded-2xl flex items-center gap-6 border-l-4 border-l-masila-gold transform hover:-translate-x-2 transition-transform duration-300 cursor-default"
              >
                <div className="w-14 h-14 rounded-full bg-masila-gold/20 flex items-center justify-center flex-shrink-0">
                  <stat.icon className="w-7 h-7 text-masila-gold" />
                </div>
                <div>
                  <div className="text-3xl font-bold font-heading">{stat.value}</div>
                  <div className="text-sm text-gray-400 font-medium tracking-wide uppercase mt-1">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest font-medium">Scroll down</span>
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden relative">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-masila-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
