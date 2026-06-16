# Vida Acima da Patente — Site de Campanha

Site de mobilização pública para a campanha **VIDA ACIMA DA PATENTE**, liderada pela deputada federal Duda Salabert. Uma plataforma de conscientização, petição pública, pressão parlamentar e captação de apoiadores pelo acesso ao **Lenacapavir** (prevenção ao HIV) através do SUS.

## Tecnologia

- **Framework**: Next.js 16+ com App Router
- **Styling**: Tailwind CSS + Design Tokens customizados
- **Tipografia**: Anton, Archivo, Space Mono (Google Fonts)
- **Linguagem**: TypeScript + React
- **Storage**: Arquivo JSON local (data/signatures.json)

## Funcionalidades Implementadas ✅

### Navegação & Header
- Nav sticky com logo, links âncora (O Problema, A Ciência, Linha do Tempo, PL 418, Apoiadores)
- Contador de assinaturas ao vivo
- Botão "ASSINAR" sempre visível (mobile: barra fixa inferior)

### Hero — Manifesto
- Fundo vermelho full-bleed
- Título gigante: "Nenhuma patente vale mais que uma vida"
- Logo + nome da campanha
- Subtítulo com call-to-action
- 2 CTAs (ASSINAR / PRESSIONAR DEPUTADOS)
- Trio de contadores (Assinaturas / E-mails / Compartilhamentos)

### 9 Blocos Temáticos
1. **Bloco 02 — O Problema**: Comparativo lado a lado (Lenacapavir ✓ vs Realidade Atual ✗)
2. **Bloco 03 — A Ciência**: O que é Lenacapavir, dosagem (1x/dia vs 2x/ano), custo
3. **Bloco 04 — Timeline**: Linha do tempo Brasil HIV (1980-2026), vira vertical em mobile
4. **Bloco 05 — PL 418**: Badge, explicação, link para Câmara
5. **Bloco 06 — Assinatura** (AÇÃO PRINCIPAL):
   - Formulário em card branco sobre fundo vermelho
   - Campos: Nome, Sobrenome, E-mail, Cidade, Estado, WhatsApp (opcional)
   - Validação em tempo real
   - Checkbox LGPD obrigatório
   - Estado pós-envio (sucesso) com CTA para próximo passo
6. **Bloco 07 — Pressão Parlamentar**:
   - Filtros combináveis: Estado, Partido, Comissão, Selecionar todos
   - Lista de deputados com checkboxes e avatares
   - Contador de selecionados (visível sempre)
   - Editor de e-mail editável
   - Botão "Exportar lista (CSV)"
   - Botão "Enviar e-mail aos selecionados"
7. **Bloco 08 — Notícias**: Grid 3 colunas de cards (vídeo, artigos, reports)
8. **Bloco 09 — Apoiadores**: Logos (placeholders) + depoimentos com foto e cargo
9. **Rodapé**: Lockup + slogan + colunas de links (Campanha, Participe, Legal)

### Funcionalidades Técnicas
- ✅ **Validação de formulário** (e-mail, campos obrigatórios, LGPD)
- ✅ **Gravação de assinaturas** em JSON local (data/signatures.json)
- ✅ **API POST /api/signatures** para salvar
- ✅ **API GET /api/signatures** para ler
- ✅ **Filtros combináveis** (estado, partido, comissão, selecionar todos)
- ✅ **Contador de selecionados** dinâmico
- ✅ **Editor de e-mail** editável
- ✅ **Export CSV** de deputados selecionados
- ✅ **Design Tokens** (cores, tipografia, espaçamento)
- ✅ **Responsivo** (breakpoint 860px)
- ✅ **Scroll suave** entre seções
- ✅ **Sem animações decorativas**, respeita prefers-reduced-motion

## Design Tokens

### Cores
| Token | Valor | Uso |
|-------|-------|-----|
| `--paper` | `#F4F2EC` | Fundo principal (off-white quente) |
| `--paper-2` | `#ECE9E0` | Fundo alternado de blocos |
| `--ink` | `#15120E` | Texto principal / fundos escuros |
| `--ink-soft` | `#4b463e` | Texto secundário |
| `--red` | `#E1241A` | Cor da campanha (laço HIV) |
| `--red-deep` | `#7E120D` | Vermelho escuro de apoio |
| `--red-light` | `#FF6A5E` | Vermelho sobre fundo escuro |
| `--line` | `#CBC6BB` | Linhas/bordas |

### Tipografia
- **Display**: Anton 400 (títulos, headlines)
- **Sans**: Archivo 400-900 (corpo, UI)
- **Mono**: Space Mono 400-700 (labels, números, dados)

### Espaçamento
- Desktop: 64px 56px (bloco)
- Mobile (≤860px): 44px 22px (bloco)
- Max-width: 1180px (centralizado)

## Começar

### Instalação
```bash
npm install
```

### Desenvolvimento
```bash
npm run dev
```
Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build para Produção
```bash
npm run build
npm start
```

## Estrutura de Arquivos

```
vida-acima-da-patente/
├── app/
│   ├── layout.tsx                    # Root layout + fontes + metadata
│   ├── globals.css                   # Design tokens
│   ├── page.tsx                      # Página principal
│   ├── favicon.ico
│   └── api/
│       └── signatures/route.ts       # POST/GET assinaturas
├── components/
│   ├── Nav.tsx                       # Navegação sticky
│   ├── Hero.tsx                      # Hero manifesto
│   ├── SignatureForm.tsx             # Formulário de assinatura
│   ├── Footer.tsx                    # Rodapé
│   └── blocks/
│       ├── ProblemBlock.tsx
│       ├── ScienceBlock.tsx
│       ├── TimelineBlock.tsx
│       ├── PLBlock.tsx
│       ├── SignatureBlock.tsx
│       ├── PressureBlock.tsx
│       ├── NewsBlock.tsx
│       └── SupportersBlock.tsx
├── lib/
│   ├── types.ts                      # Types (Deputy, Signature, etc.)
│   └── data.ts                       # Dados mocados
├── public/
│   └── assets/                       # Logo laço HIV
├── .claude/
│   └── launch.json                   # Configuração preview
├── tailwind.config.ts                # Tailwind com design tokens
├── tsconfig.json
├── next.config.ts
├── package.json
└── README.md
```

## API Endpoints

### POST /api/signatures
Salva uma assinatura.

**Request:**
```json
{
  "firstName": "João",
  "lastName": "Silva",
  "email": "joao@example.com",
  "city": "São Paulo",
  "state": "SP",
  "whatsapp": "(11) 99999-9999",
  "createdAt": "2026-06-15T10:30:00Z"
}
```

**Response (201):**
```json
{
  "success": true,
  "signature": {
    "id": "1718445000000",
    "firstName": "João",
    ...
  }
}
```

**Errors:**
- `400`: Missing required fields ou email inválido
- `409`: E-mail já foi assinado
- `500`: Server error

### GET /api/signatures
Retorna todas as assinaturas.

**Response:**
```json
{
  "count": 123,
  "signatures": [...]
}
```

## Próximas Etapas (Roadmap)

### Curto Prazo
- [ ] Integração com base oficial da Câmara dos Deputados (513 deputados reais)
- [ ] Envio de e-mails via API (Resend, SendGrid, ou Nodemailer)
- [ ] Contador de assinaturas em tempo real (polling ou WebSocket)
- [ ] Upload de fotos dos apoiadores/depoimentos reais

### Médio Prazo
- [ ] Painel administrativo (editar textos, notícias, e-mails, deputados-alvo)
- [ ] Autenticação para admin (passwordless ou OAuth)
- [ ] Sistema de relatórios (CSV/PDF de assinaturas)
- [ ] Integração com redes sociais (share buttons)
- [ ] Analytics (Plausible ou similar)

### Longo Prazo
- [ ] Dark mode
- [ ] i18n (PT/EN/ES)
- [ ] Chat/suporte (Crisp, Zendesk)
- [ ] A/B testing de CTAs
- [ ] Mobile app (React Native ou Flutter)

## Design

Implementa a **Direção A — Manifesto** do handoff:

✅ **Tipografia grande e ousada** (Anton para títulos)
✅ **Paleta vermelha dominante** (laço HIV é protagonista)
✅ **Estética de cartaz/manifesto** (bordas retas 0 border-radius, sem sombras decorativas)
✅ **Tom ativista, urgente, humanitário** (não partidário)
✅ **Placeholders de arte** (arte final virá do Drive da campanha)

### Inspirações
- pldaespeculacao.org
- manifestasemcensura.minhabh.org.br

## Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Contato

Campanha Vida Acima da Patente
Deputada Federal Duda Salabert

---

**Nenhuma patente vale mais que uma vida.**
