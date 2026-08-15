'use client';

import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center px-6 pt-20"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.25em] text-accent font-medium">
          Consultoría de comunicación y relatos audivisuales
        </p>
        <h1 className="font-serif text-5xl leading-[1.08] tracking-tight text-primary sm:text-6xl md:text-7xl text-balance">
          Expande tu relato
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl">
          Acompañamos a organizaciones y personas a descubrir, dar forma y
          evolucionar la narrativa que las define — con criterio, cercanía y
          mirada estratégica.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4">
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              const el = document.querySelector('#contacto');
              if (el) {
                const top = el.getBoundingClientRect().top + window.scrollY - 72;
                window.scrollTo({ top, behavior: 'smooth' });
              }
            }}
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/10"
          >
Pedir Cotización
            <ArrowDown
              size={16}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1.5">
          <span className="h-2 w-0.5 rounded-full bg-muted-foreground/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
