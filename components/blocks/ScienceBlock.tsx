export default function ScienceBlock() {
  return (
    <section id="a-ciencia" className="py-16 px-6 bg-paper border-t border-line">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <div className="font-mono text-xs tracking-widest uppercase text-red mb-4 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-red"></span>
            A Ciência
          </div>
          <h2 className="font-display text-5xl md:text-6xl uppercase leading-tight tracking-tight">
            O que é o Lenacapavir?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-base leading-relaxed text-ink-soft mb-6">
              A maior inovação recente contra o HIV. Longa duração substitui o comprimido diário por 2 doses ao ano, ampliando a adesão.
            </p>

            <div className="space-y-3">
              <div className="border border-line p-3 font-mono text-sm">
                Custo de mercado: <b className="text-red">US$ 42,2 mil/ano</b>
              </div>
              <div className="border border-line p-3 font-mono text-sm">
                Potencial genérico: <b className="text-red">US$ 40/ano</b>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1 border-2 border-line p-5 text-center">
              <b className="font-display text-4xl block leading-tight text-ink">1x/dia</b>
              <small className="font-mono text-xs text-ink-soft mt-3 block leading-relaxed">
                PrEP oral tradicional<br />
                (uso diário)
              </small>
            </div>
            <div className="flex-1 border-2 border-red p-5 text-center bg-red bg-opacity-5">
              <b className="font-display text-4xl block leading-tight text-red">2x/ano</b>
              <small className="font-mono text-xs text-ink-soft mt-3 block leading-relaxed">
                Lenacapavir<br />
                injeção semestral
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
