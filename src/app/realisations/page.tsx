import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Réalisations",
  description: "Découvrez les prises de vues aériennes réalisées par StycFly.",
};

const GALLERY_IMAGES = [
  { src: "/images/realisations/maison-vue-toiture.jpg", alt: "Vue aérienne d'une maison et de son terrain arboré", w: 720, h: 1280 },
  { src: "/images/realisations/jardin-arbore.jpg", alt: "Vue aérienne d'un jardin arboré et de son environnement", w: 720, h: 1280 },
  { src: "/images/realisations/toiture-voiture.jpg", alt: "Vue aérienne d'une toiture en ardoise avec véhicule dans l'allée", w: 720, h: 1280 },
  { src: "/images/realisations/terrasse-jardin.jpg", alt: "Vue aérienne d'une terrasse et d'un jardin arboré", w: 720, h: 1280 },
  { src: "/images/realisations/maison-vue-ensemble.jpg", alt: "Vue aérienne d'ensemble d'une maison et son jardin", w: 720, h: 1280 },
  { src: "/images/realisations/toiture-ardoise-jardin.jpg", alt: "Vue aérienne d'une toiture en ardoise entourée d'arbres", w: 720, h: 1118 },
  { src: "/images/realisations/toiture-le-rheu.jpg", alt: "Vue aérienne d'une maison à Le Rheu, toiture et environnement", w: 720, h: 1280 },
  { src: "/images/realisations/maison-jardin.jpg", alt: "Vue aérienne d'une maison avec jardin et allée", w: 720, h: 1280 },
  { src: "/images/realisations/terrasse-ombragee.jpg", alt: "Vue aérienne d'une terrasse ombragée par les arbres", w: 720, h: 1280 },
  { src: "/images/realisations/maison-vue-large.jpg", alt: "Vue aérienne large d'une maison et de son environnement", w: 720, h: 1280 },
  { src: "/images/realisations/maison-piscine-1.jpg", alt: "Vue aérienne d'une maison contemporaine avec piscine et palmier", w: 900, h: 506 },
  { src: "/images/realisations/maison-piscine-2.jpg", alt: "Vue aérienne d'une maison en pierre et bardage bois", w: 720, h: 1280 },
  { src: "/images/realisations/maison-piscine-3.jpg", alt: "Vue aérienne d'une maison contemporaine et de son jardin", w: 900, h: 679 },
  { src: "/images/realisations/maison-piscine-4.jpg", alt: "Vue aérienne d'une maison avec piscine et jardin arboré", w: 900, h: 506 },
  { src: "/images/realisations/maison-piscine-5.jpg", alt: "Vue aérienne d'une maison et de son terrain", w: 720, h: 1280 },
];

export default function RealisationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Réalisations"
        title="Nos prises de vues aériennes"
        lead="Un aperçu des missions réalisées pour l'immobilier, les particuliers et les professionnels."
      />

      <section className="bg-ink py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
            {GALLERY_IMAGES.map((img, i) => (
              <Reveal key={img.src} delay={(i % 4) * 80}>
                <div className="mb-4 overflow-hidden rounded-xl break-inside-avoid">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.w}
                    height={img.h}
                    className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <Reveal>
          <p className="text-ink-soft">
            D&apos;autres missions viendront enrichir cette galerie au fil du temps.
          </p>
          <div className="mt-8">
            <Button href="/contact">Demander un devis</Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
