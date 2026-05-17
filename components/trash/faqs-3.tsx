"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import Link from "next/link";

type FAQItem = {
  id: string;
  icon: IconName;
  question: string;
  answer: string;
};

export default function FAQsThree() {
  const faqItems: FAQItem[] = [
    {
      id: "item-1",
      icon: "dollar-sign",
      question: "Is Pluely free to use?",
      answer:
        "Yes, Pluely is completely free to use with your own custom models and speech-to-text providers by bringing your own API keys.",
    },
    {
      id: "item-2",
      icon: "lock",
      question: "How is my data handled?",
      answer:
        "All your data is stored locally on your system. Pluely is designed with privacy as a priority, so no external calls are made to our servers. This applies to both free and Pro users.",
    },
    {
      id: "item-3",
      icon: "zap",
      question: "What's included in the Pro plan?",
      answer:
        "The Pro plan provides access to over 80+ premium, high-speed AI models, including top-tier models from providers like OpenAI (e.g., GPT-5) and Google (e.g., Gemini 2.5 Pro). It also includes advanced speech-to-text features and allows you to switch between models at any time with a single click.",
    },
    {
      id: "item-4",
      icon: "x-circle",
      question: "How do I cancel my Pro plan?",
      answer:
        "Yes, you can cancel your Pro plan at any time through the billing portal. You will continue to have access to Pro features until the end of your current billing period.",
    },
    {
      id: "item-5",
      icon: "key-round",
      question: "How many license keys do I get with my purchase?",
      answer:
        "You will receive one license key per device. If you lose your license key or experience any issues, please contact our support team at support@pluely.com.",
    },
    {
      id: "item-6",
      icon: "receipt",
      question: "What is the refund policy?",
      answer:
        "Currently, Pluely does not offer refunds once a license key has been activated. You can cancel your subscription at any time, which will prevent charges for subsequent billing cycles.",
    },
    {
      id: "item-7",
      icon: "eye-off",
      question: "Can Pluely be detected during screen sharing?",
      answer:
        "No, Pluely is designed to be completely undetectable. It operates in a stealth mode, ensuring your AI assistant remains invisible during video calls, screen shares, and recordings.",
    },
    {
      id: "item-8",
      icon: "laptop",
      question: "Which operating systems are supported?",
      answer:
        "Pluely is a cross-platform application that runs natively on macOS, Windows, and Linux, offering native performance with minimal resource usage.",
    },
    {
      id: "item-9",
      icon: "brain-circuit",
      question: "Which AI providers can I use?",
      answer:
        "Pluely supports a wide range of AI providers, including OpenAI, Anthropic Claude, Google Gemini, and xAI Grok. It also allows for custom configurations for both AI and speech-to-text providers.",
    },
  ];

  return (
    <section className="bg-muted dark:bg-background py-20">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <div className="md:w-1/3">
            <div className="sticky top-20">
              <h2 className="mt-4 text-3xl font-bold">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground mt-4">
                Can&apos;t find what you&apos;re looking for?{" "}
                <Link
                  href="mailto:support@pluely.com"
                  className="text-primary font-medium hover:underline"
                >
                  Contact support
                </Link>{" "}
                for further assistance.
              </p>
            </div>
          </div>
          <div className="md:w-2/3">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={`faq-${item.id}-${index}`}
                  value={item.id}
                  className="bg-background shadow-xs rounded-lg border px-4 last:border-b"
                >
                  <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="flex size-6">
                        <DynamicIcon
                          name={item.icon}
                          className="m-auto size-4"
                        />
                      </div>
                      <span className="text-base">{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <div className="px-9">
                      <p className="text-base">{item.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
