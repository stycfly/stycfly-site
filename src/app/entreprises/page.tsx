import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import SubServiceGrid from "@/components/SubServiceGrid";
import Timeline from "@/components/Timeline";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Entreprises",
  description:
    "Communication et événements d'entreprise : prises de vues aériennes par drone pour valoriser votre activité. Télépilote DGAC, devis gratuit sous 24h.",
};

const SUB_SERVICES = [
  {
    title: "Communication",
    text: "Des images aériennes pour votre site, vos réseaux sociaux ou vos supports commerciaux. De quoi donner à votre entreprise une image qui marque.",
    cta: "Devis communication",
  },
  {
    title: "Événements",
    text: "Séminaire, inauguration, salon, team building : je capture l'ampleur de votre événement et l'énergie de vos participants, vue du ciel.",
    cta: "Devis événement",
  },
];

const MISSION_STEPS = [
  { n: "01", title: "On échange sur votre besoin", cap: "L'événement ou le contenu à valoriser." },
  { n: "02", title: "Je prépare le vol", cap: "Vérification de zone, déclarations préalables si besoin." },
  { n: "03", title: "Prise de vue le jour J", cap: "Plusieurs angles, un maximum de matière." },
  { n: "04", title: "Livraison sous 48–72 h", cap: "Fichiers retouchés, lien de téléchargement." },
];

export default function EntreprisesPage() {
  return (
    <>
      <PageHero
        eyebrow="Entreprises"
        title="Communication et événements d'entreprise"
        lead="Communication, séminaires, inaugurations : des images aériennes qui valorisent votre entreprise."
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
              selon la réglementation en vigueur, avec les déclarations de vol
              nécessaires selon le lieu. Basé en Bretagne, je me déplace
              partout en France.
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
