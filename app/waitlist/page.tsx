import { HeroHeader } from "@/components/header";
import { EnhancedFooter } from "@/components/enhanced-footer";
import Pricing from "@/components/pricing";

export default function WaitlistPage() {
  return (
    <main className="relative min-h-screen bg-[#FAF6ED]">
      <HeroHeader />
      <div className="pt-24">
        <Pricing />
      </div>
      <EnhancedFooter />
    </main>
  );
}
