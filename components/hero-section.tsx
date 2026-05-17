"use client";

import { TextEffect } from "./ui/text-effect";
import { AnimatedGroup } from "./ui/animated-group";
import { HeroHeader } from "./header";

import { motion, useScroll, useTransform } from "framer-motion";
import { ContextExpansion } from "./context-expansion";
import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, ChevronDown } from "lucide-react";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.5,
      },
    },
  },
};

export default function HeroSection() {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const [bgOpacity, setBgOpacity] = useState(1);

  // Stack Swap State
  const [isPhotoSwapped, setIsPhotoSwapped] = useState(false);
  const [isAudioSwapped, setIsAudioSwapped] = useState(false);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  const toggleAudio = () => {
    setIsPlayingAudio(!isPlayingAudio);
    // Auto turn off fake audio player after 5 sec
    if (!isPlayingAudio) {
      setTimeout(() => setIsPlayingAudio(false), 5000);
    }
  };

  const toggleVideoMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isVideoMuted;
      setIsVideoMuted(!isVideoMuted);
    }
  };

  return (
    <div className="relative min-h-screen h-screen overflow-hidden" id="home">
      <HeroHeader />
      <div className="relative h-full w-full flex flex-col items-center justify-center">
        <motion.video
          ref={bgVideoRef}
          src="/Trees_Swaying_in_Gentle_Breeze.mp4"
          className="absolute inset-0 w-full h-full object-[2%_center] md:object-[center_40%] object-cover -z-10 scale-125"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          controlsList="none"
          disablePictureInPicture
          disableRemotePlayback
          preload="metadata"
          initial={{ opacity: 0 }}
          animate={{ opacity: bgOpacity }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          onTimeUpdate={() => {
            if (bgVideoRef.current) {
              const { currentTime, duration } = bgVideoRef.current;
              if (duration - currentTime <= 1) { // Crossfade out in last second
                setBgOpacity(0);
              } else if (currentTime <= 1) { // Crossfade in in first second
                setBgOpacity(1);
              }
            }
          }}
        />
        <section className="relative z-10 w-full flex-grow flex items-center">
          <div className="relative w-full pt-20 md:pt-0">
            <div className="mx-auto max-w-7xl px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left Side: Text */}
              <div className="relative text-left w-full lg:w-1/2 mt-0">
                <div className="relative inline-block mt-4">
                  <motion.h1
                    initial={{ opacity: 0, filter: "blur(4px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="text-4xl md:text-6xl xl:text-[4.5rem] font-instrument-serif bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-400 leading-[1.1] whitespace-nowrap"
                  >
                    Lights, Camera, Action
                  </motion.h1>
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 0.8 }}
                    transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
                    className="absolute top-[52%] left-0 w-full h-[3px] md:h-[4px] bg-red-500 -translate-y-1/2 rounded-full origin-left pointer-events-none"
                  />
                </div>
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.9}
                  as="h2"
                  className="mt-4 text-balance text-4xl md:text-6xl xl:text-[5rem] font-instrument-serif text-zinc-900 leading-[1.1]"
                >
                  Oh no, you don&apos;t need that.
                </TextEffect>
                <div className="mt-8 max-w-xl">
                  <TextEffect
                    per="line"
                    preset="fade-in-blur"
                    speedSegment={0.3}
                    delay={1.1}
                    as="p"
                    className="text-balance text-base md:text-xl font-instrument-serif leading-relaxed text-gray-700"
                  >
                    Our platform transforms your audio and video podcasts into scroll-stopping short-form clips. We find the perfect 60 seconds to help you dominate your niche's audience.
                  </TextEffect>
                </div>
              </div>

              {/* Right Side: Visual Flow */}
              <div className="w-full lg:w-1/2 flex items-center justify-center gap-4 md:gap-8 mt-12 lg:mt-0 relative">
                {/* Input Media */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  className="flex flex-col gap-8 md:gap-10 items-center w-[160px] md:w-[220px]"
                >
                  {/* Photo Stack */}
                  <div
                    className="relative w-full cursor-pointer"
                    onClick={() => setIsPhotoSwapped(!isPhotoSwapped)}
                  >
                    {/* Back card */}
                    <div className={`absolute inset-0 bg-white p-2 md:p-3 rounded-2xl shadow-md border border-gray-100 transition-all duration-500 ${isPhotoSwapped ? 'z-10 rotate-[-2deg] translate-x-0 translate-y-0 scale-100' : 'z-0 rotate-[5deg] translate-x-2 translate-y-3 scale-95 opacity-60'}`}>
                      <img
                        src="/woman_2.jpeg"
                        alt="Input Media Variant"
                        className="w-full h-full aspect-square object-cover rounded-xl"
                      />
                    </div>
                    {/* Front card */}
                    <div className={`bg-white p-2 md:p-3 rounded-2xl shadow-xl border border-gray-100 w-full relative group transition-all duration-500 ${isPhotoSwapped ? 'z-0 rotate-[5deg] translate-x-2 translate-y-3 scale-95 opacity-60' : 'z-10 rotate-[-2deg] translate-x-0 translate-y-0 scale-100'}`}>
                      <img
                        src="/premium_photo-1674823160036-d9506f9d1a61.jpg"
                        alt="Input Media"
                        className="w-full h-auto aspect-square object-cover rounded-xl relative z-10"
                      />
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-md border border-gray-100 whitespace-nowrap hidden group-hover:block transition-all z-20">
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Input Media</span>
                      </div>
                    </div>
                  </div>

                  {/* Audio Stack */}
                  <div
                    className="relative w-full cursor-pointer"
                    onClick={() => setIsAudioSwapped(!isAudioSwapped)}
                  >
                    {/* Back card */}
                    <div className={`absolute inset-0 bg-white p-3 rounded-2xl shadow-md border border-gray-100 flex items-center gap-3 transition-all duration-500 ${isAudioSwapped ? 'z-10 rotate-[2deg] translate-x-0 translate-y-0 scale-100' : 'z-0 -rotate-[4deg] -translate-x-2 translate-y-4 scale-95 opacity-60'}`}>
                      <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        <Play size={18} className="ml-1 opacity-50" />
                      </div>
                      <div className="flex flex-col flex-1 overflow-hidden opacity-50">
                        <span className="text-xs font-bold text-zinc-700 leading-tight truncate">Input Audio 2</span>
                        <span className="text-[10px] text-zinc-400 truncate">Interview_raw.mp3</span>
                      </div>
                    </div>
                    {/* Front card */}
                    <div className={`bg-white p-3 rounded-2xl shadow-xl border border-gray-100 w-full relative flex items-center gap-3 transition-all duration-500 ${isAudioSwapped ? 'z-0 -rotate-[4deg] -translate-x-2 translate-y-4 scale-95 opacity-60' : 'z-10 rotate-[2deg] translate-x-0 translate-y-0 scale-100'}`}>
                      <button
                        onClick={(e) => { e.stopPropagation(); toggleAudio(); }}
                        className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 flex items-center justify-center shrink-0 transition-colors tooltip-trigger"
                      >
                        {isPlayingAudio ? <Pause size={18} /> : <Play size={18} className="ml-1" />}
                      </button>
                      <div className="flex flex-col flex-1 overflow-hidden">
                        <span className="text-xs font-bold text-zinc-700 leading-tight truncate">Input Audio</span>
                        <span className="text-[10px] text-zinc-400 truncate">Podcast.m4a</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Arrow */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.3, type: "spring" }}
                  className="z-10"
                >
                  <svg className="w-8 h-8 md:w-12 md:h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.div>

                {/* Output Video */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1, duration: 0.4 }}
                  className="w-[180px] md:w-[250px]"
                >
                  <div className="bg-white p-2 md:p-3 rounded-2xl shadow-2xl border border-gray-100 rotate-[1deg]">
                    <div className="rounded-xl overflow-hidden bg-black relative aspect-[9/16] group/video cursor-pointer" onClick={toggleVideoMute}>
                      <video
                        ref={videoRef}
                        src="/smart-rings-demo.mov"
                        className="w-full h-full object-cover transition-opacity duration-300"
                        autoPlay
                        muted={isVideoMuted}
                        loop
                        playsInline
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover/video:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white shadow-xl">
                          {isVideoMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>


          </div>
        </section>

        {/* Scroll Indicator Arrow */}
        <motion.div
          style={{ opacity }}
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.5,
            delay: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 cursor-pointer"
        >
          <span className="text-zinc-500 text-xs font-bold tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-10 h-10 rounded-full border-2 border-zinc-200 bg-white/80 backdrop-blur-md flex items-center justify-center text-zinc-900 shadow-lg">
            <ChevronDown className="w-6 h-6" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

