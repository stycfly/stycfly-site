import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-sky-deep text-white/80">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,107,74,0.6), rgba(47,116,214,0.6), transparent)",
        }}
        aria-hidden="true"
      />
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
              <Link href="/immobilier" className="nav-link w-fit hover:text-white">Immobilier</Link>
              <Link href="/evenements" className="nav-link w-fit hover:text-white">Événements</Link>
              <Link href="/tarifs" className="nav-link w-fit hover:text-white">Tarifs &amp; devis</Link>
            </div>
          </div>

          <div>
            <p className="mono-label text-white/50">Le studio</p>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <Link href="/a-propos" className="nav-link w-fit hover:text-white">Qui suis-je</Link>
              <Link href="/realisations" className="nav-link w-fit hover:text-white">Réalisations</Link>
              <Link href="/contact" className="nav-link w-fit hover:text-white">Contact</Link>
            </div>
          </div>

          <div>
            <p className="mono-label text-white/50">Contact</p>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <a href="tel:0604494857" className="nav-link w-fit hover:text-white">06 04 49 48 57</a>
              <a href="mailto:contactstycfly@gmail.com" className="nav-link w-fit hover:text-white">
                contactstycfly@gmail.com
              </a>
              <span className="mono-label text-white/40">DGAC · FRA-RP-000000146148</span>
            </div>
            <a
              href="https://www.instagram.com/stycfly"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="StycFly sur Instagram"
              className="mt-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors duration-200 hover:border-white hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth={1.8} />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth={1.8} />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
              </svg>
            </a>
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
