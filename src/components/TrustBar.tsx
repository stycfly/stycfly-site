const ITEMS = [
  { label: "DGAC · FRA-RP-000000146148", cap: "Télépilote certifié, vol en règle" },
  { label: "48–72H", cap: "Délai de livraison des photos" },
  { label: "0€ D'ENGAGEMENT", cap: "Devis personnalisé, toujours gratuit" },
  { label: "BRETAGNE → FRANCE", cap: "Basé en Bretagne, déplacements partout" },
];

export default function TrustBar() {
  return (
    <div className="grid divide-y divide-line border-y border-line bg-mist md:grid-cols-4 md:divide-x md:divide-y-0">
      {ITEMS.map((item) => (
        <div key={item.label} className="px-8 py-7">
          <p className="mono-label text-coral">{item.label}</p>
          <p className="mt-2 text-sm text-ink-soft">{item.cap}</p>
        </div>
      ))}
    </div>
  );
}
