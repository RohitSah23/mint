'use client'
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
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
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-10 left-1/4 w-32 h-32 rounded-full bg-emerald-400/30 blur-3xl animate-pulse-slow"></div>
              <div className="absolute bottom-20 right-1/3 w-40 h-40 rounded-full bg-emerald-300/20 blur-3xl animate-pulse-slow"></div>
              <div className="absolute top-1/3 right-1/4 w-28 h-28 rounded-full bg-emerald-400/25 blur-2xl animate-pulse-slow"></div>
              <div className="absolute top-1/2 left-10 w-24 h-24 rounded-full bg-emerald-500/15 blur-2xl animate-pulse-slow"></div>
              <div className="absolute bottom-10 left-1/2 w-48 h-48 rounded-full bg-emerald-300/10 blur-[100px] animate-pulse-slow"></div>
              <div className="absolute top-0 right-10 w-20 h-20 rounded-full bg-emerald-400/20 blur-xl animate-pulse-slow"></div>
              <div className="absolute bottom-1/3 right-0 w-36 h-36 rounded-full bg-emerald-500/20 blur-3xl animate-pulse-slow"></div>
            </div>
      {/* Background floating glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-32 h-32 rounded-full bg-emerald-400/30 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-1/3 w-40 h-40 rounded-full bg-emerald-300/20 blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center gap-8 text-center">
        <div
          className={`transition-all duration-1000 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Backed by Blockchain. Boosted by AI. Built for Impact.
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Mintellect is more than a marketplace — it&apos;s a movement to
            reimagine how the world unlocks ideas. We begin in India, but our
            vision is global.
          </p>

          {/* Centered button with width just enough for text */}
          <div className="flex justify-center">
            <Link
              href=""
              className="group inline-flex items-center bg-[#F4FF54] text-black rounded-full font-medium shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl px-4 py-2"
            >
              Join the Movement
              <span className="ml-2 flex items-center justify-center p-1 transition-all duration-300 bg-black group-hover:bg-black rounded-full">
                <ArrowUpRight size={16} color="white" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
