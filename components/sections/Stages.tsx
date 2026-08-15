'use client';

import { Compass, PenTool, Sparkles, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Compass,
    title: 'Descubrimiento',
    body: 'Inmersión en la historia, los valores y el contexto. Identificamos qué hay para contar y por qué importa.',
  },
  {
    icon: PenTool,
    title: 'Creación',
    body: 'Damos forma al relato: mensajes clave, tono, narrativa y los formatos que lo harán viajar.',
  },
  {
    icon: Sparkles,
    title: 'Puesta en escena',
    body: 'El relato se materializa en identidad, contenidos y canales, listo para conectar con quien debe escucharlo.',
  },
  {
    icon: TrendingUp,
    title: 'Evolución',
    body: 'Acompañamos el crecimiento del relato en el tiempo, ajustando y refinando a medida que el contexto cambia.',
  },
];

export default function Stages() {
  return (
    <section
      id="etapas"
      className="px-6 py-28 md:py-40 bg-secondary/40 border-y border-border/60"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 md:mb-24">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-accent">
            Proceso
          </p>
          <h2 className="font-serif text-4xl tracking-tight text-primary md:text-5xl">
            Etapas
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Un acompañamiento que avanza en cuatro movimientos — del silencio a
            la voz, y de la voz al relevo permanente.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              <div className="flex items-center gap-3">
                <span className="font-serif text-sm text-accent/60">
                  0{i + 1}
                </span>
                <span className="h-px flex-1 bg-border" />
              </div>
              <div className="mt-6">
                <step.icon
                  size={32}
                  strokeWidth={1.25}
                  className="text-primary"
                />
              </div>
              <h3 className="mt-5 font-serif text-xl text-primary">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
