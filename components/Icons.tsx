export const I = {
    link:(c='#fff') => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 7L9 18l-5-5" stroke={c} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>),
    pie:(c='#5B67F2') => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 3v9h9A9 9 0 0 0 12 3Z" fill={c}/><path d="M11 4a8 8 0 1 0 9 9h-9V4Z" stroke={c} strokeWidth="2" fill="none"/></svg>),
    star:(c='#94A3B8') => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="m12 3 2.7 5.47 6.03.88-4.36 4.25 1.03 6.01L12 17.77 6.6 19.6 7.63 13.6 3.27 9.35l6.03-.88L12 3Z" stroke={c} strokeWidth="2" strokeLinejoin="round"/></svg>),
    doc:(c='#94A3B8') => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 2h8l4 4v16H6V2Zm8 0v6h6" stroke={c} strokeWidth="2" strokeLinejoin="round"/></svg>),
    bag:(c='#94A3B8') => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 8h12l-1 12H7L6 8Z" stroke={c} strokeWidth="2"/><path d="M9 8V6a3 3 0 0 1 6 0v2" stroke={c} strokeWidth="2"/></svg>),
    bars:(c='#94A3B8') => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 21V10M12 21V3M19 21v-7" stroke={c} strokeWidth="2" strokeLinecap="round"/></svg>),
    chat:(c='#94A3B8') => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z" stroke={c} strokeWidth="2" strokeLinejoin="round"/></svg>),
    gear:(c='#94A3B8') => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke={c} strokeWidth="2"/><path d="M19.4 15a1 1 0 0 0 .2 1.1l.1.1a2 2 0 0 1-1.4 3.4H17a1 1 0 0 0-1 .7l-.3 1a2 2 0 0 1-3.4 0l-.3-1a1 1 0 0 0-1-.7H7.7a2 2 0 0 1-1.4-3.4l.1-.1a1 1 0 0 0 .2-1.1l-.4-1a2 2 0 0 1 1.8-2.9h1a1 1 0 0 0 1-.7l.3-1a2 2 0 0 1 3.4 0l.3 1a1 1 0 0 0 1 .7h1a2 2 0 0 1 1.8 2.9l-.4 1Z" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>),
    out:(c='#94A3B8') => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 21H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 17l5-5-5-5" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 12H9" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>),
    kpiIcon:(bg='#FF7582') => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="13" width="4" height="8" rx="1.5" fill={bg}/>
            <rect x="10" y="9" width="4" height="12" rx="1.5" fill={bg}/>
            <rect x="17" y="5" width="4" height="16" rx="1.5" fill={bg}/>
        </svg>
    ),
};
