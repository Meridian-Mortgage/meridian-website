"use client";

import { ReactNode } from "react";
import { useReveal } from "@/lib/useReveal";

type Props = {
  children: ReactNode;
  /** Delay in ms before the transition starts after entering the viewport. */
  delay?: number;
  /** Optional override className applied to the wrapper. */
  className?: string;
  /** Visibility threshold for triggering. Defaults to 0.15. */
  threshold?: number;
  /** Pass-through tag if you want a section / article / etc. */
  as?: "div" | "section" | "article" | "header" | "footer";
};

/**
 * Reveal wrapper. Renders children with an initial offset + opacity, then
 * transitions to in-place + full opacity the first time the element scrolls
 * into view. Uses the easeOutExpo curve and a ~700ms duration to feel premium.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  threshold,
  as: Tag = "div",
}: Props) {
  const { ref, shown } = useReveal<HTMLDivElement>(threshold);

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={`reveal ${shown ? "reveal-shown" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
