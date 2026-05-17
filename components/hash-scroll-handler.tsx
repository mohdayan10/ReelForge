"use client";

import { useEffect } from "react";

export default function HashScrollHandler() {
  useEffect(() => {
    // Take manual control so browser doesn't restore old scroll position
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }

    const id = window.location.hash.slice(1);
    const scroll = () => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 32;
        window.scrollTo({ top, behavior: "instant" });
      }
    };

    scroll();
    setTimeout(scroll, 500);
  }, []);

  return null;
}
