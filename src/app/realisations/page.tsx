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
  { src: "/images/realisations/piscine-1.jpg", alt: "Vue aérienne d'une maison contemporaine avec piscine et palmier", w: 900, h: 506 },
  { src: "/images/realisations/piscine-2.jpg", alt: "Vue aérienne d'une maison en pierre et bardage bois avec piscine", w: 720, h: 1280 },
  { src: "/images/realisations/piscine-3.jpg", alt: "Vue aérienne d'une maison contemporaine et de son jardin avec piscine", w: 900, h: 679 },
  { src: "/images/realisations/piscine-4.jpg", alt: "Vue aérienne d'une maison avec piscine et jardin arboré", w: 900, h: 506 },
  { src: "/images/realisations/piscine-5.jpg", alt: "Vue aérienne d'une maison et de sa piscine", w: 720, h: 1280 },
  { src: "/images/realisations/toiture-ardoise.jpg", alt: "Vue aérienne d'une toiture en ardoise avec panneaux solaires", w: 720, h: 1280 },
  { src: "/images/realisations/toiture-voiture.jpg", alt: "Vue aérienne d'une maison avec véhicule dans l'allée", w: 720, h: 1280 },
  { src: "/images/realisations/maison-parasol-1.jpg", alt: "Vue aérienne d'une maison et de sa terrasse ombragée", w: 720, h: 1280 },
  { src: "/images/realisations/maison-parasol-2.jpg", alt: "Vue aérienne d'une maison et de son jardin", w: 720, h: 1280 },
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
