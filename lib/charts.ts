import { tokens as T } from '@/theme/tokens';

export const baseGrid = {
    grid:{ borderColor:'#ECEFF3', strokeDashArray:3, xaxis:{ lines:{ show:false } } },
    dataLabels:{ enabled:false },
    tooltip:{ theme:'light' as const },
    legend:{
        fontSize:'12px', fontWeight:600, labels:{ colors:'#6B7280' },
        itemMargin:{ horizontal:12, vertical:8 }, markers:{ radius:6 },
    },
};
export const lineOpts = (colors:string[], cats:string[]) => ({
    chart:{ type:'line', height:240, toolbar:{ show:false }, foreColor:'#6B7280' },
    ...baseGrid, stroke:{ curve:'smooth' as const, width:3 }, markers:{ size:3, strokeWidth:0 },
    colors, xaxis:{ categories:cats, axisBorder:{ color:'#E5E7EB' }, axisTicks:{ color:'#E5E7EB' } },
});
export const barOpts = (colors:string[], cats:string[], h=280, stacked=false) => ({
    chart:{ type:'bar', height:h, toolbar:{ show:false }, foreColor:'#6B7280', stacked },
    ...baseGrid,
    plotOptions:{ bar:{ columnWidth:'40%', borderRadius:8, borderRadiusApplication:'end' as const } },
    colors, xaxis:{ categories:cats, axisBorder:{ color:'#E5E7EB' }, axisTicks:{ color:'#E5E7EB' } },
});
export const areaOpts = (cats:string[]) => ({
    chart:{ type:'area', height:280, toolbar:{ show:false }, foreColor:'#6B7280' },
    ...baseGrid, stroke:{ curve:'smooth' as const, width:3 }, colors:[T.blue,T.green],
    fill:{ type:'gradient' as const, gradient:{ shadeIntensity:1, opacityFrom:.35, opacityTo:0, stops:[0,100] } },
    xaxis:{ categories:cats, axisBorder:{ color:'#E5E7EB' }, axisTicks:{ color:'#E5E7EB' } },
});
export const hexToRgba = (hex: string, a = 0.12) => {
    const h = hex.replace('#', '');
    const n = parseInt(h.length === 3 ? h.split('').map(x=>x+x).join('') : h, 16);
    const r=(n>>16)&255,g=(n>>8)&255,b=n&255;
    return `rgba(${r},${g},${b},${a})`;
};
