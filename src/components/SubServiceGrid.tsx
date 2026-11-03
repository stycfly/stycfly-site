import Reveal from "@/components/Reveal";
import Button from "@/components/Button";

type SubService = {
  title: string;
  text: string;
  cta: string;
};

export default function SubServiceGrid({ items }: { items: SubService[] }) {
  const columns = items.length >= 4 ? "sm:grid-cols-2" : "sm:grid-cols-3";
  return (
    <div className={`grid gap-5 ${columns}`}>
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 80}>
          <div className="card-premium flex h-full flex-col p-7">
            <p className="font-bold text-ink">{item.title}</p>
            <p className="mt-3 flex-1 text-ink-soft">{item.text}</p>
            <div className="mt-6">
              <Button href="/contact" variant="ghost" className="w-full justify-center">
                {item.cta}
              </Button>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
