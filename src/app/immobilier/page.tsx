import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import FeatureGrid from "@/components/FeatureGrid";
import Timeline from "@/components/Timeline";
import Reveal from "@/components/Reveal";
import Carousel from "@/components/Carousel";

export const metadata: Metadata = {
  title: "Photographe Drone Immobilier",
  description:
    "Valorisez vos annonces avec des vues aériennes professionnelles. Télépilote DGAC, livraison 48-72h, devis gratuit et personnalisé.",
};

const DELIVERABLES = [
  "Photos aériennes haute résolution du bien et de ses abords",
  "Vidéo aérienne (survol, orbite, révélation) pour vos annonces et réseaux sociaux",
  "Pack photo et vidéo pour une présentation complète",
  "Formule sur mesure pour plusieurs biens ou missions récurrentes",
];

const GALLERY_SLIDES = [
  { src: "/images/immobilier/maison-piscine-moderne.jpg", alt: "Vue aérienne d'une maison moderne avec piscine et jardin" },
  { src: "/images/immobilier/maison-vue-toiture.jpg", alt: "Vue aérienne d'une maison et de son terrain arboré" },
  { src: "/images/immobilier/terrasse-ombragee.jpg", alt: "Vue aérienne d'une maison avec terrasse ombragée et parasol" },
  { src: "/images/immobilier/maison-contemporaine-toiture.jpg", alt: "Vue aérienne d'une maison contemporaine et de sa toiture" },
];

const MISSION_STEPS = [
  { n: "01", title: "On échange sur votre besoin", cap: "Le bien à valoriser, vos contraintes de terrain." },
  { n: "02", title: "Je prépare le vol", cap: "Vérification de zone, déclarations préalables si besoin." },
  { n: "03", title: "Prise de vue le jour J", cap: "Plusieurs angles, un maximum de matière." },
  { n: "04", title: "Livraison sous 48–72 h", cap: "Fichiers retouchés, lien de téléchargement." },
];

export default function ImmobilierPage() {
  return (
    <>
      <PageHero
        eyebrow="Immobilier"
        title="Prises de vues aériennes pour l'immobilier"
        lead="Je montre le bien dans son ensemble : la parcelle, les accès, le voisinage. De quoi répondre aux questions des acheteurs avant la visite."
      >
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/contact">Demander un devis immobilier</Button>
          <Button href="/realisations" variant="ghost-invert">Voir mes réalisations</Button>
        </div>
      </PageHero>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-2xl text-ink">Ce que je vous propose</h2>
        <div className="mt-6">
          <FeatureGrid items={DELIVERABLES} />
        </div>

        <h2 className="mt-16 text-2xl text-ink">Exemples de prises de vues</h2>
        <div className="mt-6 max-w-sm">
          <Reveal>
            <Carousel slides={GALLERY_SLIDES} />
          </Reveal>
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
              réglementaires, déclarations préalables si nécessaire. Basé en
              Bretagne, je me déplace partout en France.
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
