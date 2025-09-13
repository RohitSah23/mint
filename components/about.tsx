'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="about"
      className="relative w-full py-24 bg-gradient-to-br text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Abstract blockchain background"
          fill
          className="object-cover scale-120"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-16 relative z-10">
        {/* Header */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
            About Mintellect
          </h2>
          <div className="w-28 h-1 mx-auto rounded-full bg-emerald-400/50"></div>
        </div>

        {/* Top 2 Cards */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="group relative bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-8 border border-indigo-400/30 hover:scale-105 transition-transform overflow-hidden">
            {/* Shine */}
            <span className="pointer-events-none absolute top-0 left-[-120%] w-[140%] h-full 
              bg-gradient-to-r from-transparent via-white/20 to-transparent 
              transition-all duration-700 ease-in-out group-hover:left-[120%]" />
            <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-500 bg-clip-text text-transparent mb-4">30,000+</div>
            <div className="text-white/80 mb-4 font-medium">
              Patents stuck in approval limbo annually
            </div>
            <p className="text-gray-300 leading-relaxed">
              Every year, tens of thousands of promising innovations in India are locked
              in a 3–5 year patent approval limbo. Startups stall, research stagnates, and progress halts.
            </p>
          </div>

          <div className="group relative bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-8 border border-indigo-400/30 hover:scale-105 transition-transform overflow-hidden">
            <span className="pointer-events-none absolute top-0 left-[-120%] w-[140%] h-full 
              bg-gradient-to-r from-transparent via-white/20 to-transparent 
              transition-all duration-700 ease-in-out group-hover:left-[120%]" />
            <div className="mb-2 font-semibold bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">✨ The Solution</div>
            <p className="font-bold text-white mb-3">Mintellect is the solution.</p>
            <p className="text-gray-300 leading-relaxed">
              By tokenizing pending patents as verified digital assets, Mintellect enables early licensing,
              usage, and collaboration on innovations <strong>before</strong> the patent is granted.
            </p>
          </div>
        </div>

        {/* Middle full-width Card */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="group relative bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-8 border border-indigo-400/30 hover:scale-105 transition-transform overflow-hidden">
            <span className="pointer-events-none absolute top-0 left-[-120%] w-[140%] h-full 
              bg-gradient-to-r from-transparent via-white/20 to-transparent 
              transition-all duration-700 ease-in-out group-hover:left-[120%]" />
            <div className="text-3xl mb-3">🎯</div>
            <p className="text-gray-300 leading-relaxed">
              Our mission is to convert idle intellectual property into active opportunities —
              bridging inventors with investors, researchers with real-world impact, and ideas with the industries that need them.
            </p>
          </div>
        </div>

        {/* Bottom 3 Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            { value: "3-5", label: "Years Wait Time" },
            { value: "∞", label: "Lost Opportunities" },
            { value: "1st", label: "Blockchain IP Marketplace" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-6 border border-indigo-400/30 flex flex-col items-center hover:scale-105 transition-transform overflow-hidden"
            >
              <span className="pointer-events-none absolute top-0 left-[-120%] w-[140%] h-full 
                bg-gradient-to-r from-transparent via-white/20 to-transparent 
                transition-all duration-700 ease-in-out group-hover:left-[120%]" />
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
                {item.value}
              </div>
              <div className="text-gray-300 mt-1 text-sm md:text-base">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
