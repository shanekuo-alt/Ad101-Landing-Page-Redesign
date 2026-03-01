import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FunnelSection from "@/components/FunnelSection";
import HeroFunnelWrapper from "@/components/HeroFunnelWrapper";
import HowItWorks from "@/components/HowItWorks";
import WhatYoullGet from "@/components/WhatYoullGet";
import WhoIsZan from "@/components/WhoIsZan";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import CurveDivider from "@/components/CurveDivider";
export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <HeroFunnelWrapper>
          <HeroSection />
          <FunnelSection />
        </HeroFunnelWrapper>
        <CurveDivider fill="#FEF1E5" bg="#FAFAFA" height={80} />
        <HowItWorks />
        <CurveDivider fill="#FAFAFA" bg="#FEF1E5" flip />
        <WhatYoullGet />
        <CurveDivider fill="#FEF1E5" bg="#FAFAFA" />
        <WhoIsZan />
        <Testimonials />
        <CurveDivider fill="#FAFAFA" bg="#FEF1E5" flip />
        <FAQ />
        <CurveDivider fill="#FEF1E5" bg="#1E2024" />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
