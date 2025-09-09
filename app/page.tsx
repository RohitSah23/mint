import Image from "next/image";

import HeroSection from "@/components/hero";
import FooterSection from "@/components/footer";
import HeaderSection from "@/components/header";
import AboutSection from "@/components/about";
import ProblemSection from "@/components/problem";
import SolutionSection from "@/components/solution";
import BenefitSection from "@/components/benefits";
import ContactSection from "@/components/contact";
export default function Home() {
  return (
  <div>
    <HeaderSection />
    <HeroSection />
    <AboutSection />
    <ProblemSection />
    <SolutionSection />
    <BenefitSection />
    <ContactSection />
    <FooterSection />
  </div>
  );
}
