"use client";

import { motion, Variants } from "framer-motion";
import { ShieldCheck, Wallet, RefreshCw, Truck } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Certified Vehicles",
      description: "Every vehicle is rigorously inspected by our certified mechanics before sale to ensure top quality.",
    },
    {
      icon: Wallet,
      title: "Easy Financing",
      description: "Flexible installment options and competitive interest rates tailored to your budget.",
    },
    {
      icon: RefreshCw,
      title: "Trade-In Service",
      description: "Upgrade your current vehicle seamlessly with our hassle-free trade-in valuation process.",
    },
    {
      icon: Truck,
      title: "Delivery Available",
      description: "Convenient and secure delivery of your dream car anywhere across Kuwait.",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 bg-masila-black relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-masila-gold/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-masila-gold">Masila Cars</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience the difference with Kuwait's premier luxury used car dealership. 
              We are committed to excellence, transparency, and customer satisfaction.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden border border-white/5 hover:border-masila-gold/30"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-masila-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-14 h-14 bg-masila-gray rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-masila-gold/50 group-hover:bg-masila-gold/10 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-masila-gold" />
              </div>
              
              <h3 className="text-xl font-bold font-heading mb-3 text-white group-hover:text-masila-gold transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
