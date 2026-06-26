'use client';

import { useState, useEffect } from 'react';

interface Counters {
  signatures: number;
  emails: number;
  shares: number;
}

export function useCounters() {
  const [counters, setCounters] = useState<Counters>({
    signatures: 621,
    emails: 264,
    shares: 64,
  });
  const [loading, setLoading] = useState(true);

  // Carregar contadores ao montar
  useEffect(() => {
    fetchCounters();
  }, []);

  async function fetchCounters() {
    try {
      const response = await fetch('/api/counters');
      if (response.ok) {
        const data = await response.json();
        setCounters(data);
      }
    } catch (error) {
      console.error('Erro ao carregar contadores:', error);
    } finally {
      setLoading(false);
    }
  }

  async function increment(type: 'signatures' | 'emails' | 'shares') {
    try {
      const response = await fetch('/api/counters', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type }),
      });

      if (response.ok) {
        const data = await response.json();
        setCounters(data);
      }
    } catch (error) {
      console.error('Erro ao atualizar contador:', error);
    }
  }

  return { counters, loading, increment };
}
