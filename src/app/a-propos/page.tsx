import type { Metadata } from "next";
import Image from "next/image";
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
          <div className="card-premium flex flex-col items-center gap-6 p-8 text-center sm:flex-row sm:text-left">
            <Image
              src="/images/costa-bremond.jpg"
              alt="Costa Brémond, fondateur de StycFly"
              width={112}
              height={112}
              className="h-28 w-28 flex-shrink-0 rounded-full border-4 border-mist object-cover"
            />
            <div>
              <p className="font-display text-xl font-extrabold text-ink">
                Costa Brémond
              </p>
              <p className="mono-label mt-1 text-coral">
                Fondateur &amp; télépilote DGAC — StycFly
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-ink-soft sm:justify-start">
                <a href="tel:0604494857" className="nav-link w-fit hover:text-ink">
                  06 04 49 48 57
                </a>
                <a
                  href="mailto:contactstycfly@gmail.com"
                  className="nav-link w-fit hover:text-ink"
                >
                  contactstycfly@gmail.com
                </a>
                <span>stycfly.fr</span>
              </div>
              <div className="mt-4 flex justify-center gap-3 sm:justify-start">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-soft">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d="M21.6 7.2s-.2-1.5-.8-2.1c-.8-.8-1.7-.8-2.1-.9C15.9 4 12 4 12 4h0s-3.9 0-6.7.2c-.4 0-1.3.1-2.1.9-.6.6-.8 2.1-.8 2.1S2.2 9 2.2 10.7v1.6c0 1.7.2 3.5.2 3.5s.2 1.5.8 2.1c.8.8 1.9.8 2.3.9C7 19 12 19 12 19s3.9 0 6.7-.3c.4-.1 1.3-.1 2.1-.9.6-.6.8-2.1.8-2.1s.2-1.7.2-3.5v-1.6c0-1.7-.2-3.5-.2-3.5zM9.9 14.6V8.9l5.4 2.9-5.4 2.8z" />
                  </svg>
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-soft">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth={1.8} />
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth={1.8} />
                    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-14 max-w-[65ch] text-lg text-ink-soft">
            StycFly est né de cette passion : donner une autre perspective à
            vos biens, vos événements et vos moments les plus importants,
            grâce à des prises de vues aériennes par drone.
          </p>
          <p className="mt-5 max-w-[65ch] text-ink-soft">
            Basé en Bretagne, j&apos;interviens partout en France auprès des
            agences immobilières et des organisateurs d&apos;événements
            sportifs.
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
