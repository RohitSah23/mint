'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
export default function SolutionSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
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
      className="relative w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 py-24 overflow-hidden text-white"
    >
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

      {/* Floating Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-32 h-32 rounded-full bg-emerald-400/30 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-1/3 w-40 h-40 rounded-full bg-emerald-300/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-28 rounded-full bg-emerald-400/25 blur-2xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 rounded-full bg-emerald-500/15 blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-1/2 w-48 h-48 rounded-full bg-emerald-300/10 blur-[100px] animate-pulse-slow"></div>
        <div className="absolute top-0 right-10 w-20 h-20 rounded-full bg-emerald-400/20 blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-0 w-36 h-36 rounded-full bg-emerald-500/20 blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6  relative z-10 flex flex-col gap-16">
        {/* Header */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white">How Mintellect Works</h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Transforming patent licensing through blockchain innovation
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`flex flex-col md:flex-row items-start gap-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {/* Number */}
              <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-white/10 text-white text-2xl font-bold border-2  border-emerald-400/20 hover:scale-105 transition-transform">
                {step.number}
              </div>

              {/* Card */}
              <div className="flex-1 bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border  border-emerald-400/20 hover:scale-105  transition-transform duration-300">
                <div className="flex items-center gap-4 mb-2">
                  <div className="text-4xl">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                </div>
                <p className="text-gray-100 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
