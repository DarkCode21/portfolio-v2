/**
 * Portfolio V2 - DarkCode21
 * Author: Deyvi Villegas (DarkCode)
 * Usage: Personal / non-commercial use allowed. See LICENSE for details.
 */

import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Funnel_Display } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-funnel",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://darkcode-portfolio.vercel.app"),
  title: {
    default: "DarkCode | Full-Stack Developer Portfolio",
    template: "%s | DarkCode",
  },
  description:
    "Portfolio de DarkCode, desarrollador full-stack especializado en Next.js, Laravel y aplicaciones web modernas, seguras y escalables.",
  openGraph: {
    title: "DarkCode | Full-Stack Developer Portfolio",
    description:
      "Portfolio de DarkCode, desarrollador full-stack especializado en Next.js, Laravel y aplicaciones web modernas, seguras y escalables.",
    url: "https://darkcode-portfolio.vercel.app/",
    siteName: "DarkCode",
    images: [
      {
        url: "/og-darkcode.jpg",
        width: 1200,
        height: 630,
        alt: "DarkCode - Full-Stack Developer Portfolio",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DarkCode | Full-Stack Developer Portfolio",
    description:
      "Portfolio de DarkCode, desarrollador full-stack especializado en Next.js, Laravel y aplicaciones web modernas, seguras y escalables.",
    images: ["/og-darkcode.jpg"],
  },
};

type RootLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

type AppLocale = (typeof routing.locales)[number];

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale: rawLocale } = await params;

  if (!routing.locales.includes(rawLocale as AppLocale)) {
    notFound();
  }

  const locale = rawLocale as AppLocale;

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${funnelDisplay.className} min-h-dvh bg-primary text-white antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
