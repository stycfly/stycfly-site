import type { ReactNode } from "react";

export default function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-line bg-mist">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="mono-label text-sky">{eyebrow}</p>
        <h1 className="mt-4 text-4xl text-ink md:text-5xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-[52ch] text-lg text-ink-soft">{lead}</p>
        {children}
      </div>
    </section>
  );
}
