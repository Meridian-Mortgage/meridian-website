"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";

type T = {
  quote: string;
  name: string;
  title: string;
  company: string;
  image: string;
};

const testimonials: T[] = [
  {
    quote:
      "Meridian rebuilt the website. I run a different broker shop now. Better borrowers, fewer chase calls, and far more confidence on the first conversation.",
    name: "Aaron",
    title: "Mortgage Broker",
    company: "Reyes Lending Co.",
    image: "/testimonials/aaronimg.jpeg",
  },
  {
    quote:
      "Three months in and the leads coming through the site are the leads I actually want. The brand finally looks like the business I always thought I was running.",
    name: "Gilian",
    title: "Senior Loan Advisor",
    company: "Coastal Mortgage Group",
    image: "/testimonials/gilianimg.jpg",
  },
  {
    quote:
      "Most agencies wanted to talk about SEO and WordPress. Meridian wanted to talk about how my borrowers actually decide. That changed everything.",
    name: "Po",
    title: "Principal Broker",
    company: "Hartmann & Co.",
    image: "/testimonials/poimg.png",
  },
];

const SLIDE_DURATION_MS = 7500;
const TOTAL = testimonials.length;

export default function Testimonial() {
  // `track` walks 0 → 1 → … → TOTAL. The slot at TOTAL is a clone of the first
  // testimonial. After the forward slide lands there, we snap the transform
  // back to 0 without animation so the cycle restarts seamlessly.
  const [track, setTrack] = useState(0);
  const [animate, setAnimate] = useState(true);
  const display = track % TOTAL;
  const slides = [...testimonials, testimonials[0]];
  const snappingRef = useRef(false);

  useEffect(() => {
    const id = window.setTimeout(() => {
      setAnimate(true);
      setTrack((prev) => prev + 1);
    }, SLIDE_DURATION_MS);
    return () => window.clearTimeout(id);
  }, [track]);

  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.propertyName !== "transform") return;
    if (track === TOTAL && !snappingRef.current) {
      snappingRef.current = true;
      setAnimate(false);
      setTrack(0);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimate(true);
          snappingRef.current = false;
        });
      });
    }
  };

  return (
    <section className="bg-[#F2F1F0]">
      <div className="mx-auto max-w-[1440px] pb-16 pt-24">
        <Reveal>
          {/* Slide track */}
          <div className="overflow-hidden">
            <div
              className={`flex ${
                animate
                  ? "transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]"
                  : ""
              }`}
              style={{ transform: `translateX(-${track * 100}%)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {slides.map((t, i) => (
                <div key={i} className="w-full shrink-0">
                  <div className="flex items-center gap-20 px-24">
                    {/* Portrait */}
                    <div
                      className="relative h-[480px] w-[480px] shrink-0 overflow-hidden rounded-[4px] bg-cream bg-cover bg-center"
                      style={{ backgroundImage: `url('${t.image}')` }}
                    />


                    {/* Quote */}
                    <div className="flex flex-1 flex-col gap-8">
                      <p className="font-serif text-[32px] font-normal leading-[44px] tracking-[-0.16px] text-ink">
                        &ldquo;{t.quote}&rdquo;
                      </p>

                      <div className="flex flex-col gap-1 text-[14px]">
                        <p className="font-semibold text-ink">{t.name}</p>
                        <p className="text-stone">{t.title}</p>
                        <p className="text-stone">{t.company}</p>
                      </div>

                      <a
                        href="/case-studies"
                        className="text-[13px] font-medium tracking-[0.52px] text-ink hover:opacity-80"
                      >
                        Customer Story &nbsp;→
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Progress bars */}
        <div className="mt-16 flex gap-6 px-24">
          {testimonials.map((_, i) => {
            // When we're on the clone slot (track === TOTAL) the user is seeing
            // the first testimonial again, so bar 0 is active and the others
            // are reset. This is the start of a fresh cycle.
            const isPast = i < display;
            const isActive = i === display;
            return (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setAnimate(true);
                  setTrack(i);
                }}
                aria-label={`Testimonial ${i + 1}`}
                className="relative h-[2px] flex-1 overflow-hidden bg-ink/10"
              >
                {isPast && (
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-ink/55"
                  />
                )}
                {isActive && (
                  <span
                    key={`fill-${display}`}
                    aria-hidden
                    className="testimonial-progress absolute inset-y-0 left-0 w-full origin-left bg-ink/55"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
