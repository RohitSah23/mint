import { OrbitingCircles } from "@/components/magicui/orbiting-circles";

// Example placeholder patent/IP SVGs (you can replace `src` with custom SVG paths or logos)
const ipLogos = [
  "/patent-doc.png",
  "/blockchain.png",
  "/copyright.png",
  "/tokenization.png",
  "/ip-protection.png",
];

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[500px] w-[500px] flex-col items-center justify-center overflow-hidden">
      {/* Background ring for visibility */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[380px] w-[380px] rounded-full border border-gray-400/40" />
      </div>

      {/* OUTER ORBIT */}
      <OrbitingCircles iconSize={50} radius={180} speed={1.5}>
        {/* Patent/IP-related SVG logos */}
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
        <div className="h-[200px] w-[200px] rounded-full border border-gray-400/40" />
      </div>
      <OrbitingCircles iconSize={40} radius={100} reverse speed={2}>
        {/* Lucide icons for extra visual interest */}
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
