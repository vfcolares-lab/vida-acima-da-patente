export interface Deputy {
  id: string;
  name: string;
  party: string;
  state: string;
  committee?: string;
  email: string;
}

export interface Signature {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  state: string;
  whatsapp?: string;
  createdAt: Date;
}

export interface NewsItem {
  id: string;
  title: string;
  source: string;
  type: 'video' | 'article' | 'report';
  url: string;
  image?: string;
}

export interface Supporter {
  id: string;
  name: string;
  role: string;
  description: string;
  logo?: string;
  image?: string;
}
