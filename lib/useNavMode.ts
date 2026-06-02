"use client";

import { useEffect, useState } from "react";

export type NavTone = "hero" | "light" | "dark" | "beige";

/**
 * Walks sections marked with `data-nav-mode` and reports which one is currently
 * sitting under the fixed nav. Recomputes on scroll + resize, throttled to one
 * call per animation frame.
 */
export function useNavMode(navLine = 76) {
  const [tone, setTone] = useState<NavTone>("hero");

  useEffect(() => {
    let raf = 0;

    const compute = () => {
      raf = 0;
      const sections = document.querySelectorAll<HTMLElement>(
        "[data-nav-mode]"
      );
      let current: NavTone = "hero";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= navLine + 1) {
          const m = section.getAttribute("data-nav-mode") as NavTone | null;
          if (m) current = m;
        }
      });
      setTone(current);
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [navLine]);

  return tone;
}
