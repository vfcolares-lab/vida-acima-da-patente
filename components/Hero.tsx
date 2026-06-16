'use client';

import Image from 'next/image';
import { useCounters } from '@/hooks/useCounters';

export default function Hero() {
  const { counters } = useCounters();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="pt-24 pb-12 px-6 bg-red text-white text-center"
    >
      <div className="max-w-4xl mx-auto">
        <div className="font-mono text-sm tracking-widest uppercase mb-6 text-red-light">
          Campanha nacional · acesso ao Lenacapavir pelo SUS
        </div>

        <h1
          className="font-display text-6xl md:text-7xl lg:text-8xl uppercase leading-tight tracking-tighter mb-6"
          style={{ lineHeight: 0.9 }}
        >
          Nenhuma patente vale mais que uma vida
        </h1>

        <div className="flex items-center justify-center gap-4 my-8 flex-wrap">
          <Image
            src="/assets/logo-laco.png"
            alt="Laço HIV"
            width={60}
            height={60}
            className="filter brightness-0 invert"
          />
          <b className="font-display text-2xl md:text-3xl uppercase tracking-tight">
            Vida Acima da Patente
          </b>
        </div>

        <p className="text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-8 text-red-50">
          O futuro da prevenção ao HIV já existe. O desafio agora é garantir que ele chegue a todos. Assine e pressione os deputados.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12 flex-wrap">
          <button
            onClick={() => scrollToSection('assinar')}
            className="bg-white text-red font-bold px-6 py-3 border-2 border-white uppercase tracking-wider hover:bg-red-light hover:border-red-light hover:text-white transition"
          >
            Assinar a petição
          </button>
          <button
            onClick={() => scrollToSection('pressionar')}
            className="text-white border-2 border-white px-6 py-3 font-bold uppercase tracking-wider hover:bg-white hover:text-red transition"
          >
            Pressionar deputados
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-center flex-wrap">
          <div className="flex flex-col">
            <b className="font-display text-4xl md:text-5xl leading-none">
              {counters.signatures.toLocaleString('pt-BR')}
            </b>
            <small className="font-mono text-xs tracking-widest uppercase mt-2 opacity-80">
              Assinaturas
            </small>
          </div>
          <div className="flex flex-col">
            <b className="font-display text-4xl md:text-5xl leading-none">
              {counters.emails.toLocaleString('pt-BR')}
            </b>
            <small className="font-mono text-xs tracking-widest uppercase mt-2 opacity-80">
              E-mails Enviados
            </small>
          </div>
          <div className="flex flex-col">
            <b className="font-display text-4xl md:text-5xl leading-none">
              {counters.shares.toLocaleString('pt-BR')}
            </b>
            <small className="font-mono text-xs tracking-widest uppercase mt-2 opacity-80">
              Compartilhamentos
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}
