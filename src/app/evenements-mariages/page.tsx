import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";

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

      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="mono-label text-coral">Bénéfice clé</p>
        <p className="mt-2 text-2xl font-bold text-ink">
          Des souvenirs que vos invités n&apos;oublieront jamais.
        </p>

        <h2 className="mt-14 text-2xl text-ink">Ce que je vous propose</h2>
        <ul className="mt-6 flex flex-col gap-3">
          {DELIVERABLES.map((item) => (
            <li key={item} className="flex gap-3 text-ink-soft">
              <span className="text-coral">→</span>
              {item}
            </li>
          ))}
        </ul>

        <h2 className="mt-14 text-2xl text-ink">Comment ça se passe</h2>
        <p className="mt-4 text-ink-soft">
          Nous échangeons en amont sur le déroulé de votre journée ou de votre
          événement, et sur les moments que vous souhaitez immortaliser. Je me
          coordonne avec vos autres prestataires si besoin, je repère le lieu, et
          j&apos;interviens avec la plus grande discrétion pendant les temps
          forts.
        </p>

        <h2 className="mt-14 text-2xl text-ink">Réglementation et sécurité</h2>
        <p className="mt-4 text-ink-soft">
          Télépilote certifié DGAC (n° FRA-RP-000000146148), j&apos;opère
          conformément à la réglementation en vigueur, avec les déclarations de
          vol nécessaires selon le lieu.
        </p>

        <p className="mt-4 font-semibold text-ink">
          Zone d&apos;intervention : basé en Bretagne, je me déplace partout en
          France selon les besoins de votre projet.
        </p>

        <div className="mt-12 flex gap-4">
          <Button href="/contact">Demander un devis événement</Button>
        </div>
      </section>
    </>
  );
}
