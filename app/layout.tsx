import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://meridianmtg.com"),
  title: "Meridian. Brand and web design for mortgage professionals.",
  description:
    "We design the brands and websites that turn working mortgage brokers into the first name borrowers and referral partners think of in their market.",
  openGraph: {
    type: "website",
    siteName: "Meridian",
    title: "Meridian. Brand and web design for mortgage professionals.",
    description:
      "We design the brands and websites that turn working mortgage brokers into the first name in their market.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
