import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import FeatureGrid from "@/components/FeatureGrid";
import Timeline from "@/components/Timeline";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Vidéaste Drone Hôtellerie & Chambres d'hôtes",
  description:
    "Photos et vidéos aériennes pour valoriser votre hôtel ou chambre d'hôtes : établissement, extérieurs et environnement. Télépilote DGAC, devis gratuit sous 24h.",
};

const DELIVERABLES = [
  "Photos aériennes de l'établissement et de ses extérieurs (piscine, jardin, terrasse)",
  "Vidéo aérienne de l'établissement, pour donner envie de réserver",
  "Mise en valeur de l'environnement et des accès (mer, campagne, vignoble, etc.)",
  "Contenus prêts pour votre site, vos plateformes de réservation et réseaux sociaux",
];

const MISSION_STEPS = [
  { n: "01", title: "On échange sur votre besoin", cap: "Établissement à valoriser, atouts à mettre en avant." },
  { n: "02", title: "Je prépare le vol", cap: "Vérification de zone, déclarations préalables si besoin." },
  { n: "03", title: "Prise de vue le jour J", cap: "Bâtiment, extérieurs et environnement." },
  { n: "04", title: "Livraison sous 48–72 h", cap: "Fichiers retouchés, lien de téléchargement." },
];

export default function HotelleriePage() {
  return (
    <>
      <PageHero
        eyebrow="Hôtellerie & Chambres d'hôtes"
        title="Photos & vidéos pour hôtels et chambres d'hôtes"
        lead="L'établissement dans son cadre, pour votre site et vos annonces Booking ou Airbnb."
      >
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/contact">Demander un devis hôtellerie</Button>
          <Button href="/realisations" variant="ghost-invert">Voir mes réalisations</Button>
        </div>
      </PageHero>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-2xl text-ink">Ce que je vous propose</h2>
        <div className="mt-6">
          <FeatureGrid items={DELIVERABLES} />
        </div>

        <h2 className="mt-16 text-2xl text-ink">Comment ça se passe</h2>
        <div className="mt-10">
          <Timeline steps={MISSION_STEPS} />
        </div>

        <Reveal delay={100}>
          <div className="mt-16 rounded-xl border border-line bg-mist p-7">
            <p className="text-ink-soft">
              Télépilote certifié DGAC (n° FRA-RP-000000146148), j&apos;opère
              selon la réglementation en vigueur : zones autorisées, hauteurs
              réglementaires, sécurisation de la zone au sol. Basé en
              Bretagne, je me déplace partout en France.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 flex gap-4">
          <Button href="/contact">Demander un devis hôtellerie</Button>
        </div>
      </section>
    </>
  );
}
