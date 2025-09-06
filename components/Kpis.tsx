import { I } from './Icons';
import { tokens as T } from '@/theme/tokens';
import type { MetricsResponse } from '@/types/dashboard';

export default function Kpis({ data }: { data?: MetricsResponse }) {
    const by = Object.fromEntries((data?.kpis ?? []).map(k => [k.kind, k]));
    return (
        <div className="kpi-wrap">
            <div className="kpi kpi-sales">
                <div className="ico">{I.kpiIcon()}</div>
                <div className="val">{by.sales?.value ?? '$1k'}</div>
                <div className="lbl">{by.sales?.label ?? 'Total Sales'}</div>
                <div className="sub">{by.sales?.delta ?? '+8% from yesterday'}</div>
            </div>
            <div className="kpi kpi-order">
                <div className="ico">{I.kpiIcon('#F8B84F')}</div>
                <div className="val">{by.order?.value ?? 300}</div>
                <div className="lbl">{by.order?.label ?? 'Total Order'}</div>
                <div className="sub">{by.order?.delta ?? '+5% from yesterday'}</div>
            </div>
            <div className="kpi kpi-product">
                <div className="ico">{I.kpiIcon('#2FCB7B')}</div>
                <div className="val">{by.product?.value ?? 5}</div>
                <div className="lbl">{by.product?.label ?? 'Product Sold'}</div>
                <div className="sub">{by.product?.delta ?? '+1.2% from yesterday'}</div>
            </div>
            <div className="kpi kpi-customer">
                <div className="ico">{I.kpiIcon('#8D79FF')}</div>
                <div className="val">{by.customer?.value ?? 8}</div>
                <div className="lbl">{by.customer?.label ?? 'New Customers'}</div>
                <div className="sub">{by.customer?.delta ?? '0.5% from yesterday'}</div>
            </div>
        </div>
    );
}
