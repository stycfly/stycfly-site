import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Réalisations",
  description: "Découvrez les prises de vues aériennes réalisées par StycFly.",
};

const CATEGORIES = [
  {
    slug: "immobilier",
    title: "Immobilier",
    href: "/immobilier",
    preview: "/images/immobilier/toiture-le-rheu.jpg",
  },
  {
    slug: "evenements",
    title: "Événements",
    href: "/evenements",
    preview: null,
  },
  {
    slug: "hotellerie",
    title: "Hôtellerie & Chambres d'Hôtes",
    href: "/hotellerie",
    preview: null,
  },
];

export default function RealisationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Réalisations"
        title="Nos prises de vues, catégorie par catégorie"
        lead="La galerie est en cours de constitution — les premières missions viendront remplacer ces emplacements très bientôt."
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.slug} delay={i * 100}>
              <div className="hover-lift group overflow-hidden rounded-xl border border-line hover:border-sky/40 hover:shadow-xl">
                <div className="relative flex aspect-[4/3] flex-col items-center justify-center gap-2 overflow-hidden border-b border-dashed border-line bg-mist px-6 text-center">
                  {cat.preview ? (
                    <Image
                      src={cat.preview}
                      alt={`Vue aérienne — ${cat.title}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-sky/10 to-coral/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <span className="mono-label relative text-sky">Galerie {cat.title}</span>
                      <p className="relative text-sm text-ink-soft">
                        Vos photos et vidéos remplaceront cet emplacement.
                      </p>
                    </>
                  )}
                </div>
                <div className="flex items-center justify-between p-6">
                  <p className="font-bold text-ink">{cat.title}</p>
                  <Button href={cat.href} variant="ghost" className="transition-transform group-hover:translate-x-1">
                    Voir la prestation →
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button href="/contact">Demander un devis</Button>
        </div>
      </section>
    </>
  );
}
