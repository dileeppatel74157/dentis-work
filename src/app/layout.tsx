import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DentCare | Premium Dental Clinic – Expert Care, Beautiful Smiles",
  description:
    "Experience world-class dental care at DentCare. 15+ years of expertise in dental implants, cosmetic dentistry, Invisalign, and more. Book your appointment on WhatsApp today.",
  keywords: [
    "dental clinic",
    "dentist near me",
    "dental implants",
    "cosmetic dentistry",
    "teeth whitening",
    "Invisalign",
    "root canal",
    "orthodontics",
    "smile makeover",
    "best dentist Bangalore",
  ],
  openGraph: {
    title: "DentCare | Premium Dental Clinic",
    description:
      "15+ years of expertise. 10,000+ happy patients. Experience world-class dental care. Book your appointment today.",
    type: "website",
    locale: "en_IN",
    siteName: "DentCare",
  },
  twitter: {
    card: "summary_large_image",
    title: "DentCare | Premium Dental Clinic",
    description:
      "Experience world-class dental care with 15+ years of expertise. Book your appointment today.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
