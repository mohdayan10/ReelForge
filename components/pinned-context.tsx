"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

const RevealWord = ({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) => {
    // Single span approach: opacity goes from 0.15 (ghost) to 1.0 (revealed)
    const opacity = useTransform(progress, range, [0.15, 1]);
    return (
        <span className="relative mx-1 lg:mx-2.5 inline-block">
            <motion.span style={{ opacity }} className="text-zinc-900">
                {children}
            </motion.span>
        </span>
    );
};

export function PinnedContext() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const phrase = "Because we know Context does matter.";
    const words = phrase.split(" ");

    return (
        <motion.div
            ref={containerRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
        >
            {/* Section 1: sticks at top, gets covered by section 2 */}
            <section className="h-[80vh] md:h-screen sticky top-0 bg-gradient-to-b from-white to-[#FAF6ED] grid items-center justify-center z-0 pb-16 md:pb-64">
                <div className="px-4 md:px-8 text-center max-w-6xl mx-auto pt-16 md:pt-0">
                    <h2 className="text-4xl md:text-9xl lg:text-[10rem] font-instrument-serif italic mb-6 md:mb-8 text-zinc-900 tracking-tight leading-none">
                        The Context Engine
                    </h2>
                    <p className="font-instrument-serif text-2xl md:text-5xl lg:text-6xl text-zinc-600 leading-snug text-balance px-2">
                        We built our Proprietary Context Engine to help you{" "}
                        <span className="text-zinc-900 font-medium whitespace-nowrap">Own your niche.</span>
                    </p>
                </div>
            </section>

            {/* Section 2: slides up OVER section 1, word-by-word scroll reveal */}
            <section className="min-h-[40vh] md:h-[70vh] sticky top-0 bg-[#FAF6ED] flex items-start justify-center pt-12 md:pt-16 z-10">
                <div className="px-6 text-center max-w-full mx-auto overflow-visible">
                    <h2 className="text-3xl md:text-6xl lg:text-7xl font-instrument-serif text-center flex flex-wrap justify-center items-center leading-tight">
                        {words.map((word, i) => {
                            const start = 0.5 + (i / words.length) * 0.45;
                            const end = start + (1 / words.length) * 0.45;

                            if (word === "Context" || word === "does" || word === "matter.") {
                                return (
                                    <span key={i} className="relative mx-1 lg:mx-2.5 inline-block">
                                        <motion.span
                                            style={{ opacity: useTransform(scrollYProgress, [start, end], [0.15, 1]) }}
                                            className="italic text-pink-500 underline decoration-pink-300 underline-offset-[10px]"
                                        >
                                            {word}
                                        </motion.span>
                                    </span>
                                );
                            }
                            return <RevealWord key={i} progress={scrollYProgress} range={[start, end]}>{word}</RevealWord>;
                        })}
                    </h2>
                </div>
            </section>
        </motion.div>
    );
}
