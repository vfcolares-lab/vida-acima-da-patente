import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import deputiesData from '@/lib/deputies.json';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { signatureName, messageBody } = body;

    if (!signatureName || !messageBody) {
      return NextResponse.json(
        { error: 'Nome e mensagem são obrigatórios' },
        { status: 400 }
      );
    }

    // Enviar para todos os deputados
    const emails = deputiesData.map((deputy: any) => ({
      to: deputy.email,
      subject: 'Apoie o PL 418/2026 — Vida Acima da Patente',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <p><strong>Excelentíssimo(a) Deputado(a) ${deputy.name},</strong></p>

          <div style="white-space: pre-wrap; line-height: 1.6; margin: 20px 0;">
${messageBody.replace(/\[NOME\]/g, signatureName)}
          </div>

          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            Mensagem enviada por: <strong>${signatureName}</strong><br>
            <em>Campanha Vida Acima da Patente</em>
          </p>
        </div>
      `,
    }));

    // Enviar em lotes (Resend recomenda não enviar tudo de uma vez)
    const batchSize = 50;
    let totalSent = 0;
    let totalFailed = 0;

    for (let i = 0; i < emails.length; i += batchSize) {
      const batch = emails.slice(i, i + batchSize);

      try {
        // Enviar e-mails em paralelo dentro do lote
        await Promise.all(
          batch.map(email =>
            resend.emails.send({
              from: 'noreply@vidaacimaadapatente.com.br',
              ...email,
            })
          )
        );

        totalSent += batch.length;
      } catch (error) {
        totalFailed += batch.length;
        console.error(`Erro ao enviar lote ${i}:`, error);
      }

      // Pequeno delay entre lotes para não sobrecarregar
      if (i + batchSize < emails.length) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }

    return NextResponse.json({
      success: true,
      message: `E-mails enviados com sucesso!`,
      totalDeputies: emails.length,
      totalSent,
      totalFailed,
    });
  } catch (error) {
    console.error('Erro ao enviar e-mails:', error);
    return NextResponse.json(
      { error: 'Erro ao enviar e-mails. Tente novamente.' },
      { status: 500 }
    );
  }
}
