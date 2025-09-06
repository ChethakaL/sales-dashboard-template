import { Injectable } from '@nestjs/common';
import { CategorizedSeriesResponse, MetricsResponse, TopProductsResponse } from './dto/responses';

@Injectable()
export class DashboardService {
    metrics(): MetricsResponse {
        return {
            kpis: [
                { label: 'Total Sales', value: '$1k', delta: '+8% from yesterday', kind: 'sales' },
                { label: 'Total Order', value: 300,   delta: '+5% from yesterday', kind: 'order' },
                { label: 'Product Sold', value: 5,    delta: '+1.2% from yesterday', kind: 'product' },
                { label: 'New Customers', value: 8,   delta: '0.5% from yesterday', kind: 'customer' },
            ],
        };
    }

    revenue(): CategorizedSeriesResponse {
        return {
            series: [
                { name: 'Online Sales',  data: [14000,20000,16000,14000,11000,18500,23000] },
                { name: 'Offline Sales', data: [ 6500,11000,25000, 9000, 6000,13000, 8500] },
            ],
            categories: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        };
    }

    customerSatisfaction(): CategorizedSeriesResponse {
        return {
            series: [
                { name: 'This Month', data: [66,64,63,71,68,69,78] },
                { name: 'Last Month', data: [64,62,66,63,66,67,68] },
            ],
            categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
        };
    }

    visitorInsights(): CategorizedSeriesResponse {
        return {
            series: [
                { name:'Loyal Customers',  data:[310,270,260,280,350,380,410,360] },
                { name:'New Customers',    data:[260,210,215,285,355,370,360,330] },
                { name:'Unique Customers', data:[290,250,240,270,340,395,420,370] },
            ],
            categories:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug'],
        };
    }

    topProducts(): TopProductsResponse {
        return {
            items: [
                { id:1, name:'Home Decor Range',             pct:45, color:'#2E89FF' },
                { id:2, name:'Disney Princess Pink Bag 18"', pct:29, color:'#22C55E' },
                { id:3, name:'Bathroom Essentials',          pct:18, color:'#A78BFA' },
                { id:4, name:'Apple Smartwatches',           pct:25, color:'#F8C146' },
            ],
        };
    }
}
