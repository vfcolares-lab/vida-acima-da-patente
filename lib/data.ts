import { Deputy, NewsItem, Supporter } from './types';
import deputiesData from './deputies.json';

export const mockDeputies: Deputy[] = deputiesData as Deputy[];

export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Medicamento Lenacapavir no SUS como prevenção ao HIV',
    source: 'Câmara dos Deputados',
    type: 'video',
    url: 'https://www.youtube.com/watch?v=xNhxU7w4Ids',
    image: 'https://img.youtube.com/vi/xNhxU7w4Ids/maxresdefault.jpg',
  },
  {
    id: '2',
    title: 'PL reacende debate nacional sobre acesso ao Lenacapavir',
    source: 'Agência Aids',
    type: 'report',
    url: 'https://agenciaaids.com.br/noticias/projeto-de-lei-da-deputada-duda-salabert-reacende-debate-nacional-sobre-acesso-ao-lenacapavir-no-sus-medicamento-inovador-na-prevencao-do-hiv/',
    image: 'https://agenciaaids.com.br/wp-content/uploads/2025/09/Lenacapavir-1.png',
  },
  {
    id: '3',
    title: 'O Fio da Memória: da emergência do HIV à luta por dignidade',
    source: 'Mídia Ninja',
    type: 'article',
    url: 'https://midianinja.org/opiniao/o-fio-da-memoria-da-emergencia-do-hiv-a-luta-por-dignidade-em-brasilia/',
    image: 'https://midianinja.org/wp-content/themes/midia-ninja-theme/assets/images/logo.png',
  },
];

export const supporters: Supporter[] = [];

export const states = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
  'MT', 'MS', 'MG', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN',
  'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',
];

export const parties = [
  'PT', 'PL', 'PSDB', 'PSB', 'PDT', 'PSOL', 'PCdoB', 'Republicans',
  'MDB', 'PSD', 'PP', 'Podemos', 'REDE', 'Solidariedade', 'UNIÃO',
];

export const committees = [
  'Saúde',
  'Seguridade Social',
  'Ciência e Tecnologia',
  'Infraestrutura',
  'Desenvolvimento Econômico',
];
