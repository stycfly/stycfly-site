"use client";

import Link from "next/link";
import { useState } from "react";

const PRESTATIONS = [
  { href: "/immobilier", label: "Immobilier" },
  { href: "/evenements-mariages", label: "Événements & Mariages" },
];

const LINKS = [
  { href: "/realisations", label: "Réalisations" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/a-propos", label: "Qui suis-je" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [prestationsOpen, setPrestationsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-display text-xl font-extrabold text-ink"
          onClick={() => setOpen(false)}
        >
          StycFly<span className="text-coral">.</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-ink-soft md:flex">
          <div
            className="relative"
            onMouseEnter={() => setPrestationsOpen(true)}
            onMouseLeave={() => setPrestationsOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-ink" type="button">
              Prestations
              <span aria-hidden="true">▾</span>
            </button>
            {prestationsOpen && (
              <div className="absolute left-0 top-full w-64 rounded-lg border border-line bg-paper py-2 shadow-lg">
                {PRESTATIONS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2.5 hover:bg-mist hover:text-ink"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {LINKS.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-md bg-sky px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-deep md:inline-flex"
        >
          Demander un devis
        </Link>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Ouvrir le menu"
          className="flex h-11 w-11 items-center justify-center rounded-md border border-line md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-line px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4 text-sm font-semibold text-ink-soft">
            <span className="mono-label text-sky">Prestations</span>
            {PRESTATIONS.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            {LINKS.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-sky px-5 py-3 text-center text-white"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
