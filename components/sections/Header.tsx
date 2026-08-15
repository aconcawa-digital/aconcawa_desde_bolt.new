'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Principios', href: '#principios' },
  { label: 'Etapas', href: '#etapas' },
  { label: 'Portafolio', href: '#portafolio' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/85 backdrop-blur-md border-b border-border/60'
          : 'bg-transparent border-b border-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:py-5">
        <a
          href="#inicio"
          onClick={(e) => handleClick(e, '#inicio')}
          className="inline-flex items-center gap-2 font-serif text-xl tracking-tight text-primary"
          aria-label="Aconcawa — Inicio"
        >
          <Image
            src="/Gemini_Generated_Image_7hybyg7hybyg7hyb.png"
            alt=""
            width={40}
            height={40}
            className="h-9 w-9 object-contain"
            priority
          />
          Aconcawa
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 tracking-wide"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden p-1.5 -mr-1.5 text-primary"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </nav>

      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 bg-background/95 backdrop-blur-md border-b border-border/60',
          open ? 'max-h-72' : 'max-h-0',
        )}
      >
        <ul className="flex flex-col px-6 py-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="block py-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
