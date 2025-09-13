import { useState, useEffect } from "react";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";

// Example placeholder patent/IP SVGs
const ipLogos = [
  "/patent-doc.png",
  "/blockchain.png",
  "/copyright.png",
  "/tokenization.png",
  "/ip-protection.png",
];

export function OrbitingCirclesDemo() {
  const [outerRadius, setOuterRadius] = useState(180);
  const [innerRadius, setInnerRadius] = useState(100);

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 768) {
        setOuterRadius(120); // mobile outer orbit
        setInnerRadius(75);  // mobile inner orbit
      } else {
        setOuterRadius(180); // md+ outer orbit
        setInnerRadius(100); // md+ inner orbit
      }
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <div className="relative flex h-[320px] w-[320px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] flex-col items-center justify-center overflow-hidden">
      {/* Background ring for outer orbit */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="rounded-full border border-gray-400/40"
          style={{
            width: outerRadius * 2,
            height: outerRadius * 2,
          }}
        />
      </div>

      {/* OUTER ORBIT */}
      <OrbitingCircles iconSize={50} radius={outerRadius} speed={1.5}>
        {ipLogos.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={`IP icon ${i + 1}`}
            className="w-12 h-12 object-contain drop-shadow-lg"
          />
        ))}
      </OrbitingCircles>

      {/* INNER ORBIT */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="rounded-full border border-gray-400/40"
          style={{
            width: innerRadius * 2,
            height: innerRadius * 2,
          }}
        />
      </div>
      <OrbitingCircles iconSize={40} radius={innerRadius} reverse speed={2}>
        {ipLogos.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt={`IP icon ${i + 1}`}
            className="w-12 h-12 object-contain drop-shadow-lg"
          />
        ))}
      </OrbitingCircles>
    </div>
  );
}
