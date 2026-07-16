"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Ahmed Al-Fadhli",
      role: "Business Owner",
      content: "Purchased a Mercedes S-Class. The condition was immaculate, exactly as described. The financing process was the smoothest I've ever experienced in Kuwait.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah Al-Mutairi",
      role: "Doctor",
      content: "Traded in my old SUV for a certified Range Rover. Masila Cars gave me a very fair valuation. Their customer service is truly premium and trustworthy.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
      rating: 5,
    },
    {
      id: 3,
      name: "Fahad Al-Salem",
      role: "Architect",
      content: "Found my dream BMW here. The 150-point inspection gave me peace of mind. Highly recommend their transparent and professional approach to selling cars.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-24 bg-masila-gray relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Client <span className="text-masila-gold">Testimonials</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Hear what our satisfied clients have to say about their experience with Masila Cars.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden relative min-h-[300px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ 
                  opacity: index === currentIndex ? 1 : 0,
                  x: index === currentIndex ? 0 : -50,
                  pointerEvents: index === currentIndex ? "auto" : "none"
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col items-center text-center"
              >
                <Quote className="w-12 h-12 text-masila-gold/20 mb-6" />
                
                <p className="text-xl md:text-2xl text-gray-300 font-light italic mb-8 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-masila-gold fill-masila-gold" />
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="rounded-full object-cover border-2 border-masila-gold"
                  />
                  <div className="text-left">
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <span className="text-sm text-gray-500">{testimonial.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-masila-gold w-8" : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
