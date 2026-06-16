export default function ProblemBlock() {
  return (
    <section id="o-problema" className="py-16 px-6 bg-paper-2 border-t border-line">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <div className="font-mono text-xs tracking-widest uppercase text-red mb-4 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-red"></span>
            O Problema
          </div>
          <h2 className="font-display text-5xl md:text-6xl uppercase leading-tight tracking-tight">
            Uma descoberta histórica não pode ser inacessível
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Lenacapavir - Good */}
          <div className="border-2 border-red p-7">
            <h3 className="font-display text-2xl uppercase mb-5 text-red">
              Lenacapavir
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-base font-semibold leading-relaxed">
                <span className="text-red text-xl flex-none">✓</span>
                <span>Aplicação semestral — apenas 2x por ano</span>
              </li>
              <li className="flex gap-3 text-base font-semibold leading-relaxed">
                <span className="text-red text-xl flex-none">✓</span>
                <span>Eficácia próxima de 100% na prevenção</span>
              </li>
              <li className="flex gap-3 text-base font-semibold leading-relaxed">
                <span className="text-red text-xl flex-none">✓</span>
                <span>Menor dependência da adesão diária</span>
              </li>
              <li className="flex gap-3 text-base font-semibold leading-relaxed">
                <span className="text-red text-xl flex-none">✓</span>
                <span>Potencial de prevenir milhares de novas infecções</span>
              </li>
            </ul>
          </div>

          {/* Realidade Atual - Bad */}
          <div className="border-2 border-ink p-7">
            <h3 className="font-display text-2xl uppercase mb-5 text-ink">
              Realidade Atual
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-base font-semibold leading-relaxed">
                <span className="text-gray-400 text-xl flex-none">✗</span>
                <span>Custo exorbitante (≈ R$150 mil / pessoa)</span>
              </li>
              <li className="flex gap-3 text-base font-semibold leading-relaxed">
                <span className="text-gray-400 text-xl flex-none">✗</span>
                <span>Acesso restrito pela patente</span>
              </li>
              <li className="flex gap-3 text-base font-semibold leading-relaxed">
                <span className="text-gray-400 text-xl flex-none">✗</span>
                <span>Dependência de negociações complexas</span>
              </li>
              <li className="flex gap-3 text-base font-semibold leading-relaxed">
                <span className="text-gray-400 text-xl flex-none">✗</span>
                <span>Risco de excluir justamente quem mais precisa</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
