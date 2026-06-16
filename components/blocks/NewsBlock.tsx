import { newsItems } from '@/lib/data';

export default function NewsBlock() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'video':
        return 'VÍDEO · AUDIÊNCIA';
      case 'article':
        return 'ARTIGO';
      case 'report':
        return 'CAPA';
      default:
        return 'CONTEÚDO';
    }
  };

  return (
    <section id="conteudos" className="py-16 px-6 bg-paper border-t border-line">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="font-mono text-xs tracking-widest uppercase text-red mb-4 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-red"></span>
            Conteúdos e Notícias
          </div>
          <h2 className="font-display text-5xl md:text-6xl uppercase leading-tight tracking-tight">
            Acompanhe a campanha
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {newsItems.map(item => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-line bg-paper flex flex-col hover:shadow-lg transition-shadow overflow-hidden"
            >
              {item.image ? (
                <div className="h-32 bg-gray-200 border-b border-line overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="h-32 bg-gradient-to-br from-box to-box-2 flex items-center justify-center border-b border-line text-center p-4">
                  <div className="font-mono text-xs font-bold text-ink-soft uppercase">
                    {getIcon(item.type)}
                  </div>
                </div>
              )}
              <div className="flex-1 flex flex-col">
                <div className="font-mono text-xs text-red tracking-widest uppercase p-4 pb-2 block">
                  {item.source}
                </div>
                <h3 className="font-bold text-base leading-relaxed px-4 pb-4 flex-1">
                  {item.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
