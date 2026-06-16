'use client';

import { useState } from 'react';
import { states } from '@/lib/data';

interface SignatureFormProps {
  onSuccess: () => void;
  onIncrement?: () => void;
}

export default function SignatureForm({ onSuccess }: SignatureFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    state: '',
    whatsapp: '',
    lgpdAccepted: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'Nome obrigatório';
    if (!formData.lastName.trim()) newErrors.lastName = 'Sobrenome obrigatório';
    if (!formData.email.trim()) newErrors.email = 'E-mail obrigatório';
    if (!validateEmail(formData.email)) newErrors.email = 'E-mail inválido';
    if (!formData.city.trim()) newErrors.city = 'Cidade obrigatória';
    if (!formData.state) newErrors.state = 'Estado obrigatório';
    if (!formData.lgpdAccepted) newErrors.lgpdAccepted = 'Você deve aceitar a LGPD';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsLoading(true);

    try {
      const response = await fetch('https://formspree.io/f/xqeonnrv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim().toLowerCase(),
          city: formData.city.trim(),
          state: formData.state,
          whatsapp: formData.whatsapp.trim() || undefined,
        }),
      });

      if (response.ok) {
        onSuccess(formData.firstName);
        // Incrementar contador de assinaturas
        if (props.onIncrement) {
          props.onIncrement();
        }
      } else {
        setErrors({ submit: 'Erro ao enviar. Tente novamente.' });
      }
    } catch (error) {
      setErrors({ submit: 'Erro na conexão. Tente novamente.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-1 md:gap-4">
        <div className="md:col-span-1">
          <label className="font-mono text-xs tracking-widest uppercase text-ink-soft block mb-2">
            Nome
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full h-10 border-2 border-line px-3 bg-paper focus:outline-none focus:border-red transition"
            placeholder="Seu nome"
          />
          {errors.firstName && <p className="text-sm text-red mt-1">{errors.firstName}</p>}
        </div>

        <div className="md:col-span-1">
          <label className="font-mono text-xs tracking-widest uppercase text-ink-soft block mb-2">
            Sobrenome
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full h-10 border-2 border-line px-3 bg-paper focus:outline-none focus:border-red transition"
            placeholder="Seu sobrenome"
          />
          {errors.lastName && <p className="text-sm text-red mt-1">{errors.lastName}</p>}
        </div>
      </div>

      <div>
        <label className="font-mono text-xs tracking-widest uppercase text-ink-soft block mb-2">
          E-mail
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full h-10 border-2 border-line px-3 bg-paper focus:outline-none focus:border-red transition"
          placeholder="seu@email.com"
        />
        {errors.email && <p className="text-sm text-red mt-1">{errors.email}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="font-mono text-xs tracking-widest uppercase text-ink-soft block mb-2">
            Cidade
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full h-10 border-2 border-line px-3 bg-paper focus:outline-none focus:border-red transition"
            placeholder="São Paulo"
          />
          {errors.city && <p className="text-sm text-red mt-1">{errors.city}</p>}
        </div>

        <div>
          <label className="font-mono text-xs tracking-widest uppercase text-ink-soft block mb-2">
            Estado
          </label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full h-10 border-2 border-line px-3 bg-paper focus:outline-none focus:border-red transition"
          >
            <option value="">Selecione</option>
            {states.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.state && <p className="text-sm text-red mt-1">{errors.state}</p>}
        </div>
      </div>

      <div>
        <label className="font-mono text-xs tracking-widest uppercase text-ink-soft block mb-2">
          WhatsApp (opcional)
        </label>
        <input
          type="tel"
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handleChange}
          className="w-full h-10 border-2 border-line px-3 bg-paper focus:outline-none focus:border-red transition"
          placeholder="(11) 9xxxx-xxxx"
        />
      </div>

      <div className="flex gap-3 items-start py-3">
        <input
          type="checkbox"
          id="lgpd"
          name="lgpdAccepted"
          checked={formData.lgpdAccepted}
          onChange={handleChange}
          className="w-5 h-5 border-2 border-ink flex-none mt-0.5 cursor-pointer accent-red"
        />
        <label htmlFor="lgpd" className="text-sm leading-relaxed text-ink-soft cursor-pointer">
          Autorizo o uso dos meus dados para participação na campanha e recebimento de atualizações. (LGPD)
        </label>
      </div>

      {errors.lgpdAccepted && <p className="text-sm text-red">{errors.lgpdAccepted}</p>}
      {errors.submit && <p className="text-sm text-red">{errors.submit}</p>}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-red text-white font-bold py-3 border-2 border-red text-sm uppercase tracking-wider hover:bg-red-deep disabled:opacity-70 transition"
      >
        {isLoading ? 'Enviando...' : 'Assinar agora'}
      </button>
    </form>
  );
}
