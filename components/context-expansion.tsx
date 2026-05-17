"use client";

import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import React, { useState } from "react";
import {
    Sparkles,
    Zap,
    Type,
    Hash,
    Layout,
    FileText,
    Mic,
    Scissors,
    UploadCloud,
    Palette,
    Share,
    Languages,
    Activity,
    Smartphone,
    Clock,
    Crosshair,
    ArrowLeft,
    ChevronLeft,
    ChevronRight
} from "lucide-react";
import { BorderBeam } from "./magicui/border-beam";
import { cn } from "@/lib/utils";

// Define the steps directly
const STEPS = [
    { icon: UploadCloud, label: "Upload", color: "bg-zinc-100 text-zinc-600" },
    { icon: Mic, label: "Transcribe", color: "bg-blue-50 text-blue-600", expandable: true },
    { icon: Sparkles, label: "Context", color: "bg-pink-50 text-pink-600 shadow-pink-100 ring-4 ring-pink-50/50", expandable: true },
    { icon: Scissors, label: "Clips", color: "bg-blue-50 text-blue-600", expandable: true },
    { icon: Palette, label: "Style", color: "bg-zinc-100 text-zinc-600", expandable: true },
    { icon: Share, label: "Export", color: "bg-zinc-100 text-zinc-600" },
];

const SIGNAL_CONFIG: Record<string, any[]> = {
    Transcribe: [
        { icon: Activity, label: "Waveform", x: -200, y: 0, delay: 0.1 },
        { icon: FileText, label: "Text", x: 200, y: 0, delay: 0.2 },
        { icon: Languages, label: "Languages", x: 0, y: -160, delay: 0.3 },
        { icon: Zap, label: "Confidence", x: 0, y: 160, delay: 0.4 },
    ],
    Context: [
        { icon: Type, label: "Keywords", x: -260, y: 0, delay: 0.3 },
        { icon: Hash, label: "Topics", x: 260, y: 0, delay: 0.15 },
        { icon: Layout, label: "Structure", x: -200, y: 120, delay: 0.25 },
        { icon: Sparkles, label: "Hooks", x: 200, y: 120, delay: 0.35 },
        { icon: FileText, label: "Script", x: -200, y: -160, size: "sm", delay: 0.4 },
        { icon: Mic, label: "Tone", x: 200, y: -160, size: "sm", delay: 0.45 },
        { icon: Scissors, label: "Cuts", x: 0, y: -220, size: "sm", delay: 0.5 },
    ],
    Clips: [
        { icon: Zap, label: "Viral Score", x: -200, y: 0, delay: 0.1 },
        { icon: Smartphone, label: "9:16", x: 200, y: 0, delay: 0.2 },
        { icon: Clock, label: "Duration", x: 0, y: -160, delay: 0.3 },
        { icon: Crosshair, label: "Focus", x: 0, y: 160, delay: 0.4 },
    ],
    Style: [
        { icon: Palette, label: "Palette", x: -200, y: 0, delay: 0.1 },
        { icon: Type, label: "Fonts", x: 200, y: 0, delay: 0.2 },
        { icon: FileText, label: "Captions", x: 0, y: -160, delay: 0.3 },
        { icon: Sparkles, label: "Animation", x: 0, y: 160, delay: 0.4 },
    ]
};

export function ContextExpansion() {
    const [activeStep, setActiveStep] = useState<string | null>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const clickCooldownRef = React.useRef(false);
    const [isMobile, setIsMobile] = useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Calculate height based on if ANY step is active
    const isExpanded = !!activeStep;

    const handleStepEnter = (stepLabel: string) => {
        if (!clickCooldownRef.current && STEPS.find(s => s.label === stepLabel)?.expandable) {
            setActiveStep(stepLabel);
            // Auto scroll to center on hover
            setTimeout(() => {
                if (containerRef.current) {
                    containerRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
                }
            }, 100);
        }
    };

    const handleStepClick = (e: React.MouseEvent, stepLabel: string) => {
        e.stopPropagation();
        if (activeStep === stepLabel) {
            setActiveStep(null);
            clickCooldownRef.current = true;
            setTimeout(() => {
                clickCooldownRef.current = false;
            }, 500);
        }
    };

    return (
        <div className="relative w-full flex items-center justify-center">
            {/* Visual Card Container */}
            <div
                ref={containerRef}
                className={cn(
                    "relative w-full max-w-5xl mx-4 md:mx-auto bg-white rounded-xl border border-zinc-200/50 shadow-lg shadow-zinc-950/5 overflow-hidden p-4 md:p-8 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1.0)]",
                    isExpanded ? "h-[450px] md:h-[550px]" : "h-[120px] md:h-[160px]"
                )}
            >
                <LayoutGroup>
                    <div className="absolute inset-0 flex items-center justify-center">

                        {/* 1. DETAIL VIEW (Absolute Centered) */}
                        <AnimatePresence mode="popLayout">
                            {isExpanded && activeStep && (
                                <>
                                    {/* THE HERO ICON (Must be outside the opacity fading wrapper to morph correctly) */}
                                    <motion.div
                                        key="hero-icon-wrapper"
                                        className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
                                    >
                                        <motion.div
                                            layoutId={`step-icon-${activeStep}`}
                                            className={cn(
                                                "flex items-center justify-center size-12 md:size-16 rounded-2xl shadow-sm border border-zinc-100 cursor-pointer overflow-hidden pointer-events-auto",
                                                STEPS.find(s => s.label === activeStep)?.color
                                            )}
                                            // Animate borderRadius appropriately so it doesn't look like a square when huge
                                            style={{ width: 64, height: 64, borderRadius: 24 }}
                                            animate={{
                                                width: isMobile ? 180 : 224, // Smaller on mobile
                                                height: isMobile ? 180 : 224,
                                                borderRadius: isMobile ? 40 : 56
                                            }}
                                            onClick={(e) => handleStepClick(e, activeStep)}
                                            // Add drag handlers for mobile swipe
                                            drag="x"
                                            dragConstraints={{ left: 0, right: 0 }}
                                            dragElastic={0.2}
                                            onDragEnd={(e, { offset, velocity }) => {
                                                const swipe = offset.x; // positive = right, negative = left
                                                const expandableSteps = STEPS.filter(s => s.expandable);
                                                const currentIndex = expandableSteps.findIndex(s => s.label === activeStep);

                                                if (swipe < -50 && currentIndex < expandableSteps.length - 1) {
                                                    // Swipe Left -> Next
                                                    setActiveStep(expandableSteps[currentIndex + 1].label);
                                                } else if (swipe > 50 && currentIndex > 0) {
                                                    // Swipe Right -> Prev
                                                    setActiveStep(expandableSteps[currentIndex - 1].label);
                                                }
                                            }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 30
                                            }}
                                        >
                                            <motion.div
                                                layoutId={`step-icon-inner-${activeStep}`}
                                                className="flex items-center justify-center"
                                                initial={false}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.5 }}
                                            >
                                                {(() => {
                                                    const StepIcon = STEPS.find(s => s.label === activeStep)?.icon || Sparkles;
                                                    return <StepIcon className="size-8 md:size-12" />; // Scaled up icon
                                                })()}
                                            </motion.div>
                                        </motion.div>
                                    </motion.div>

                                    {/* Mobile Hint */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="md:hidden absolute bottom-12 left-1/2 -translate-x-1/2 text-xs text-zinc-400 font-instrument-serif pointer-events-none"
                                    >
                                        Slide to see the rest
                                    </motion.div>

                                    {/* CONTROLS & SIGNALS (Fade in/out separately) */}
                                    <motion.div
                                        key="detail-controls"
                                        className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
                                    >
                                        {/* Back to Timeline Button */}
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
                                            className="absolute top-8 left-8 z-40 flex items-center gap-2 cursor-pointer group pointer-events-auto"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setActiveStep(null);
                                            }}
                                        >
                                            <div className="p-2 rounded-full bg-zinc-100 group-hover:bg-zinc-200 transition-colors">
                                                <ArrowLeft className="size-4 md:size-5 text-zinc-600" />
                                            </div>
                                            <span className="text-sm font-bold text-zinc-600 font-instrument-serif group-hover:text-zinc-900 transition-colors">Back to Timeline</span>
                                        </motion.div>

                                        {/* Navigation Arrows */}
                                        {(() => {
                                            const expandableSteps = STEPS.filter(s => s.expandable);
                                            const currentIndex = expandableSteps.findIndex(s => s.label === activeStep);
                                            const prevStep = expandableSteps[currentIndex - 1];
                                            const nextStep = expandableSteps[currentIndex + 1];

                                            return (
                                                <>
                                                    {/* Previous Arrow */}
                                                    {prevStep && (
                                                        <motion.div
                                                            initial={{ opacity: 0, x: 20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            exit={{ opacity: 0, x: 20 }}
                                                            transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
                                                            className="hidden md:block absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-white/80 border border-zinc-200 shadow-sm cursor-pointer hover:bg-white hover:scale-110 transition-all pointer-events-auto"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setActiveStep(prevStep.label);
                                                            }}
                                                        >
                                                            <ChevronLeft className="size-6 text-zinc-600" />
                                                        </motion.div>
                                                    )}

                                                    {/* Next Arrow */}
                                                    {nextStep && (
                                                        <motion.div
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            exit={{ opacity: 0, x: -20 }}
                                                            transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
                                                            className="hidden md:block absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-white/80 border border-zinc-200 shadow-sm cursor-pointer hover:bg-white hover:scale-110 transition-all pointer-events-auto"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setActiveStep(nextStep.label);
                                                            }}
                                                        >
                                                            <ChevronRight className="size-6 text-zinc-600" />
                                                        </motion.div>
                                                    )}
                                                </>
                                            );
                                        })()}

                                        {/* Signals */}
                                        {SIGNAL_CONFIG[activeStep] && (
                                            <div className="absolute inset-0 pointer-events-none">
                                                {SIGNAL_CONFIG[activeStep].map((signal, idx) => (
                                                    <motion.div
                                                        key={`${activeStep}-${idx}`}
                                                        initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
                                                        animate={{
                                                            opacity: 1,
                                                            scale: 1,
                                                            x: signal.x * (isMobile ? 0.45 : 1), // Tighter spread on mobile
                                                            y: signal.y * (isMobile ? 0.45 : 1)
                                                        }}
                                                        exit={{ opacity: 0, scale: 0.5 }}
                                                        transition={{
                                                            duration: 0.5,
                                                            delay: 0.1 + (signal.delay ? signal.delay * 0.3 : 0),
                                                            type: "spring",
                                                            bounce: 0.4
                                                        }}
                                                        className={cn(
                                                            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2",
                                                            signal.size === "sm" ? "scale-90" : "scale-100"
                                                        )}
                                                    >
                                                        <div className="p-2 md:p-3 rounded-2xl bg-white/95 backdrop-blur-md shadow-sm border border-zinc-100 text-zinc-500">
                                                            <signal.icon className="size-5 md:size-6" />
                                                        </div>
                                                        <span className="text-xs md:text-sm font-bold text-zinc-600 font-instrument-serif bg-white/50 backdrop-blur-sm px-1.5 rounded-md">{signal.label}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        )}
                                    </motion.div>
                                </>
                            )}
                        </AnimatePresence>

                        {/* 2. LIST VIEW (Flex Row) */}
                        <motion.div
                            className="relative flex items-center justify-between md:justify-start w-full md:w-auto px-2 md:px-0 pt-8 md:pt-0 pb-12 md:pb-0 gap-2 md:gap-8 z-20"
                            animate={{
                                // We don't hide the WHOLE list anymore, just the non-active ones fade out maybe?
                                // Or simpler: The list STAYS, but the active item 'leaves' it via layoutId.
                                // But for clarity, let's keep the fade out behavior for the *rest* of the list.
                                opacity: isExpanded ? 0 : 1,
                                pointerEvents: isExpanded ? "none" : "auto",
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            {STEPS.map((step, idx) => (
                                <React.Fragment key={idx}>
                                    {/* Connector */}
                                    {idx > 0 && (
                                        <div className="block h-px w-2 md:w-8 bg-zinc-400/50 flex-shrink-0" />
                                    )}

                                    {/* Step Node */}
                                    <div className="relative flex flex-col items-center gap-2 -mt-1 md:-mt-2">
                                        <motion.div
                                            layoutId={`step-icon-${step.label}`}
                                            className={cn(
                                                "relative z-20 cursor-pointer flex items-center justify-center size-9 md:size-12 rounded-xl md:rounded-2xl shadow-sm transition-shadow duration-300 bg-white border border-zinc-100",
                                                !step.expandable && "cursor-default",
                                                "snap-center flex-shrink-0", // Ensure valid target for click/snap
                                                step.color
                                            )}
                                            whileHover={!isExpanded && step.expandable ? { scale: 1.2 } : {}}
                                            animate={{ borderRadius: 16 }} // Explicitly force border radius back to 16px (rounded-2xl) to prevent sticking at 56px
                                            onClick={(e) => step.expandable && handleStepClick(e, step.label)}
                                            onMouseEnter={() => handleStepEnter(step.label)}
                                        // When expanded, the specific active node needs to be hidden HERE so it's only shown in the Detail View
                                        // style={{ opacity: activeStep === step.label ? 0 : 1 }}
                                        >
                                            <motion.div layoutId={`step-icon-inner-${step.label}`} className="flex items-center justify-center">
                                                <step.icon className="size-6 md:size-8" />
                                            </motion.div>
                                        </motion.div>

                                        {/* Labels */}
                                        <motion.span
                                            initial={{ opacity: 1 }}
                                            animate={{ opacity: isExpanded ? 0 : 1 }}
                                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 text-[10px] md:text-base font-bold text-zinc-600 whitespace-nowrap font-instrument-serif bg-white/50 backdrop-blur-sm px-1 rounded-md"
                                        >
                                            {step.label}
                                        </motion.span>
                                    </div>
                                </React.Fragment>
                            ))}
                        </motion.div>
                    </div>
                </LayoutGroup>
                <BorderBeam
                    applyInset={false}
                    colorFrom="#89CFF0"
                    colorTo="#3498DB"
                    borderWidth={4}
                    className="drop-shadow-[0_0_16px_rgba(52,152,219,1)] drop-shadow-[0_0_32px_rgba(137,207,240,0.6)]"
                />
            </div >
        </div >
    );
}
