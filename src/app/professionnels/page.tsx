import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import SubServiceGrid from "@/components/SubServiceGrid";
import Timeline from "@/components/Timeline";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Professionnels",
  description:
    "Immobilier, hôtellerie, manifestations sportives, collectivités : prises de vues aériennes par drone pour votre activité. Télépilote DGAC, devis gratuit sous 24h.",
};

const SUB_SERVICES = [
  {
    title: "Immobilier",
    text: "Le bien, son terrain et son environnement, vus depuis le ciel. De quoi répondre aux questions des acheteurs avant la visite.",
    cta: "Devis immobilier",
  },
  {
    title: "Hôtels & gîtes",
    text: "Votre établissement dans son cadre, pour votre site et vos annonces Booking ou Airbnb.",
    cta: "Devis hôtellerie",
  },
  {
    title: "Manifestations sportives",
    text: "Le départ d'une course, l'ampleur d'un parcours, la ferveur du public : des images qui racontent votre événement comme aucune autre vue ne le permet.",
    cta: "Devis manifestation sportive",
  },
  {
    title: "Communes",
    text: "Un événement local, un site communal, une manifestation publique : je mets en valeur votre commune avec des images aériennes professionnelles.",
    cta: "Devis collectivité",
  },
];

const MISSION_STEPS = [
  { n: "01", title: "On échange sur votre besoin", cap: "Le bien, l'établissement ou l'événement à valoriser." },
  { n: "02", title: "Je prépare le vol", cap: "Vérification de zone, déclarations préalables si besoin." },
  { n: "03", title: "Prise de vue le jour J", cap: "Plusieurs angles, un maximum de matière." },
  { n: "04", title: "Livraison sous 48–72 h", cap: "Fichiers retouchés, lien de téléchargement." },
];

export default function ProfessionnelsPage() {
  return (
    <>
      <PageHero
        eyebrow="Professionnels"
        title="Vos activités professionnelles vues du ciel"
        lead="Immobilier, hôtellerie, événements sportifs, collectivités : des prises de vues adaptées à votre activité."
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
              réglementaires, sécurisation de la zone au sol. Basé en
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
