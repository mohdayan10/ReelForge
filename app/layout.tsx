import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "ReelForge - The AI-Native Podcast Redistribution Company",
    template: "%s | ReelForge",
  },
  description:
    "Turn your audio-only catalog into a visual growth loop. ReelForge uses proprietary AI to find viral moments and transform them into scroll-stopping clips for TikTok, Reels, and Shorts.",
  keywords: [
    "ReelForge",
    "podcast redistribution",
    "AI video editing",
    "audio to video",
    "podcast clips",
    "viral clips",
    "content repurposing",
    "TikTok clips",
    "podcast marketing",
    "audio visualization",
    "AI avatars",
    "content creator tools",
  ],
  authors: [
    { name: "ReelForge Team" }
  ],
  creator: "ReelForge",
  publisher: "ReelForge",
  metadataBase: new URL("https://reelforge.com"),
  alternates: {
    canonical: "https://reelforge.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://reelforge.com",
    title: "ReelForge - The AI-Native Podcast Redistribution Company",
    description: "Turn your audio-only catalog into a visual growth loop. Proprietary AI finds viral moments and transforms them into scroll-stopping clips.",
    siteName: "ReelForge",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ReelForge - AI-Native Podcast Redistribution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ReelForge - The AI-Native Podcast Redistribution Company",
    description: "Turn your audio-only catalog into a visual growth loop. Proprietary AI finds viral moments and transforms them into scroll-stopping clips.",
    creator: "@faborofficial",
    images: ["/og-image.png"],
  },
  category: "Technology",
  applicationName: "ReelForge",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo-black.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/logo-black.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "P0RlKmfTOt4wOc4MPpmP13ct3DRUsTz8XNOZ8APUBPI",
  },
};

export const viewport: Viewport = {
  themeColor: "white",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ReelForge",
    "url": "https://reelforge.com",
    "logo": "https://reelforge.com/logo.png",
    "description": "The AI-Native Podcast Redistribution Company. Turn your audio-only catalog into a visual growth loop.",
    "founder": {
      "@type": "Person",
      "name": "Affan Syed",
      "url": "https://affansyed.com",
      "sameAs": [
        "https://affansyed.com",
        "https://twitter.com/affansyed321"
      ],
      "jobTitle": "CEO & Lead PMM"
    },
    "employee": [
      {
        "@type": "Person",
        "name": "Affan Syed",
        "jobTitle": "CEO & Lead PMM",
        "url": "https://affansyed.com"
      },
      {
        "@type": "Person",
        "name": "Shahid",
        "jobTitle": "Lead AI",
        "url": "https://www.linkedin.com/in/shahid-mo/"
      },
      {
        "@type": "Person",
        "name": "Mohammed",
        "jobTitle": "CTO",
        "url": "https://www.linkedin.com/in/mohammed/"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "Affan@reelforge.com",
      "contactType": "Customer Service"
    },
    "sameAs": [
      "https://reelforge.com"
    ]
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Affan Syed",
    "url": "https://affansyed.com",
    "jobTitle": "CEO & Lead PMM at ReelForge",
    "worksFor": {
      "@type": "Organization",
      "name": "ReelForge",
      "url": "https://reelforge.com"
    },
    "sameAs": [
      "https://affansyed.com",
      "https://twitter.com/affansyed321",
      "https://reelforge.com/about"
    ],
    "description": "CEO & Lead PMM of ReelForge, leading Marketing & Strategy for the AI-Native Podcast Redistribution Company"
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          themes={["light"]}
          disableTransitionOnChange
          enableSystem={false}
          storageKey="pluely-theme"
        >
          {children}
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
