import Reveal from "@/components/Reveal";

export default function FeatureGrid({
  items,
  columns = 2,
}: {
  items: string[];
  columns?: 1 | 2;
}) {
  return (
    <div className={`grid gap-4 ${columns === 2 ? "sm:grid-cols-2" : ""}`}>
      {items.map((item, i) => (
        <Reveal key={item} delay={i * 60}>
          <div className="card-premium flex items-start gap-4 p-5">
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-coral/10 text-coral">
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none">
                <path
                  d="M5 13l4 4L19 7"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="pt-1.5 text-ink-soft">{item}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
