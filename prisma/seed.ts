import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

async function run() {
    await db.chartSeries.deleteMany();
    await db.chart.deleteMany();
    await db.metricKpi.deleteMany();
    await db.topProduct.deleteMany();

    await db.metricKpi.createMany({
        data: [
            { label:'Total Sales', valueText:'$1k', delta:'+8% from yesterday', kind:'sales' },
            { label:'Total Order', valueNum:300,    delta:'+5% from yesterday', kind:'order' },
            { label:'Product Sold', valueNum:5,     delta:'+1.2% from yesterday', kind:'product' },
            { label:'New Customers', valueNum:8,    delta:'0.5% from yesterday', kind:'customer' },
        ]
    });

    const revenue = await db.chart.create({
        data: { slug:'revenue', categories: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'] }
    });
    await db.chartSeries.createMany({
        data: [
            { chartId: revenue.id, name:'Online Sales',  data:[14000,20000,16000,14000,11000,18500,23000], orderIndex:0 },
            { chartId: revenue.id, name:'Offline Sales', data:[ 6500,11000,25000, 9000, 6000,13000, 8500], orderIndex:1 },
        ]
    });

    const csat = await db.chart.create({
        data: { slug:'csat', categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul'] }
    });
    await db.chartSeries.createMany({
        data: [
            { chartId: csat.id, name:'This Month', data:[66,64,63,71,68,69,78], orderIndex:0 },
            { chartId: csat.id, name:'Last Month', data:[64,62,66,63,66,67,68], orderIndex:1 },
        ]
    });

    const visitors = await db.chart.create({
        data: { slug:'visitors', categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug'] }
    });
    await db.chartSeries.createMany({
        data: [
            { chartId: visitors.id, name:'Loyal Customers',  data:[310,270,260,280,350,380,410,360], orderIndex:0 },
            { chartId: visitors.id, name:'New Customers',    data:[260,210,215,285,355,370,360,330], orderIndex:1 },
            { chartId: visitors.id, name:'Unique Customers', data:[290,250,240,270,340,395,420,370], orderIndex:2 },
        ]
    });

    await db.topProduct.createMany({
        data: [
            { name:'Home Decor Range',             pct:45, color:'#2E89FF' },
            { name:'Disney Princess Pink Bag 18\"', pct:29, color:'#22C55E' },
            { name:'Bathroom Essentials',          pct:18, color:'#A78BFA' },
            { name:'Apple Smartwatches',           pct:25, color:'#F8C146' },
        ]
    });

    console.log('Seeded ✅');
}
run().finally(() => db.$disconnect());
