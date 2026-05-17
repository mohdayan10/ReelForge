import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { BorderBeam } from "./magicui/border-beam";

export default function FeatureTemplate({
  title,
  description,
  video,
  link,
  linkText,
  isShowTextsAtTheTop = true,
  hideLink = false,
}: {
  title: string;
  description: string;
  video: string;
  link: string;
  linkText: string;
  isShowTextsAtTheTop: boolean;
  hideLink: boolean;
}) {
  return (
    <section className="relative py-16 bg-[var(--color-background]">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-6">
        {isShowTextsAtTheTop ? (
          <div className="grid gap-3 md:grid-cols-2 md:gap-6">
            <h2 className="text-4xl font-medium">{title}</h2>
            <div className="space-y-6">
              <p>{description}</p>
              {!hideLink ? (
                <Button
                  asChild
                  variant="secondary"
                  size="sm"
                  className="gap-1 pr-1"
                >
                  <Link href={link}>
                    <span>{linkText}</span>
                    <ChevronRight className="size-2" />
                  </Link>
                </Button>
              ) : null}
            </div>
          </div>
        ) : null}
        <div className="relative inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background mx-auto max-w-6xl overflow-hidden rounded-xl border p-2 md:p-4 shadow-lg shadow-zinc-950/15 ring-1">
          <video
            className="bg-background w-full relative rounded-xl object-cover border border-border/25"
            src={video}
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
          <BorderBeam applyInset={false} />
        </div>

        {!isShowTextsAtTheTop ? (
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <h2 className="text-4xl font-medium">{title}</h2>
            <div className="space-y-6">
              <p>{description}</p>

              <Button
                asChild
                variant="secondary"
                size="sm"
                className="gap-1 pr-1.5"
              >
                <Link href={link}>
                  <span>{linkText}</span>
                  <ChevronRight className="size-2" />
                </Link>
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
