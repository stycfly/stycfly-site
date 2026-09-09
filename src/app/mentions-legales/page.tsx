import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Mentions légales",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero
        eyebrow="Informations légales"
        title="Mentions légales"
        lead=""
      />
      <section className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-10 rounded-md border border-coral/30 bg-coral/5 px-5 py-4 text-sm text-coral-deep">
          ⚠️ À compléter avec vos informations réelles (SIRET, statut
          juridique, adresse, hébergeur) avant publication.
        </div>

        <div className="flex flex-col gap-8 text-ink-soft">
          <div>
            <h2 className="text-lg font-bold text-ink">Éditeur du site</h2>
            <p className="mt-2">
              StycFly — Costa Brémond<br />
              [Statut juridique à préciser] — SIRET [à compléter]<br />
              [Adresse à compléter], Bretagne, France<br />
              contactstycfly@gmail.com — 06 04 49 48 57
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-ink">Hébergement</h2>
            <p className="mt-2">
              Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133,
              Walnut, CA 91789, États-Unis.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-ink">Propriété intellectuelle</h2>
            <p className="mt-2">
              L&apos;ensemble des contenus (textes, images, vidéos) présents sur
              ce site sont la propriété de StycFly, sauf mention contraire.
              Toute reproduction sans autorisation est interdite.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
