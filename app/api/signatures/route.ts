import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const SIGNATURES_FILE = path.join(DATA_DIR, 'signatures.json');

async function ensureDataDir() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
  } catch (error) {
    console.error('Error creating data directory:', error);
  }
}

async function readSignatures() {
  try {
    await ensureDataDir();
    const data = await fs.readFile(SIGNATURES_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeSignatures(signatures: any[]) {
  await ensureDataDir();
  await fs.writeFile(SIGNATURES_FILE, JSON.stringify(signatures, null, 2), 'utf-8');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { firstName, lastName, email, city, state, whatsapp, createdAt } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !city || !state) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const signatures = await readSignatures();

    // Check for duplicate email
    if (signatures.some((sig: any) => sig.email === email)) {
      return NextResponse.json(
        { error: 'Email already signed' },
        { status: 409 }
      );
    }

    const newSignature = {
      id: Date.now().toString(),
      firstName,
      lastName,
      email,
      city,
      state,
      whatsapp: whatsapp || null,
      createdAt: createdAt || new Date().toISOString(),
    };

    signatures.push(newSignature);
    await writeSignatures(signatures);

    return NextResponse.json(
      { success: true, signature: newSignature },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving signature:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const signatures = await readSignatures();
    return NextResponse.json({
      count: signatures.length,
      signatures,
    });
  } catch (error) {
    console.error('Error reading signatures:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST_EXPORT(request: NextRequest) {
  try {
    const signatures = await readSignatures();

    // Create CSV content
    const headers = ['ID', 'Nome', 'Sobrenome', 'E-mail', 'Cidade', 'Estado', 'WhatsApp', 'Data'];
    const csvContent = [
      headers.join(','),
      ...signatures.map((sig: any) =>
        [
          sig.id,
          `"${sig.firstName}"`,
          `"${sig.lastName}"`,
          sig.email,
          sig.city,
          sig.state,
          sig.whatsapp || '',
          sig.createdAt,
        ].join(',')
      ),
    ].join('\n');

    return new NextResponse(csvContent, {
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="assinaturas-${new Date().toISOString().split('T')[0]}.csv"`,
      },
    });
  } catch (error) {
    console.error('Error exporting signatures:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
