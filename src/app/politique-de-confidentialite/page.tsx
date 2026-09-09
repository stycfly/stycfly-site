import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <PageHero
        eyebrow="Informations légales"
        title="Politique de confidentialité"
        lead=""
      />
      <section className="mx-auto max-w-2xl px-6 py-16">
        <div className="mb-10 rounded-md border border-coral/30 bg-coral/5 px-5 py-4 text-sm text-coral-deep">
          ⚠️ Base générique — à faire relire avant publication, notamment pour
          la conformité RGPD complète (registre des traitements, durée de
          conservation exacte, sous-traitant Supabase).
        </div>

        <div className="flex flex-col gap-8 text-ink-soft">
          <div>
            <h2 className="text-lg font-bold text-ink">Données collectées</h2>
            <p className="mt-2">
              Lorsque vous remplissez le formulaire de contact, nous
              collectons : nom, e-mail, téléphone, activité concernée, lieu,
              date souhaitée et votre message. Ces informations sont
              stockées dans notre base de données (Supabase) et utilisées
              uniquement pour répondre à votre demande de devis.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-ink">Durée de conservation</h2>
            <p className="mt-2">
              Vos données sont conservées le temps nécessaire au traitement de
              votre demande, puis supprimées ou archivées conformément à la
              réglementation en vigueur.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-ink">Vos droits</h2>
            <p className="mt-2">
              Conformément au RGPD, vous disposez d&apos;un droit
              d&apos;accès, de rectification et de suppression de vos
              données. Pour l&apos;exercer, contactez-nous à
              contactstycfly@gmail.com.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
