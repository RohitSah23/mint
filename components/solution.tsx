'use client'
import React, { useState, useEffect } from "react";

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
      className="relative w-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-24 overflow-hidden text-white"
    >
      {/* Background floating glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/5 w-32 h-32 rounded-full bg-cyan-400/30 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-1/4 w-40 h-40 rounded-full bg-cyan-300/20 blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col gap-16">
        {/* Header */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3">How Mintellect Works</h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Transforming patent licensing through blockchain innovation
          </p>
        </div>

        {/* Steps */}
        <div className="relative flex flex-col gap-16">
          {steps.map((step, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={step.number}
                className={`flex flex-col md:flex-row items-center md:gap-12 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                } ${isEven ? "md:flex-row-reverse" : ""}`}
              >
                {/* Step Visual */}
                <div className="flex flex-col items-center md:items-start md:w-1/3 relative">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-cyan-400/20 text-2xl font-bold text-white border-2 border-cyan-400">
                    {step.number}
                  </div>
                  <div className="text-5xl mt-4">{step.icon}</div>

                  {/* Connecting line (vertical on md+) */}
                  {idx < steps.length - 1 && (
                    <div
                      className={`hidden md:block absolute top-20 left-1/2 transform -translate-x-1/2 w-1 h-24 bg-cyan-400/30 rounded`}
                    ></div>
                  )}
                </div>

                {/* Step Content */}
                <div className="mt-6 md:mt-0 md:w-2/3 bg-blue-900/60 backdrop-blur-md rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-blue-200 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
