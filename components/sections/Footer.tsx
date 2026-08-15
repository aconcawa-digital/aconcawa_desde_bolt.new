'use client';

import { Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const socials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: Instagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: Linkedin,
  },
];

export default function Footer() {
  return (
    <footer id="contacto" className="border-t border-border/60 bg-secondary/30 px-6 py-20 scroll-mt-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl text-primary md:text-3xl">
              Aconcawa
            </h3>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground text-pretty">
              Consultoría de comunicación y relatos audivisuales. Acompañamos a marcas y
              personas a construir narrativas con sentido.
            </p>
          </div>

          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-accent font-medium">
              Contacto
            </p>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:aconcagua.digital@proton.me"
                  className="group inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <Mail size={17} strokeWidth={1.5} className="text-accent" />
                  aconcagua.digital@proton.me
                </a>
              </li>
              <li>
                <a
                  href="tel:+56959425922"
                  className="group inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <Phone size={17} strokeWidth={1.5} className="text-accent" />
                  +569 5942 5922
                </a>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:bg-primary/5"
                >
                  <s.icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Aconcawa. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Consultoría de comunicación y relatos audivisuales
          </p>
        </div>
      </div>
    </footer>
  );
}
