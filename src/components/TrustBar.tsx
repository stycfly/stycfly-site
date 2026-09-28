const ITEMS = [
  { label: "DGAC · FRA-RP-000000146148", cap: "Télépilote certifié, vol en règle" },
  { label: "48–72 h", cap: "Délai de livraison des fichiers" },
  { label: "Bretagne → France", cap: "Basé en Bretagne, déplacements partout" },
];

export default function TrustBar() {
  return (
    <div className="grid divide-y divide-line border-y border-line bg-mist md:grid-cols-3 md:divide-x md:divide-y-0">
      {ITEMS.map((item) => (
        <div key={item.label} className="px-8 py-7 transition-colors duration-300 hover:bg-white">
          <p className="mono-label text-coral">{item.label}</p>
          <p className="mt-2 text-sm text-ink-soft">{item.cap}</p>
        </div>
      ))}
    </div>
  );
}
