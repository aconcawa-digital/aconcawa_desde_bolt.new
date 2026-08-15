'use client';

const principles = [
  {
    num: '01',
    title: 'El relato antes que el ruido',
    body: 'Creemos en la claridad por sobre el volumen. Una historia bien contada no necesita gritar para ser escuchada; necesita verdad, estructura y intención.',
  },
  {
    num: '02',
    title: 'La escucha como punto de partida',
    body: 'Todo relato comienza con quien lo vive. Escuchamos antes de proponer, comprendemos antes de crear y acompañamos antes de intervenir.',
  },
  {
    num: '03',
    title: 'Dar y recibir en equilibrio',
    body: 'Trabajamos como aliados estratégicos, aportando mirada y criterio para que cada relato crezca junto a quien lo confía.',
  },
];

export default function Principles() {
  return (
    <section
      id="principios"
      className="px-6 py-28 md:py-40"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 md:mb-24">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-accent">
            Manifiesto
          </p>
          <h2 className="font-serif text-4xl tracking-tight text-primary md:text-5xl">
            Principios
          </h2>
        </div>

        <div className="grid gap-px md:grid-cols-3 bg-border">
          {principles.map((p) => (
            <div
              key={p.num}
              className="group bg-background p-8 md:p-10 transition-colors duration-500 hover:bg-secondary/50"
            >
              <span className="font-serif text-4xl text-accent/70 transition-colors duration-500 group-hover:text-accent">
                {p.num}
              </span>
              <h3 className="mt-6 font-serif text-xl text-primary md:text-2xl">
                {p.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
