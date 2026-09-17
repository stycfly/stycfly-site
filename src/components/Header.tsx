"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const PRESTATIONS = [
  { href: "/immobilier", label: "Immobilier" },
  { href: "/evenements", label: "Événements" },
  { href: "/hotellerie", label: "Hôtellerie & chambres d'hôtes" },
];

const LINKS = [
  { href: "/realisations", label: "Réalisations" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/a-propos", label: "Qui suis-je" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [prestationsOpen, setPrestationsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10 bg-sky-deep/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "shadow-[0_8px_24px_-12px_rgba(0,0,0,0.45)]" : ""
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-[height] duration-300 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <Link
          href="/"
          className="font-display text-xl font-extrabold text-white transition-transform duration-200 hover:scale-[1.03]"
          onClick={() => setOpen(false)}
        >
          StycFly<span className="text-coral">.</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-white/70 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setPrestationsOpen(true)}
            onMouseLeave={() => setPrestationsOpen(false)}
          >
            <button className="nav-link flex items-center gap-1 hover:text-white" type="button">
              Prestations
              <span aria-hidden="true" className={`transition-transform duration-200 ${prestationsOpen ? "rotate-180" : ""}`}>▾</span>
            </button>
            {prestationsOpen && (
              <div className="animate-menu-in absolute left-0 top-full w-64 rounded-lg border border-white/10 bg-navy-soft py-2 shadow-lg">
                {PRESTATIONS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2.5 text-white/70 transition-colors duration-150 hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {LINKS.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-md bg-coral px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-coral-deep md:inline-flex"
        >
          Demander un devis
        </Link>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Ouvrir le menu"
          className="flex h-11 w-11 items-center justify-center rounded-md border border-white/15 text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="animate-menu-in border-t border-white/10 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4 text-sm font-semibold text-white/70">
            <span className="mono-label text-coral">Prestations</span>
            {PRESTATIONS.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="hover:text-white">
                {item.label}
              </Link>
            ))}
            {LINKS.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="hover:text-white">
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-coral px-5 py-3 text-center text-white"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
