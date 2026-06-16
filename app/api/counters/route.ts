import { NextRequest, NextResponse } from 'next/server';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const countersFile = join(process.cwd(), 'lib', 'counters.json');

function getCounters() {
  try {
    const data = readFileSync(countersFile, 'utf-8');
    return JSON.parse(data);
  } catch {
    return { signatures: 0, emails: 0, shares: 0 };
  }
}

function saveCounters(counters: any) {
  writeFileSync(countersFile, JSON.stringify(counters, null, 2));
}

export async function GET() {
  try {
    const counters = getCounters();
    return NextResponse.json(counters);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to read counters' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type } = body;

    if (!type || !['signatures', 'emails', 'shares'].includes(type)) {
      return NextResponse.json(
        { error: 'Invalid counter type' },
        { status: 400 }
      );
    }

    const counters = getCounters();
    counters[type] = (counters[type] || 0) + 1;
    saveCounters(counters);

    return NextResponse.json(counters);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update counters' },
      { status: 500 }
    );
  }
}
