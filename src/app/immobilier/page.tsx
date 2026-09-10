import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Photographe Drone Immobilier",
  description:
    "Valorisez vos annonces avec des vues aériennes professionnelles. Télépilote DGAC, livraison 48-72h, devis gratuit et personnalisé.",
};

const DELIVERABLES = [
  "Photos aériennes haute résolution du bien et de son environnement",
  "Vidéo aérienne (survol, orbite, révélation) pour vos annonces et réseaux sociaux",
  "Pack photo + vidéo pour une présentation premium",
  "Prestation sur mesure pour les biens multiples et missions récurrentes",
];

export default function ImmobilierPage() {
  return (
    <>
      <PageHero
        eyebrow="Prestation · 01"
        title="Prises de vues aériennes pour l'immobilier"
        lead="StycFly réalise des prises de vues aériennes par drone pour aider les agences immobilières à mieux présenter leurs biens : plans larges, vues d'ensemble et angles impossibles à obtenir depuis le sol."
      >
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/contact">Demander un devis immobilier</Button>
          <Button href="/realisations" variant="ghost-invert">Voir nos réalisations</Button>
        </div>
      </PageHero>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="mono-label text-coral">Bénéfice clé</p>
        <p className="mt-2 text-2xl font-bold text-ink">
          Vos annonces se démarquent et se vendent plus vite.
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

        <h2 className="mt-14 text-2xl text-ink">Comment se déroule une mission</h2>
        <p className="mt-4 text-ink-soft">
          Tout commence par un échange sur votre besoin : le bien à mettre en
          valeur, le type de contenu souhaité et l&apos;usage prévu. Je vérifie
          ensuite la zone de vol et gère les éventuelles déclarations préalables.
          Le jour de l&apos;intervention, je multiplie les angles pour disposer
          d&apos;un maximum de matière, puis je livre vos fichiers retouchés sous
          48 à 72h.
        </p>

        <h2 className="mt-14 text-2xl text-ink">Réglementation et sécurité</h2>
        <p className="mt-4 text-ink-soft">
          Télépilote certifié DGAC (n° FRA-RP-000000146148), j&apos;opère
          conformément à la réglementation en vigueur : zones de vol autorisées,
          hauteurs réglementaires, sécurisation de la zone au sol.
        </p>

        <p className="mt-4 font-semibold text-ink">
          Zone d&apos;intervention : basé en Bretagne, je me déplace partout en
          France selon les besoins de votre mission.
        </p>

        <div className="mt-12 flex gap-4">
          <Button href="/contact">Demander un devis immobilier</Button>
        </div>
      </section>
    </>
  );
}
