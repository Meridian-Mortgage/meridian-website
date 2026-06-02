import Reveal from "@/components/Reveal";

const loans = [
  "Conventional Loans",
  "FHA Loans",
  "VA Loans",
  "Jumbo Loans",
  "Refinances",
  "HELOC",
  "Construction Loans",
  "Non-QM Loans",
  "Bridge Loans",
  "Investment Property Loans",
];

export default function Phrases() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex h-[640px] max-w-[1440px] items-center justify-between pl-24 pr-16">
        {/* Label */}
        <Reveal>
          <div className="flex flex-col gap-1 text-[16px] font-semibold leading-6 text-ink">
            <p>We help mortgage professionals</p>
            <p>close more:</p>
          </div>
        </Reveal>

        {/* Scrolling stack with fade edges */}
        <div
          className="relative h-[420px] w-[600px] overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(180deg, transparent 0%, black 22%, black 78%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(180deg, transparent 0%, black 22%, black 78%, transparent 100%)",
          }}
        >
          <div
            className="flex flex-col items-center gap-2 text-center font-serif text-[46px] font-normal leading-[64px] tracking-[-0.46px] text-ink animate-loan-scroll"
            style={{ willChange: "transform" }}
          >
            {/* duplicate the list so the loop is seamless */}
            {[...loans, ...loans].map((loan, i) => (
              <p key={`${loan}-${i}`} className="whitespace-nowrap">
                {loan}
              </p>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Reveal delay={160}>
          <a
            href="/services/web-design"
            className="inline-flex items-center rounded-[4px] border border-ink px-[22px] py-[14px] text-[13px] font-medium tracking-[0.78px] text-ink"
          >
            EXPLORE SERVICES
          </a>
        </Reveal>
      </div>
    </section>
  );
}
