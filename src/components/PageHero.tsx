import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

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
    <section className="relative overflow-hidden bg-sky-deep">
      <div
        className="animate-drift absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 700px 400px at 15% -20%, rgba(47,116,214,0.35), transparent 60%)",
        }}
      />
      <Reveal className="relative mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="mono-label text-coral">{eyebrow}</p>
        <h1 className="mt-4 text-4xl text-white md:text-5xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-[52ch] text-lg text-white/70">{lead}</p>
        {children}
      </Reveal>
    </section>
  );
}
