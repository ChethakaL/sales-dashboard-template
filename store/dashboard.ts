'use client';
import { create } from 'zustand';
import { api } from '@/lib/api';
import type { MetricsResponse, CategorizedSeriesResponse, TopProductsResponse } from '@/types/dashboard';

type State = {
    loading: boolean;
    error?: string;
    metrics?: MetricsResponse;
    revenue?: CategorizedSeriesResponse;
    csat?: CategorizedSeriesResponse;
    visitors?: CategorizedSeriesResponse;
    products?: TopProductsResponse;
    loadAll: () => Promise<void>;
};

export const useDashboard = create<State>((set) => ({
    loading: false,
    async loadAll() {
        try {
            set({ loading: true, error: undefined });
            const [metrics, revenue, csat, visitors, products] = await Promise.all([
                api.metrics(), api.revenue(), api.csat(), api.visitors(), api.products()
            ]);
            set({ metrics, revenue, csat, visitors, products, loading: false });
        } catch (e: any) {
            set({ error: e?.message ?? 'Failed to load', loading: false });
        }
    },
}));
