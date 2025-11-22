import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "DarkCode | Full-Stack Developer Portfolio",
  description:
    "Portfolio de DarkCode, desarrollador full-stack especializado en Next.js, Laravel y aplicaciones web modernas, seguras y escalables.",
  openGraph: {
    title: "DarkCode | Full-Stack Developer Portfolio",
    description:
      "Portfolio de DarkCode, desarrollador full-stack especializado en Next.js, Laravel y aplicaciones web modernas, seguras y escalables.",
    url: "https://darkcode-portfolio.vercel.app",
    siteName: "DarkCode",
    images: [
      {
        url: "https://darkcode-portfolio.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
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
    images: ["https://darkcode-portfolio.vercel.app/og-image.jpg"],
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
      <body className="min-h-dvh bg-primary text-white antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
