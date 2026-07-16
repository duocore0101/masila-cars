"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator } from "lucide-react";

export default function FinanceCalculator() {
  const [price, setPrice] = useState(15000);
  const [downPayment, setDownPayment] = useState(3000);
  const [interestRate, setInterestRate] = useState(4.5);
  const [tenure, setTenure] = useState(48); // in months
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    const principal = price - downPayment;
    if (principal <= 0) {
      setMonthlyPayment(0);
      return;
    }
    
    const monthlyRate = interestRate / 100 / 12;
    if (monthlyRate === 0) {
      setMonthlyPayment(principal / tenure);
      return;
    }

    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1);
    setMonthlyPayment(emi);
  }, [price, downPayment, interestRate, tenure]);

  return (
    <section id="finance" className="py-24 bg-masila-black relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-masila-red/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-masila-gold text-sm font-medium mb-6">
                <Calculator className="w-4 h-4" />
                Finance Options
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Estimate Your <span className="text-masila-gold">Installments</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Use our interactive finance calculator to estimate your monthly payments. 
                We offer competitive rates and flexible terms to help you drive your dream car.
              </p>
              
              <div className="space-y-4">
                {[
                  "Fast & Easy Approval Process",
                  "Competitive Interest Rates from 3.5%",
                  "Up to 84 Months Repayment Terms",
                  "No Hidden Fees or Charges"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-masila-gold/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-masila-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 rounded-3xl border border-white/10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-masila-gold/10 rounded-full blur-[40px] pointer-events-none" />
            
            <h3 className="text-2xl font-bold font-heading mb-8">Payment Calculator</h3>
            
            <div className="space-y-6">
              {/* Car Price */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-gray-300">Vehicle Price (KWD)</label>
                  <span className="text-masila-gold font-bold">{price.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="100000"
                  step="500"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-masila-gold"
                />
              </div>

              {/* Down Payment */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-gray-300">Down Payment (KWD)</label>
                  <span className="text-masila-gold font-bold">{downPayment.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={price}
                  step="500"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-masila-gold"
                />
              </div>

              {/* Interest Rate & Tenure */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Interest Rate (%)</label>
                  <input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-masila-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Term (Months)</label>
                  <select
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-masila-gold transition-colors appearance-none"
                  >
                    {[12, 24, 36, 48, 60, 72, 84].map((m) => (
                      <option key={m} value={m} className="bg-masila-black">{m} Months</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Results */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="text-center">
                  <div className="text-sm text-gray-400 mb-2 uppercase tracking-widest font-medium">Estimated Monthly Payment</div>
                  <div className="text-5xl font-bold font-heading text-white">
                    {monthlyPayment > 0 ? (
                      <>
                        <span className="text-2xl text-masila-gold mr-2">KWD</span>
                        {Math.round(monthlyPayment).toLocaleString()}
                      </>
                    ) : (
                      "0"
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-4">
                    *Estimate only. Final rate is based on credit history.
                  </p>
                </div>
                
                <button className="w-full mt-6 bg-masila-gold text-masila-black font-bold py-4 rounded-xl hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                  Apply for Financing
                </button>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
