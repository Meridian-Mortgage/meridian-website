"use client";

import { useState, ReactNode } from "react";
import Reveal from "@/components/Reveal";

export type FeatureItem = {
  title: string;
  body?: string;
};

export type FeatureTone = "light" | "navy";

type FeatureProps = {
  eyebrow: string;
  title: string;
  intro: string;
  items: FeatureItem[];
  visual: ReactNode;
  reverse?: boolean;
  tone?: FeatureTone;
};

const PALETTES: Record<
  FeatureTone,
  {
    section: string;
    visualBg: string;
    eyebrow: string;
    title: string;
    intro: string;
    itemActive: string;
    itemInactive: string;
    itemIconActive: string;
    itemIconInactive: string;
    itemBody: string;
  }
> = {
  light: {
    section: "bg-white",
    visualBg: "bg-ink",
    eyebrow: "text-pine",
    title: "text-ink",
    intro: "text-stone",
    itemActive: "text-ink",
    itemInactive: "text-ink/55 group-hover:text-ink",
    itemIconActive: "text-stone",
    itemIconInactive: "text-stone/50 group-hover:text-stone",
    itemBody: "text-stone",
  },
  navy: {
    section: "bg-navy",
    visualBg: "bg-ink",
    eyebrow: "text-ivory/55",
    title: "text-ivory",
    intro: "text-ivory/70",
    itemActive: "text-ivory",
    itemInactive: "text-ivory/45 group-hover:text-ivory",
    itemIconActive: "text-ivory/70",
    itemIconInactive: "text-ivory/30 group-hover:text-ivory/70",
    itemBody: "text-ivory/70",
  },
};

export default function Feature({
  eyebrow,
  title,
  intro,
  items,
  visual,
  reverse,
  tone = "light",
}: FeatureProps) {
  const [open, setOpen] = useState(0);
  const p = PALETTES[tone];

  return (
    <section className={p.section}>
      <div
        className={`mx-auto flex max-w-[1408px] items-center gap-20 px-16 py-24 ${
          reverse ? "flex-row-reverse" : ""
        }`}
      >
        {/* Visual */}
        <Reveal delay={160} className="shrink-0">
          <div
            className={`relative h-[560px] w-[640px] overflow-hidden rounded-[6px] ${p.visualBg}`}
          >
            {visual}
          </div>
        </Reveal>

        {/* Content */}
        <Reveal className="flex w-[560px] flex-col gap-6 overflow-hidden" as="div">
          <p
            className={`text-[12px] font-medium uppercase tracking-[0.96px] ${p.eyebrow}`}
          >
            {eyebrow}
          </p>
          <h2
            className={`whitespace-nowrap font-serif text-[44px] font-normal leading-[50px] tracking-[-0.44px] ${p.title}`}
          >
            {title}
          </h2>
          <p className={`w-[480px] text-[16px] leading-[26px] ${p.intro}`}>
            {intro}
          </p>

          <div className="flex w-[560px] flex-col gap-1 pt-4">
            {items.map((item, idx) => {
              const isOpen = open === idx;
              return (
                <div key={item.title} className="flex w-[480px] flex-col">
                  <button
                    type="button"
                    onClick={() => setOpen(idx)}
                    className="group flex w-full items-center justify-between py-[14px] text-left"
                  >
                    <span
                      className={`text-[18px] font-semibold transition-colors duration-200 ${
                        isOpen ? p.itemActive : p.itemInactive
                      }`}
                    >
                      {item.title}
                    </span>
                    <span
                      className={`text-[22px] font-normal transition-colors duration-200 ${
                        isOpen ? p.itemIconActive : p.itemIconInactive
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* Smooth expand/collapse using the grid-rows trick. */}
                  <div
                    className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0">
                      <p
                        className={`pb-2 text-[14px] leading-[20px] ${p.itemBody}`}
                      >
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
