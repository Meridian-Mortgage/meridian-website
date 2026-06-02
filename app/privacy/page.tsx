import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Privacy Policy · Meridian.",
  description:
    "How Meridian collects, uses, and protects the information you share with us.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy."
      updated="June 2, 2026"
      intro="This policy explains what we collect when you use this site or contact us, how we use it, and the choices you have. It applies to meridianmtg.com and the forms on it."
      sections={[
        {
          heading: "What we collect",
          body: [
            "When you submit a form, we collect the details you choose to give us, such as your name, email, company, and the message you write. We do not ask for sensitive financial information through this site.",
            "Like most websites, our server may also record basic technical data such as your browser type, the pages you view, and the approximate region you visit from.",
          ],
        },
        {
          heading: "How we use it",
          body: [
            "We use the information you send to reply to you, to scope and run projects, and to keep a record of our correspondence. We do not sell your information.",
          ],
        },
        {
          heading: "Who we share it with",
          body: [
            "We share information only with the service providers that help us run the business, such as our email and project tools, and only as far as they need it to do their job. We may also disclose information where the law requires it.",
          ],
        },
        {
          heading: "Cookies and analytics",
          body: [
            "We may use cookies and similar tools to understand how the site is used and to improve it. You can control cookies through your browser settings. Turning them off may affect how parts of the site work.",
          ],
        },
        {
          heading: "How long we keep it",
          body: [
            "We keep your information for as long as we need it to answer your enquiry, run a project, and meet our legal and accounting obligations, then we remove it.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            "You can ask us to show you the information we hold about you, correct it, or delete it. Write to the address below and we will respond.",
          ],
        },
        {
          heading: "Contact",
          body: [
            "Questions about this policy can go to ehoward@meridianmtg.com.",
          ],
        },
      ]}
    />
  );
}
