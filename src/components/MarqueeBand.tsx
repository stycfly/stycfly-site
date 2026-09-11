export default function MarqueeBand({ items }: { items: string[] }) {
  return (
    <div className="overflow-hidden border-y border-white/10 bg-coral py-3">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex gap-10">
            {items.map((item, i) => (
              <span
                key={`${copy}-${i}`}
                className="mono-label flex items-center gap-10 text-white"
              >
                {item}
                <span aria-hidden="true" className="text-white/50">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
