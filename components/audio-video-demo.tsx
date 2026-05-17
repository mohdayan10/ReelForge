"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, ArrowRight, Music, Video as VideoIcon } from "lucide-react";
import { cn } from "@/lib/utils";

import { TextEffect } from "./ui/text-effect";
import { BorderBeam } from "./magicui/border-beam";

export default function AudioVideoDemo() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlayingAudio, setIsPlayingAudio] = useState(false);
    const [isPlayingVideo, setIsPlayingVideo] = useState(false);

    const toggleAudio = () => {
        if (audioRef.current) {
            if (isPlayingAudio) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlayingAudio(!isPlayingAudio);
        }
    };

    const toggleVideo = () => {
        if (videoRef.current) {
            if (isPlayingVideo) {
                videoRef.current.pause();
            } else {
                videoRef.current.currentTime = 0;
                videoRef.current.muted = false; // Unmute on user interaction
                videoRef.current.play();
            }
            setIsPlayingVideo(!isPlayingVideo);
        }
    };

    return (
        <section className="w-full max-w-4xl mx-auto my-4 md:my-8 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center gap-6"
            >
                {/* Demo Area */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full mt-8">

                    {/* Inputs Column */}
                    <div className="flex flex-col gap-6 w-full md:w-auto">
                        {/* Audio Player Card */}
                        <motion.div
                            className="relative group w-full md:w-80 p-6 bg-white rounded-3xl shadow-[8px_8px_16px_#d1d5db,-8px_-8px_16px_#ffffff] border border-white/50 flex flex-col items-center gap-4 overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <BorderBeam
                                applyInset={false}
                                colorFrom="#89CFF0"
                                colorTo="#3498DB"
                                borderWidth={4}
                                duration={6}
                                className="drop-shadow-[0_0_16px_rgba(52,152,219,1)] drop-shadow-[0_0_32px_rgba(137,207,240,0.6)]"
                            />
                            <div className="flex items-center justify-center size-16 rounded-full bg-blue-50 text-blue-500 shadow-inner">
                                <Music className="size-8" />
                            </div>
                            <div className="text-center px-2">
                                <h3 className="font-bold text-zinc-700 font-instrument-serif">Input Audio</h3>
                                <p className="text-xs text-zinc-400 font-instrument-serif">Original Podcast Clip</p>
                            </div>

                            <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden mt-2">
                                {/* Simple progress bar Visual only since interacting with default audio element is hidden */}
                                <div className={cn("h-full bg-blue-400 transition-all duration-300", isPlayingAudio ? "w-full animate-pulse" : "w-0")} />
                            </div>

                            <button
                                onClick={toggleAudio}
                                className="mt-2 flex items-center justify-center size-12 rounded-full bg-blue-500 text-white shadow-lg shadow-blue-500/30 hover:bg-blue-600 transition-all active:scale-95"
                            >
                                {isPlayingAudio ? <Pause className="size-5 fill-current" /> : <Play className="size-5 fill-current ml-1" />}
                            </button>

                            <audio
                                ref={audioRef}
                                src="/audio-transcript.m4a"
                                onEnded={() => setIsPlayingAudio(false)}
                                className="hidden"
                            />
                        </motion.div>

                        {/* Image Input Card */}
                        <motion.div
                            className="relative group w-full md:w-80 aspect-square rounded-3xl shadow-[8px_8px_16px_#d1d5db,-8px_-8px_16px_#ffffff] border border-white/50 overflow-hidden bg-zinc-100"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <img
                                src="/woman_2.jpeg"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* Animated Arrow */}
                    <div className="flex flex-col items-center gap-2 text-zinc-300">
                        <motion.div
                            animate={{ x: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <ArrowRight className="size-8 md:size-12 text-zinc-400" />
                        </motion.div>
                        <span className="text-xs font-instrument-serif font-medium text-zinc-400 uppercase tracking-widest">Processing</span>
                    </div>

                    {/* Video Player Card */}
                    <motion.div
                        className="relative group w-full md:w-64 aspect-[9/16] bg-zinc-900 rounded-3xl shadow-[12px_12px_24px_#d1d5db,-8px_-8px_16px_#ffffff] border-4 border-white overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <BorderBeam
                            applyInset={false}
                            colorFrom="#89CFF0"
                            colorTo="#3498DB"
                            borderWidth={4}
                            duration={6}
                            className="drop-shadow-[0_0_16px_rgba(52,152,219,1)] drop-shadow-[0_0_32px_rgba(137,207,240,0.6)]"
                        />
                        <video
                            ref={videoRef}
                            src="/generated-video.mp4"
                            className="w-full h-full object-cover"
                            poster="/placeholder-poster.png" // Optional
                            autoPlay
                            muted
                            loop
                            playsInline
                        />

                        {/* Custom Overlay Controls */}
                        <div className={cn(
                            "absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300",
                            isPlayingVideo ? "opacity-0 hover:opacity-100" : "opacity-100"
                        )}>
                            <button
                                onClick={toggleVideo}
                                className="flex items-center justify-center size-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-xl hover:scale-110 transition-all active:scale-95"
                            >
                                {isPlayingVideo ? <Pause className="size-6 fill-current" /> : <Play className="size-6 fill-current ml-1" />}
                            </button>
                        </div>

                        <div className="absolute bottom-4 left-4 right-4 py-2 px-3 bg-black/40 backdrop-blur-md rounded-xl border border-white/10">
                            <div className="flex items-center gap-2 text-white/90">
                                <VideoIcon className="size-3" />
                                <span className="text-xs font-medium font-instrument-serif">AI Generated Output</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section >
    );
}
