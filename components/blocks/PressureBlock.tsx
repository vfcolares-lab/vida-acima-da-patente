'use client';

import { useState, useEffect } from 'react';
import { mockDeputies } from '@/lib/data';
import { useCounters } from '@/hooks/useCounters';

export default function PressureBlock() {
  const { increment } = useCounters();
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set(mockDeputies.map(d => d.id)));
  const [signatureName, setSignatureName] = useState<string>('');
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<string>('');
  const [emailBody, setEmailBody] = useState(
    `Excelentíssimo(a) Deputado(a),

Escrevo para pedir seu apoio ao PL 418/2026 e às iniciativas que ampliam o acesso ao Lenacapavir no SUS.

Como pessoa que se importa com a saúde pública e o combate ao HIV, acredito que nenhuma patente deve valer mais que uma vida. O Lenacapavir representa uma oportunidade histórica de prevenção, mas seu acesso está restrito por barreiras comerciais.

Por isso, peço seu apoio para que a vida venha antes da patente.

Atenciosamente,
[NOME]`
  );

  // Recuperar nome do localStorage ao carregar
  useEffect(() => {
    const name = localStorage.getItem('signatureName');
    if (name) {
      setSignatureName(name);
    }
  }, []);


  const toggleDeputy = (id: string) => {
    const newSelected = new Set(selectedIds);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedIds(newSelected);
  };

  const toggleAll = () => {
    if (selectedIds.size === mockDeputies.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(mockDeputies.map(d => d.id)));
    }
  };

  const handleExportCSV = () => {
    const data = mockDeputies
      .filter(d => selectedIds.has(d.id))
      .map(d => `${d.name},${d.email},${d.party},${d.state}`)
      .join('\n');

    const csv = `Name,Email,Party,State\n${data}`;
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `deputados-selecionados-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const handleSendEmails = async () => {
    if (!signatureName) {
      alert('Por favor, preencha o formulário de assinatura primeiro.');
      return;
    }

    setIsSending(true);
    setSendStatus('Enviando e-mails para os 513 deputados...');

    try {
      const response = await fetch('/api/send-emails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          signatureName,
          messageBody: emailBody,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSendStatus(`✅ Sucesso! ${result.totalSent} e-mails enviados!`);
        // Incrementar contador de e-mails enviados
        for (let i = 0; i < result.totalSent; i++) {
          increment('emails');
        }
        setTimeout(() => setSendStatus(''), 5000);
      } else {
        setSendStatus(`❌ Erro: ${result.error}`);
      }
    } catch (error) {
      setSendStatus('❌ Erro ao enviar e-mails. Tente novamente.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="pressionar" className="py-16 px-6 bg-paper-2 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="font-mono text-xs tracking-widest uppercase text-red mb-4 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-red"></span>
            Pressionar Deputados
          </div>
          <h2 className="font-display text-5xl md:text-6xl uppercase leading-tight tracking-tight">
            Pressione os deputados
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Deputies List */}
          <div>
            <div className="mb-6">
              <button
                onClick={toggleAll}
                className={`font-mono text-xs px-3 py-2 border border-ink font-bold uppercase tracking-wide ${
                  selectedIds.size === mockDeputies.length
                    ? 'bg-ink text-paper'
                    : 'bg-paper text-ink'
                } hover:bg-ink hover:text-paper transition`}
              >
                {selectedIds.size === mockDeputies.length ? '☑' : '☐'} Selecionar todos
              </button>
            </div>

            {/* Deputies List */}
            <div className="border border-line bg-paper mb-4 max-h-96 overflow-y-auto">
              {mockDeputies.slice(0, 10).map(deputy => (
                <div key={deputy.id} className="flex items-center gap-3 p-3 border-b border-line last:border-b-0 hover:bg-paper-2 transition">
                  <input
                    type="checkbox"
                    checked={selectedIds.has(deputy.id)}
                    onChange={() => toggleDeputy(deputy.id)}
                    className="w-5 h-5 border-2 border-ink flex-none cursor-pointer accent-red"
                  />
                  <div className="w-8 h-8 rounded-full bg-box-2 flex-none flex items-center justify-center text-xs font-bold text-ink-soft">
                    {deputy.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-ink text-sm">{deputy.name}</div>
                    <div className="text-xs text-ink-soft">{deputy.party}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-ink text-paper p-3 font-mono text-sm flex justify-between items-center">
              <span>DEPUTADOS SELECIONADOS</span>
              <b className="text-red-light">{selectedIds.size} / {mockDeputies.length}</b>
            </div>

            <button
              onClick={handleExportCSV}
              className="w-full mt-4 bg-ink text-paper font-bold py-2 border-2 border-ink text-xs uppercase tracking-wider hover:bg-opacity-90 transition"
            >
              Exportar lista (CSV)
            </button>
          </div>

          {/* Right: Email Template */}
          <div>
            <div className="border border-line bg-white p-5 font-mono text-sm mb-4 leading-relaxed text-ink-soft h-96 overflow-y-auto">
              <div className="font-bold text-ink mb-2">
                Assunto: Apoie o PL 418/2026 — Vida Acima da Patente
              </div>
              <textarea
                value={emailBody}
                onChange={e => setEmailBody(e.target.value)}
                className="w-full h-full bg-white text-ink-soft border-0 resize-none focus:outline-none font-mono text-sm leading-relaxed"
              />
            </div>

            <button
              onClick={handleSendEmails}
              disabled={isSending || !signatureName}
              className="w-full bg-ink text-paper font-bold py-3 border-2 border-ink text-sm uppercase tracking-wider hover:bg-opacity-90 disabled:opacity-50 transition"
            >
              {isSending ? 'Enviando...' : 'Enviar para os 513 deputados'}
            </button>
            {sendStatus && (
              <div className="mt-3 p-3 bg-gray-100 text-sm font-mono rounded text-center">
                {sendStatus}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
