import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import SubServiceGrid from "@/components/SubServiceGrid";
import Timeline from "@/components/Timeline";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Particuliers",
  description:
    "Mariages, anniversaires, projets personnels : prises de vues aériennes par drone pour vos moments importants. Télépilote DGAC, devis gratuit sous 24h.",
};

const SUB_SERVICES = [
  {
    title: "Mariages",
    text: "Une vue d'ensemble de votre mariage, du lieu de cérémonie à la fête jusqu'au bout de la nuit. Des images uniques à partager avec vos invités.",
    cta: "Devis mariage",
  },
  {
    title: "Anniversaires",
    text: "Un anniversaire, une naissance, une surprise : je capture l'instant et le lieu dans son ensemble, pour un souvenir qui sort de l'ordinaire.",
    cta: "Devis anniversaire",
  },
  {
    title: "Projet personnel",
    text: "Un terrain, une maison en construction, un lieu qui compte pour vous : je le filme et le photographie sous l'angle que vous imaginez.",
    cta: "Devis projet personnel",
  },
];

const MISSION_STEPS = [
  { n: "01", title: "On échange sur votre besoin", cap: "Le moment à capturer, le lieu, vos envies." },
  { n: "02", title: "Je prépare le vol", cap: "Vérification de zone, déclarations préalables si besoin." },
  { n: "03", title: "Prise de vue le jour J", cap: "Plusieurs angles, un maximum de matière." },
  { n: "04", title: "Livraison sous 48–72 h", cap: "Fichiers retouchés, lien de téléchargement." },
];

export default function ParticuliersPage() {
  return (
    <>
      <PageHero
        eyebrow="Particuliers"
        title="Mariages, anniversaires, projets personnels"
        lead="Mariage, anniversaire, projet qui vous tient à cœur : je capture vos moments importants depuis le ciel."
      >
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/contact">Demander un devis</Button>
          <Button href="/realisations" variant="ghost-invert">Voir mes réalisations</Button>
        </div>
      </PageHero>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-2xl text-ink">Ce que je vous propose</h2>
        <div className="mt-6">
          <SubServiceGrid items={SUB_SERVICES} />
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
          <Button href="/contact">Demander un devis</Button>
        </div>
      </section>
    </>
  );
}
