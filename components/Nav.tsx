'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useCounters } from '@/hooks/useCounters';

export default function Nav() {
  const { counters } = useCounters();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-ink text-paper border-b-2 border-black transition-shadow ${
        isSticky ? 'shadow-lg' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/logo-laco.png"
            alt="Laço HIV"
            width={38}
            height={38}
            className="h-10 w-auto"
          />
          <b className="font-display text-lg uppercase tracking-tight max-w-[150px] leading-tight">
            Vida Acima da Patente
          </b>
        </div>

        <nav className="hidden md:flex gap-5 text-sm font-mono tracking-wide text-gray-400">
          <button onClick={() => scrollToSection('o-problema')} className="hover:text-paper transition">
            O Problema
          </button>
          <button onClick={() => scrollToSection('a-ciencia')} className="hover:text-paper transition">
            A Ciência
          </button>
          <button onClick={() => scrollToSection('linha-do-tempo')} className="hover:text-paper transition">
            Linha do Tempo
          </button>
          <button onClick={() => scrollToSection('pl-418')} className="hover:text-paper transition">
            PL 418
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col text-right">
            <b className="font-display text-xl text-red-light leading-none">
              {counters.signatures.toLocaleString('pt-BR')}
            </b>
            <small className="font-mono text-xs text-gray-400 tracking-widest uppercase">
              Assinaturas
            </small>
          </div>
          <button
            onClick={() => scrollToSection('assinar')}
            className="bg-red text-white font-bold text-sm px-4 py-2 border-2 border-red uppercase tracking-wider hover:bg-red-dark transition"
          >
            Assinar
          </button>
        </div>
      </div>
    </nav>
  );
}
