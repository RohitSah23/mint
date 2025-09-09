'use client'

import React, { useState, useEffect } from "react";

export default function ProblemSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("problem");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const problems = [
    {
      icon: "⏰",
      title: "3-5 Year Patent Delays",
      desc: "Innovations lose relevance or become obsolete during the lengthy patent approval process.",
      number: "01",
    },
    {
      icon: "📉",
      title: "Lost Startup Growth",
      desc: "Delays reduce employment by 21% and sales by 28% per year, stifling innovation.",
      number: "02",
    },
    {
      icon: "🏛️",
      title: "Idle Academic Research",
      desc: "90%+ of university patents remain unused, wasting valuable research.",
      number: "03",
    },
    {
      icon: "💰",
      title: "Investor Hesitancy",
      desc: "Lack of granted IP deters early-stage capital investment.",
      number: "04",
    },
    {
      icon: "⚖️",
      title: "Legal Uncertainty",
      desc: "No enforceable rights means no leverage to negotiate deals.",
      number: "05",
    },
  ];

  return (
    <section
      id="problem"
      className="relative w-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-24 overflow-hidden text-white"
    >
      {/* Floating background glow elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-32 h-32 rounded-full bg-cyan-400/30 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-1/3 w-40 h-40 rounded-full bg-cyan-300/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-28 rounded-full bg-cyan-400/25 blur-2xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col gap-20">
        {/* Section Header */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3">What We Solve</h2>
          <div className="flex items-center justify-center gap-2">
            <span className="w-16 h-1 bg-cyan-400 rounded-full"></span>
            <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
            <span className="w-16 h-1 bg-cyan-400 rounded-full"></span>
          </div>
        </div>

        {/* Problems Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {problems.map((problem, idx) => (
            <div
              key={idx}
              className="relative bg-blue-900/60 backdrop-blur-md rounded-xl p-6 shadow-lg flex flex-col gap-4 hover:scale-105 transform transition-transform duration-500"
            >
              <div className="flex items-center gap-4">
                <div className="relative flex items-center justify-center w-12 h-12 bg-cyan-400/20 rounded-full text-xl">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-semibold">{problem.title}</h3>
              </div>
              <p className="text-blue-200 leading-relaxed">{problem.desc}</p>
              <div className="absolute top-4 right-4 text-2xl font-bold text-cyan-400/50">
                {problem.number}
              </div>
            </div>
          ))}
        </div>

        {/* Optional central connecting lines */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="w-full h-full border-t border-cyan-400/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
