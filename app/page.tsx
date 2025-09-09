import Image from "next/image";

import HeroSection from "@/components/hero";
import FooterSection from "@/components/footer";
import HeaderSection from "@/components/header";

export default function Home() {
  return (
  <div>
    <HeaderSection />
    <HeroSection />
    <FooterSection />
  </div>
  );
}
