import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Demandez votre devis gratuit et personnalisé à StycFly.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Demandez votre devis"
        lead="Décrivez-nous votre projet et vos besoins, nous revenons vers vous rapidement."
      />

      <section className="mx-auto max-w-2xl px-6 py-20">
        <div className="mb-10 flex flex-wrap justify-center gap-6 text-sm text-ink-soft">
          <a href="tel:0604494857" className="font-semibold text-ink hover:text-sky">
            📱 06 04 49 48 57
          </a>
          <a href="mailto:contactstycfly@gmail.com" className="font-semibold text-ink hover:text-sky">
            ✉️ contactstycfly@gmail.com
          </a>
          <span className="font-semibold text-ink">📍 Bretagne — déplacements partout en France</span>
        </div>

        <ContactForm />
      </section>
    </>
  );
}
