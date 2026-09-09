import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";

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
  ["01", "Vous décrivez votre projet", "Via le formulaire de contact."],
  ["02", "Nous échangeons", "Pour affiner le besoin."],
  ["03", "Vous recevez un devis détaillé", "Sans engagement, sous 24h."],
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

      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-2xl text-ink">Ce qui influence le tarif</h2>
        <ul className="mt-6 flex flex-col gap-3">
          {FACTORS.map((item) => (
            <li key={item} className="flex gap-3 text-ink-soft">
              <span className="text-coral">→</span>
              {item}
            </li>
          ))}
        </ul>

        <h2 className="mt-14 text-2xl text-ink">Comment obtenir votre devis</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {STEPS.map(([n, title, cap]) => (
            <div key={n} className="rounded-lg border border-line p-6">
              <span className="mono-label text-coral">{n}</span>
              <p className="mt-2 font-bold text-ink">{title}</p>
              <p className="mt-1 text-sm text-ink-soft">{cap}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-ink-soft">
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
