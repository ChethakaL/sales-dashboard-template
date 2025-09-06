import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
export const runtime = 'nodejs';

export async function GET() {
    const c = await prisma.chart.findUnique({
        where: { slug: 'csat' },
        include: { series: { orderBy: { orderIndex: 'asc' } } }
    });
    return NextResponse.json({
        categories: (c?.categories as string[]) ?? [],
        series: (c?.series ?? []).map(s => ({ name: s.name, data: s.data as number[] }))
    });
}
