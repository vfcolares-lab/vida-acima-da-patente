'use client';

import { useCounters } from '@/hooks/useCounters';

export default function ShareBlock() {
  const { counters, increment } = useCounters();
  const siteUrl = 'https://vidaacimaadapatente.com.br';
  const message = 'Nenhuma patente vale mais que uma vida. Assine e pressione os deputados pelo acesso ao Lenacapavir no SUS!';

  const handleShare = (platform: string) => {
    increment('shares');

    const shareUrls: Record<string, string> = {
      whatsapp: `https://wa.me/?text=${encodeURIComponent(message + ' ' + siteUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteUrl)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(siteUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(siteUrl)}`,
      instagram: `https://www.instagram.com/?url=${encodeURIComponent(siteUrl)}`,
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(siteUrl);
      alert('Link copiado!');
    } else if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  return (
    <section className="py-12 px-6 bg-red text-white border-t border-red-deep">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="font-display text-3xl uppercase mb-8 leading-tight">
          Compartilhe com quem você ama
        </h3>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => handleShare('whatsapp')}
            className="bg-white text-green-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition flex items-center gap-2"
          >
            💬 WhatsApp
          </button>
          <button
            onClick={() => handleShare('facebook')}
            className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition flex items-center gap-2"
          >
            f Facebook
          </button>
          <button
            onClick={() => handleShare('twitter')}
            className="bg-white text-black font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition flex items-center gap-2"
          >
            𝕏 Twitter
          </button>
          <button
            onClick={() => handleShare('linkedin')}
            className="bg-white text-blue-700 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition flex items-center gap-2"
          >
            in LinkedIn
          </button>
          <button
            onClick={() => handleShare('copy')}
            className="bg-white text-red font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition flex items-center gap-2"
          >
            🔗 Copiar link
          </button>
        </div>

        <div className="text-center">
          <b className="font-display text-3xl leading-none block">
            {counters.shares.toLocaleString('pt-BR')}
          </b>
          <small className="font-mono text-xs tracking-widest uppercase opacity-80">
            Compartilhamentos
          </small>
        </div>
      </div>
    </section>
  );
}
