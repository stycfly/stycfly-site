import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import Timeline from "@/components/Timeline";
import Reveal from "@/components/Reveal";
import FeatureGrid from "@/components/FeatureGrid";

export const metadata: Metadata = {
  title: "Tarifs & Devis",
  description:
    "Devis personnalisé et gratuit pour toute prestation photo/vidéo par drone. Réponse sous 24h.",
};

const FACTORS = [
  "La durée sur site et le nombre de plans souhaités",
  "La distance à parcourir depuis la Bretagne",
  "La nécessité d'une autorisation de vol spécifique",
  "Le volume de post-production (retouche, montage, étalonnage)",
  "Photo seule, vidéo seule, ou pack photo + vidéo",
];

const STEPS = [
  { n: "01", title: "Vous décrivez votre projet", cap: "Via le formulaire de contact." },
  { n: "02", title: "Nous échangeons", cap: "Pour affiner le besoin." },
  { n: "03", title: "Vous recevez un devis détaillé", cap: "Sans engagement, sous 24h." },
];

export default function TarifsPage() {
  return (
    <>
      <PageHero
        eyebrow="Tarifs & devis"
        title="Un devis personnalisé, jamais un tarif standard"
        lead="Chaque projet est différent : un survol de bien immobilier n'a ni les mêmes contraintes ni le même temps de production qu'une couverture de mariage."
      >
        <div className="mt-8 flex justify-center">
          <Button href="/contact">Demander mon devis gratuit</Button>
        </div>
      </PageHero>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <Reveal>
          <h2 className="text-2xl text-ink">Ce qui influence le tarif</h2>
          <div className="mt-6">
            <FeatureGrid items={FACTORS} />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="mt-16 text-2xl text-ink">Comment obtenir votre devis</h2>
          <div className="mt-8">
            <Timeline steps={STEPS} />
          </div>
        </Reveal>

        <p className="mt-14 max-w-[65ch] text-ink-soft">
          Les photos sont livrées sous 48 à 72h après l&apos;intervention.
          Comptez un délai supplémentaire pour une vidéo montée.
        </p>

        <div className="mt-8">
          <Button href="/contact">Demander mon devis gratuit</Button>
        </div>
      </section>
    </>
  );
}
