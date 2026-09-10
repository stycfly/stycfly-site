type Step = {
  n: string;
  title: string;
  cap: string;
};

export default function Timeline({ steps }: { steps: Step[] }) {
  return (
    <div className="relative grid gap-8 md:grid-cols-4 md:gap-6">
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-6 hidden h-px bg-line md:block"
      />
      {steps.map((step, i) => (
        <div key={step.n} className="hover-lift relative">
          <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-coral bg-paper font-display text-lg font-extrabold text-coral">
            {step.n}
          </div>
          <p className="mt-4 font-bold text-ink">{step.title}</p>
          <p className="mt-1.5 text-sm text-ink-soft">{step.cap}</p>
          {i < steps.length - 1 && (
            <span
              aria-hidden="true"
              className="mono-label absolute -right-4 top-4 hidden text-line md:block"
            >
              →
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
