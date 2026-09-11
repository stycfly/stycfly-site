import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";

export const metadata: Metadata = {
  title: "Qui suis-je",
  description:
    "Costa Brémond, télépilote certifié DGAC basé en Bretagne, fondateur de StycFly.",
};

const PILLARS = [
  {
    title: "Certifié DGAC",
    cap: "N° FRA-RP-000000146148 — je vole en toute légalité, partout où je me déplace.",
    icon: (
      <path
        d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Réactif",
    cap: "Un échange rapide, un devis personnalisé sous 24h, sans jargon inutile.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth={1.8} />
        <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Matériel pro",
    cap: "DJI Mini 3, léger et discret, capture 4K, idéal sur tout type de terrain.",
    icon: (
      <>
        <rect x="4" y="8" width="16" height="10" rx="2" stroke="currentColor" strokeWidth={1.8} />
        <circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth={1.8} />
        <path d="M8 8l1.5-2h5L16 8" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
];

export default function AProposPage() {
  return (
    <>
      <PageHero
        eyebrow="Qui suis-je"
        title="Costa Brémond, fondateur de StycFly"
        lead="Depuis toujours, je suis fasciné par ce que l'on peut voir d'en haut."
      />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <Reveal>
          <p className="max-w-[65ch] text-lg text-ink-soft">
            StycFly est né de cette passion : donner une autre perspective à
            vos biens, vos événements et vos moments les plus importants,
            grâce à des prises de vues aériennes par drone.
          </p>
          <p className="mt-5 max-w-[65ch] text-ink-soft">
            Basé en Bretagne, j&apos;interviens partout en France auprès des
            agences immobilières, des mariés et des organisateurs
            d&apos;événements.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="card-premium h-full p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-coral/10 text-coral">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                    {p.icon}
                  </svg>
                </span>
                <p className="mt-4 font-bold text-ink">{p.title}</p>
                <p className="mt-1.5 text-sm text-ink-soft">{p.cap}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <blockquote className="mt-16 border-l-2 border-coral pl-6 text-xl italic text-ink">
            Parce que vos projets méritent d&apos;être vus sous leur meilleur
            angle.
          </blockquote>
        </Reveal>

        <div className="mt-12">
          <Magnetic>
            <Button href="/contact">Demander un devis</Button>
          </Magnetic>
        </div>
      </section>
    </>
  );
}
