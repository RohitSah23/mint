'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";

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
    { icon: "⏰", title: "3-5 Year Patent Delays", desc: "Innovations lose relevance during the lengthy patent approval process.", number: "01", img: "/problem1.png" },
    { icon: "📉", title: "Lost Startup Growth", desc: "Delays reduce employment by 21% and sales by 28% per year.", number: "02", img: "/problem2.png" },
    { icon: "🏛️", title: "Idle Academic Research", desc: "90%+ of university patents remain unused, wasting research.", number: "03", img: "/problem3.png" },
    { icon: "💰", title: "Investor Hesitancy", desc: "Lack of granted IP deters early-stage capital investment.", number: "04", img: "/problem4.png" },
    { icon: "⚖️", title: "Legal Uncertainty", desc: "No enforceable rights means no leverage to negotiate deals.", number: "05", img: "/problem5.png" },
    { icon: "🌐", title: "Global Market Access Challenges", desc: "Innovators struggle to expand internationally without verified IP rights.", number: "06", img: "/problem6.png" },
  ];

  return (
    <section
      id="problem"
      className="relative w-full py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-test4.jpg"
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

      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-16 relative z-10">
        {/* Header */}
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            What We Solve
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg md:text-xl">
            We tackle the challenges that prevent innovation from reaching the world.
          </p>
        </div>

        {/* Problems Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {problems.map((p, idx) => (
            <div
              key={idx}
              className="relative bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-6 flex flex-col gap-4 hover:scale-105 transform transition-transform duration-500 border border-yellow-400/20"
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/20 text-xl text-white">
                  {p.icon}
                </div>
                <h3 className="text-white font-semibold text-xl">{p.title}</h3>
              </div>

              {/* Image */}
              <div className="w-full h-40 relative rounded-lg overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Description */}
              <p className="text-gray-100 leading-relaxed">{p.desc}</p>

              {/* Number Badge */}
              <div className="absolute top-4 right-4 text-2xl font-bold text-white/20">
                {p.number}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
