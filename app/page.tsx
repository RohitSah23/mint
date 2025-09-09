import Image from "next/image";

import HeroSection from "@/components/hero";
import FooterSection from "@/components/footer";
import HeaderSection from "@/components/header";
import AboutSection from "@/components/about";
export default function Home() {
  return (
  <div>
    <HeaderSection />
    <HeroSection />
    <AboutSection />
    <FooterSection />
  </div>
  );
}
