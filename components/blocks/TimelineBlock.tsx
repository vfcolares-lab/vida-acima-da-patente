export default function TimelineBlock() {
  const timelineSteps = [
    {
      year: '1980',
      description: 'Primeiros casos registrados no Brasil (São Paulo).',
      isFuture: false,
    },
    {
      year: '1987',
      description: 'Chegada do AZT — primeira resposta farmacológica.',
      isFuture: false,
    },
    {
      year: '1996',
      description: 'Lei 9.313: acesso universal aos antirretrovirais pelo SUS.',
      isFuture: false,
    },
    {
      year: '2000+',
      description: 'Brasil torna-se referência mundial em política de HIV.',
      isFuture: false,
    },
    {
      year: '2026',
      description: 'Nova oportunidade histórica com o Lenacapavir.',
      isFuture: true,
    },
  ];

  return (
    <section id="linha-do-tempo" className="py-16 px-6 bg-ink text-paper border-t border-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="font-mono text-xs tracking-widest uppercase text-paper mb-4 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-paper"></span>
            Linha do Tempo
          </div>
          <h2 className="font-display text-5xl md:text-6xl uppercase leading-tight tracking-tight">
            O país que liderou o combate ao HIV pode liderar de novo
          </h2>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:grid grid-cols-5 gap-0 mb-12 border-t-4 border-paper">
          {timelineSteps.map((step, index) => (
            <div key={index} className="pt-6 pb-6 px-4 border-r border-line relative group">
              {index === timelineSteps.length - 1 && (
                <div className="absolute right-4 -top-5" />
              )}

              <div className="relative mb-4">
                {step.isFuture ? (
                  <div className="w-4 h-4 rounded-full border-3 border-red bg-transparent mx-auto"></div>
                ) : (
                  <div className="w-4 h-4 rounded-full bg-red mx-auto"></div>
                )}
              </div>

              <b className="font-display text-3xl block text-paper leading-none mb-2">
                {step.year}
              </b>
              <p className="text-sm leading-relaxed text-gray-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-4 mb-12">
          {timelineSteps.map((step, index) => (
            <div key={index} className="flex gap-4 pb-4 border-b border-line last:border-b-0">
              <div className="pt-1">
                {step.isFuture ? (
                  <div className="w-4 h-4 rounded-full border-3 border-red bg-transparent"></div>
                ) : (
                  <div className="w-4 h-4 rounded-full bg-red"></div>
                )}
              </div>
              <div>
                <b className="font-display text-2xl block text-paper leading-none mb-1">
                  {step.year}
                </b>
                <p className="text-sm leading-relaxed text-gray-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="font-display text-2xl md:text-3xl uppercase leading-tight">
          O Brasil já liderou. Pode liderar novamente.
        </div>
      </div>
    </section>
  );
}
