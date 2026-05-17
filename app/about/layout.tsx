import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | ReelForge",
  description:
    "Meet the ReelForge team building the AI-Native Podcast Redistribution platform. Leadership in AI, marketing, and engineering working to help creators dominate their niche.",
  keywords: [
    "ReelForge team",
    "ReelForge leadership",
    "podcast AI team",
    "AI video editing team",
  ],
  openGraph: {
    title: "Our Team | ReelForge",
    description:
      "Meet the ReelForge team building the AI-Native Podcast Redistribution platform.",
    url: "https://reelforge.com/about",
  },
  twitter: {
    title: "Our Team | ReelForge",
    description:
      "Meet the ReelForge team building the AI-Native Podcast Redistribution platform.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
