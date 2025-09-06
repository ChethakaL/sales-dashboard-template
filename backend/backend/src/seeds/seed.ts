import 'reflect-metadata';
import { DataSource } from 'typeorm';
import ds from '../../typeorm.config';
import { Chart } from '../dashboard/entities/chart.entity';
import { ChartSeries } from '../dashboard/entities/chart-series.entity';
import { MetricKpi } from '../dashboard/entities/metric-kpi.entity';
import { TopProduct } from '../dashboard/entities/top-product.entity';

async function run() {
    await (ds as DataSource).initialize();

    const chartRepo = ds.getRepository(Chart);
    const seriesRepo = ds.getRepository(ChartSeries);
    const kpiRepo = ds.getRepository(MetricKpi);
    const productRepo = ds.getRepository(TopProduct);

    await seriesRepo.delete({});
    await chartRepo.delete({});
    await kpiRepo.delete({});
    await productRepo.delete({});

    await kpiRepo.save([
        { label:'Total Sales', valueText:'$1k', delta:'+8% from yesterday', kind:'sales' },
        { label:'Total Order', valueNum:300,   delta:'+5% from yesterday', kind:'order' },
        { label:'Product Sold', valueNum:5,    delta:'+1.2% from yesterday', kind:'product' },
        { label:'New Customers', valueNum:8,   delta:'0.5% from yesterday', kind:'customer' },
    ]);

    const revenue = await chartRepo.save({ slug:'revenue', categories:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'] });
    await seriesRepo.save([
        { chart:revenue, name:'Online Sales',  data:[14000,20000,16000,14000,11000,18500,23000], orderIndex:0 },
        { chart:revenue, name:'Offline Sales', data:[ 6500,11000,25000, 9000, 6000,13000, 8500], orderIndex:1 },
    ]);

    const csat = await chartRepo.save({ slug:'csat', categories:['Jan','Feb','Mar','Apr','May','Jun','Jul'] });
    await seriesRepo.save([
        { chart:csat, name:'This Month', data:[66,64,63,71,68,69,78], orderIndex:1 },
        { chart:csat, name:'Last Month', data:[64,62,66,63,66,67,68], orderIndex:0 },
    ]);

    const visitors = await chartRepo.save({ slug:'visitors', categories:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug'] });
    await seriesRepo.save([
        { chart:visitors, name:'Loyal Customers',  data:[310,270,260,280,350,380,410,360], orderIndex:0 },
        { chart:visitors, name:'New Customers',    data:[260,210,215,285,355,370,360,330], orderIndex:1 },
        { chart:visitors, name:'Unique Customers', data:[290,250,240,270,340,395,420,370], orderIndex:2 },
    ]);

    await productRepo.save([
        { name:'Home Decor Range',             pct:45, color:'#2E89FF' },
        { name:'Disney Princess Pink Bag 18\"', pct:29, color:'#22C55E' },
        { name:'Bathroom Essentials',          pct:18, color:'#A78BFA' },
        { name:'Apple Smartwatches',           pct:25, color:'#F8C146' },
    ]);

    console.log('Seeded ✅');
    await ds.destroy();
}

run().catch((e) => { console.error(e); process.exit(1); });
