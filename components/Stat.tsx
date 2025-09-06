export default function Stat({ color, title, sub, value }:{
    color:string; title:string; sub:string; value:string
}) {
    return (
        <div style={{display:'flex', alignItems:'center', gap:10}}>
            <span style={{width:12, height:12, borderRadius:2, background:color, display:'inline-block'}}/>
            <div style={{flex:1}}>
                <div style={{fontSize:12}}>{title}</div>
                <div style={{fontSize:12, color:'#6B7280'}}>{sub}</div>
            </div>
            <div style={{fontWeight:900}}>{value}</div>
        </div>
    );
}
