import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
export const runtime = 'nodejs';

export async function GET() {
    const rows = await prisma.metricKpi.findMany({ orderBy: { id: 'asc' } });
    const kpis = rows.map(k => ({
        label: k.label,
        value: k.valueText ?? (typeof k.valueNum === 'number' ? k.valueNum : 0),
        delta: k.delta,
        kind: k.kind as 'sales' | 'order' | 'product' | 'customer'
    }));
    return NextResponse.json({ kpis });
}
