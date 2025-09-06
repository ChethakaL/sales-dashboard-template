'use client';
import { create } from 'zustand';

type Metric = { label: string; value: string; subtitle: string };
type Revenue = { day: string; online: number; offline: number };
type Csat = { label: string; lastMonth: number; thisMonth: number };
type Visitors = { month: string; loyal: number; newCustomers: number; unique: number };
type Product = { id: number; name: string; popularity: number; sales: number };

type State = {
    metrics: Metric[];
    revenue: Revenue[];
    csat: Csat[];
    visitors: Visitors[];
    products: Product[];
    fetchAll: () => Promise<void>;
};

const useDashboardStore = create<State>(() => ({
    metrics: [
        { label: 'Total Sales', value: '$1k', subtitle: '+8% from yesterday' },
        { label: 'Total Order', value: '300', subtitle: '+5% from yesterday' },
        { label: 'Product Sold', value: '5', subtitle: '+1.2% from yesterday' },
        { label: 'New Customers', value: '8', subtitle: '0.5% from yesterday' },
    ],
    revenue: [
        { day: 'Monday', online: 15000, offline: 8000 },
        { day: 'Tuesday', online: 22000, offline: 12000 },
        { day: 'Wednesday', online: 18000, offline: 25000 },
        { day: 'Thursday', online: 16000, offline: 9000 },
        { day: 'Friday', online: 12000, offline: 7000 },
        { day: 'Saturday', online: 20000, offline: 14000 },
        { day: 'Sunday', online: 24000, offline: 10000 },
    ],
    csat: [
        { label: 'Jan', lastMonth: 62, thisMonth: 70 },
        { label: 'Feb', lastMonth: 58, thisMonth: 68 },
        { label: 'Mar', lastMonth: 65, thisMonth: 66 },
        { label: 'Apr', lastMonth: 60, thisMonth: 72 },
        { label: 'May', lastMonth: 61, thisMonth: 71 },
        { label: 'Jun', lastMonth: 64, thisMonth: 69 },
        { label: 'Jul', lastMonth: 66, thisMonth: 78 },
    ],
    visitors: [
        { month: 'Jan', loyal: 300, newCustomers: 250, unique: 280 },
        { month: 'Feb', loyal: 280, newCustomers: 220, unique: 260 },
        { month: 'Mar', loyal: 220, newCustomers: 200, unique: 230 },
        { month: 'Apr', loyal: 260, newCustomers: 280, unique: 270 },
        { month: 'May', loyal: 320, newCustomers: 350, unique: 330 },
        { month: 'Jun', loyal: 360, newCustomers: 370, unique: 380 },
        { month: 'Jul', loyal: 400, newCustomers: 330, unique: 370 },
    ],
    products: [
        { id: 1, name: 'Home Decor Range', popularity: 45, sales: 4521 },
        { id: 2, name: 'Disney Princess Pink Bag 18"', popularity: 29, sales: 3211 },
        { id: 3, name: 'Bathroom Essentials', popularity: 18, sales: 2109 },
        { id: 4, name: 'Apple Smartwatches', popularity: 25, sales: 2850 },
    ],
    fetchAll: async () => {}, // will switch to API later
}));

export default useDashboardStore;
