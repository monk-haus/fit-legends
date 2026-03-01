import type { Metadata } from "next";
import { Bebas_Neue, Manrope } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fit Legends | The Ultimate Physical Transformation",
  description: "Science-based, 18 years of elite training experience. Empowering every Queen and King to their ultimate fit physique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${bebas.variable} ${manrope.variable} antialiased bg-background text-foreground selection:bg-brand selection:text-background`}
      >
        {children}
      </body>
    </html>
  );
}
