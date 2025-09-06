import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
export const runtime = 'nodejs';

export async function GET() {
    const items = await prisma.topProduct.findMany({ orderBy: { id: 'asc' } });
    return NextResponse.json({ items });
}
