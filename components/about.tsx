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
      className="relative w-full py-24 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-test3.jpg"
          alt="Abstract blockchain background"
          fill
          className="object-cover scale-120"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-32 h-32 rounded-full bg-emerald-400/30 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-1/3 w-40 h-40 rounded-full bg-emerald-300/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-28 rounded-full bg-emerald-400/25 blur-2xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 rounded-full bg-emerald-500/15 blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-1/2 w-48 h-48 rounded-full bg-emerald-300/10 blur-[100px] animate-pulse-slow"></div>
        <div className="absolute top-0 right-10 w-20 h-20 rounded-full bg-emerald-400/20 blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-0 w-36 h-36 rounded-full bg-emerald-500/20 blur-3xl animate-pulse-slow"></div>
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
          <div className="w-28 h-1 mx-auto rounded-full bg-yellow-400/50"></div>
        </div>

        {/* Top 2 Cards */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-8 border border-yellow-400/20 hover:scale-105 transition-transform">
            <div className="text-3xl font-bold text-yellow-300 mb-4">30,000+</div>
            <div className="text-white/80 mb-4 font-medium">
              Patents stuck in approval limbo annually
            </div>
            <p className="text-gray-300 leading-relaxed">
              Every year, tens of thousands of promising innovations in India are locked
              in a 3–5 year patent approval limbo. Startups stall, research stagnates, and progress halts.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-8 border border-yellow-400/20 hover:scale-105 transition-transform">
            <div className="mb-2 font-semibold text-yellow-300">✨ The Solution</div>
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
          <div className="bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-8 border border-yellow-400/20 hover:scale-105 transition-transform">
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
          <div className="bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-6 border border-yellow-400/20 flex flex-col items-center hover:scale-105 transition-transform">
            <div className="text-3xl md:text-4xl font-bold text-yellow-300">3-5</div>
            <div className="text-gray-300 mt-1 text-sm md:text-base">Years Wait Time</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-6 border border-yellow-400/20 flex flex-col items-center hover:scale-105 transition-transform">
            <div className="text-3xl md:text-4xl font-bold text-yellow-300">∞</div>
            <div className="text-gray-300 mt-1 text-sm md:text-base">Lost Opportunities</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-6 border border-yellow-400/20 flex flex-col items-center hover:scale-105 transition-transform">
            <div className="text-3xl md:text-4xl font-bold text-yellow-300">1st</div>
            <div className="text-gray-300 mt-1 text-sm md:text-base">Blockchain IP Marketplace</div>
          </div>
        </div>
      </div>
    </section>
  );
}
