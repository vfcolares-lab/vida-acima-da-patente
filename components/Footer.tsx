import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-ink text-paper py-12 px-6 border-t-2 border-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Image
                src="/assets/logo-laco.png"
                alt="Laço HIV"
                width={40}
                height={40}
                className="filter brightness-0 invert h-10 w-auto"
              />
              <b className="font-display text-base uppercase tracking-tight">
                Vida Acima da Patente
              </b>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Nenhuma patente vale mais que uma vida.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Campanha pelo acesso ao Lenacapavir no SUS.
            </p>
          </div>

          {/* Campaign Links */}
          <div>
            <b className="font-display text-sm uppercase tracking-tight block mb-3">
              Campanha
            </b>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#o-problema" className="text-gray-400 hover:text-paper transition">
                  O Problema
                </a>
              </li>
              <li>
                <a href="#a-ciencia" className="text-gray-400 hover:text-paper transition">
                  A Ciência
                </a>
              </li>
              <li>
                <a href="#pl-418" className="text-gray-400 hover:text-paper transition">
                  PL 418/2026
                </a>
              </li>
            </ul>
          </div>

          {/* Participate Links */}
          <div>
            <b className="font-display text-sm uppercase tracking-tight block mb-3">
              Participe
            </b>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#assinar" className="text-gray-400 hover:text-paper transition">
                  Assinar a petição
                </a>
              </li>
              <li>
                <a href="#pressionar" className="text-gray-400 hover:text-paper transition">
                  Pressionar deputados
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-paper transition">
                  Compartilhar
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <b className="font-display text-sm uppercase tracking-tight block mb-3">
              Legal
            </b>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/politica-privacidade" className="text-gray-400 hover:text-paper transition">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="/lgpd" className="text-gray-400 hover:text-paper transition">
                  LGPD
                </a>
              </li>
              <li>
                <a href="/termos-uso" className="text-gray-400 hover:text-paper transition">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="mailto:contato@vidaacimaadapatente.com.br" className="text-gray-400 hover:text-paper transition">
                  Contato · Redes
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-xs text-gray-400">
          <p>© 2026 Vida Acima da Patente. Nenhuma patente vale mais que uma vida.</p>
        </div>
      </div>
    </footer>
  );
}
