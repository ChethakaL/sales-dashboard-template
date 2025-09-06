// 'use client';
//
// import dynamic from 'next/dynamic';
// import * as React from 'react';
// const Apex = dynamic(() => import('react-apexcharts'), { ssr: false }) as any;
//
// /* ---------- design tokens ---------- */
// const T = {
//     bg: '#F6F8FC',
//     border: '#EEF2F7',
//     cardR: 14,
//     gap: 24,
//
//     indigo: '#5B67F2',
//     indigoDark: '#4853E3',
//
//     blue: '#2E89FF',
//     green: '#22C55E',
//     purple: '#7C5CFF',
//     red: '#FF5C65',
//     amber: '#F8C146',
//
//     kpi: { sales: '#FFE7EA', order: '#FFEFCF', product: '#E9F7EE', customer: '#EFE8FF' },
// } as const;
//
// const hexToRgba = (hex: string, a = 0.12) => {
//     const h = hex.replace('#', '');
//     const n = parseInt(h.length === 3 ? h.split('').map(x => x + x).join('') : h, 16);
//     const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
//     return `rgba(${r},${g},${b},${a})`;
// };
//
// /* ---------- mock data ---------- */
// const visitor = {
//     series: [
//         { name: 'Loyal Customers', data: [310, 270, 260, 280, 350, 380, 410, 360] },
//         { name: 'New Customers', data: [260, 210, 215, 285, 355, 370, 360, 330] },
//         { name: 'Unique Customers', data: [290, 250, 240, 270, 340, 395, 420, 370] },
//     ],
//     categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
// };
//
// const revenue = {
//     series: [
//         { name: 'Online Sales', data: [14000, 20000, 16000, 14000, 11000, 18500, 23000] },
//         { name: 'Offline Sales', data: [6500, 11000, 25000, 9000, 6000, 13000, 8500] },
//     ],
//     categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
// };
//
// const csat = {
//     series: [
//         { name: 'This Month', data: [66, 64, 63, 71, 68, 69, 78] },
//         { name: 'Last Month', data: [64, 62, 66, 63, 66, 67, 68] },
//     ],
//     categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
// };
//
// const tvr = {
//     series: [
//         { name: 'Target Sales', data: [8, 9, 10, 11, 12, 13, 15] },
//         { name: 'Reality Sales', data: [6, 7, 8, 9, 10, 11, 12] },
//     ],
//     categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
// };
//
// const topProducts = [
//     { id: 1, name: 'Home Decor Range', pct: 45, color: T.blue },
//     { id: 2, name: 'Disney Princess Pink Bag 18"', pct: 29, color: T.green },
//     { id: 3, name: 'Bathroom Essentials', pct: 18, color: '#A78BFA' },
//     { id: 4, name: 'Apple Smartwatches', pct: 25, color: T.amber },
// ];
//
// /* ---------- charts ---------- */
// const baseGrid = {
//     grid: { borderColor: '#ECEFF3', strokeDashArray: 3, xaxis: { lines: { show: false } } },
//     dataLabels: { enabled: false },
//     tooltip: { theme: 'light' as const },
//     legend: {
//         fontSize: '12px', fontWeight: 600, labels: { colors: '#6B7280' },
//         itemMargin: { horizontal: 12, vertical: 8 }, markers: { radius: 6 },
//     },
// };
// const lineOpts = (colors: string[], cats: string[]) => ({
//     chart: { type: 'line', height: 240, toolbar: { show: false }, foreColor: '#6B7280' },
//     ...baseGrid, stroke: { curve: 'smooth' as const, width: 3 }, markers: { size: 3, strokeWidth: 0 },
//     colors, xaxis: { categories: cats, axisBorder: { color: '#E5E7EB' }, axisTicks: { color: '#E5E7EB' } },
// });
// const barOpts = (colors: string[], cats: string[], h = 280, stacked = false) => ({
//     chart: { type: 'bar', height: h, toolbar: { show: false }, foreColor: '#6B7280', stacked },
//     ...baseGrid,
//     plotOptions: { bar: { columnWidth: '40%', borderRadius: 8, borderRadiusApplication: 'end' as const } },
//     colors, xaxis: { categories: cats, axisBorder: { color: '#E5E7EB' }, axisTicks: { color: '#E5E7EB' } },
// });
// const areaOpts = (cats: string[]) => ({
//     chart: { type: 'area', height: 280, toolbar: { show: false }, foreColor: '#6B7280' },
//     ...baseGrid, stroke: { curve: 'smooth' as const, width: 3 }, colors: [T.blue, T.green],
//     fill: { type: 'gradient' as const, gradient: { shadeIntensity: 1, opacityFrom: .35, opacityTo: 0, stops: [0, 100] } },
//     xaxis: { categories: cats, axisBorder: { color: '#E5E7EB' }, axisTicks: { color: '#E5E7EB' } },
// });
//
// /* ---------- inline icons (sidebar) ---------- */
// const I = {
//     link: (c = '#fff') => (
//         <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//             <path d="M20 7L9 18l-5-5" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
//         </svg>
//     ),
//     pie: (c = T.indigo) => (
//         <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//             <path d="M12 3v9h9A9 9 0 0 0 12 3Z" fill={c} />
//             <path d="M11 4a8 8 0 1 0 9 9h-9V4Z" stroke={c} strokeWidth="2" fill="none" />
//         </svg>
//     ),
//     star: (c = '#94A3B8') => (
//         <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//             <path d="m12 3 2.7 5.47 6.03.88-4.36 4.25 1.03 6.01L12 17.77 6.6 19.6 7.63 13.6 3.27 9.35l6.03-.88L12 3Z" stroke={c} strokeWidth="2" strokeLinejoin="round" />
//         </svg>
//     ),
//     doc: (c = '#94A3B8') => (
//         <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//             <path d="M6 2h8l4 4v16H6V2Zm8 0v6h6" stroke={c} strokeWidth="2" strokeLinejoin="round" />
//         </svg>
//     ),
//     bag: (c = '#94A3B8') => (
//         <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//             <path d="M6 8h12l-1 12H7L6 8Z" stroke={c} strokeWidth="2" />
//             <path d="M9 8V6a3 3 0 0 1 6 0v2" stroke={c} strokeWidth="2" />
//         </svg>
//     ),
//     bars: (c = '#94A3B8') => (
//         <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//             <path d="M5 21V10M12 21V3M19 21v-7" stroke={c} strokeWidth="2" strokeLinecap="round" />
//         </svg>
//     ),
//     chat: (c = '#94A3B8') => (
//         <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//             <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" stroke={c} strokeWidth="2" strokeLinejoin="round" />
//         </svg>
//     ),
//     gear: (c = '#94A3B8') => (
//         <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//             <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke={c} strokeWidth="2" />
//             <path d="M19.4 15a1 1 0 0 0 .2 1.1l.1.1a2 2 0 0 1-1.4 3.4H17a1 1 0 0 0-1 .7l-.3 1a2 2 0 0 1-3.4 0l-.3-1a1 1 0 0 0-1-.7H7.7a2 2 0 0 1-1.4-3.4l.1-.1a1 1 0 0 0 .2-1.1l-.4-1a2 2 0 0 1 1.8-2.9h1a1 1 0 0 0 1-.7l.3-1a2 2 0 0 1 3.4 0l.3 1a1 1 0 0 0 1 .7h1a2 2 0 0 1 1.8 2.9l-.4 1Z" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//         </svg>
//     ),
//     out: (c = '#94A3B8') => (
//         <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//             <path d="M9 21H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//             <path d="M16 17l5-5-5-5" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//             <path d="M21 12H9" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//         </svg>
//     ),
//     kpiIcon: (bg = '#FF7582') => (
//         <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
//             <rect x="3" y="13" width="4" height="8" rx="1.5" fill={bg} />
//             <rect x="10" y="9" width="4" height="12" rx="1.5" fill={bg} />
//             <rect x="17" y="5" width="4" height="16" rx="1.5" fill={bg} />
//         </svg>
//     ),
// };
//
// /* ---------- page ---------- */
// export default function Page() {
//     const [navOpen, setNavOpen] = React.useState(false);
//
//     return (
//         <main>
//             <style jsx global>{`
//                 :root{ --sbw: 218px; }
//                 html,body{ height:100%; }
//                 body{
//                     margin:0; background:${T.bg}; color:#0F172A;
//                     font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
//                 }
//                 .layout{ min-height:100vh; }
//
//                 /* ===== SIDEBAR (fixed, non-scrolling) ===== */
//                 .sidebar{
//                     position:fixed; inset:0 auto 0 0; width:var(--sbw); height:100vh; overflow:hidden;
//                     background:#fff; border-right:1px solid ${T.border};
//                     padding:20px 18px 18px; display:flex; flex-direction:column;
//                     z-index:30; will-change:transform; transition:transform .25s ease;
//                 }
//                 .brand{
//                     display:flex; align-items:center; gap:12px; padding:2px 6px 12px;
//                 }
//                 .brand-badge{
//                     width:36px; height:36px; border-radius:10px;
//                     display:grid; place-items:center;
//                     background:${T.indigo}; color:#fff;
//                     box-shadow:0 2px 10px rgba(91,103,242,.25);
//                 }
//                 .brand-title{ font-size:20px; font-weight:900; letter-spacing:-0.2px; }
//
//                 .nav{ margin-top:10px; display:grid; gap:6px; }
//                 .nav-item{
//                     display:flex; align-items:center; gap:10px;
//                     height:44px; padding:0 12px; border-radius:12px;
//                     text-decoration:none; color:#475569; font-weight:700; font-size:14px;
//                     letter-spacing:-0.1px;
//                 }
//                 .nav-item .ico{ width:18px; height:18px; display:grid; place-items:center; }
//                 .nav-item .ico svg{ display:block; }
//                 .nav-item .pill{
//                     width:30px; height:30px; border-radius:999px; margin-right:6px;
//                     display:grid; place-items:center; background:#fff;
//                     box-shadow:0 1px 0 rgba(15,23,42,.06);
//                 }
//                 .nav-item.active{
//                     background:${T.indigo}; color:#fff;
//                     box-shadow:0 4px 14px rgba(91,103,242,.25);
//                 }
//                 .nav-item.active .text{ color:#fff; }
//                 .nav-item:not(.active){ color:#0F172A; }
//                 .nav-item:not(.active) .ico svg path{ stroke:#94A3B8; }
//
//                 /* Pro card pinned to bottom */
//                 .pro{
//                     margin-top:auto; padding:18px; border-radius:16px; color:#fff; text-align:center;
//                     background:
//                             radial-gradient(160px 110px at 22% 32%, rgba(255,255,255,.18), transparent 60%),
//                             radial-gradient(190px 130px at 78% 72%, rgba(255,255,255,.18), transparent 60%),
//                             linear-gradient(135deg, ${T.indigo} 0%, ${T.indigoDark} 100%);
//                     box-shadow: 0 8px 18px rgba(15,23,42,.08);
//                 }
//                 .pro-badge{
//                     width:46px; height:46px; border-radius:12px; margin:0 auto 8px;
//                     display:grid; place-items:center; background:#fff; color:${T.indigo};
//                     box-shadow:0 6px 18px rgba(0,0,0,.12);
//                 }
//                 .pro button{
//                     margin-top:10px; font-weight:900; border:none; background:#fff; color:${T.indigoDark};
//                     padding:8px 18px; border-radius:999px; cursor:pointer;
//                 }
//
//                 /* ===== CONTENT (scrolls) ===== */
//                 .content{
//                     margin-left:var(--sbw);
//                     min-height:100vh;
//                     padding:24px;
//                 }
//                 .topbar{
//                     position:sticky; top:0; z-index:10; /* keeps topbar visible a bit */
//                     background:linear-gradient(#F6F8FC 80%, rgba(246,248,252,0));
//                     display:flex; align-items:center; justify-content:space-between; margin-bottom:${T.gap}px; padding-top:6px;
//                 }
//                 .search{ display:flex; align-items:center; gap:8px; border:1px solid ${T.border}; background:#fff; padding:10px 12px; border-radius:999px; width:min(540px,48vw); }
//                 .select{ height:36px; border:1px solid ${T.border}; background:#fff; border-radius:10px; padding:0 10px; }
//
//                 .grid{ display:grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap:${T.gap}px; }
//                 .card{ background:#fff; border:1px solid ${T.border}; border-radius:${T.cardR}px; box-shadow:0 8px 18px rgba(15,23,42,.04); }
//                 .card-h{ padding:14px 16px 0; font-weight:800; font-size:15px; }
//                 .card-b{ padding:10px 16px 16px; }
//
//                 /* simple responsive column helpers */
//                 .col-12{ grid-column:span 12; }
//                 .col-8{ grid-column:span 8; }
//                 .col-4{ grid-column:span 4; }
//
//                 .kpi-wrap{ display:flex; gap:16px; flex-wrap:wrap; margin-top:6px; }
//                 .kpi{ width:calc(25% - 12px); min-width:180px; background:#fff; border-radius:16px; padding:16px; position:relative; overflow:hidden; }
//                 .kpi.kpi-sales{ background:${T.kpi.sales}; } .kpi.kpi-order{ background:${T.kpi.order}; }
//                 .kpi.kpi-product{ background:${T.kpi.product}; } .kpi.kpi-customer{ background:${T.kpi.customer}; }
//                 .kpi .ico{ width:34px; height:34px; border-radius:999px; background:#fff; display:grid; place-items:center; box-shadow:0 1px 0 rgba(15,23,42,.06); }
//                 .kpi .val{ font-weight:900; font-size:18px; margin-top:10px; line-height:1.1; }
//                 .kpi .lbl{ color:#6B7280; font-size:13px; margin-top:2px; }
//                 .kpi .sub{ color:${T.indigo}; font-size:12px; margin-top:8px; }
//
//                 .tp-head{ display:flex; gap:16px; font-size:12.5px; color:#98A2B3; font-weight:700; padding-bottom:6px; border-bottom:1px solid ${T.border}; margin-bottom:12px; }
//                 .progress-rail{ height:4px; border-radius:6px; background:#F0F2F8; }
//                 .progress-bar{ height:100%; border-radius:6px; }
//                 .pct-chip{ font-size:12px; font-weight:800; padding:1px 8px; border-radius:12px; border:1px solid currentColor; }
//
//                 .map-wrap{ position:relative; width:100%; height:260px; display:grid; place-items:center; overflow:hidden; }
//                 .map-wrap img{ max-width:100%; max-height:100%; filter: grayscale(1) brightness(1.06); opacity:.95; }
//                 .mark{ position:absolute; width:18px; height:12px; border-radius:999px; }
//                 .mark.us{ background:${T.amber}; left:24%; top:44%; }
//                 .mark.br{ background:${T.red};   left:29%; top:62%; }
//                 .mark.in{ background:${T.green}; left:61%; top:54%; }
//                 .mark.cn{ background:${T.purple};left:66.5%; top:46%; }
//
//                 .apexcharts-legend-text{ font-weight:600 !important; color:#6B7280 !important; }
//                 .apexcharts-gridline{ stroke:#ECEFF3 !important; }
//                 .apexcharts-tooltip.apexcharts-theme-light{ box-shadow:0 6px 16px rgba(15,23,42,.12) !important; border:1px solid #EAEFF4; }
//                 .apexcharts-xaxis text, .apexcharts-yaxis text{ fill:#6B7280 !important; font-weight:500; }
//
//                 /* ===== mobile sidebar / hamburger ===== */
//                 .hamburger{
//                     display:none; width:36px; height:36px; border-radius:10px; border:1px solid ${T.border};
//                     background:#fff; align-items:center; justify-content:center; cursor:pointer;
//                 }
//                 .closebtn{
//                     display:none; position:absolute; top:10px; right:10px; width:34px; height:34px; border-radius:10px;
//                     border:1px solid ${T.border}; background:#fff; cursor:pointer; align-items:center; justify-content:center;
//                 }
//                 .backdrop{
//                     display:none; position:fixed; inset:0; background:rgba(15,23,42,.35); backdrop-filter:blur(2px); z-index:20;
//                 }
//                 .backdrop.show{ display:block; }
//
//                 /* ====== breakpoints ====== */
//                 @media (max-width: 1280px){
//                     .col-8{ grid-column:span 12; }
//                     .col-4{ grid-column:span 6; }
//                 }
//                 @media (max-width: 900px){
//                     .grid{ gap:18px; }
//                     .col-4{ grid-column:span 12; }
//                     .kpi{ width:calc(50% - 8px); }
//                     .content{ padding:18px; }
//                 }
//                 @media (max-width: 640px){
//                     .topbar{ flex-direction:column; align-items:stretch; gap:12px; }
//                     .search{ width:100%; }
//                     .content{ padding:14px; }
//                     .kpi{ width:100%; }
//                 }
//                 /* collapse sidebar to drawer on <= 1024px */
//                 @media (max-width: 1024px){
//                     .hamburger{ display:inline-flex; }
//                     .content{ margin-left:0; }
//                     .sidebar{ transform:translateX(-100%); }
//                     .sidebar.open{ transform:translateX(0); }
//                     .closebtn{ display:inline-flex; }
//                 }
//             `}</style>
//
//             <div className="layout">
//                 {/* ===== SIDEBAR (fixed) ===== */}
//                 <aside className={`sidebar ${navOpen ? 'open' : ''}`}>
//                     <button className="closebtn" onClick={() => setNavOpen(false)} aria-label="Close sidebar">
//                         <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6 6 18" stroke="#0F172A" strokeWidth="2" strokeLinecap="round"/></svg>
//                     </button>
//
//                     {/* brand */}
//                     <div className="brand">
//                         <div className="brand-badge">{I.link()}</div>
//                         <div className="brand-title">Dabang</div>
//                     </div>
//
//                     {/* nav */}
//                     <nav className="nav">
//                         <a className="nav-item active" href="#">
//                             <span className="pill">{I.pie()}</span>
//                             <span className="text">Dashboard</span>
//                         </a>
//
//                         <a className="nav-item" href="#">
//                             <span className="ico">{I.star()}</span>
//                             <span className="text">Leaderboard</span>
//                         </a>
//
//                         <a className="nav-item" href="#">
//                             <span className="ico">{I.doc()}</span>
//                             <span className="text">order</span>
//                         </a>
//
//                         <a className="nav-item" href="#">
//                             <span className="ico">{I.bag()}</span>
//                             <span className="text">Products</span>
//                         </a>
//
//                         <a className="nav-item" href="#">
//                             <span className="ico">{I.bars()}</span>
//                             <span className="text">Sales Report</span>
//                         </a>
//
//                         <a className="nav-item" href="#">
//                             <span className="ico">{I.chat()}</span>
//                             <span className="text">Messages</span>
//                         </a>
//
//                         <a className="nav-item" href="#">
//                             <span className="ico">{I.gear()}</span>
//                             <span className="text">Settings</span>
//                         </a>
//
//                         <a className="nav-item" href="#">
//                             <span className="ico">{I.out()}</span>
//                             <span className="text">Sign Out</span>
//                         </a>
//                     </nav>
//
//                     {/* pro card pinned to bottom */}
//                     <div className="pro">
//                         <div className="pro-badge">
//                             <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//                                 <path d="M7 7a5 5 0 1 0 10 0" stroke={T.indigo} strokeWidth="2" strokeLinecap="round" />
//                                 <path d="M7 17a5 5 0 1 1 10 0" stroke={T.indigo} strokeWidth="2" strokeLinecap="round" />
//                             </svg>
//                         </div>
//                         <div style={{ fontWeight: 900, fontSize: 16 }}>Dabang Pro</div>
//                         <div style={{ fontSize: 12, opacity: .92, marginTop: 2 }}>Get access to all features on tetumbas</div>
//                         <button>Get Pro</button>
//                     </div>
//                 </aside>
//                 <div className={`backdrop ${navOpen ? 'show' : ''}`} onClick={() => setNavOpen(false)} />
//
//                 {/* ===== MAIN ===== */}
//                 <section className="content">
//                     {/* topbar */}
//                     <div className="topbar">
//                         <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
//                             <button className="hamburger" onClick={() => setNavOpen(true)} aria-label="Open sidebar">
//                                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M3 12h18M3 18h18" stroke="#0F172A" strokeWidth="2" strokeLinecap="round"/></svg>
//                             </button>
//                             <div style={{ fontSize: 24, fontWeight: 900 }}>Dashboard</div>
//                         </div>
//
//                         <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
//                             <div className="search">
//                                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="8" stroke="#94A3B8" strokeWidth="2" /><path d="M20 20L17 17" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" /></svg>
//                                 <input placeholder="Search here..." style={{ border: 'none', outline: 'none', flex: 1, fontSize: 14, background: 'transparent' }} />
//                             </div>
//                             <select className="select" defaultValue="Eng (US)"><option>Eng (US)</option><option>Eng (UK)</option></select>
//                             <div style={{ display: 'grid', placeItems: 'center', width: 36, height: 36, borderRadius: 999, background: '#fff', border: `1px solid ${T.border}` }}>
//                                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M18 8a6 6 0 1 0-12 0v5H4l2 3h12l2-3h-2V8z" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" /></svg>
//                             </div>
//                             <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
//                                 <img src="https://i.pravatar.cc/100?img=12" width={36} height={36} style={{ borderRadius: 999 }} alt="Avatar" />
//                                 <div><div style={{ fontSize: 13, fontWeight: 700 }}>Musfiq</div><div style={{ fontSize: 11, color: '#6B7280' }}>Admin</div></div>
//                             </div>
//                         </div>
//                     </div>
//
//                     {/* grid */}
//                     <div className="grid">
//                         {/* Row 1 */}
//                         <div className="card col-8">
//                             <div className="card-h">Today&apos;s Sales</div>
//                             <div className="card-b">
//                                 <div style={{ color: '#94A3B8', fontSize: 12.5 }}>Sales Summary</div>
//                                 <div className="kpi-wrap">
//                                     <div className="kpi kpi-sales"><div className="ico">{I.kpiIcon()}</div><div className="val">$1k</div><div className="lbl">Total Sales</div><div className="sub">+8% from yesterday</div></div>
//                                     <div className="kpi kpi-order"><div className="ico">{I.kpiIcon('#F8B84F')}</div><div className="val">300</div><div className="lbl">Total Order</div><div className="sub">+5% from yesterday</div></div>
//                                     <div className="kpi kpi-product"><div className="ico">{I.kpiIcon('#2FCB7B')}</div><div className="val">5</div><div className="lbl">Product Sold</div><div className="sub">+1.2% from yesterday</div></div>
//                                     <div className="kpi kpi-customer"><div className="ico">{I.kpiIcon('#8D79FF')}</div><div className="val">8</div><div className="lbl">New Customers</div><div className="sub">0.5% from yesterday</div></div>
//                                 </div>
//                             </div>
//                         </div>
//
//                         <div className="card col-4">
//                             <div className="card-h">Visitor Insights</div>
//                             <div className="card-b">
//                                 <Apex height={240} type="line" series={visitor.series} options={lineOpts([T.green, T.red, T.purple], visitor.categories)} />
//                             </div>
//                         </div>
//
//                         {/* Row 2 */}
//                         <div className="card col-4">
//                             <div className="card-h">Total Revenue</div>
//                             <div className="card-b">
//                                 <Apex height={280} type="bar" series={revenue.series} options={barOpts([T.blue, T.green], revenue.categories, 280)} />
//                             </div>
//                         </div>
//
//                         <div className="card col-4">
//                             <div className="card-h">Customer Satisfaction</div>
//                             <div className="card-b">
//                                 <Apex height={280} type="area" series={[
//                                     { name: 'Last Month', data: csat.series[1].data },
//                                     { name: 'This Month', data: csat.series[0].data },
//                                 ]} options={areaOpts(csat.categories)} />
//                             </div>
//                         </div>
//
//                         <div className="card col-4">
//                             <div className="card-h">Target vs Reality</div>
//                             <div className="card-b">
//                                 <Apex height={280} type="bar" series={tvr.series} options={{ ...barOpts([T.amber, T.green], tvr.categories, 280), legend: { show: false } }} />
//                                 <div style={{ display: 'grid', gap: 10, maxWidth: 180, marginLeft: 'auto', marginTop: 8 }}>
//                                     <Stat color={T.green} title="Reality Sales" sub="Global" value="8,823" />
//                                     <Stat color={T.amber} title="Target Sales" sub="Commercial" value="12,122" />
//                                 </div>
//                             </div>
//                         </div>
//
//                         {/* Row 3 */}
//                         <div className="card col-4">
//                             <div className="card-h">Top Products</div>
//                             <div className="card-b">
//                                 <div className="tp-head">
//                                     <div style={{ width: 28 }}>#</div>
//                                     <div style={{ flex: 1 }}>Name</div>
//                                     <div style={{ width: 160 }}>Popularity</div>
//                                     <div style={{ width: 64, textAlign: 'right' }}>Sales</div>
//                                 </div>
//
//                                 {topProducts.map((p, i) => (
//                                     <div key={p.id} style={{ display: 'grid', gap: 8, marginBottom: 12 }}>
//                                         <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
//                                             <div style={{ width: 28, color: '#6B7280' }}>{String(i + 1).padStart(2, '0')}</div>
//                                             <div style={{ flex: 1, lineHeight: 1.2 }}>{p.name}</div>
//
//                                             <div style={{ width: 160 }}>
//                                                 <div className="progress-rail">
//                                                     <div className="progress-bar" style={{ width: `${p.pct}%`, background: p.color }} />
//                                                 </div>
//                                             </div>
//
//                                             <div style={{ width: 64, textAlign: 'right' }}>
//                                                 <span className="pct-chip" style={{ color: p.color, background: hexToRgba(p.color, .10) }}>{p.pct}%</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//
//                         <div className="card col-4">
//                             <div className="card-h">Sales Mapping by Country</div>
//                             <div className="card-b">
//                                 <div className="map-wrap">
//                                     <img
//                                         alt="World map silhouette"
//                                         src="https://upload.wikimedia.org/wikipedia/commons/b/b3/PUBLIC_DOMAIN_NaturalEarth_z4_World_pseudo_mercator.svg"
//                                     />
//                                     <span className="mark us" />
//                                     <span className="mark br" />
//                                     <span className="mark in" />
//                                     <span className="mark cn" />
//                                 </div>
//                             </div>
//                         </div>
//
//                         <div className="card col-4">
//                             <div className="card-h">Volume vs Service Level</div>
//                             <div className="card-b">
//                                 <Apex
//                                     height={220}
//                                     type="bar"
//                                     series={[
//                                         { name: 'Services', data: [150, 210, 180, 230, 200, 260, 290] },
//                                         { name: 'Volume', data: [230, 50, 140, 180, 150, 220, 240] },
//                                     ]}
//                                     options={{ ...barOpts([T.green, T.blue], ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], 220, true), stroke: { width: 0 } }}
//                                 />
//                                 <div style={{ display: 'flex', gap: 26, justifyContent: 'center', paddingTop: 10, color: '#0F172A' }}>
//                                     <span><i style={{ display: 'inline-block', width: 9, height: 9, borderRadius: 999, background: T.blue, marginRight: 6 }} /> <b>Volume</b> <span style={{ color: '#6B7280' }}>1,135</span></span>
//                                     <span><i style={{ display: 'inline-block', width: 9, height: 9, borderRadius: 999, background: T.green, marginRight: 6 }} /> <b>Services</b> <span style={{ color: '#6B7280' }}>635</span></span>
//                                 </div>
//                             </div>
//                         </div>
//
//                     </div>
//                 </section>
//             </div>
//         </main>
//     );
// }
//
// function Stat({ color, title, sub, value }: {
//     color: string; title: string; sub: string; value: string
// }) {
//     return (
//         <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
//             <span style={{ width: 12, height: 12, borderRadius: 2, background: color, display: 'inline-block' }} />
//             <div style={{ flex: 1 }}>
//                 <div style={{ fontSize: 12 }}>{title}</div>
//                 <div style={{ fontSize: 12, color: '#6B7280' }}>{sub}</div>
//             </div>
//             <div style={{ fontWeight: 900 }}>{value}</div>
//         </div>
//     );
// }


'use client';
import * as React from 'react';
import dynamic from 'next/dynamic';
import LayoutStyles from '@/components/LayoutStyles';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import Kpis from '@/components/Kpis';
import TopProducts from '@/components/TopProducts';
import Stat from '@/components/Stat';
import { tokens as T } from '@/theme/tokens';
import { barOpts, lineOpts, areaOpts } from '@/lib/charts';
import { useDashboard } from '@/store/dashboard';

const Apex = dynamic(()=>import('react-apexcharts'), { ssr:false }) as any;

export default function Page() {
    const [open, setOpen] = React.useState(false);
    const { loadAll, revenue, visitors, csat, products } = useDashboard();
    React.useEffect(()=>{ loadAll(); },[loadAll]);

    return (
        <main>
            <LayoutStyles />
            <div className="layout">
                <Sidebar open={open} onClose={()=>setOpen(false)} />
                <section className="content">
                    <Topbar onOpen={()=>setOpen(true)} />

                    <div className="grid">
                        {/* Row 1 */}
                        <div className="card col-8">
                            <div className="card-h">Today&apos;s Sales</div>
                            <div className="card-b">
                                <div style={{color:'#94A3B8', fontSize:12.5}}>Sales Summary</div>
                                <Kpis data={undefined /* will use metrics once API wired */} />
                            </div>
                        </div>

                        <div className="card col-4">
                            <div className="card-h">Visitor Insights</div>
                            <div className="card-b">
                                <Apex
                                    height={240}
                                    type="line"
                                    series={visitors?.series ?? []}
                                    options={lineOpts([T.green, T.red, T.purple], visitors?.categories ?? [])}
                                />
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="card col-4">
                            <div className="card-h">Total Revenue</div>
                            <div className="card-b">
                                <Apex
                                    height={280}
                                    type="bar"
                                    series={revenue?.series ?? []}
                                    options={barOpts([T.blue, T.green], revenue?.categories ?? [], 280)}
                                />
                            </div>
                        </div>

                        <div className="card col-4">
                            <div className="card-h">Customer Satisfaction</div>
                            <div className="card-b">
                                <Apex
                                    height={280}
                                    type="area"
                                    series={[
                                        { name:'Last Month', data: (csat?.series?.[1]?.data) ?? [] },
                                        { name:'This Month', data: (csat?.series?.[0]?.data) ?? [] },
                                    ]}
                                    options={areaOpts(csat?.categories ?? [])}
                                />
                            </div>
                        </div>

                        <div className="card col-4">
                            <div className="card-h">Target vs Reality</div>
                            <div className="card-b">
                                <Apex
                                    height={280}
                                    type="bar"
                                    series={[
                                        { name:'Target Sales',  data:[8,9,10,11,12,13,15] },
                                        { name:'Reality Sales', data:[6,7, 8, 9,10,11,12] },
                                    ]}
                                    options={{ ...barOpts([T.amber, T.green], ['Jan','Feb','Mar','Apr','May','Jun','Jul'], 280), legend:{ show:false } }}
                                />
                                <div style={{display:'grid', gap:10, maxWidth:180, marginLeft:'auto', marginTop:8}}>
                                    <Stat color={T.green} title="Reality Sales" sub="Global" value="8,823" />
                                    <Stat color={T.amber} title="Target Sales"  sub="Commercial" value="12,122" />
                                </div>
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div className="card col-4">
                            <div className="card-h">Top Products</div>
                            <div className="card-b">
                                <TopProducts data={products} />
                            </div>
                        </div>

                        <div className="card col-4">
                            <div className="card-h">Sales Mapping by Country</div>
                            <div className="card-b">
                                <div className="map-wrap">
                                    <img alt="World map silhouette"
                                         src="https://upload.wikimedia.org/wikipedia/commons/b/b3/PUBLIC_DOMAIN_NaturalEarth_z4_World_pseudo_mercator.svg" />
                                    <span className="mark us" /><span className="mark br" />
                                    <span className="mark in" /><span className="mark cn" />
                                </div>
                            </div>
                        </div>

                        <div className="card col-4">
                            <div className="card-h">Volume vs Service Level</div>
                            <div className="card-b">
                                <Apex
                                    height={220}
                                    type="bar"
                                    series={[
                                        { name:'Services', data:[150,210,180,230,200,260,290] },
                                        { name:'Volume',   data:[230, 50,140,180,150,220,240] },
                                    ]}
                                    options={{ ...barOpts([T.green, T.blue], ['Jan','Feb','Mar','Apr','May','Jun','Jul'], 220, true), stroke:{ width:0 } }}
                                />
                                <div style={{display:'flex', gap:26, justifyContent:'center', paddingTop:10, color:'#0F172A'}}>
                                    <span><i style={{display:'inline-block', width:9, height:9, borderRadius:999, background:T.blue, marginRight:6}}/> <b>Volume</b> <span style={{color:'#6B7280'}}>1,135</span></span>
                                    <span><i style={{display:'inline-block', width:9, height:9, borderRadius:999, background:T.green, marginRight:6}}/> <b>Services</b> <span style={{color:'#6B7280'}}>635</span></span>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </main>
    );
}
