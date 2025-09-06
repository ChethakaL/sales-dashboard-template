import axios from 'axios';
import type { MetricsResponse, CategorizedSeriesResponse, TopProductsResponse } from '@/types/dashboard';

const client = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, timeout: 10000 });

export const api = {
    metrics:  () => client.get<MetricsResponse>('/api/dashboard/metrics').then(r=>r.data),
    revenue:  () => client.get<CategorizedSeriesResponse>('/api/dashboard/revenue').then(r=>r.data),
    csat:     () => client.get<CategorizedSeriesResponse>('/api/dashboard/customer-satisfaction').then(r=>r.data),
    visitors: () => client.get<CategorizedSeriesResponse>('/api/dashboard/visitor-insights').then(r=>r.data),
    products: () => client.get<TopProductsResponse>('/api/dashboard/top-products').then(r=>r.data),
};
