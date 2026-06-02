import type { GuideBlock } from "@/lib/guides";

type Props = {
  blocks: GuideBlock[];
};

// Renders the body of a guide from its structured blocks. The shape mirrors
// what a CMS-backed body parser will yield, so swapping in a real markdown
// pipeline later only changes the upstream `blocks` source, not this file.
export default function GuideArticle({ blocks }: Props) {
  return (
    <article className="flex flex-col gap-8 text-ink">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="mt-6 font-serif text-[34px] font-normal leading-[1.18] tracking-[-0.34px]"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                className="mt-3 font-serif text-[24px] font-normal leading-[1.25] tracking-[-0.22px]"
              >
                {block.text}
              </h3>
            );
          case "list":
            return (
              <ul
                key={i}
                className="ml-6 flex list-disc flex-col gap-3 text-[20px] leading-[34px] text-ink/85 marker:text-pine"
              >
                {block.items.map((item, j) => (
                  <li key={j} className="pl-1">
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="my-3 border-l-2 border-pine pl-6 font-serif text-[26px] leading-[38px] text-ink/85"
              >
                &ldquo;{block.text}&rdquo;
              </blockquote>
            );
          case "p":
          default:
            return (
              <p
                key={i}
                className="text-[20px] leading-[34px] text-ink/85"
              >
                {block.text}
              </p>
            );
        }
      })}
    </article>
  );
}
