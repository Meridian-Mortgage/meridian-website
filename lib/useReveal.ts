"use client";

import { useEffect, useRef, useState } from "react";

/**
 * useReveal. IntersectionObserver-backed visibility flag.
 * Returns a ref to attach to the element and `shown` which flips true
 * the first time the element enters the viewport. Honors prefers-reduced-motion
 * by short-circuiting to shown=true immediately.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.15
) {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setShown(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, shown };
}
