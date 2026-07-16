"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Categories() {
  const categories = [
    {
      id: "luxury",
      title: "Luxury Cars",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800&auto=format&fit=crop",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
      height: "h-64 md:h-[400px]"
    },
    {
      id: "suv",
      title: "SUVs",
      image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=800&auto=format&fit=crop",
      colSpan: "col-span-1",
      height: "h-64 md:h-[400px]"
    },
    {
      id: "sedan",
      title: "Sedans",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=800&auto=format&fit=crop",
      colSpan: "col-span-1",
      height: "h-64"
    },
    {
      id: "family",
      title: "Family Cars",
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800&auto=format&fit=crop",
      colSpan: "col-span-1",
      height: "h-64"
    },
    {
      id: "budget",
      title: "Budget Friendly",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop",
      colSpan: "col-span-1 lg:col-span-1",
      height: "h-64"
    },
  ];

  return (
    <section className="py-24 bg-masila-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Browse by <span className="text-masila-gold">Category</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find exactly what you're looking for by browsing our specialized vehicle categories.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${category.colSpan} ${category.height} relative group rounded-2xl overflow-hidden cursor-pointer`}
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-masila-black/90 via-masila-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 p-4 sm:p-8 w-full">
                <div className="flex items-end justify-between">
                  <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:text-masila-gold transition-colors">
                    {category.title}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-masila-gold/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 backdrop-blur-sm">
                    <svg className="w-5 h-5 text-masila-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
