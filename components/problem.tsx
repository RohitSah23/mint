'use client'
import React, { useState, useEffect } from "react";

export default function ProblemSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );

    const section = document.getElementById("problem");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const problems = [
    { icon: "⏰", title: "3-5 Year Patent Delays", desc: "Innovations lose relevance during the lengthy patent approval process.", number: "01" },
    { icon: "📉", title: "Lost Startup Growth", desc: "Delays reduce employment by 21% and sales by 28% per year.", number: "02" },
    { icon: "🏛️", title: "Idle Academic Research", desc: "90%+ of university patents remain unused, wasting research.", number: "03" },
    { icon: "💰", title: "Investor Hesitancy", desc: "Lack of granted IP deters early-stage capital investment.", number: "04" },
    { icon: "⚖️", title: "Legal Uncertainty", desc: "No enforceable rights means no leverage to negotiate deals.", number: "05" },
    { icon: "🌐", title: "Global Market Access Challenges", desc: "Innovators struggle to expand internationally without verified IP rights.", number: "06" },
  ];

  return (
    <section
      id="problem"
      className="relative w-full py-24 bg-gradient-to-br from-[#1A2A80] via-[#3B38A0] to-[#7A85C1] text-white overflow-hidden"
    >
      {/* Background floating shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-36 h-36 rounded-full bg-[#B2B0E8]/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-[#7A85C1]/25 blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-28 rounded-full bg-[#B2B0E8]/30 blur-2xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16 relative z-10">
        {/* Section Header */}
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">What We Solve</h2>
          <p className="text-[#B2B0E8] max-w-2xl mx-auto text-lg md:text-xl">
            We tackle the challenges that prevent innovation from reaching the world.
          </p>
        </div>

        {/* Problems Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {problems.map((p, idx) => (
            <div
              key={idx}
              className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg flex flex-col gap-4 hover:scale-105 transform transition-transform duration-500"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#B2B0E8]/20 text-xl">
                  {p.icon}
                </div>
                <h3 className="text-[#B2B0E8] text-xl font-semibold">{p.title}</h3>
              </div>
              <p className="text-[#B2B0E8]/80 leading-relaxed">{p.desc}</p>
              <div className="absolute top-4 right-4 text-2xl font-bold text-[#B2B0E8]/50">{p.number}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
