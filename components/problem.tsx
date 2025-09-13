'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function ProblemSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
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
      className="relative w-full py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image src="/hero-bg.jpg" alt="Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-16 relative z-10">
        {/* Header */}
        <div className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">What We Solve</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            We tackle the challenges that prevent innovation from reaching the world.
          </p>
        </div>

        {/* Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {problems.map((p, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg shadow-xl p-6 flex flex-col gap-4
                         border border-indigo-400/30 transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 hover:border-indigo-300/50"
            >
              {/* Shine */}
              <span
                className="pointer-events-none absolute top-0 left-[-120%] w-[140%] h-full 
                           bg-gradient-to-r from-transparent via-white/20 to-transparent 
                           transition-all duration-700 ease-in-out group-hover:left-[120%]"
              ></span>

              {/* Icon & Title */}
              <div className="flex items-center gap-4 relative z-10">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/20 text-2xl">
                  {p.icon}
                </div>
                <h3 className="bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-500 bg-clip-text text-transparent font-semibold text-xl">
                  {p.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-100 relative z-10">{p.desc}</p>

              {/* Number Badge */}
              <div className="absolute top-4 right-4 text-2xl font-bold text-white/20">{p.number}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
