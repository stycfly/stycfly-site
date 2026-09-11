import type { Metadata } from "next";
import { Big_Shoulders, Manrope, Space_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const shoulders = Big_Shoulders({
  variable: "--font-shoulders",
  weight: ["600", "700", "800"],
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "StycFly — Vidéaste & photographe drone",
    template: "%s | StycFly",
  },
  description:
    "Prises de vues aériennes professionnelles par drone pour l'immobilier et les événements sportifs. Télépilote certifié DGAC, basé en Bretagne, devis gratuit sous 24h.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${shoulders.variable} ${manrope.variable} ${spaceMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-paper text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
