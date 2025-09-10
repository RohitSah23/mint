"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
 {/* Grid + Glow on All Sides */}
 <div
   className="absolute inset-0 z-0 pointer-events-none"
   style={{
     backgroundImage: `
       linear-gradient(to right, #f0f0f0 1px, transparent 1px),
       linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
       radial-gradient(circle 600px at 0% 200px, #d5c5ff, transparent),     /* Left */
       radial-gradient(circle 600px at 100% 200px, #d5c5ff, transparent),  /* Right */
       radial-gradient(circle 600px at 50% 0px, #d5c5ff, transparent),     /* Top */
       radial-gradient(circle 600px at 50% 100%, #d5c5ff, transparent)     /* Bottom */
     `,
     backgroundSize: `
       96px 64px,    
       96px 64px,    
       100% 100%,    
       100% 100%,
       100% 100%,
       100% 100%
     `,
   }}
 />

      <div className="relative z-10 text-center max-w-3xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-extrabold text-gray-900 leading-tight"
        >
          <span className="block">Tokenizing</span>
          <span className="block bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-600 bg-clip-text text-transparent">
            Patent Potential
          </span>
          <span className="block">Accelerate Invention. Amplify Impact.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-lg sm:text-xl text-gray-700"
        >
          Transform your intellectual property into liquid digital assets. Our revolutionary platform enables patent holders to tokenize, trade, and monetize their IP rights through secure blockchain technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 flex justify-center"
        >
          <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-600 text-white font-medium text-lg shadow-lg hover:scale-105 transition-transform">
            Start Tokenizing Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
  
      </div>
    </section>
  );
}
