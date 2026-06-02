import Nav from "@/components/nav/Nav";
import Footer from "@/components/Footer";
import SiteCTA from "@/components/SiteCTA";
import CaseStudyHero from "@/components/CaseStudyHero";
import CaseStudyCard from "@/components/CaseStudyCard";

export const metadata = {
  title: "Case Studies · Meridian.",
  description:
    "Real brokers, the brands and websites we built, and the numbers that followed.",
};

const caseStudies = [
  {
    name: "Aaron",
    title: "Mortgage Broker",
    company: "Reyes Lending Co.",
    location: "Austin, TX",
    image: "/testimonials/aaronimg.jpeg",
    headline: "From referral-only to a pipeline that fills itself.",
    quote:
      "Meridian rebuilt the website. I run a different broker shop now. Better borrowers, fewer chase calls, and far more confidence on the first conversation.",
    narrative:
      "Aaron was closing strong but invisible online. Every deal came through a referral and a follow-up text. Within ninety days of launch his site was ranking for purchase loans in three zip codes and his weekly intake forms had tripled.",
    results: [
      { value: "3x", label: "Weekly intake volume" },
      { value: "$42M", label: "Annualized loan volume" },
      { value: "12 wk", label: "From brief to ranked" },
    ],
  },
  {
    name: "Gilian",
    title: "Senior Loan Advisor",
    company: "Coastal Mortgage Group",
    location: "San Diego, CA",
    image: "/testimonials/gilianimg.jpg",
    headline: "A brand that finally matched the business behind it.",
    quote:
      "Three months in and the leads coming through the site are the leads I actually want. The brand finally looks like the business I always thought I was running.",
    narrative:
      "Gilian had earned twelve years of trust the hard way, but her old site read like a generic loan shop. We rebuilt the brand top to bottom: identity, voice, and a custom site. Her average loan size climbed alongside her close rate.",
    results: [
      { value: "+58%", label: "Avg. loan size" },
      { value: "2.1x", label: "Lead-to-app conversion" },
      { value: "9.4★", label: "Avg. review score" },
    ],
  },
  {
    name: "Po",
    title: "Principal Broker",
    company: "Hartmann & Co.",
    location: "Toronto, ON",
    image: "/testimonials/poimg.png",
    headline: "Compounding referrals into a market-leading book.",
    quote:
      "Most agencies wanted to talk about SEO and WordPress. Meridian wanted to talk about how my borrowers actually decide. That changed everything.",
    narrative:
      "Po had a deep referral network with no system behind it. We installed automated review, anniversary, and renewal sequences on top of the new site. His past-client repeat business now drives more revenue than his paid acquisition.",
    results: [
      { value: "$200M", label: "Volume past 24 mo." },
      { value: "5x", label: "Repeat-client revenue" },
      { value: "47%", label: "Referrals from past clients" },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="bg-white">
      <Nav />

      <div data-nav-mode="hero">
        <CaseStudyHero
          title="Real outcomes from working mortgage brokers."
          subtitle="A closer look at three brokers we've built for: what they started with, what we shipped, and the numbers that followed."
        />
      </div>

      <div data-nav-mode="light">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-32 px-16 pb-32 pt-24">
          {caseStudies.map((cs, i) => (
            <CaseStudyCard
              key={cs.name}
              caseStudy={cs}
              reverse={i % 2 === 1}
              tone={i % 2 === 1 ? "dark" : "light"}
            />
          ))}
        </div>
      </div>

      <div data-nav-mode="dark">
        <SiteCTA />
        <Footer />
      </div>
    </main>
  );
}
