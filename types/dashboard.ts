export type MetricsResponse = {
    kpis: { label: string; value: string | number; delta: string; kind: 'sales'|'order'|'product'|'customer' }[];
};
export type TimeSeries = { name: string; data: number[] };
export type CategorizedSeriesResponse = { series: TimeSeries[]; categories: string[] };
export type TopProductsResponse = { items: { id:number; name:string; pct:number; color:string }[] };
