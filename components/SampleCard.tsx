'use client';
import { Card, CardHeader, CardContent, Button, Chip, Stack, useTheme } from '@mui/material';

export default function SampleCard() {
    const t = useTheme();
    return (
        <Card>
            <CardHeader title="Theme OK?" />
            <CardContent>
                <Stack direction="row" spacing={1}>
                    <Chip label="chip" />
                    <Button variant="contained">primary</Button>
                    <div style={{ border:'1px dashed', padding:6, borderColor:t.palette.divider }}>
                        divider: {t.palette.divider}
                    </div>
                </Stack>
            </CardContent>
        </Card>
    );
}
