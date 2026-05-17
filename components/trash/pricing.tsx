import GetLicense from "./GetLicense";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { BorderBeam } from "@/components/magicui/border-beam";

interface PricingFeature {
  text: string;
  highlight?: boolean;
}

const freeFeatures: PricingFeature[] = [
  { text: "Undetectable in video calls and screen shares" },
  { text: "Multiple AI provider support (bring your own API keys)" },
  { text: "Speech-to-text integration (bring your own providers)" },
  { text: "Custom provider configuration" },
  { text: "Voice activity detection" },
  { text: "Screenshot capture" },
  { text: "No signup or subscription required" },
  { text: "Automatic updates" },
];

const proFeatures: PricingFeature[] = [
  { text: "Everything included in the Free plan" },
  { text: "80+ premium AI models with instant access", highlight: true },
  { text: "Zero-latency AI generation" },
  { text: "One-click model switching" },
  { text: "Zero maintenance and setup" },
  { text: "Advanced speech-to-text with highest accuracy" },
  { text: "Zero-latency speech-to-text processing" },
  { text: "Zero data storage or collection (100% privacy)", highlight: true },
  { text: "Unlimited API usage with no rate limits", highlight: true },
  { text: "Priority feature requests and premium support" },
];

export default function Pricing() {
  return (
    <section className="relative py-20" id="pricing">
      <div className="mx-auto max-w-7xl px-6 flex flex-col gap-12">
        <div className="text-center gap-4 flex flex-col">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="text-base max-w-3xl mx-auto text-muted-foreground leading-relaxed">
            Use Pluely completely free with your own AI models and speech
            providers. No subscriptions, no limits - just bring your own API
            keys and start using the most advanced undetectable AI assistant.
            Upgrade to Pro for premium models, unlimited usage, and zero
            maintenance.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Free Plan */}
          <Card className="flex flex-col transition-colors">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl mb-2">Free</CardTitle>
              <div className="flex flex-col items-center gap-1">
                <CardDescription className="text-4xl font-bold text-primary">
                  $0
                </CardDescription>
                <span className="text-xs text-muted-foreground font-medium">
                  forever free
                </span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3">
                {freeFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-green-600 dark:text-green-400 text-sm font-medium mt-0.5">
                      ✓
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="pt-4">
              <Button variant="outline" className="w-full" disabled>
                Current Plan
              </Button>
            </CardFooter>
          </Card>

          {/* Pro Plan */}
          <Card className="relative flex flex-col hover:border-primary/70 transition-colors shadow-lg hover:shadow-xl">
            <div className="absolute -top-3 z-10 left-1/2 transform -translate-x-1/2">
              <Badge
                variant="default"
                className="bg-primary hover:bg-primary/90"
              >
                Most Popular
              </Badge>
            </div>
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl mb-2">Pro</CardTitle>
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-baseline justify-center gap-2">
                  <CardDescription className="text-2xl font-bold text-muted-foreground line-through">
                    $20
                  </CardDescription>
                  <CardDescription className="text-4xl font-bold text-primary">
                    $15
                  </CardDescription>
                  <span className="text-xs text-muted-foreground">/ month</span>
                </div>
                <Badge variant="secondary" className="text-xs">
                  Save 25%
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3">
                {proFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-green-600 dark:text-green-400 text-sm font-medium mt-0.5">
                      ✓
                    </span>
                    <span
                      className={`text-sm ${
                        feature.highlight
                          ? "text-foreground font-medium"
                          : "text-muted-foreground"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="pt-4">
              <GetLicense className="w-full" />
            </CardFooter>
            <BorderBeam />
          </Card>
        </div>
      </div>
    </section>
  );
}
