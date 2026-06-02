import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Terms · Meridian.",
  description: "The terms that govern your use of the Meridian website.",
};

export default function LegalTermsPage() {
  return (
    <LegalPage
      title="Terms of use."
      updated="June 2, 2026"
      intro="These terms govern your use of this website. By browsing meridianmtg.com you agree to them. They do not cover the separate agreement we sign for a project, which always takes precedence for that work."
      sections={[
        {
          heading: "Using the site",
          body: [
            "You may use this site to learn about our work and to get in touch. You agree not to misuse it, interfere with how it runs, or try to access parts of it you are not meant to.",
          ],
        },
        {
          heading: "Our content",
          body: [
            "The text, design, and visuals on this site belong to Meridian or our clients and are protected by copyright. You may not copy or reuse them without our written permission.",
          ],
        },
        {
          heading: "What you send us",
          body: [
            "Anything you submit through a form should be accurate and yours to share. We treat it under our Privacy Policy.",
          ],
        },
        {
          heading: "No warranty",
          body: [
            "We work to keep the site accurate and available, but we provide it as is. We do not promise it will be free of errors or never go offline, and nothing on it is professional, legal, or financial advice.",
          ],
        },
        {
          heading: "Limitation of liability",
          body: [
            "To the extent the law allows, Meridian is not liable for any loss that follows from your use of this site.",
          ],
        },
        {
          heading: "Links to other sites",
          body: [
            "Where we link to another site, we are not responsible for its content or its practices. Those sites have their own terms.",
          ],
        },
        {
          heading: "Changes",
          body: [
            "We may update these terms from time to time. The date at the top shows when they last changed.",
          ],
        },
        {
          heading: "Contact",
          body: ["Questions about these terms can go to ehoward@meridianmtg.com."],
        },
      ]}
    />
  );
}
