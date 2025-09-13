'use client'
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("contact");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="contact"
      className="relative w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 py-24 overflow-hidden text-white"
    >
      {/* Background
      <div className="fixed inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Abstract blockchain background"
          fill
          className="object-cover scale-120"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div> */}

      {/* Glassmorphism Card Wrapper */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center gap-8">
        <div
          className={`group relative w-full px-6 py-10 transform 
            bg-white/10 backdrop-blur-xl border border-indigo-400/30 overflow-hidden rounded-2xl shadow-2xl transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {/* Shine */}
          <span className="pointer-events-none absolute top-0 left-[-120%] w-[140%] h-full 
            bg-gradient-to-r from-transparent via-white/20 to-transparent 
            transition-all duration-700 ease-in-out group-hover:left-[120%]" />

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Backed by Blockchain.{" "}
          <span>
               Boosted by AI. {" "}
            </span>
            <span>

             Built for Impact.
            </span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed text-center">
            Mintellect is more than a marketplace — it&apos;s a movement to
            reimagine how the world unlocks ideas. We begin in India, but our
            vision is global.
          </p>

          {/* Centered Button */}
          <div className="flex justify-center">
            <Link
              href=""
              className="group inline-flex items-center bg-[#F4FF54] text-black rounded-full font-medium shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl px-4 py-2"
            >
              Join the Movement
              <span className="ml-2 flex items-center justify-center p-1 transition-all duration-300 bg-black group-hover:bg-black rounded-full">
                <ArrowUpRight size={16} color="white" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
