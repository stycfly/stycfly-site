import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Réalisations",
  description: "Découvrez les prises de vues aériennes réalisées par StycFly.",
};

const CATEGORIES = [
  {
    slug: "immobilier",
    title: "Immobilier",
    href: "/immobilier",
  },
  {
    slug: "evenements-mariages",
    title: "Événements & Mariages",
    href: "/evenements-mariages",
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
        <div className="grid gap-8 md:grid-cols-2">
          {CATEGORIES.map((cat) => (
            <div key={cat.slug} className="overflow-hidden rounded-xl border border-line">
              <div className="flex aspect-[4/3] flex-col items-center justify-center gap-2 border-b border-dashed border-line bg-mist px-6 text-center">
                <span className="mono-label text-sky">Galerie {cat.title}</span>
                <p className="text-sm text-ink-soft">
                  Vos photos et vidéos remplaceront cet emplacement.
                </p>
              </div>
              <div className="flex items-center justify-between p-6">
                <p className="font-bold text-ink">{cat.title}</p>
                <Button href={cat.href} variant="ghost">Voir la prestation →</Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button href="/contact">Demander un devis</Button>
        </div>
      </section>
    </>
  );
}
