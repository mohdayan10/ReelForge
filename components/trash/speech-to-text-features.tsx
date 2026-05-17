"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Mic } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BorderBeam } from "@/components/magicui/border-beam";

export default function SpeechToTextFeatures() {
  type FeatureKey = "openai-whisper" | "elevenlabs-stt";

  const [activeItem, setActiveItem] = useState<FeatureKey>("openai-whisper");

  const features = {
    "openai-whisper": {
      title: "OpenAI Whisper Setup",
      icon: Mic,
      content:
        "Add your OpenAI API key and select Whisper model. Pluely integrates seamlessly with OpenAI's Whisper for high-quality speech-to-text transcription. Experience industry-leading accuracy with support for multiple languages and audio formats.",
      video: "https://assets.pluely.com/openai-stt.mp4",
      alt: "OpenAI Whisper STT setup and configuration",
    },
    "elevenlabs-stt": {
      title: "ElevenLabs STT Setup",
      icon: Mic,
      content:
        "Add your ElevenLabs API key and select model. Get professional-grade speech recognition with ElevenLabs' advanced voice processing. Perfect for applications requiring high accuracy and real-time transcription capabilities.",
      video: "https://assets.pluely.com/elevenlabs-stt.mp4",
      alt: "ElevenLabs STT setup and configuration",
    },
  };

  const additionalProviders = [
    {
      title: "Additional Speech to Text Providers",
      providers: [
        "Groq Whisper: Add your Groq API key and select Whisper model for lightning-fast transcription",
        "Google Speech-to-Text: Add your Google API key for Google's advanced speech recognition",
        "Deepgram STT: Add your Deepgram API key and select model for enterprise-grade transcription",
        "Azure Speech-to-Text: Add your Azure subscription key and configure region for Microsoft's STT",
        "Speechmatics: Add your Speechmatics API key for specialized transcription services",
        "Rev.ai STT: Add your Rev.ai API key for high-accuracy speech-to-text conversion",
        "IBM Watson STT: Add your IBM Watson API key and configure service for Watson's STT capabilities",
      ],
    },
  ];

  const sttFeatures = [
    {
      title: "Custom STT Provider Setup",
      providers: [
        "Any Speech Recognition API: Add any STT provider with REST API support and full flexibility",
        "Dynamic Variables: Create custom variables using {{VARIABLE_NAME}} format in curl commands",
        "Real-Time Testing: Test your custom STT provider setup instantly",
      ],
    },
  ];

  return (
    <section className="py-6 md:py-10 lg:py-16">
      <div className="hidden md:absolute bg-linear-to-b inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
        <div className="relative z-10 mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-6xl">
            Speech-to-Text Integration
          </h2>
          <p className="text-muted-foreground">
            Pluely now supports advanced curl-based integration for
            speech-to-text providers, giving you ultimate flexibility to
            integrate any STT service. Connect to any speech API using simple
            curl commands, opening up endless possibilities for your voice
            workflows.
          </p>
        </div>

        <div className="grid gap-6 sm:px-6 md:grid-cols-[0.8fr_1.2fr] lg:grid-cols-[0.7fr_1.3fr]">
          <Accordion
            type="single"
            value={activeItem}
            onValueChange={(value) => setActiveItem(value as FeatureKey)}
            className="w-full"
          >
            {Object.entries(features).map(([key, feature]) => {
              const IconComponent = feature.icon;
              return (
                <AccordionItem key={key} value={key}>
                  <AccordionTrigger>
                    <div className="flex items-center gap-2 text-base">
                      <IconComponent className="size-4" />
                      {feature.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>{feature.content}</AccordionContent>
                </AccordionItem>
              );
            })}
            <div className="flex flex-col gap-4 mt-4">
              {sttFeatures.map((section, sectionIndex) => (
                <div key={sectionIndex} className="space-y-4">
                  <h3 className="text-2xl font-semibold text-center">
                    {section.title}
                  </h3>
                  <div className="flex flex-col gap-4">
                    {section.providers.map((provider, providerIndex) => (
                      <div
                        key={providerIndex}
                        className="bg-background rounded-xl border p-4 hover:bg-accent transition-colors"
                      >
                        <p className="text-sm text-muted-foreground">
                          {provider}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Accordion>

          <div className="w-full bg-background relative flex overflow-hidden rounded-xl border p-2">
            <div className="bg-background relative w-full rounded-xl">
              <AnimatePresence mode="wait">
                {features[activeItem].video ? (
                  <motion.div
                    key={`${activeItem}-video`}
                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="size-full overflow-hidden rounded-xl border bg-black/20 shadow-md"
                  >
                    <video
                      src={features[activeItem].video!}
                      className="size-full object-cover object-left-top dark:mix-blend-lighten"
                      width={1207}
                      height={929}
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls={false}
                      controlsList="none"
                      disablePictureInPicture
                      disableRemotePlayback
                      preload="metadata"
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key={`${activeItem}-text`}
                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="size-full overflow-hidden rounded-xl border bg-gradient-to-br from-zinc-900 to-zinc-800 shadow-md flex items-center justify-center p-8"
                  >
                    <div className="text-center space-y-4">
                      <div className="flex justify-center">
                        {(() => {
                          const IconComponent = features[activeItem].icon;
                          return (
                            <IconComponent className="size-16 text-yellow-400" />
                          );
                        })()}
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        {features[activeItem].title}
                      </h3>
                      <p className="text-zinc-300 text-sm leading-relaxed max-w-md">
                        {features[activeItem].content}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <BorderBeam applyInset={false} />
          </div>
        </div>

        {/* Additional Providers Section */}
        <div className="space-y-8">
          {additionalProviders.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-4">
              <h3 className="text-2xl font-semibold text-center">
                {section.title}
              </h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {section.providers.map((provider, providerIndex) => (
                  <div
                    key={providerIndex}
                    className="bg-background rounded-xl border p-4 hover:bg-accent transition-colors"
                  >
                    <p className="text-sm text-muted-foreground">{provider}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
