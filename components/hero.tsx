"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { OrbitingCirclesDemo } from "./orbit"; 
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Tokenizing Patent Potential Hero Section"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Abstract blockchain background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content + Orbiting Circle */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 py-30 lg:py-0  items-center">
        {/* LEFT: Hero Content */}
        <div className="text-center lg:text-left ">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl lg:text-8xl font-extrabold leading-tight text-white drop-shadow-lg"
          >
            <span className="block">Tokenizing</span>
            <span className="block lg:text-7xl bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
              Patent Potential
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-4 text-2xl sm:text-3xl font-semibold text-gray-200 drop-shadow py-4"
          >
            Accelerate Invention. Amplify Impact.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-6 text-lg sm:text-md text-gray-300 drop-shadow"
          >
            Transform your intellectual property into liquid digital assets. Our revolutionary
            platform enables patent holders to tokenize, trade, and monetize their IP rights
            through secure blockchain technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-10 flex justify-center lg:justify-start"
          >
        

              <Link
    href=""
    className="flex items-center bg-[#F4FF54] text-black px-5 py-2 rounded-full font-medium shadow-md hover:bg-opacity-90 hover:scale-105 transition-all duration-200"
  >
     Start Tokenizing Now
    <span className="bg-black rounded-full ml-2 flex items-center justify-center p-1 transition-all duration-300">
      <ArrowUpRight size={15} color="white" />
    </span>
  </Link>
          </motion.div>
        </div>

        {/* RIGHT: Orbiting Circles */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }} 
           className="flex justify-center lg:justify-end ">
            <div className="">

          <OrbitingCirclesDemo />
            </div>
        
          </motion.div>
      </div>
    </section>
  );
}
