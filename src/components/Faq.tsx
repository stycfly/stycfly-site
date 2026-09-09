type FaqItem = {
  question: string;
  answer: string;
};

export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="flex flex-col divide-y divide-line overflow-hidden rounded-xl border border-line">
      {items.map((item) => (
        <details key={item.question} className="group bg-white open:bg-mist/60">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-7 py-6 font-semibold text-ink">
            {item.question}
            <span className="font-mono text-sky transition-transform duration-200 group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="px-7 pb-6 max-w-2xl text-[0.98rem] text-ink-soft">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
