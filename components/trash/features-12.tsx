"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Zap, Code, Star } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BorderBeam } from "@/components/magicui/border-beam";

export default function Features() {
  type FeatureKey =
    | "pluely-api"
    | "custom-provider"
    | "openai"
    | "grok"
    | "gemini"
    | "claude";

  const [activeItem, setActiveItem] = useState<FeatureKey>("pluely-api");

  const features = {
    "pluely-api": {
      title: "Get Pluely API",
      icon: Zap,
      content:
        "If you don't want to maintain your own providers, use our Pluely API for the best experience. Switch between Pluely API and your custom providers anytime in Settings. Whether you want convenience or full control, Pluely gives you complete flexibility.",
      video: "https://assets.pluely.com/pluely-api-main.mp4",
      alt: "Pluely API setup and configuration",
    },
    "custom-provider": {
      title: "Custom AI Provider Setup",
      icon: Code,
      content:
        "Unlock any LLM provider with full streaming and non-streaming capabilities. Pluely supports curl requests for ultimate flexibility. Configure custom endpoints, authentication, and response parsing. Supports dynamic variables like {{TEXT}}, {{IMAGE}}, {{SYSTEM_PROMPT}}, {{MODEL}}, {{API_KEY}}. Works with any REST API that accepts JSON requests.",
      video: "https://assets.pluely.com/ai-custom-provider.mp4",
      alt: "Custom AI provider configuration and setup",
    },
    openai: {
      title: "OpenAI Setup",
      icon: Star,
      content:
        "Add your OpenAI API key and enter model name. Pluely supports all OpenAI models including GPT-4, GPT-3.5, and more. Get started with the most popular AI provider in seconds.",
      video: "https://assets.pluely.com/openai.mp4",
      alt: "OpenAI API setup and configuration",
    },
    grok: {
      title: "Grok Setup (xAI)",
      icon: Star,
      content:
        "Add your xAI Grok API key and enter your model. Experience xAI's unique AI personality and capabilities. Pluely provides seamless integration with Grok's advanced reasoning and helpful responses.",
      video: "https://assets.pluely.com/grok.mp4",
      alt: "xAI Grok API setup and configuration",
    },
    gemini: {
      title: "Google Gemini Setup",
      icon: Star,
      content:
        "Add your Google Gemini API key and enter your model. Access Google's latest AI models with multimodal capabilities. Pluely supports Gemini's advanced features including image understanding and code generation.",
      video: "https://assets.pluely.com/gemini.mp4",
      alt: "Google Gemini API setup and configuration",
    },
    claude: {
      title: "Anthropic Claude Setup",
      icon: Star,
      content:
        "Add your Anthropic Claude API key and enter your model. Experience Claude's exceptional reasoning and writing capabilities. Pluely provides full support for Claude's latest models and features.",
      video: "https://assets.pluely.com/claude.mp4",
      alt: "Anthropic Claude API setup and configuration",
    },
  };

  const additionalProviders = [
    {
      title: "Additional AI Providers",
      providers: [
        "Mistral AI: Add your Mistral API key and select from available models",
        "Cohere: Add your Cohere API key and enter your model name",
        "Perplexity: Add your Perplexity API key and select from available models",
        "Groq: Add your Groq API key and select from available models",
        "Ollama: Configure your local Ollama instance and select models",
      ],
    },
  ];

  return (
    <section className="py-6 md:py-10 lg:py-16">
      <div className="hidden md:absolute bg-linear-to-b inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
        <div className="relative z-10 mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-6xl">
            AI Provider Integration
          </h2>
          <p className="text-muted-foreground">
            Connect to your preferred AI providers with ease. Pluely supports
            the most popular AI services including OpenAI, Anthropic Claude,
            Google Gemini, xAI Grok, and custom provider setups.
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
