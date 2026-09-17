import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Tarifs & Devis",
  description:
    "Tarifs clairs pour vos prises de vues aériennes immobilier, et devis personnalisé et gratuit pour vos événements. Réponse sous 24h.",
};

const IMMOBILIER_PACKS = [
  {
    name: "Pack Photo",
    price: "70€",
    tagline: "Pour mettre en avant votre annonce rapidement.",
    features: [
      "6 photos aériennes du bien incluses",
      "5€ par photo supplémentaire",
      "Retouche incluse",
      "Livraison sous 48–72h sous réserve du paiement",
    ],
  },
  {
    name: "Pack Photo + Vidéo extérieur",
    price: "130€",
    tagline: "La formule la plus demandée.",
    features: [
      "Tout le Pack Photo, plus :",
      "Vidéo drone du bien vu de l'extérieur",
      "Formats prêts pour les réseaux sociaux",
    ],
    highlighted: true,
  },
  {
    name: "Pack Photo + Vidéo extérieur + Vidéo intérieur",
    price: "180€",
    tagline: "Vidéo de l'intérieur du bien avec le drone pour une visite virtuelle.",
    features: [
      "Tout le pack précédent, plus :",
      "Vidéo de l'intérieur du bien",
      "Idéal pour une présentation premium",
    ],
  },
];

export default function TarifsPage() {
  return (
    <>
      <PageHero
        eyebrow="Tarifs & devis"
        title="Des tarifs clairs pour l'immobilier, hôtels et Chambres d'Hôtes, un devis pour vos événements"
        lead={
          <>
            Mes prix sont fixes et transparents.
            <br />
            Pour vos événements, chaque projet est différent : je vous établis un devis personnalisé et gratuit.
          </>
        }
      />

      <section className="mx-auto max-w-5xl px-6 py-20">
        {/* IMMOBILIER */}
        <div className="grid gap-6 md:grid-cols-3">
          {IMMOBILIER_PACKS.map((pack, i) => (
            <Reveal key={pack.name} delay={i * 80}>
              <div
                className={`card-premium relative flex h-full flex-col p-7 ${
                  pack.highlighted ? "border-coral/40 shadow-md" : ""
                }`}
              >
                {pack.highlighted && (
                  <span className="mono-label absolute -top-3 left-7 rounded-full bg-coral px-3 py-1 text-white">
                    Populaire
                  </span>
                )}
                <p className="font-bold text-ink">{pack.name}</p>
                <p className="mt-1 text-sm text-ink-soft">{pack.tagline}</p>
                <p className="mt-5 font-display text-4xl font-extrabold text-ink">
                  {pack.price}
                </p>
                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {pack.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm text-ink-soft">
                      <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-coral/10 text-coral">
                        <svg viewBox="0 0 24 24" className="h-2.5 w-2.5" fill="none">
                          <path
                            d="M5 13l4 4L19 7"
                            stroke="currentColor"
                            strokeWidth={3}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ÉVÉNEMENTS */}
        <Reveal delay={100}>
          <p className="mt-20 max-w-[65ch] text-ink-soft">
            Compétition sportive, événement d&apos;entreprise, festival ou
            rassemblement associatif : chaque événement a ses contraintes de
            lieu, de durée et de temps forts à capter. Décrivez-moi votre
            projet et je vous réponds avec un devis personnalisé et gratuit
            sous 24h.
          </p>
        </Reveal>

        {/* FORMULAIRE */}
        <Reveal delay={150}>
          <div className="mt-20 border-t border-line pt-16">
            <h2 className="text-2xl text-ink">Demander mon devis</h2>
            <p className="mt-3 max-w-[65ch] text-ink-soft">
              Que ce soit pour l&apos;immobilier ou un événement, décrivez
              votre projet ci-dessous.
            </p>
            <div className="mt-8 max-w-2xl">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
