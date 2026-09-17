import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHero from "@/components/PageHero";
import FeatureGrid from "@/components/FeatureGrid";
import Timeline from "@/components/Timeline";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Vidéaste Drone Hôtellerie & Chambres d'hôtes",
  description:
    "Photos et vidéos aériennes pour valoriser votre hôtel ou chambre d'hôtes : établissement, extérieurs et environnement. Télépilote DGAC, devis gratuit sous 24h.",
};

const DELIVERABLES = [
  "Photos aériennes de l'établissement et de ses extérieurs (piscine, jardin, terrasse)",
  "Vidéo aérienne immersive pour donner envie de réserver",
  "Mise en valeur de l'environnement et des accès (mer, campagne, vignoble...)",
  "Contenus prêts pour votre site, vos plateformes de réservation et réseaux sociaux",
];

const MISSION_STEPS = [
  { n: "01", title: "On échange sur votre besoin", cap: "Établissement à valoriser, atouts à mettre en avant." },
  { n: "02", title: "Je prépare le vol", cap: "Vérification de zone, déclarations préalables si besoin." },
  { n: "03", title: "Prise de vue le jour J", cap: "Bâtiment, extérieurs et environnement sous leur meilleur angle." },
  { n: "04", title: "Livraison sous 48–72h", cap: "Fichiers retouchés, lien sécurisé." },
];

export default function HotelleriePage() {
  return (
    <>
      <PageHero
        eyebrow="Prestation · 03"
        title="Photos & vidéos pour hôtels et chambres d'hôtes"
        lead="Des vues aériennes qui donnent envie de réserver : votre établissement, ses extérieurs et son environnement, mis en valeur comme jamais depuis le sol."
      >
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/contact">Demander un devis hôtellerie</Button>
          <Button href="/realisations" variant="ghost-invert">Voir nos réalisations</Button>
        </div>
      </PageHero>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <Reveal>
          <p className="mono-label text-coral">Bénéfice clé</p>
          <p className="mt-2 text-2xl font-bold text-ink">
            Donnez envie de réserver avant même la visite.
          </p>
        </Reveal>

        <Reveal delay={60}>
          <p className="mt-6 max-w-[65ch] text-ink-soft">
            Hôtel, gîte ou chambre d&apos;hôtes : vos futurs clients réservent
            sur la promesse d&apos;un lieu. Une vue aérienne révèle
            l&apos;ensemble du domaine, ses extérieurs et son cadre — la mer,
            la campagne ou le vignoble à proximité — d&apos;une façon que les
            photos au sol ne permettent pas.
          </p>
        </Reveal>

        <h2 className="mt-14 text-2xl text-ink">Ce que je vous propose</h2>
        <div className="mt-6">
          <FeatureGrid items={DELIVERABLES} />
        </div>

        <h2 className="mt-16 text-2xl text-ink">Comment se déroule une mission</h2>
        <div className="mt-10">
          <Timeline steps={MISSION_STEPS} />
        </div>

        <Reveal delay={100}>
          <div className="mt-16 rounded-xl border border-line bg-mist p-7">
            <p className="mono-label text-coral">Réglementation et sécurité</p>
            <p className="mt-3 text-ink-soft">
              Télépilote certifié DGAC (n° FRA-RP-000000146148), j&apos;opère
              conformément à la réglementation en vigueur : zones de vol
              autorisées, hauteurs réglementaires, sécurisation de la zone au
              sol.
            </p>
            <p className="mt-3 font-semibold text-ink">
              Zone d&apos;intervention : basé en Bretagne, je me déplace
              partout en France selon les besoins de votre mission.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 flex gap-4">
          <Button href="/contact">Demander un devis hôtellerie</Button>
        </div>
      </section>
    </>
  );
}
