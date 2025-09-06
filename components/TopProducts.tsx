import { hexToRgba } from '@/lib/charts';
import type { TopProductsResponse } from '@/types/dashboard';

export default function TopProducts({ data }: { data?: TopProductsResponse }) {
    const items = data?.items ?? [];
    return (
        <>
            <div className="tp-head">
                <div style={{width:28}}>#</div>
                <div style={{flex:1}}>Name</div>
                <div style={{width:160}}>Popularity</div>
                <div style={{width:64, textAlign:'right'}}>Sales</div>
            </div>

            {items.map((p, i)=>(
                <div key={p.id} style={{display:'grid', gap:8, marginBottom:12}}>
                    <div style={{display:'flex', alignItems:'center', gap:16}}>
                        <div style={{width:28, color:'#6B7280'}}>{String(i+1).padStart(2,'0')}</div>
                        <div style={{flex:1, lineHeight:1.2}}>{p.name}</div>
                        <div style={{width:160}}>
                            <div className="progress-rail">
                                <div className="progress-bar" style={{width:`${p.pct}%`, background:p.color}}/>
                            </div>
                        </div>
                        <div style={{width:64, textAlign:'right'}}>
                            <span className="pct-chip" style={{color:p.color, background:hexToRgba(p.color,.10)}}>{p.pct}%</span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
