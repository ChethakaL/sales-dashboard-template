// theme/tokens.ts
export const tokens = {
    bg: '#F6F8FC',
    text: '#0F172A',
    border: '#EEF2F7',
    cardRadius: 14, // small, like the screenshot

    // Brand / UI
    indigo: '#5B67F2',
    indigoDark: '#4853E3',

    // Charts (tuned to the screenshot)
    blue: '#2E89FF',
    green: '#22C55E',
    purple: '#7C5CFF',
    red: '#FF5C65',
    amber: '#F8C146',

    // KPI pill tints
    kpi: {
        sales:    '#FFE5EA',
        order:    '#FFEFCF',
        product:  '#E9F7EE',
        customer: '#EFE8FF',
    },
} as const;

export type Tokens = typeof tokens;
