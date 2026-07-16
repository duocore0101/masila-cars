"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Gauge, Fuel, Settings, Calendar, ArrowRight } from "lucide-react";

export default function FeaturedCars() {
  const cars = [
    {
      id: 1,
      name: "Mercedes-Benz G-Class AMG",
      price: "KWD 45,000",
      emi: "KWD 850/mo",
      year: "2023",
      mileage: "12,500 km",
      fuel: "Petrol",
      transmission: "Auto",
      image: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "BMW X7 M50i",
      price: "KWD 32,500",
      emi: "KWD 620/mo",
      year: "2022",
      mileage: "24,000 km",
      fuel: "Petrol",
      transmission: "Auto",
      image: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Range Rover Autobiography",
      price: "KWD 38,000",
      emi: "KWD 715/mo",
      year: "2023",
      mileage: "18,200 km",
      fuel: "Petrol",
      transmission: "Auto",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section id="cars" className="py-24 bg-masila-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-masila-gold">Inventory</span>
            </h2>
            <p className="text-gray-400 max-w-2xl">
              Explore our hand-picked selection of premium certified vehicles. 
              Each car undergoes a rigorous 150-point inspection.
            </p>
          </div>
          <Link 
            href="#cars" 
            className="hidden md:flex items-center gap-2 text-masila-gold hover:text-white transition-colors"
          >
            View All Inventory <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-masila-black rounded-2xl overflow-hidden border border-white/5 hover:border-masila-gold/50 transition-colors duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
            >
              {/* Image Container */}
              <div className="relative h-40 sm:h-64 overflow-hidden bg-gray-900">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-masila-black/80 backdrop-blur-md px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold text-masila-gold border border-masila-gold/30">
                  Certified Pre-Owned
                </div>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-6">
                <h3 className="font-heading text-sm sm:text-xl font-bold mb-1 sm:mb-2 group-hover:text-masila-gold transition-colors line-clamp-1">{car.name}</h3>
                <div className="flex flex-col sm:flex-row sm:items-end gap-1 sm:gap-3 mb-4 sm:mb-6">
                  <span className="text-base sm:text-2xl font-bold text-white">{car.price}</span>
                  <span className="text-[10px] sm:text-sm text-gray-400 sm:pb-1">or {car.emi}</span>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-400">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-masila-gold" />
                    <span>{car.year}</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-400">
                    <Gauge className="w-3 h-3 sm:w-4 sm:h-4 text-masila-gold" />
                    <span>{car.mileage}</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-400 hidden sm:flex">
                    <Fuel className="w-3 h-3 sm:w-4 sm:h-4 text-masila-gold" />
                    <span>{car.fuel}</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-400 hidden sm:flex">
                    <Settings className="w-3 h-3 sm:w-4 sm:h-4 text-masila-gold" />
                    <span>{car.transmission}</span>
                  </div>
                </div>

                <Link 
                  href="#contact" 
                  className="block w-full text-center py-2 sm:py-3 rounded-lg border border-white/10 hover:bg-masila-gold hover:text-masila-black hover:border-masila-gold transition-all duration-300 text-xs sm:text-base font-medium"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link 
            href="#cars" 
            className="inline-flex items-center gap-2 text-masila-gold hover:text-white transition-colors"
          >
            View All Inventory <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
