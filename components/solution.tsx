'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function SolutionSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    const section = document.getElementById("solution");
    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const steps = [
    { number: 1, title: "Patent Verification", desc: "Inventors list their pending patents; we verify with official databases.", icon: "🔍" },
    { number: 2, title: "Tokenization", desc: "Unique NFTs represent each application; ERC-20 tokens allow fractional usage rights.", icon: "🎯" },
    { number: 3, title: "Smart Licensing", desc: "Usage rights are embedded in smart contracts – fast, secure, programmable.", icon: "🔐" },
    { number: 4, title: "Marketplace Matching", desc: "Companies, startups, and collaborators discover and license IP with confidence.", icon: "🎪" },
    { number: 5, title: "AI Assistance", desc: "Our AI suggests potential applications, commercialization pathways, and partners.", icon: "🤖" },
  ];

  return (
    <section
      id="solution"
      className="relative w-full py-16 lg:py-24 overflow-hidden text-white"
    >

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 relative z-10 flex flex-col gap-12 lg:gap-16">
        {/* Header */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            How Mintellect Works
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Transforming patent licensing through blockchain innovation
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-8 lg:gap-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`flex flex-row items-start gap-4 sm:gap-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {/* Number */}
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-white/10 text-white text-base sm:text-lg md:text-2xl font-bold border-2 border-indigo-400/30 hover:scale-105 transition-transform">
                {step.number}
              </div>

              {/* Card */}
              <div className="group relative flex-1 bg-white/10 backdrop-blur-lg rounded-2xl p-3 sm:p-4 md:p-6 shadow-xl border border-indigo-400/30 hover:scale-104 transition-transform duration-300 overflow-hidden">
                {/* Shine Effect */}
                <span className="pointer-events-none absolute top-0 left-[-120%] w-[140%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-700 ease-in-out group-hover:left-[120%]" />
                
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-1 sm:mb-2">
                  <div className="text-xl sm:text-2xl md:text-4xl">{step.icon}</div>
                  <h3 className="text-sm sm:text-lg md:text-xl font-semibold text-white">{step.title}</h3>
                </div>
                <p className="text-gray-100 text-xs sm:text-sm md:text-base leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
