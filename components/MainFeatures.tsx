"use client";
import { BorderBeam } from "./magicui/border-beam";
import { useEffect, useRef } from "react";

export default function MainFeatures() {
  const podcastsVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Force video to play on mount
    if (podcastsVideoRef.current) {
      podcastsVideoRef.current.play().catch(err => console.log("Podcasts video autoplay failed:", err));
    }
  }, []);

  return (
    <div className="relative flex flex-col gap-8 w-full items-center justify-center pb-8 pt-0 md:pt-2 px-2 md:px-0">
      {/* Just Podcasts Video Box */}
      <div className="relative inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background mx-auto max-w-6xl overflow-hidden rounded-xl border p-2 md:p-4 shadow-lg shadow-zinc-950/15 ring-1">
        <video
          ref={podcastsVideoRef}
          className="bg-background w-full relative rounded-xl border border-border/25"
          src="/Demo_.mp4"
          muted
          loop
          playsInline
        />
        <BorderBeam applyInset={false} colorFrom="#89CFF0" colorTo="#89CFF0" borderWidth={3} />
      </div>
    </div>
  );
}
