'use client'
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

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
      {/* Background floating glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-32 h-32 rounded-full bg-emerald-400/30 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-1/3 w-40 h-40 rounded-full bg-emerald-300/20 blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center gap-8 text-center">
        <div
          className={`transition-all duration-1000 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Backed by Blockchain. Boosted by AI. Built for Impact.
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Mintellect is more than a marketplace — it&apos;s a movement to
            reimagine how the world unlocks ideas. We begin in India, but our
            vision is global.
          </p>

          {/* Centered button with width just enough for text */}
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
