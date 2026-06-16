import { supporters } from '@/lib/data';

export default function SupportersBlock() {
  return (
    <section id="apoiadores" className="py-16 px-6 bg-paper-2 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="font-mono text-xs tracking-widest uppercase text-red mb-4 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-red"></span>
            // Bloco 09 — quem apoia
          </div>
          <h2 className="font-display text-5xl md:text-6xl uppercase leading-tight tracking-tight">
            Quem está com a gente
          </h2>
        </div>

        {/* Logos */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-12">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-16 bg-gradient-to-br from-box to-box-2 border border-line flex items-center justify-center"
            >
              <div className="font-mono text-xs font-bold text-ink-soft uppercase text-center">
                Logo
              </div>
            </div>
          ))}
        </div>

        {/* Testimonies */}
        <div className="grid md:grid-cols-2 gap-5">
          {supporters.map(supporter => (
            <div key={supporter.id} className="border-l-4 border-red bg-paper p-5">
              <p className="text-base leading-relaxed italic mb-4 text-ink">
                "{supporter.description}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-box-2 flex-none"></div>
                <div className="min-w-0">
                  <b className="text-sm block">{supporter.name}</b>
                  <small className="font-mono text-xs text-ink-soft">{supporter.role}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
