'use client'
import React, { useState, useEffect } from "react";

export default function BenefitSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("benefits");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const benefits = [
    {
      icon: "🎓",
      title: "For Academia",
      items: [
        "Showcase IP early and globally",
        "Earn pre-grant licensing revenue",
        "Attract industry collaboration",
      ],
    },
    {
      icon: "🚀",
      title: "For Startups",
      items: [
        "Monetize pending patents",
        "Raise IP-backed funding",
        "License or partner without giving up ownership",
      ],
    },
    {
      icon: "💼",
      title: "For Corporations",
      items: [
        "Access cutting-edge tech early",
        "Fast-track innovation pipelines",
        "Reduce IP acquisition friction",
      ],
    },
    {
      icon: "📈",
      title: "For Investors",
      items: [
        "Discover new IP-backed assets",
        "Stake in high-potential inventions",
        "Enable underfunded innovations",
      ],
    },
  ];

  return (
    <section
      id="benefits"
      className="relative w-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-24 overflow-hidden text-white"
    >
      {/* Floating background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-32 h-32 rounded-full bg-cyan-400/30 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-1/3 w-40 h-40 rounded-full bg-cyan-300/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-28 rounded-full bg-cyan-400/25 blur-2xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col gap-16">
        {/* Section Header */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3">Benefits for Everyone</h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Discover how our platform creates value across the entire innovation ecosystem
          </p>
        </div>

        {/* Benefits Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="relative bg-blue-900/60 backdrop-blur-md rounded-xl p-6 shadow-lg flex flex-col gap-4 hover:scale-105 transform transition-transform duration-500"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-400/20 text-xl font-bold text-white border-2 border-cyan-400">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
              </div>
              <ul className="flex flex-col gap-2 pl-2">
                {benefit.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 mt-1 flex-shrink-0"></span>
                    <span className="text-blue-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
