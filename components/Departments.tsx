"use client";

import { useState } from "react";

type Department = {
  name: string;
  description: string;
};

const departments: Department[] = [
  {
    name: "Design",
    description:
      "Brand designers, art directors, and product designers who hold a tight bar.",
  },
  {
    name: "Engineering",
    description:
      "Front-end and full-stack engineers who care about typography and motion.",
  },
  {
    name: "Strategy",
    description:
      "Brand strategists and account leads who can sit across from a broker and ask the right questions.",
  },
  {
    name: "Operations",
    description:
      "Producers and operators who keep our projects on rails so the makers can make.",
  },
  {
    name: "Motion",
    description:
      "Video editors, animators, and motion designers who can give a brand a sense of time.",
  },
];

export default function Departments() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="border-t border-ink/10">
      {departments.map((dept, i) => {
        const isOpen = open === i;
        return (
          <div key={dept.name} className="border-b border-ink/10">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="group flex w-full items-center justify-between py-7 text-left transition-colors"
            >
              <span className="font-serif text-[26px] font-normal leading-[1.1] tracking-[-0.26px] text-ink md:text-[30px]">
                {dept.name}
              </span>
              <span
                aria-hidden
                className={`flex h-9 w-9 items-center justify-center text-[24px] font-light text-stone transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>

            <div
              className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0">
                <div className="flex flex-col gap-4 pb-7 md:flex-row md:items-center md:justify-between md:gap-12">
                  <p className="max-w-[480px] text-[15px] leading-[24px] text-stone">
                    {dept.description}
                  </p>
                  <p className="shrink-0 text-[13px] font-medium tracking-[0.2px] text-stone">
                    No active openings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
