'use client';

import { useState } from 'react';
import SignatureForm from '@/components/SignatureForm';
import { useCounters } from '@/hooks/useCounters';

export default function SignatureBlock() {
  const [isSuccess, setIsSuccess] = useState(false);
  const { increment } = useCounters();

  const scrollToSection = (id: string) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  const handleSuccess = (firstName: string) => {
    // Salvar nome em localStorage para usar depois
    if (typeof window !== 'undefined') {
      localStorage.setItem('signatureName', firstName);
    }
    setIsSuccess(true);
    scrollToSection('pressionar');
  };

  const handleToPressure = () => {
    scrollToSection('pressionar');
  };

  return (
    <section id="assinar" className="py-16 px-6 bg-red text-white border-t border-red-deep">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="font-mono text-xs tracking-widest uppercase text-red-light mb-4 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-red-light"></span>
            Assinar
          </div>
          <h2 className="font-display text-5xl md:text-6xl uppercase leading-tight tracking-tight">
            Sua assinatura faz diferença
          </h2>
        </div>

        {!isSuccess ? (
          <div className="bg-white text-ink p-8 border-2 border-white">
            <SignatureForm onSuccess={handleSuccess} onIncrement={() => increment('signatures')} />
          </div>
        ) : (
          <div className="bg-white text-ink p-8 border-2 dashed border-red-400">
            <b className="font-display text-3xl text-red block uppercase mb-4">
              Obrigado por apoiar!
            </b>
            <p className="text-base mb-6 leading-relaxed">
              Agora dê o próximo passo e pressione os parlamentares.
            </p>
            <button
              onClick={handleToPressure}
              className="bg-ink text-paper font-bold px-6 py-3 border-2 border-ink text-sm uppercase tracking-wider hover:bg-opacity-90 transition"
            >
              Enviar e-mail aos deputados →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
