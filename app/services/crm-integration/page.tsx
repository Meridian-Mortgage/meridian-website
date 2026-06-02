import Nav from "@/components/nav/Nav";
import Footer from "@/components/Footer";
import SiteCTA from "@/components/SiteCTA";
import Reveal from "@/components/Reveal";
import { PipelineMock, AutomationMock } from "@/components/WhoWeServe";

export const metadata = {
  title: "CRM Integration · Meridian.",
  description:
    "GoHighLevel set up for mortgage brokers. Pipelines, tags, and automations wired into your site so no lead slips.",
};

const flow = [
  {
    title: "Sources",
    body: "Site forms, calls, and ads all land in one inbox.",
    items: ["Website form", "Click to call", "Paid lead"],
  },
  {
    title: "Pipeline",
    body: "Each lead is tagged and dropped into the right stage.",
    items: ["New lead", "Pre-approval", "In process"],
  },
  {
    title: "Automation",
    body: "Follow-up runs on its own until you step in.",
    items: ["Welcome text", "Reminder email", "Review request"],
  },
];

const built = [
  {
    label: "Pipelines",
    body: "Stages that match how you actually work a deal, from first touch to funded.",
  },
  {
    label: "Tags and routing",
    body: "Every lead labelled by source and loan type, routed to the right follow-up.",
  },
  {
    label: "Email and SMS",
    body: "Sequences that warm, qualify, and remind, written in your voice.",
  },
  {
    label: "Past-client touches",
    body: "Anniversary notes, rate alerts, and renewal reminders on their own schedule.",
  },
];

const faq = [
  {
    q: "Do I need GoHighLevel already?",
    a: "No. We set up the account, or we work inside the one you have. Either way you own it at the end.",
  },
  {
    q: "Will this work with my website?",
    a: "Yes. If we built the site, it is wired at launch. If you have your own, we connect the forms to it.",
  },
  {
    q: "Can you migrate my contacts?",
    a: "We bring your existing list in, clean and tagged, so nothing is lost in the move.",
  },
  {
    q: "What happens after setup?",
    a: "You get a short walkthrough and the playbook. Some brokers run it themselves, others keep us on for tuning.",
  },
];

export default function CrmIntegrationPage() {
  return (
    <main className="bg-white">
      <Nav />

      {/* Hero — split, pipeline mock on the right */}
      <div data-nav-mode="hero">
        <section className="relative overflow-hidden bg-ink">
          <div
            aria-hidden
            className="pointer-events-none absolute right-[-6%] top-[-12%] h-[620px] w-[820px]"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(201,169,97,0.14) 0%, rgba(15,15,15,0) 70%)",
            }}
          />
          <div className="relative mx-auto max-w-[1280px] px-16 pb-28 pt-44 md:pb-36 md:pt-52">
            <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-12 md:gap-20">
              <div className="md:col-span-6">
                <p className="text-[12px] font-medium uppercase tracking-[0.96px] text-gold">
                  CRM integration
                </p>
                <h1 className="mt-5 font-serif text-[52px] font-normal leading-[1] tracking-[-1.6px] text-ivory md:text-[72px]">
                  No lead slips through.
                </h1>
                <p className="mt-7 max-w-[480px] text-[17px] leading-[28px] text-ivory/70">
                  We wire GoHighLevel into your site so every enquiry is caught,
                  tagged, and followed up. The warm borrowers reach you first,
                  and the rest stay warm on their own.
                </p>
                <div className="mt-10">
                  <a
                    href="/contact"
                    className="inline-flex items-center rounded-[4px] bg-gold px-[22px] py-[14px] text-[13px] font-medium uppercase tracking-[0.78px] text-ink transition-colors hover:bg-[#d4b56e]"
                  >
                    Start your project
                  </a>
                </div>
              </div>

              <div className="md:col-span-6">
                <PipelineMock title="Pipeline" />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Flow diagram — sources to pipeline to automation */}
      <div data-nav-mode="light">
        <section className="bg-white">
          <div className="mx-auto max-w-[1280px] px-16 py-24 md:py-28">
            <Reveal>
              <p className="text-[12px] font-medium uppercase tracking-[0.96px] text-pine">
                How it connects
              </p>
              <h2 className="mt-4 max-w-[600px] font-serif text-[34px] font-normal leading-[1.1] tracking-[-0.34px] text-ink md:text-[44px]">
                One system, from first click to funded.
              </h2>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 items-stretch gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
              {flow.map((node, i) => (
                <div key={node.title} className="contents">
                  <Reveal className="flex">
                    <div className="flex w-full flex-col rounded-[12px] border border-ink/10 bg-white p-7">
                      <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-pine">
                        Step {i + 1}
                      </p>
                      <h3 className="mt-2 font-serif text-[24px] font-normal leading-[1.15] tracking-[-0.22px] text-ink">
                        {node.title}
                      </h3>
                      <p className="mt-2 text-[14px] leading-[22px] text-ink/65">
                        {node.body}
                      </p>
                      <div className="mt-5 flex flex-col gap-2">
                        {node.items.map((it) => (
                          <span
                            key={it}
                            className="rounded-[6px] bg-cream px-3 py-2 text-[12px] font-medium text-ink/70"
                          >
                            {it}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                  {i < flow.length - 1 && (
                    <div
                      aria-hidden
                      className="flex items-center justify-center py-2 text-[22px] text-gold md:py-0"
                    >
                      <span className="hidden md:inline">→</span>
                      <span className="md:hidden">↓</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* What we set up — two-up with automation mock */}
      <div data-nav-mode="dark">
        <section className="bg-ink">
          <div className="mx-auto max-w-[1280px] px-16 py-28">
            <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-20">
              <Reveal>
                <p className="text-[12px] font-medium uppercase tracking-[0.96px] text-gold">
                  What we set up
                </p>
                <h2 className="mt-4 font-serif text-[34px] font-normal leading-[1.1] tracking-[-0.34px] text-ivory md:text-[42px]">
                  Built once, runs without you.
                </h2>
                <div className="mt-10 flex flex-col">
                  {built.map((b, i) => (
                    <div
                      key={b.label}
                      className={`py-5 ${
                        i !== 0 ? "border-t border-ivory/12" : ""
                      }`}
                    >
                      <h3 className="font-serif text-[20px] font-normal text-ivory">
                        {b.label}
                      </h3>
                      <p className="mt-2 text-[15px] leading-[24px] text-ivory/65">
                        {b.body}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={120}>
                <AutomationMock title="Automations" />
              </Reveal>
            </div>
          </div>
        </section>
      </div>

      {/* FAQ — single column, generous */}
      <div data-nav-mode="light">
        <section className="bg-white">
          <div className="mx-auto max-w-[820px] px-16 py-24">
            <h2 className="font-serif text-[34px] font-normal leading-[1.1] tracking-[-0.34px] text-ink md:text-[40px]">
              Before you start.
            </h2>
            <div className="mt-12 border-b border-ink/10">
              {faq.map((item) => (
                <div key={item.q} className="border-t border-ink/10 py-8">
                  <h3 className="font-serif text-[21px] font-normal leading-[1.3] tracking-[-0.12px] text-ink">
                    {item.q}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[25px] text-ink/70">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div data-nav-mode="dark">
        <SiteCTA />
        <Footer />
      </div>
    </main>
  );
}
