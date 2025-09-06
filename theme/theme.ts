// theme/theme.ts
'use client';
import { createTheme } from '@mui/material/styles';
import { tokens as t } from './tokens';

export const theme = createTheme({
    cssVariables: true,
    typography: {
        fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
        h5: { fontWeight: 900, letterSpacing: '-0.2px' },
        h6: { fontWeight: 800 },
        body2: { fontSize: 13.5 },
    },
    shape: { borderRadius: t.cardRadius },
    palette: {
        primary: { main: t.indigo },
        text: { primary: t.text, secondary: '#64748B' },
        divider: t.border,
        background: { default: t.bg, paper: '#fff' },
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    border: `1px solid ${t.border}`,
                    borderRadius: t.cardRadius, // 14px everywhere
                    boxShadow: '0 8px 18px rgba(15, 23, 42, 0.04)',
                },
            },
        },
        MuiCardHeader: {
            styleOverrides: {
                root: { padding: '14px 16px 0 16px' },
                title: { fontWeight: 800, fontSize: 15 },
            },
        },
        MuiCardContent: {
            styleOverrides: { root: { padding: '10px 16px 16px 16px' } },
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    paddingLeft: 12,
                    paddingRight: 12,
                    '&.Mui-selected': {
                        background: '#EEF0FF',
                        color: t.indigo,
                    },
                },
            },
        },
        MuiChip: {
            styleOverrides: { root: { height: 22, borderRadius: 10, fontWeight: 800 } },
        },
        MuiButton: { styleOverrides: { root: { borderRadius: 999 } } },
    },
});
