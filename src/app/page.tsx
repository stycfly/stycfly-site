import Link from "next/link";
import Button from "@/components/Button";
import TrustBar from "@/components/TrustBar";
import Faq from "@/components/Faq";
import Timeline from "@/components/Timeline";
import Reveal from "@/components/Reveal";

const JOURNEY = [
  { n: "01", title: "Vous décrivez votre projet", cap: "Formulaire de contact, 2 minutes." },
  { n: "02", title: "On échange & je chiffre", cap: "Devis personnalisé sous 24h." },
  { n: "03", title: "Je capture le jour J", cap: "Vol déclaré, prise de vue soignée." },
  { n: "04", title: "Vous recevez vos fichiers", cap: "Livraison sous 48–72h, lien sécurisé." },
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
      "Les photos sont livrées sous 48 à 72h après l'intervention. Pour une vidéo montée et étalonnée, comptez un délai légèrement supérieur, précisé dès le devis.",
  },
  {
    question: "Intervenez-vous partout en France ?",
    answer:
      "Je suis basé en Bretagne et je me déplace partout en France selon les besoins de votre projet.",
  },
  {
    question: "Comment se déroule une prestation, du premier contact à la livraison ?",
    answer:
      "Un échange pour cerner votre besoin, un devis personnalisé et gratuit, la prise de vue le jour J, puis la post-production avant livraison de vos fichiers via un lien sécurisé.",
  },
  {
    question: "Combien coûte une prestation drone ?",
    answer:
      "Chaque projet est différent : le tarif dépend de la durée sur site, du nombre de plans et du volume de post-production. Je réalise un devis personnalisé et gratuit après un premier échange.",
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
              Vidéaste &amp; photographe <em className="text-coral not-italic">drone</em>.
            </h1>
            <p className="mt-6 max-w-[42ch] text-lg text-white/70 md:text-xl">
              Je transforme vos biens, vos événements et votre image de marque en
              images aériennes qui marquent — livrées en 48h, partout en France, en
              toute légalité.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/contact">Demander mon devis gratuit</Button>
              <Button href="/tarifs" variant="ghost-invert">Voir mes prestations</Button>
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

          <div className="animate-float relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]">
            <svg viewBox="0 0 400 500" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="sky2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#BFE3FA" />
                  <stop offset="55%" stopColor="#E8F4FC" />
                  <stop offset="100%" stopColor="#FFFFFF" />
                </linearGradient>
                <radialGradient id="sun2" cx="72%" cy="16%" r="42%">
                  <stop offset="0%" stopColor="#FF6B4A" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#FF6B4A" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width="400" height="500" fill="url(#sky2)" />
              <circle cx="290" cy="95" r="150" fill="url(#sun2)" />
              <line x1="0" y1="240" x2="400" y2="240" stroke="#1C86D6" strokeOpacity="0.35" />
              <g stroke="#1C86D6" strokeOpacity="0.18">
                <line x1="0" y1="300" x2="400" y2="300" />
                <line x1="0" y1="360" x2="400" y2="360" />
                <line x1="0" y1="420" x2="400" y2="420" />
              </g>
              <g transform="translate(150,215)">
                <circle cx="0" cy="15" r="3.4" fill="#FF6B4A" />
                <circle cx="100" cy="15" r="3.4" fill="#FF6B4A" />
                <circle cx="0" cy="15" r="9" fill="none" stroke="#0A1830" strokeWidth="1.4" />
                <circle cx="100" cy="15" r="9" fill="none" stroke="#0A1830" strokeWidth="1.4" />
                <line x1="9" y1="15" x2="91" y2="15" stroke="#0A1830" strokeWidth="1.4" />
                <line x1="50" y1="15" x2="50" y2="0" stroke="#0A1830" strokeWidth="1.4" />
                <rect x="40" y="-3" width="20" height="10" rx="2" fill="#0A1830" />
              </g>
            </svg>
            <div className="absolute inset-x-4 bottom-4 flex justify-between rounded-md border border-ink/10 bg-white/80 px-3 py-2.5 font-mono text-[0.68rem] text-ink backdrop-blur">
              <span>ALT <b className="text-coral">118M</b></span>
              <span>VIT <b className="text-coral">6.2M/S</b></span>
              <span>DJI MINI 2</span>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <div className="max-w-xl">
            <p className="mono-label text-sky">Prestations</p>
            <h2 className="mt-3 text-3xl text-ink md:text-4xl">
              Deux façons de voir votre projet d&apos;en haut.
            </h2>
            <p className="mt-4 text-ink-soft">
              Chaque prestation est pensée pour l&apos;usage qui en sera fait — une
              annonce qui doit convaincre, ou un souvenir qui doit durer.
            </p>
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
                Livraison 48–72h · déclarations de vol gérées pour vous.
              </p>
              <Button href="/immobilier" variant="ghost" className="justify-self-start transition-transform group-hover:translate-x-1 md:justify-self-end">
                Devis immobilier →
              </Button>
            </div>

            <div className="group grid gap-6 bg-white p-8 transition-colors duration-300 hover:bg-mist/60 md:grid-cols-[64px_1.3fr_1fr_auto] md:items-center md:gap-8">
              <span className="font-mono text-coral">02</span>
              <div>
                <h3 className="text-xl font-bold text-ink">Photos &amp; vidéos pour événements et mariages</h3>
                <p className="mt-2 max-w-[46ch] text-ink-soft">
                  Des vues d&apos;ensemble spectaculaires de votre événement ou de
                  votre mariage, captées avec la discrétion que le moment exige.
                </p>
              </div>
              <p className="font-mono text-[0.82rem] text-sky">
                <b className="block font-body text-base font-bold text-ink">
                  Des souvenirs que vos invités n&apos;oublieront jamais.
                </b>
                Coordination avec vos autres prestataires · formats réseaux inclus.
              </p>
              <Button href="/evenements-mariages" variant="ghost" className="justify-self-start transition-transform group-hover:translate-x-1 md:justify-self-end">
                Devis événement →
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
                arriveront avec les premières missions. En attendant, voici ce qui
                ne changera jamais.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-12 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
              <figure className="hover-lift rounded-xl border border-dashed border-line bg-white p-9">
                <span className="font-display text-5xl leading-none text-coral">&rdquo;</span>
                <blockquote className="mt-3 text-lg italic text-ink">
                  Emplacement réservé pour votre premier retour client — le mot
                  d&apos;une agence, d&apos;un couple de mariés ou d&apos;une
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
                  ["MATÉRIEL", "DJI Mini 2, capture 4K"],
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
      <section className="border-t border-line bg-sky-deep">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 md:flex-row md:items-center md:justify-between">
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
            <Link
              href="/contact"
              className="rounded-md bg-coral px-6 py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Demander mon devis gratuit →
            </Link>
            <span className="font-mono text-xs text-white/50">
              06 04 49 48 57 · contactstycfly@gmail.com
            </span>
          </Reveal>
        </div>
      </section>
    </>
  );
}
