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
    default: "StycFly — Photo et vidéo par drone en Bretagne",
    template: "%s | StycFly",
  },
  description:
    "Photographe et vidéaste drone basé en Bretagne. Pour les particuliers, les entreprises et les professionnels. Télépilote certifié DGAC (n° FRA-RP-000000146148), interventions partout en France.",
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
