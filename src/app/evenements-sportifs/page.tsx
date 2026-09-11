import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import FeatureGrid from "@/components/FeatureGrid";
import Timeline from "@/components/Timeline";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Vidéaste Drone Événements Sportifs",
  description:
    "Des images aériennes qui valorisent vos événements sportifs et compétitions. Télépilote DGAC, devis gratuit sous 24h.",
};

const DELIVERABLES = [
  "Photos aériennes du site, du parcours et des participants",
  "Plans dynamiques de la course, de l'épreuve ou de la compétition",
  "Vidéo highlights montée et étalonnée",
  "Formats prêts pour vos réseaux sociaux et vos partenaires/sponsors",
];

const MISSION_STEPS = [
  { n: "01", title: "On échange en amont", cap: "Déroulé de l'épreuve, moments clés à capter." },
  { n: "02", title: "Coordination avec l'organisation", cap: "Repérage du site, contraintes de sécurité." },
  { n: "03", title: "Captation dynamique", cap: "Départ, parcours, arrivée, podium." },
  { n: "04", title: "Vidéo highlights livrée", cap: "Étalonnée, formats réseaux inclus." },
];

export default function EvenementsSportifsPage() {
  return (
    <>
      <PageHero
        eyebrow="Prestation · 02"
        title="Photos & vidéos pour vos événements sportifs"
        lead="Des vues aériennes spectaculaires de vos compétitions et événements sportifs, qui valorisent votre organisation et vos sponsors."
      >
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/contact">Demander un devis événement</Button>
          <Button href="/realisations" variant="ghost-invert">Voir nos réalisations</Button>
        </div>
      </PageHero>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <Reveal>
          <p className="mono-label text-coral">Bénéfice clé</p>
          <p className="mt-2 text-2xl font-bold text-ink">
            Des images qui valorisent votre événement et donnent envie d&apos;y participer.
          </p>
        </Reveal>

        <h2 className="mt-14 text-2xl text-ink">Ce que je vous propose</h2>
        <div className="mt-6">
          <FeatureGrid items={DELIVERABLES} />
        </div>

        <h2 className="mt-16 text-2xl text-ink">Comment ça se passe</h2>
        <div className="mt-10">
          <Timeline steps={MISSION_STEPS} />
        </div>

        <Reveal delay={100}>
          <div className="mt-16 rounded-xl border border-line bg-mist p-7">
            <p className="mono-label text-coral">Réglementation et sécurité</p>
            <p className="mt-3 text-ink-soft">
              Télépilote certifié DGAC (n° FRA-RP-000000146148), j&apos;opère
              conformément à la réglementation en vigueur, avec les
              déclarations de vol nécessaires selon le lieu.
            </p>
            <p className="mt-3 font-semibold text-ink">
              Zone d&apos;intervention : basé en Bretagne, je me déplace
              partout en France selon les besoins de votre projet.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 flex gap-4">
          <Button href="/contact">Demander un devis événement</Button>
        </div>
      </section>
    </>
  );
}
