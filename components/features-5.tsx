import {
  Brain,
  Image,
  Focus,
  Captions,
  TrendingUp,
  FlaskConical,
  User,
  Zap,
  Scissors,
  FileCode,
} from "lucide-react";
import { BorderBeam } from "./magicui/border-beam";
import { Card } from "./ui/card";
import MainFeatures from "./MainFeatures";
import { TextEffect } from "./ui/text-effect";
import AudioVideoDemo from "./audio-video-demo";
import { PinnedContext } from "./pinned-context";

export default function FeaturesSection() {
  return (
    <section className="py-0 md:py-0" id="features">
      {/* Context Engine Section - full width for seamless bg */}
      <PinnedContext />

      <div className="mx-auto max-w-full px-2 md:px-6 bg-[#FAF6ED] pb-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row mt-0 relative">
          <div className="w-full">

            {/* Context Engine Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 -mt-48 md:-mt-[40vh] relative z-20 animate-in fade-in duration-500 slide-in-from-bottom-8">
              {[
                {
                  icon: Brain,
                  text: "Niche Intelligence",
                  description: <><strong>Proprietary data</strong> across every niche. Upload your audio or video and we auto-detect your niche — then create a clip to dominate it.</>,
                  color: "text-purple-500",
                },
                {
                  icon: Zap,
                  text: "Hook Detection",
                  description: "Finds the twist. Identifies the most compelling moments that make viewers stop scrolling.",
                  color: "text-yellow-500",
                },
                {
                  icon: User,
                  text: "Audio-to-Avatar",
                  description: "Transform audio-only content into photorealistic video with consistent character generation.",
                  color: "text-green-500",
                },
                {
                  icon: TrendingUp,
                  text: "Viral Structure",
                  description: "Every clip is self-contained. Complete value in under 90 seconds — no half-ideas.",
                  color: "text-emerald-500",
                },
                {
                  icon: Image,
                  text: "Visual Consistency",
                  description: "Studio-quality output with no flickering or artifacts. Maintains consistency across 60+ seconds.",
                  color: "text-orange-500",
                },
                {
                  icon: Focus,
                  text: "Omnichannel Distribution",
                  description: "Optimized for TikTok, Reels, Shorts, and in-app highlights. One input, every platform.",
                  color: "text-pink-500",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden relative flex bg-transparent flex-col h-auto gap-3 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                >
                  <item.icon className={`size-8 flex-shrink-0 ${item.color}`} />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-base font-instrument-serif font-semibold text-gray-900">
                      {item.text}
                    </h3>
                    <p className="text-sm font-instrument-serif text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out absolute inset-0">
                    <BorderBeam duration={4} borderWidth={1.5} />
                  </div>
                </Card>
              ))}
            </div>

            {/* Post Processing Section */}
            <div className="flex flex-col justify-center gap-2 items-center mt-20">
              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h2"
                className="text-4xl font-instrument-serif lg:text-5xl [&>span:nth-last-child(-n+2)]:italic"
              >
                Post Processing
              </TextEffect>
              <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.5}
                as="p"
                className="text-center font-instrument-serif max-w-3xl"
              >
                Once we find the gold, we polish it. Every clip gets the finishing touches that make it ready to publish.
              </TextEffect>
            </div>

            {/* Post Processing Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 animate-in fade-in duration-1000 slide-in-from-bottom-8">
              {[
                {
                  icon: Scissors,
                  text: "Silence Removal",
                  description: "Cuts dead air, filler words, and awkward pauses automatically.",
                  color: "text-rose-500",
                },
                {
                  icon: Captions,
                  text: "Auto-Captioning",
                  description: "Styled captions that drive SEO and retention, branded to your style.",
                  color: "text-cyan-500",
                },
                {
                  icon: FileCode,
                  text: "XML Export",
                  description: "Export to Premiere, Final Cut, or DaVinci for full control.",
                  color: "text-amber-500",
                },
                {
                  icon: FlaskConical,
                  text: "A/B Variations",
                  description: "Multiple hook variations per clip. Test what works before you post.",
                  color: "text-violet-500",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden relative flex bg-transparent flex-col h-auto gap-3 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                >
                  <item.icon className={`size-8 flex-shrink-0 ${item.color}`} />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-base font-instrument-serif font-semibold text-gray-900">
                      {item.text}
                    </h3>
                    <p className="text-sm font-instrument-serif text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out absolute inset-0">
                    <BorderBeam duration={4} borderWidth={1.5} />
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-12 md:mt-16">
              <MainFeatures />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
