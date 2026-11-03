import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import TrustBar from "@/components/TrustBar";
import Faq from "@/components/Faq";
import Timeline from "@/components/Timeline";
import Reveal from "@/components/Reveal";
import RevealText from "@/components/RevealText";
import Magnetic from "@/components/Magnetic";
import Parallax from "@/components/Parallax";

const JOURNEY = [
  { n: "01", title: "Vous décrivez votre projet" },
  { n: "02", title: "Je vous envoie un devis sous 24 h" },
  { n: "03", title: "Je réalise la prise de vue" },
  { n: "04", title: "Vous recevez vos fichiers sous 48 à 72 h" },
];

const HIGHLIGHTS = [
  { src: "/images/realisations/piscine-1.jpg", alt: "Vue aérienne d'une maison contemporaine avec piscine" },
  { src: "/images/realisations/toiture-ardoise.jpg", alt: "Vue aérienne d'une toiture en ardoise avec panneaux solaires" },
  { src: "/images/realisations/maison-parasol-1.jpg", alt: "Vue aérienne d'une maison et de sa terrasse ombragée" },
  { src: "/images/realisations/piscine-3.jpg", alt: "Vue aérienne d'une maison contemporaine et de son jardin avec piscine" },
];

const FAQ_ITEMS = [
  {
    question: "Le pilotage par drone est-il légal ?",
    answer:
      "Oui. Je suis télépilote certifié DGAC (n° FRA-RP-000000146148) et j'opère dans le cadre réglementaire en vigueur.",
  },
  {
    question: "Combien de temps pour recevoir mes photos et vidéos ?",
    answer:
      "Les fichiers sont envoyés dès le règlement reçu, via un lien de téléchargement, sous 48 à 72 h après l'intervention.",
  },
  {
    question: "Intervenez-vous partout en France ?",
    answer:
      "Je suis basé en Bretagne et j'interviens partout en France. Les frais de déplacement sont facturés selon la distance.",
  },
  {
    question: "Combien coûte une prestation drone ?",
    answer:
      "Le tarif dépend du temps sur place, du nombre de prises de vue et de la distance à parcourir. Je vous envoie un devis gratuit sous 24 h.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-sky-deep">
        <div
          className="animate-drift absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 900px 500px at 85% -10%, rgba(255,107,74,0.18), transparent 60%), radial-gradient(ellipse 700px 500px at -5% 100%, rgba(47,116,214,0.25), transparent 60%)",
          }}
        />
        <div className="glow-orb -left-24 top-1/3 h-72 w-72 bg-coral/25" aria-hidden="true" />
        <div
          className="glow-orb -right-16 top-10 h-96 w-96 bg-sky/25"
          style={{ animationDelay: "2s" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-28">
          <div>
            <span className="mono-label inline-flex items-center gap-2.5 rounded-full border border-white/20 px-4 py-1.5 text-white/80">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-dot absolute inline-flex h-2 w-2 rounded-full bg-coral" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-coral" />
              </span>
              Télépilote DGAC certifié — Bretagne
            </span>
            <h1 className="mt-6 text-[2.6rem] leading-[1.03] text-white md:text-[4rem]">
              <RevealText text="Vidéos et photographies par" />{" "}
              <RevealText text="drone." delay={250} className="text-coral" />
            </h1>
            <p className="mt-6 max-w-[42ch] text-lg text-white/70 md:text-xl">
              Particuliers, entreprises, professionnels. Télépilote certifié
              DGAC, j&apos;interviens partout en France.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Magnetic>
                <Button href="/contact">Demander un devis</Button>
              </Magnetic>
              <Magnetic strength={0.25}>
                <Button href="/realisations" variant="ghost-invert">Voir les réalisations</Button>
              </Magnetic>
            </div>
          </div>

          <Parallax speed={0.1} className="animate-float relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-navy-soft shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src="/videos/hero-drone.mp4" type="video/mp4" />
            </video>
          </Parallax>
        </div>
      </section>

      <TrustBar />

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <h2 className="text-3xl text-ink md:text-4xl">Prestations</h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 flex flex-col divide-y divide-line overflow-hidden rounded-xl border border-line">
            <div className="group grid gap-6 bg-white p-8 transition-colors duration-300 hover:bg-mist/60 md:grid-cols-[1.3fr_auto] md:items-center md:gap-8">
              <div>
                <h3 className="text-xl font-bold text-ink">Particuliers</h3>
                <p className="mt-2 max-w-[46ch] text-ink-soft">
                  Mariages, anniversaires, projets personnels. Je capture vos
                  moments importants depuis le ciel.
                </p>
              </div>
              <Button href="/particuliers" variant="ghost" className="justify-self-start transition-transform group-hover:translate-x-1 md:justify-self-end">
                Découvrir →
              </Button>
            </div>

            <div className="group grid gap-6 bg-white p-8 transition-colors duration-300 hover:bg-mist/60 md:grid-cols-[1.3fr_auto] md:items-center md:gap-8">
              <div>
                <h3 className="text-xl font-bold text-ink">Entreprises</h3>
                <p className="mt-2 max-w-[46ch] text-ink-soft">
                  Communication, séminaires, inaugurations. Des images
                  aériennes qui valorisent votre entreprise.
                </p>
              </div>
              <Button href="/entreprises" variant="ghost" className="justify-self-start transition-transform group-hover:translate-x-1 md:justify-self-end">
                Découvrir →
              </Button>
            </div>

            <div className="group grid gap-6 bg-white p-8 transition-colors duration-300 hover:bg-mist/60 md:grid-cols-[1.3fr_auto] md:items-center md:gap-8">
              <div>
                <h3 className="text-xl font-bold text-ink">Professionnels</h3>
                <p className="mt-2 max-w-[46ch] text-ink-soft">
                  Immobilier, hôtellerie, événements sportifs, collectivités.
                  Des prises de vues adaptées à votre activité.
                </p>
              </div>
              <Button href="/professionnels" variant="ghost" className="justify-self-start transition-transform group-hover:translate-x-1 md:justify-self-end">
                Découvrir →
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      {/* RÉALISATIONS */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <Reveal>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {HIGHLIGHTS.map((img) => (
              <div key={img.src} className="aspect-[4/5] overflow-hidden rounded-xl">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={720}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/realisations" className="nav-link font-semibold text-ink hover:text-sky">
              Voir toutes les réalisations →
            </Link>
          </div>
        </Reveal>
      </section>

      {/* PARCOURS CLIENT */}
      <section className="border-y border-line bg-mist">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <h2 className="text-3xl text-ink md:text-4xl">Comment ça se passe</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-14">
              <Timeline steps={JOURNEY} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <h2 className="text-3xl text-ink md:text-4xl">Questions fréquentes</h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-12">
            <Faq items={FAQ_ITEMS} />
          </div>
        </Reveal>
      </section>

      {/* CTA FINALE */}
      <section className="relative overflow-hidden border-t border-line bg-sky-deep">
        <div className="glow-orb left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 bg-coral/15" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 md:flex-row md:items-center md:justify-between">
          <Reveal>
            <h2 className="max-w-[18ch] text-3xl text-white md:text-4xl">
              Un projet en tête ?
            </h2>
            <p className="mt-4 max-w-[44ch] text-white/70">
              Décrivez-le en quelques lignes, je vous réponds sous 24 h
              avec un devis.
            </p>
          </Reveal>
          <Reveal delay={150} className="flex flex-shrink-0 flex-col items-start gap-3">
            <Magnetic>
              <Link
                href="/contact"
                className="inline-flex rounded-md bg-coral px-6 py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Me contacter
              </Link>
            </Magnetic>
            <span className="font-mono text-xs text-white/50">
              06 04 49 48 57 · contactstycfly@gmail.com
            </span>
          </Reveal>
        </div>
      </section>
    </>
  );
}
