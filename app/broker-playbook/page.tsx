import Nav from "@/components/nav/Nav";
import Footer from "@/components/Footer";
import SiteCTA from "@/components/SiteCTA";
import Reveal from "@/components/Reveal";
import NotifyForm from "@/components/NotifyForm";

export const metadata = {
  title: "The Broker Playbook · Meridian.",
  description:
    "A long-form guide to becoming the first name in your market. Shipping later this year.",
};

export default function BrokerPlaybookPage() {
  return (
    <main className="bg-white">
      <Nav />

      <div data-nav-mode="light">
        <section className="bg-white">
          <div className="mx-auto flex min-h-[80vh] max-w-[820px] flex-col items-center justify-center px-8 py-40 text-center">
            <Reveal>
              <h1 className="font-serif text-[52px] font-normal leading-[1.05] tracking-[-1.2px] text-ink md:text-[72px] md:leading-[1.02]">
                The Broker Playbook.
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-8 max-w-[560px] text-[18px] leading-[30px] text-stone">
                A long-form guide to becoming the first name in your market.
                Shipping later this year. Drop your email and we&rsquo;ll send
                it the day it lands.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-12 w-full max-w-[480px]">
                <NotifyForm />
              </div>
            </Reveal>

            <Reveal delay={280}>
              <a
                href="/guides"
                className="mt-10 inline-flex items-center gap-1.5 text-[13px] font-medium text-ink transition-opacity hover:opacity-70"
              >
                Read the guides while you wait
                <span aria-hidden>→</span>
              </a>
            </Reveal>
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
