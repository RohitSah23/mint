"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 85% 65% at 8% 8%, rgba(123, 97, 255, 0.45), transparent 60%),
            radial-gradient(ellipse 75% 60% at 75% 35%, rgba(150, 120, 255, 0.35), transparent 62%),
            radial-gradient(ellipse 70% 60% at 15% 80%, rgba(90, 180, 255, 0.35), transparent 62%),
            radial-gradient(ellipse 70% 60% at 92% 92%, rgba(170, 130, 255, 0.40), transparent 62%),
            linear-gradient(180deg, #e6e6ff 0%, #f0e6ff 100%)
          `,
        }}
      />

      {/* Content */}
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
