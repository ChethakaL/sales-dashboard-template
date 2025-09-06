// app/api/openapi/route.ts
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // don't cache; useful during dev

export async function GET() {
    // If you want to point at your *Next API routes* (same app):
    const servers = [{ url: '/api' }];

    // If you prefer to point at a *separate Nest backend*, use:
    // const servers = [{ url: process.env.NEXT_PUBLIC_API_BASE ?? 'http://localhost:4000/api' }];

    const spec = {
        openapi: '3.0.3',
        info: { title: 'Sales Dashboard API', version: '1.0.0' },
        servers,
        paths: {
            '/dashboard/metrics': {
                get: { summary: 'Get KPI metrics', responses: { 200: { description: 'OK' } } }
            },
            '/dashboard/revenue': {
                get: { summary: 'Revenue series', responses: { 200: { description: 'OK' } } }
            },
            '/dashboard/customer-satisfaction': {
                get: { summary: 'CSAT series', responses: { 200: { description: 'OK' } } }
            },
            '/dashboard/visitor-insights': {
                get: { summary: 'Visitor insights series', responses: { 200: { description: 'OK' } } }
            },
            '/dashboard/top-products': {
                get: { summary: 'Top products', responses: { 200: { description: 'OK' } } }
            }
        }
        // TODO: add components/schemas later for full typing
    };

    return NextResponse.json(spec);
}
