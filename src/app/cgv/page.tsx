import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
};

const ARTICLES: [string, string][] = [
  [
    "Article 1 — Objet",
    "Les présentes conditions générales de vente (CGV) régissent les prestations de prises de vues photo et vidéo par drone proposées par StycFly (Costa Brémond, [statut juridique à préciser], SIRET [à compléter], siège en Bretagne), auprès de ses clients particuliers et professionnels.",
  ],
  [
    "Article 2 — Prestations",
    "StycFly propose des prestations de photographie et vidéo aérienne par drone pour l'immobilier et les événements sportifs. Le détail de chaque prestation est précisé dans le devis accepté par le client.",
  ],
  [
    "Article 3 — Devis et commande",
    "Toute prestation fait l'objet d'un devis personnalisé et gratuit, établi sur la base des informations transmises par le client. La commande est confirmée à réception de l'accord écrit du client sur le devis.",
  ],
  [
    "Article 4 — Tarifs et paiement",
    "Les tarifs sont indiqués dans le devis, en euros. Le paiement s'effectue selon les modalités prévues au devis.",
  ],
  [
    "Article 5 — Annulation et report",
    "En cas de conditions météorologiques incompatibles avec un vol en sécurité, la prestation est reportée à une date convenue avec le client, sans frais supplémentaires. Toute annulation à l'initiative du client moins de [XX] heures avant l'intervention pourra donner lieu à la facturation de [tout ou partie] de la prestation.",
  ],
  [
    "Article 6 — Livraison des contenus",
    "Les photos sont livrées sous 48 à 72h après l'intervention, via un lien de téléchargement sécurisé. Les délais pour une vidéo montée sont précisés au devis.",
  ],
  [
    "Article 7 — Droits d'utilisation des images",
    "Sauf mention contraire au devis, les images livrées sont cédées au client pour l'usage prévu. StycFly conserve le droit de présenter les images réalisées dans son portfolio, sauf demande contraire expresse du client.",
  ],
  [
    "Article 8 — Réglementation drone et sécurité",
    "StycFly est télépilote certifié DGAC et opère dans le respect de la réglementation française et européenne relative aux drones.",
  ],
  [
    "Article 9 — Responsabilité et assurance",
    "StycFly [est/n'est pas encore — à vérifier] assuré en responsabilité civile professionnelle pour l'exercice de son activité de télépilote.",
  ],
  [
    "Article 10 — Litiges et droit applicable",
    "Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable sera recherchée en priorité.",
  ],
];

export default function CgvPage() {
  return (
    <>
      <PageHero eyebrow="Informations légales" title="Conditions générales de vente" lead="" />
      <section className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-10 rounded-md border border-coral/30 bg-coral/5 px-5 py-4 text-sm text-coral-deep">
          ⚠️ Brouillon à faire valider : ce texte est une base générique. Faites-le
          relire par un professionnel (avocat, expert-comptable, ou votre CCI)
          avant toute publication — statut juridique, SIRET et assurance RC
          professionnelle à compléter.
        </div>

        <div className="flex flex-col gap-8 text-ink-soft">
          {ARTICLES.map(([title, body]) => (
            <div key={title}>
              <h2 className="text-lg font-bold text-ink">{title}</h2>
              <p className="mt-2">{body}</p>
            </div>
          ))}
          <div>
            <h2 className="text-lg font-bold text-ink">Contact</h2>
            <p className="mt-2">
              Pour toute question relative aux présentes CGV :
              contactstycfly@gmail.com — 06 04 49 48 57.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
