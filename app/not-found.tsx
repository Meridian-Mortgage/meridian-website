import Nav from "@/components/nav/Nav";
import Footer from "@/components/Footer";
import SiteCTA from "@/components/SiteCTA";

export const metadata = {
  title: "Page not found · Meridian.",
};

export default function NotFound() {
  return (
    <main className="bg-white">
      <Nav />

      <div data-nav-mode="dark">
        <section className="flex min-h-[70vh] items-center bg-ink">
          <div className="mx-auto max-w-[720px] px-16 pt-32 text-center">
            <p className="font-serif text-[80px] leading-none text-gold md:text-[120px]">
              404
            </p>
            <h1 className="mt-6 font-serif text-[32px] font-normal leading-[1.1] tracking-[-0.4px] text-ivory md:text-[44px]">
              This page moved or never existed.
            </h1>
            <p className="mx-auto mt-5 max-w-[420px] text-[16px] leading-[26px] text-ivory/65">
              Let us point you back to solid ground.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href="/"
                className="inline-flex items-center rounded-[4px] bg-gold px-[22px] py-[14px] text-[13px] font-medium uppercase tracking-[0.78px] text-ink transition-colors hover:bg-[#d4b56e]"
              >
                Back home
              </a>
              <a
                href="/contact"
                className="inline-flex items-center rounded-[4px] border border-ivory px-[22px] py-[14px] text-[13px] font-medium uppercase tracking-[0.78px] text-ivory transition-colors hover:bg-ivory/10"
              >
                Contact us
              </a>
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
