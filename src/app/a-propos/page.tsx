import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Qui suis-je",
  description:
    "Costa Brémond, télépilote certifié DGAC basé en Bretagne, fondateur de StycFly.",
};

export default function AProposPage() {
  return (
    <>
      <PageHero
        eyebrow="Qui suis-je"
        title="Costa Brémond, fondateur de StycFly"
        lead="Depuis toujours, je suis fasciné par ce que l'on peut voir d'en haut."
      />

      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="text-ink-soft">
          StycFly est né de cette passion : donner une autre perspective à vos
          biens, vos événements et vos moments les plus importants, grâce à des
          prises de vues aériennes par drone.
        </p>
        <p className="mt-5 text-ink-soft">
          Basé en Bretagne, j&apos;interviens partout en France auprès des
          agences immobilières, des mariés et des organisateurs
          d&apos;événements. Certifié télépilote DGAC (n° FRA-RP-000000146148),
          je vole en toute légalité et sécurité.
        </p>

        <h2 className="mt-14 text-2xl text-ink">Mon matériel</h2>
        <p className="mt-4 text-ink-soft">
          Je vole avec un <strong className="text-ink">DJI Mini 2</strong>, un
          drone léger et discret, idéal pour intervenir avec souplesse sur tout
          type de terrain sans jamais perturber vos événements.
        </p>

        <p className="mt-8 italic text-ink-soft">
          Parce que vos projets méritent d&apos;être vus sous leur meilleur angle.
        </p>

        <div className="mt-12">
          <Button href="/contact">Demander un devis</Button>
        </div>
      </section>
    </>
  );
}
