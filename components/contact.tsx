'use client'
import React, { useState, useEffect } from "react";

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("contact");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="contact"
      className="relative w-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-24 overflow-hidden text-white"
    >
      {/* Background floating glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-32 h-32 rounded-full bg-cyan-400/30 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-1/3 w-40 h-40 rounded-full bg-cyan-300/20 blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col gap-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Backed by Blockchain. Boosted by AI. Built for Impact.
          </h2>
          <p className="text-blue-200 text-lg md:text-xl mb-6">
            Mintellect is more than a marketplace — it&apos;s a movement to
            reimagine how the world unlocks ideas. We begin in India, but our
            vision is global.
          </p>
          <a
            href="#"
            target="_blank"
            className="inline-block bg-cyan-400 text-blue-900 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Join the Movement
          </a>
        </div>
      </div>
    </section>
  );
}
