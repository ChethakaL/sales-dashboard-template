'use client';
export default function Topbar({ onOpen }:{ onOpen:()=>void }) {
    return (
        <div className="topbar">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <button className="hamburger" onClick={onOpen} aria-label="Open sidebar">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M3 12h18M3 18h18" stroke="#0F172A" strokeWidth="2" strokeLinecap="round"/></svg>
                </button>
                <div style={{ fontSize: 24, fontWeight: 900 }}>Dashboard</div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                <div className="search">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="8" stroke="#94A3B8" strokeWidth="2" /><path d="M20 20L17 17" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" /></svg>
                    <input placeholder="Search here..." style={{ border:'none', outline:'none', flex:1, fontSize:14, background:'transparent' }} />
                </div>
                <select className="select" defaultValue="Eng (US)"><option>Eng (US)</option><option>Eng (UK)</option></select>
                <div style={{ display:'grid', placeItems:'center', width:36, height:36, borderRadius:999, background:'#fff', border:'1px solid #EEF2F7' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M18 8a6 6 0 1 0-12 0v5H4l2 3h12l2-3h-2V8z" stroke="#0F172A" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <div style={{ display:'flex', alignItems:'center', gap:10 }}>
                    <img src="https://i.pravatar.cc/100?img=12" width={36} height={36} style={{ borderRadius:999 }} alt="Avatar" />
                    <div><div style={{ fontSize:13, fontWeight:700 }}>Musfiq</div><div style={{ fontSize:11, color:'#6B7280' }}>Admin</div></div>
                </div>
            </div>
        </div>
    );
}
