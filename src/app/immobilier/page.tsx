import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import FeatureGrid from "@/components/FeatureGrid";
import Timeline from "@/components/Timeline";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Photographe Drone Immobilier",
  description:
    "Valorisez vos annonces avec des vues aériennes professionnelles. Télépilote DGAC, livraison 48-72h, devis gratuit et personnalisé.",
};

const DELIVERABLES = [
  "Photos aériennes haute résolution du bien et de son environnement",
  "Vidéo aérienne (survol, orbite, révélation) pour vos annonces et réseaux sociaux",
  "Pack photo + vidéo pour une présentation premium",
  "Prestation sur mesure pour les biens multiples et missions récurrentes",
];

const MISSION_STEPS = [
  { n: "01", title: "On échange sur votre besoin", cap: "Bien à valoriser, usage prévu, contraintes du terrain." },
  { n: "02", title: "Je prépare le vol", cap: "Vérification de zone, déclarations préalables si besoin." },
  { n: "03", title: "Prise de vue le jour J", cap: "Plusieurs angles pour un maximum de matière." },
  { n: "04", title: "Livraison sous 48–72h", cap: "Fichiers retouchés, lien sécurisé." },
];

export default function ImmobilierPage() {
  return (
    <>
      <PageHero
        eyebrow="Prestation · 01"
        title="Prises de vues aériennes pour l'immobilier"
        lead="StycFly réalise des prises de vues aériennes par drone pour aider les agences immobilières à mieux présenter leurs biens : plans larges, vues d'ensemble et angles impossibles à obtenir depuis le sol."
      >
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/contact">Demander un devis immobilier</Button>
          <Button href="/realisations" variant="ghost-invert">Voir nos réalisations</Button>
        </div>
      </PageHero>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <Reveal>
          <p className="mono-label text-coral">Bénéfice clé</p>
          <p className="mt-2 text-2xl font-bold text-ink">
            Vos annonces se démarquent et se vendent plus vite.
          </p>
        </Reveal>

        <h2 className="mt-14 text-2xl text-ink">Ce que je vous propose</h2>
        <div className="mt-6">
          <FeatureGrid items={DELIVERABLES} />
        </div>

        <h2 className="mt-16 text-2xl text-ink">Comment se déroule une mission</h2>
        <div className="mt-10">
          <Timeline steps={MISSION_STEPS} />
        </div>

        <Reveal delay={100}>
          <div className="mt-16 rounded-xl border border-line bg-mist p-7">
            <p className="mono-label text-coral">Réglementation et sécurité</p>
            <p className="mt-3 text-ink-soft">
              Télépilote certifié DGAC (n° FRA-RP-000000146148), j&apos;opère
              conformément à la réglementation en vigueur : zones de vol
              autorisées, hauteurs réglementaires, sécurisation de la zone au
              sol.
            </p>
            <p className="mt-3 font-semibold text-ink">
              Zone d&apos;intervention : basé en Bretagne, je me déplace
              partout en France selon les besoins de votre mission.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 flex gap-4">
          <Button href="/contact">Demander un devis immobilier</Button>
        </div>
      </section>
    </>
  );
}
