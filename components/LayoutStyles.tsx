'use client';
import { tokens as T } from '@/theme/tokens';

export default function LayoutStyles() {
    return (
        <style jsx global>{`
            html,body{ height:100%; }
            body{
                margin:0; background:${T.bg}; color:#0F172A;
                font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
            }
            .layout{ min-height:100vh; }

            /* ===== SIDEBAR (fixed, non-scrolling) ===== */
            .sidebar{
                position:fixed; inset:0 auto 0 0; width:218px; height:100vh; overflow:hidden;
                background:#fff; border-right:1px solid ${T.border};
                padding:20px 18px 18px; display:flex; flex-direction:column;
                z-index:30; will-change:transform; transition:transform .25s ease;
            }
            .brand{ display:flex; align-items:center; gap:12px; padding:2px 6px 12px; }
            .brand-badge{
                width:36px; height:36px; border-radius:10px; display:grid; place-items:center;
                background:${T.indigo}; color:#fff; box-shadow:0 2px 10px rgba(91,103,242,.25);
            }
            .brand-title{ font-size:20px; font-weight:900; letter-spacing:-0.2px; }

            .nav{ margin-top:10px; display:grid; gap:6px; }
            .nav-item{
                display:flex; align-items:center; gap:10px; height:44px; padding:0 12px; border-radius:12px;
                text-decoration:none; color:#475569; font-weight:700; font-size:14px; letter-spacing:-0.1px;
            }
            .nav-item .ico{ width:18px; height:18px; display:grid; place-items:center; }
            .nav-item .ico svg{ display:block; }
            .nav-item .pill{
                width:30px; height:30px; border-radius:999px; margin-right:6px; display:grid; place-items:center; background:#fff;
                box-shadow:0 1px 0 rgba(15,23,42,.06);
            }
            .nav-item.active{ background:${T.indigo}; color:#fff; box-shadow:0 4px 14px rgba(91,103,242,.25); }
            .nav-item.active .text{ color:#fff; }
            .nav-item:not(.active){ color:#0F172A; }
            .nav-item:not(.active) .ico svg path{ stroke:#94A3B8; }

            .pro{
                margin-top:auto; padding:18px; border-radius:16px; color:#fff; text-align:center;
                background:
                        radial-gradient(160px 110px at 22% 32%, rgba(255,255,255,.18), transparent 60%),
                        radial-gradient(190px 130px at 78% 72%, rgba(255,255,255,.18), transparent 60%),
                        linear-gradient(135deg, ${T.indigo} 0%, ${T.indigo} 100%);
                box-shadow: 0 8px 18px rgba(15,23,42,.08);
            }
            .pro-badge{
                width:46px; height:46px; border-radius:12px; margin:0 auto 8px;
                display:grid; place-items:center; background:#fff; color:${T.indigo};
                box-shadow:0 6px 18px rgba(0,0,0,.12);
            }
            .pro button{
                margin-top:10px; font-weight:900; border:none; background:#fff; color:#4853E3;
                padding:8px 18px; border-radius:999px; cursor:pointer;
            }

            /* ===== CONTENT (scrolls) ===== */
            .content{ margin-left:218px; min-height:100vh; padding:24px; }
            .topbar{
                position:sticky; top:0; z-index:10;
                background:linear-gradient(#F6F8FC 80%, rgba(246,248,252,0));
                display:flex; align-items:center; justify-content:space-between; margin-bottom:24px; padding-top:6px;
            }
            .search{ display:flex; align-items:center; gap:8px; border:1px solid ${T.border}; background:#fff; padding:10px 12px; border-radius:999px; width:min(540px,48vw); }
            .select{ height:36px; border:1px solid ${T.border}; background:#fff; border-radius:10px; padding:0 10px; }

            .grid{ display:grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap:24px; }
            .card{ background:#fff; border:1px solid ${T.border}; border-radius:14px; box-shadow:0 8px 18px rgba(15,23,42,.04); }
            .card-h{ padding:14px 16px 0; font-weight:800; font-size:15px; }
            .card-b{ padding:10px 16px 16px; }

            .col-12{ grid-column:span 12; }
            .col-8{ grid-column:span 8; }
            .col-4{ grid-column:span 4; }

            .kpi-wrap{ display:flex; gap:16px; flex-wrap:wrap; margin-top:6px; }
            .kpi{ width:calc(25% - 12px); min-width:180px; background:#fff; border-radius:16px; padding:16px; position:relative; overflow:hidden; }
            .kpi.kpi-sales{ background:${T.kpi.sales}; } .kpi.kpi-order{ background:${T.kpi.order}; }
            .kpi.kpi-product{ background:${T.kpi.product}; } .kpi.kpi-customer{ background:${T.kpi.customer}; }
            .kpi .ico{ width:34px; height:34px; border-radius:999px; background:#fff; display:grid; place-items:center; box-shadow:0 1px 0 rgba(15,23,42,.06); }
            .kpi .val{ font-weight:900; font-size:18px; margin-top:10px; line-height:1.1; }
            .kpi .lbl{ color:#6B7280; font-size:13px; margin-top:2px; }
            .kpi .sub{ color:${T.indigo}; font-size:12px; margin-top:8px; }

            .tp-head{ display:flex; gap:16px; font-size:12.5px; color:#98A2B3; font-weight:700; padding-bottom:6px; border-bottom:1px solid ${T.border}; margin-bottom:12px; }
            .progress-rail{ height:4px; border-radius:6px; background:#F0F2F8; }
            .progress-bar{ height:100%; border-radius:6px; }
            .pct-chip{ font-size:12px; font-weight:800; padding:1px 8px; border-radius:12px; border:1px solid currentColor; }

            .map-wrap{ position:relative; width:100%; height:260px; display:grid; place-items:center; overflow:hidden; }
            .map-wrap img{ max-width:100%; max-height:100%; filter: grayscale(1) brightness(1.06); opacity:.95; }
            .mark{ position:absolute; width:18px; height:12px; border-radius:999px; }
            .mark.us{ background:${T.amber}; left:24%; top:44%; }
            .mark.br{ background:${T.red};   left:29%; top:62%; }
            .mark.in{ background:${T.green}; left:61%; top:54%; }
            .mark.cn{ background:${T.purple};left:66.5%; top:46%; }

            .apexcharts-legend-text{ font-weight:600 !important; color:#6B7280 !important; }
            .apexcharts-gridline{ stroke:#ECEFF3 !important; }
            .apexcharts-tooltip.apexcharts-theme-light{ box-shadow:0 6px 16px rgba(15,23,42,.12) !important; border:1px solid #EAEFF4; }
            .apexcharts-xaxis text, .apexcharts-yaxis text{ fill:#6B7280 !important; font-weight:500; }

            .hamburger{
                display:none; width:36px; height:36px; border-radius:10px; border:1px solid ${T.border};
                background:#fff; align-items:center; justify-content:center; cursor:pointer;
            }
            .closebtn{
                display:none; position:absolute; top:10px; right:10px; width:34px; height:34px; border-radius:10px;
                border:1px solid ${T.border}; background:#fff; cursor:pointer; align-items:center; justify-content:center;
            }
            .backdrop{ display:none; position:fixed; inset:0; background:rgba(15,23,42,.35); backdrop-filter:blur(2px); z-index:20; }
            .backdrop.show{ display:block; }

            @media (max-width: 1280px){
                .col-8{ grid-column:span 12; }
                .col-4{ grid-column:span 6; }
            }
            @media (max-width: 900px){
                .grid{ gap:18px; }
                .col-4{ grid-column:span 12; }
                .kpi{ width:calc(50% - 8px); }
                .content{ padding:18px; }
            }
            @media (max-width: 640px){
                .topbar{ flex-direction:column; align-items:stretch; gap:12px; }
                .search{ width:100%; }
                .content{ padding:14px; }
                .kpi{ width:100%; }
            }
            @media (max-width: 1024px){
                .hamburger{ display:inline-flex; }
                .content{ margin-left:0; }
                .sidebar{ transform:translateX(-100%); }
                .sidebar.open{ transform:translateX(0); }
                .closebtn{ display:inline-flex; }
            }
        `}</style>
    );
}
