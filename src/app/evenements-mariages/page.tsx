import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import FeatureGrid from "@/components/FeatureGrid";
import Timeline from "@/components/Timeline";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Vidéaste Drone Mariage & Événements",
  description:
    "Des images aériennes qui immortalisent votre mariage ou événement. Télépilote DGAC, discrétion garantie, devis gratuit sous 24h.",
};

const DELIVERABLES = [
  "Photos aériennes du lieu et de vos invités ou participants",
  "Plan séquence des moments clés (arrivée, vin d'honneur, temps forts)",
  "Vidéo souvenir montée et étalonnée",
  "Formats prêts pour vos réseaux sociaux et vos tirages",
];

const MISSION_STEPS = [
  { n: "01", title: "On échange en amont", cap: "Déroulé de votre journée, moments à immortaliser." },
  { n: "02", title: "Coordination sur place", cap: "Avec vos autres prestataires, repérage du lieu." },
  { n: "03", title: "Captation discrète", cap: "Intervention pendant les temps forts." },
  { n: "04", title: "Vidéo montée livrée", cap: "Étalonnée, formats réseaux inclus." },
];

export default function EvenementsMariagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Prestation · 02"
        title="Photos & vidéos pour événements et mariages"
        lead="Des vues d'ensemble spectaculaires de votre événement ou de votre mariage, captées avec la discrétion que le moment exige."
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
            Des souvenirs que vos invités n&apos;oublieront jamais.
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
