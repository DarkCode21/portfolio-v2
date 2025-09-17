import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio 3D",
  description: "Next 15 + R3F + Framer + Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-dvh bg-primary text-white antialiased">
        {children}
      </body>
    </html>
  );
}
