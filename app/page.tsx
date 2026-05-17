import CallToAction from "@/components/call-to-action";
import FeaturesSection from "@/components/features-5";
import { EnhancedFooter } from "@/components/enhanced-footer";
import HeroSection from "@/components/hero-section";
import HashScrollHandler from "@/components/hash-scroll-handler";

export default function Page() {
  return (
    <div className="w-full flex flex-col">
      <HashScrollHandler />
      <HeroSection />
      <div className="relative pb-0 bg-[#FAF6ED]">
        <FeaturesSection />
        <CallToAction />
      </div>
      <EnhancedFooter />
    </div>
  );
}
