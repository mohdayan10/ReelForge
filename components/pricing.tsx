import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { BorderBeam } from "@/components/magicui/border-beam";
import WaitlistForm from "./waitlist-form";

export default function Pricing() {
  return (
    <section className="relative py-20 scroll-mt-8" id="waitlist">
      <div className="mx-auto max-w-7xl px-6 flex flex-col gap-12">
        <div className="text-center gap-4 flex flex-col">
          <h2 className="text-balance text-4xl font-instrument-serif lg:text-6xl">
            <span className="italic">ReelForge</span> Early Access
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-muted-foreground leading-loose font-instrument-serif">
            We&apos;re working on opening our platform to as many of you amazing people as possible. We receive thousands of requests and spots are limited — so if you don&apos;t hear from us right away, please don&apos;t be discouraged. Bear with us. We genuinely want you in.
          </p>
        </div>

        <div className="w-full max-w-xl px-4 mx-auto">
          <Card className="relative flex flex-col hover:border-primary/70 transition-colors shadow-lg hover:shadow-xl">
            <div className="absolute -top-3 z-10 left-1/2 transform -translate-x-1/2">
              <Badge
                variant="default"
                className="bg-primary hover:bg-primary/90 font-instrument-serif"
              >
                Early Access
              </Badge>
            </div>
            <CardHeader className="text-center pb-4 px-8 pt-8">
              <CardTitle className="text-3xl mb-3 font-instrument-serif">
                Join the Waitlist
              </CardTitle>
              <p className="text-lg font-instrument-serif text-muted-foreground">
                Secure your spot — we&apos;ll reach out when it&apos;s your turn
              </p>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <WaitlistForm />
            </CardContent>
            <BorderBeam colorFrom="#89CFF0" colorTo="#89CFF0" borderWidth={3} />
          </Card>
        </div>
      </div>
    </section>
  );
}
