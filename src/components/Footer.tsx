import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-sky-deep text-white/80">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="font-display text-lg font-extrabold text-white">
              StycFly<span className="text-coral">.</span>
            </p>
            <p className="mt-3 max-w-xs text-sm text-white/70">
              Vidéaste &amp; photographe drone. Télépilote certifié DGAC, basé en
              Bretagne, interventions partout en France.
            </p>
          </div>

          <div>
            <p className="mono-label text-white/50">Prestations</p>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <Link href="/immobilier" className="hover:text-white">Immobilier</Link>
              <Link href="/evenements-mariages" className="hover:text-white">Événements & Mariages</Link>
              <Link href="/tarifs" className="hover:text-white">Tarifs &amp; devis</Link>
            </div>
          </div>

          <div>
            <p className="mono-label text-white/50">Le studio</p>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <Link href="/a-propos" className="hover:text-white">Qui suis-je</Link>
              <Link href="/realisations" className="hover:text-white">Réalisations</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </div>
          </div>

          <div>
            <p className="mono-label text-white/50">Contact</p>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <a href="tel:0604494857" className="hover:text-white">06 04 49 48 57</a>
              <a href="mailto:contactstycfly@gmail.com" className="hover:text-white">
                contactstycfly@gmail.com
              </a>
              <span className="mono-label text-white/40">DGAC · FRA-RP-000000146148</span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} StycFly — Costa Brémond.</span>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-white">Mentions légales</Link>
            <Link href="/cgv" className="hover:text-white">CGV</Link>
            <Link href="/politique-de-confidentialite" className="hover:text-white">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
