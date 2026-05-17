import { menuItems } from "@/lib/menuItems";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="relative border-b bg-[#FAF6ED] py-12 dark:bg-transparent">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap justify-between gap-6">
          <span className="text-muted-foreground order-last block text-center text-sm font-instrument-serif md:order-first">
            © 2026- ReelForge Inc. All rights reserved.
          </span>
          <div className="order-first flex flex-wrap justify-center gap-6 text-sm font-instrument-serif md:order-last">
            {menuItems.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target={link.href.includes("https") ? "_blank" : "_self"}
                className="text-muted-foreground hover:text-primary block duration-150"
              >
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
