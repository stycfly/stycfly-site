import Link from "next/link";
import Button from "@/components/Button";
import TrustBar from "@/components/TrustBar";
import Faq from "@/components/Faq";
import Timeline from "@/components/Timeline";
import Reveal from "@/components/Reveal";
import RevealText from "@/components/RevealText";
import Magnetic from "@/components/Magnetic";
import Parallax from "@/components/Parallax";
import MarqueeBand from "@/components/MarqueeBand";

const MARQUEE_ITEMS = [
  "TÉLÉPILOTE DGAC CERTIFIÉ",
  "LIVRAISON 48–72H",
  "DEVIS GRATUIT SOUS 24H",
  "BRETAGNE → FRANCE ENTIÈRE",
];

const JOURNEY = [
  { n: "01", title: "Vous décrivez votre projet", cap: "Formulaire de contact, 2 minutes." },
  { n: "02", title: "On échange & je chiffre", cap: "Devis personnalisé sous 24h." },
  { n: "03", title: "Je capture le jour J", cap: "Vol déclaré, prise de vue soignée." },
  { n: "04", title: "Vous recevez vos fichiers", cap: "Livraison des photos et vidéos après réception du paiement." },
];

const FAQ_ITEMS = [
  {
    question: "Le pilotage par drone est-il légal ?",
    answer:
      "Oui. Je suis télépilote certifié DGAC (n° FRA-RP-000000146148) et j'opère dans le respect strict de la réglementation française et européenne : zones de vol autorisées, hauteurs réglementaires, déclarations préalables lorsque nécessaire.",
  },
  {
    question: "Combien de temps pour recevoir mes photos et vidéos ?",
    answer:
      "Les photos sont livrées sous 48 à 72h après l'intervention et réception du paiement.",
  },
  {
    question: "Intervenez-vous partout en France ?",
    answer:
      "Je suis basé en Bretagne et je peux intervenir partout en France, avec des frais de déplacement facturés en plus selon la distance.",
  },
  {
    question: "Comment se déroule une prestation, du premier contact à la livraison ?",
    answer:
      "Un échange pour cerner votre besoin, un devis personnalisé et gratuit, la prise de vue le jour J, puis la post-production avant livraison de vos fichiers via un lien sécurisé.",
  },
  {
    question: "Combien coûte une prestation drone ?",
    answer:
      "Chaque projet est différent : le tarif dépend de la durée sur site, du nombre de plans, du volume de post-production et des frais de déplacement. Je réalise un devis personnalisé et gratuit.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-sky-deep">
        <div
          className="animate-drift absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 900px 500px at 85% -10%, rgba(255,107,74,0.18), transparent 60%), radial-gradient(ellipse 700px 500px at -5% 100%, rgba(47,116,214,0.25), transparent 60%)",
          }}
        />
        <div className="glow-orb -left-24 top-1/3 h-72 w-72 bg-coral/25" aria-hidden="true" />
        <div
          className="glow-orb -right-16 top-10 h-96 w-96 bg-sky/25"
          style={{ animationDelay: "2s" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-28">
          <div>
            <span className="mono-label inline-flex items-center gap-2.5 rounded-full border border-white/20 px-4 py-1.5 text-white/80">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-dot absolute inline-flex h-2 w-2 rounded-full bg-coral" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-coral" />
              </span>
              Télépilote DGAC certifié — Bretagne
            </span>
            <h1 className="mt-6 text-[2.6rem] leading-[1.03] text-white md:text-[4rem]">
              <RevealText text="Vidéaste & photographe" />{" "}
              <RevealText text="drone." delay={250} className="text-coral" />
            </h1>
            <p className="mt-6 max-w-[42ch] text-lg text-white/70 md:text-xl">
              Donnez de la hauteur à vos biens, vos événements et votre image
              de marque.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Magnetic>
                <Button href="/contact">Demander mon devis gratuit</Button>
              </Magnetic>
              <Magnetic strength={0.25}>
                <Button href="/tarifs" variant="ghost-invert">Voir mes prestations</Button>
              </Magnetic>
            </div>

            <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-3">
              {[
                "Vos annonces se démarquent et se vendent plus vite.",
                "Vos événements marquent les esprits et se partagent.",
                "Votre image de marque gagne en crédibilité instantanément.",
              ].map((r) => (
                <div key={r} className="hover-lift bg-navy-soft p-5 hover:bg-[#1c3358]">
                  <span className="mono-label text-coral">Résultat</span>
                  <p className="mt-2.5 text-[0.98rem] font-semibold text-white">{r}</p>
                </div>
              ))}
            </div>
          </div>

          <Parallax speed={0.1} className="animate-float relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-navy-soft shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src="/videos/hero-drone.mp4" type="video/mp4" />
            </video>
          </Parallax>
        </div>
      </section>

      <MarqueeBand items={MARQUEE_ITEMS} />

      <TrustBar />

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <div className="max-w-xl">
            <p className="mono-label text-sky">Prestations</p>
            <h2 className="mt-3 text-3xl text-ink md:text-4xl">
              Trois façons de voir votre projet d&apos;en haut.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 flex flex-col divide-y divide-line overflow-hidden rounded-xl border border-line">
            <div className="group grid gap-6 bg-white p-8 transition-colors duration-300 hover:bg-mist/60 md:grid-cols-[64px_1.3fr_1fr_auto] md:items-center md:gap-8">
              <span className="font-mono text-coral">01</span>
              <div>
                <h3 className="text-xl font-bold text-ink">Prises de vues aériennes pour l&apos;immobilier</h3>
                <p className="mt-2 max-w-[46ch] text-ink-soft">
                  Photos et vidéos qui montrent le bien dans son environnement —
                  terrain, quartier, accès — pour des annonces qui sortent du lot.
                </p>
              </div>
              <p className="font-mono text-[0.82rem] text-sky">
                <b className="block font-body text-base font-bold text-ink">
                  Vos annonces se démarquent et se vendent plus vite.
                </b>
                Livraison des photos et vidéos après réception du paiement.
              </p>
              <Button href="/immobilier" variant="ghost" className="justify-self-start transition-transform group-hover:translate-x-1 md:justify-self-end">
                Devis immobilier →
              </Button>
            </div>

            <div className="group grid gap-6 bg-white p-8 transition-colors duration-300 hover:bg-mist/60 md:grid-cols-[64px_1.3fr_1fr_auto] md:items-center md:gap-8">
              <span className="font-mono text-coral">02</span>
              <div>
                <h3 className="text-xl font-bold text-ink">Photos &amp; vidéos pour vos événements</h3>
                <p className="mt-2 max-w-[46ch] text-ink-soft">
                  Des vues d&apos;ensemble spectaculaires pour tous vos
                  événements — sportifs, professionnels ou festifs.
                </p>
              </div>
              <p className="font-mono text-[0.82rem] text-sky">
                <b className="block font-body text-base font-bold text-ink">
                  Des images qui valorisent votre événement et vos participants.
                </b>
                Coordination avec les organisateurs · formats réseaux inclus.
              </p>
              <Button href="/evenements" variant="ghost" className="justify-self-start transition-transform group-hover:translate-x-1 md:justify-self-end">
                Devis événement →
              </Button>
            </div>

            <div className="group grid gap-6 bg-white p-8 transition-colors duration-300 hover:bg-mist/60 md:grid-cols-[64px_1.3fr_1fr_auto] md:items-center md:gap-8">
              <span className="font-mono text-coral">03</span>
              <div>
                <h3 className="text-xl font-bold text-ink">Photos &amp; vidéos pour hôtels et chambres d&apos;hôtes</h3>
                <p className="mt-2 max-w-[46ch] text-ink-soft">
                  Établissement, extérieurs et environnement mis en valeur
                  pour donner envie de réserver.
                </p>
              </div>
              <p className="font-mono text-[0.82rem] text-sky">
                <b className="block font-body text-base font-bold text-ink">
                  Des images qui donnent envie de réserver avant la visite.
                </b>
                Contenus prêts pour votre site et vos plateformes de réservation.
              </p>
              <Button href="/hotellerie" variant="ghost" className="justify-self-start transition-transform group-hover:translate-x-1 md:justify-self-end">
                Devis hôtellerie →
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      {/* PARCOURS CLIENT */}
      <section className="border-y border-line bg-mist">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <div className="max-w-xl">
              <p className="mono-label text-sky">Votre expérience</p>
              <h2 className="mt-3 text-3xl text-ink md:text-4xl">
                Du premier message à vos fichiers livrés.
              </h2>
              <p className="mt-4 text-ink-soft">
                Un parcours simple et transparent, pensé pour vous faire gagner du
                temps à chaque étape.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-14">
              <Timeline steps={JOURNEY} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PREUVE SOCIALE */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <div className="max-w-xl">
              <p className="mono-label text-sky">Confiance</p>
              <h2 className="mt-3 text-3xl text-ink md:text-4xl">
                Une activité qui démarre, une exigence qui ne change pas.
              </h2>
              <p className="mt-4 text-ink-soft">
                StycFly vient de prendre son envol — les premiers témoignages
                arriveront avec les premières missions.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-12 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
              <figure className="hover-lift rounded-xl border border-dashed border-line bg-white p-9">
                <span className="font-display text-5xl leading-none text-coral">&rdquo;</span>
                <blockquote className="mt-3 text-lg italic text-ink">
                  Emplacement réservé pour votre premier retour client — le mot
                  d&apos;une agence, d&apos;un club sportif ou d&apos;une
                  entreprise satisfaite viendra ici.
                </blockquote>
                <figcaption className="mt-4">
                  <span className="block font-semibold text-ink">Exemple de mise en page</span>
                  <span className="mono-label mt-1 block text-ink-soft">
                    À remplacer par un vrai témoignage
                  </span>
                </figcaption>
              </figure>

              <div className="flex flex-col divide-y divide-line overflow-hidden rounded-xl border border-line">
                {[
                  ["CERTIFICATION", "Télépilote DGAC en règle"],
                  ["RÉPONSE", "Sous 24h à chaque demande"],
                  ["MATÉRIEL", "DJI Mini 3, capture 4K"],
                ].map(([label, cap]) => (
                  <div key={label} className="flex items-baseline justify-between gap-4 bg-white px-7 py-6 transition-colors duration-300 hover:bg-mist/60">
                    <span className="mono-label text-coral">{label}</span>
                    <span className="text-right text-sm text-ink-soft">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <div className="max-w-xl">
            <p className="mono-label text-sky">Questions fréquentes</p>
            <h2 className="mt-3 text-3xl text-ink md:text-4xl">
              Avant de nous écrire, vous vous demandez sûrement…
            </h2>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-12">
            <Faq items={FAQ_ITEMS} />
          </div>
        </Reveal>
      </section>

      {/* CTA FINALE */}
      <section className="relative overflow-hidden border-t border-line bg-sky-deep">
        <div className="glow-orb left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 bg-coral/15" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 md:flex-row md:items-center md:justify-between">
          <Reveal>
            <h2 className="max-w-[18ch] text-3xl text-white md:text-4xl">
              Prêt à voir votre projet sous un nouvel angle ?
            </h2>
            <p className="mt-4 max-w-[44ch] text-white/70">
              Décrivez votre besoin en deux minutes — je vous réponds avec un
              devis personnalisé sous 24h.
            </p>
          </Reveal>
          <Reveal delay={150} className="flex flex-shrink-0 flex-col items-start gap-3">
            <Magnetic>
              <Link
                href="/contact"
                className="inline-flex rounded-md bg-coral px-6 py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Demander mon devis gratuit →
              </Link>
            </Magnetic>
            <span className="font-mono text-xs text-white/50">
              06 04 49 48 57 · contactstycfly@gmail.com
            </span>
          </Reveal>
        </div>
      </section>
    </>
  );
}
