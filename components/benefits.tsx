'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
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
      className="relative w-full  py-24 overflow-hidden text-white"
    >
          <div className="absolute inset-0 z-0">
              <Image
                src="/bg-test4.jpg"
                alt="Abstract blockchain background"
                fill
                className="object-cover scale-105"
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
      {/* Floating background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-32 h-32 rounded-full bg-emerald-400/30 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-1/3 w-40 h-40 rounded-full bg-emerald-300/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-28 rounded-full bg-emerald-400/25 blur-2xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col gap-16">
        {/* Section Header */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            Benefits for Everyone
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
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
              className="relative rounded-2xl p-6 shadow-xl flex flex-col gap-4 hover:scale-105 transform transition-transform duration-500
                         bg-white/10 backdrop-blur-xl border border-emerald-400/20 "
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-400/20 text-xl font-bold text-white border border-emerald-400/50 shadow-inner">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
              </div>
              <ul className="flex flex-col gap-2 pl-2">
                {benefit.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1 flex-shrink-0 shadow"></span>
                    <span className="text-gray-200">{item}</span>
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
