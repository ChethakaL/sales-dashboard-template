'use client';
import { I } from './Icons';
import { tokens as T } from '@/theme/tokens';

export default function Sidebar({ open, onClose }:{ open:boolean; onClose:()=>void }) {
    return (
        <>
            <aside className={`sidebar ${open ? 'open' : ''}`}>
                <button className="closebtn" onClick={onClose} aria-label="Close sidebar">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6 6 18" stroke="#0F172A" strokeWidth="2" strokeLinecap="round"/></svg>
                </button>

                <div className="brand">
                    <div className="brand-badge">{I.link()}</div>
                    <div className="brand-title">Dabang</div>
                </div>

                <nav className="nav">
                    <a className="nav-item active" href="#"><span className="pill">{I.pie()}</span><span className="text">Dashboard</span></a>
                    <a className="nav-item" href="#"><span className="ico">{I.star()}</span><span className="text">Leaderboard</span></a>
                    <a className="nav-item" href="#"><span className="ico">{I.doc()}</span><span className="text">order</span></a>
                    <a className="nav-item" href="#"><span className="ico">{I.bag()}</span><span className="text">Products</span></a>
                    <a className="nav-item" href="#"><span className="ico">{I.bars()}</span><span className="text">Sales Report</span></a>
                    <a className="nav-item" href="#"><span className="ico">{I.chat()}</span><span className="text">Messages</span></a>
                    <a className="nav-item" href="#"><span className="ico">{I.gear()}</span><span className="text">Settings</span></a>
                    <a className="nav-item" href="#"><span className="ico">{I.out()}</span><span className="text">Sign Out</span></a>
                </nav>

                <div className="pro">
                    <div className="pro-badge">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M7 7a5 5 0 1 0 10 0" stroke={T.indigo} strokeWidth="2" strokeLinecap="round"/>
                            <path d="M7 17a5 5 0 1 1 10 0" stroke={T.indigo} strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </div>
                    <div style={{fontWeight:900, fontSize:16}}>Dabang Pro</div>
                    <div style={{fontSize:12, opacity:.92, marginTop:2}}>Get access to all features on tetumbas</div>
                    <button>Get Pro</button>
                </div>
            </aside>

            <div className={`backdrop ${open ? 'show' : ''}`} onClick={onClose} />
        </>
    );
}
