import Reveal from "@/components/Reveal";

const stats = [
  {
    value: "$200M",
    label: "in transaction volume closed by our clients",
  },
  {
    value: "5x",
    label: "faster growth than peers in their market",
  },
  {
    value: "3x",
    label: "more transaction volume than peers in their market",
  },
  {
    value: "100%",
    label: "of our work is built for mortgage professionals",
  },
];

export default function Stats() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center px-16 pt-20 pb-28">
        <Reveal>
          <h2 className="mb-20 text-center text-[20px] font-semibold tracking-[-0.2px] text-ink">
            Turning mortgage professionals into the #1 in their market.
          </h2>
        </Reveal>

        <div className="grid w-full max-w-[1280px] grid-cols-4 divide-x divide-rule">
          {stats.map((s, i) => (
            <Reveal key={s.value} delay={120 + i * 110}>
              <div className="flex flex-col items-center gap-4 px-6 text-center">
                <p className="whitespace-nowrap text-[72px] font-bold leading-[1] tracking-[-0.04em] text-ink">
                  {s.value}
                </p>
                <p className="max-w-[260px] text-[15px] leading-[1.45] text-stone">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
