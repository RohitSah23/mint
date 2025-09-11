'use client'

import React, { useState, useEffect } from "react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
  
    const section = document.getElementById("about");
    if (section) observer.observe(section);
  
    // Correct cleanup: only return a function or void
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="about"
      className="relative w-full py-24 bg-gradient-to-br from-[#1A2A80] via-[#3B38A0] to-[#7A85C1] text-white overflow-hidden"
    >
      {/* Background glowing circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-32 h-32 rounded-full bg-[#B2B0E8]/30 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-1/3 w-40 h-40 rounded-full bg-[#7A85C1]/25 blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-28 rounded-full bg-[#B2B0E8]/25 blur-2xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-20 relative z-10">
        {/* Header */}
        <div className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3">About Mintellect</h2>
          <div className="w-28 h-1 bg-[#B2B0E8] mx-auto rounded-full"></div>
        </div>

        {/* Content */}
        <div className={`flex flex-col lg:flex-row items-center gap-12 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Text Cards */}
          <div className="flex-1 flex flex-col gap-8">
            {/* Problem */}
            <div className="bg-[#1A2A80]/70 backdrop-blur-md shadow-lg rounded-xl p-6 border-l-4 border-[#B2B0E8]">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-3xl font-bold text-[#B2B0E8]">30,000+</span>
                <span className="text-[#B2B0E8]/80 font-medium">Patents stuck in approval limbo annually</span>
              </div>
              <p className="text-[#B2B0E8]/70 leading-relaxed">
                Every year, tens of thousands of promising innovations in India are locked in a 3-5 year patent approval limbo. Ideas that could transform industries sit idle. Startups stall. Research stagnates. Investments hesitate. Progress halts.
              </p>
            </div>

            {/* Solution */}
            <div className="bg-[#1A2A80]/60 backdrop-blur-md shadow-lg rounded-xl p-6 border-l-4 border-[#B2B0E8]">
              <div className="mb-2 font-semibold text-[#B2B0E8]">✨ The Solution</div>
              <p className="font-bold text-white mb-2">Mintellect is the solution.</p>
              <p className="text-[#B2B0E8]/70 leading-relaxed">
                We are the world&apos;s first blockchain-powered marketplace dedicated to unlocking the value of pending patents. By tokenizing patent applications as verified digital assets (NFTs + usage tokens), Mintellect enables early licensing, usage, and collaboration on innovations <strong>before</strong> the patent is granted.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-[#1A2A80]/70 backdrop-blur-md shadow-lg rounded-xl p-6 border-l-4 border-[#B2B0E8] flex items-start gap-4">
              <div className="text-3xl">🎯</div>
              <p className="text-[#B2B0E8]/70 leading-relaxed">
                Our mission is to convert idle intellectual property into active opportunities — bridging inventors with investors, researchers with real-world impact, and ideas with the industries that need them.
              </p>
            </div>
          </div>

          {/* Visual */}
          <div className="flex-1 relative w-full max-w-md mx-auto lg:mx-0">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-5 left-10 w-6 h-6 rounded-full bg-[#B2B0E8]/50 blur-xl animate-pulse"></div>
              <div className="absolute top-24 right-16 w-5 h-5 rounded-full bg-[#B2B0E8]/40 blur-lg animate-pulse"></div>
              <div className="absolute bottom-16 left-16 w-5 h-5 rounded-full bg-[#7A85C1]/30 blur-lg animate-pulse"></div>
              <div className="absolute bottom-5 right-20 w-6 h-6 rounded-full bg-[#B2B0E8]/50 blur-xl animate-pulse"></div>
            </div>

            {/* Central blockchain-like visualization */}
            <div className="relative flex justify-center items-center">
              <div className="space-y-2">
                <div className="w-24 h-2 bg-[#B2B0E8]/60 rounded-full animate-pulse"></div>
                <div className="w-24 h-2 bg-[#B2B0E8]/50 rounded-full animate-pulse"></div>
                <div className="w-24 h-2 bg-[#B2B0E8]/40 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute text-6xl">📋</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 text-center transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="bg-[#1A2A80]/60 backdrop-blur-md shadow-lg rounded-xl p-6">
            <div className="text-4xl font-bold text-[#B2B0E8]">3-5</div>
            <div className="text-[#B2B0E8]/80 mt-2">Years Wait Time</div>
          </div>
          <div className="bg-[#1A2A80]/60 backdrop-blur-md shadow-lg rounded-xl p-6">
            <div className="text-4xl font-bold text-[#B2B0E8]">∞</div>
            <div className="text-[#B2B0E8]/80 mt-2">Lost Opportunities</div>
          </div>
          <div className="bg-[#1A2A80]/60 backdrop-blur-md shadow-lg rounded-xl p-6">
            <div className="text-4xl font-bold text-[#B2B0E8]">1st</div>
            <div className="text-[#B2B0E8]/80 mt-2">Blockchain IP Marketplace</div>
          </div>
        </div>
      </div>
    </section>
  );
}