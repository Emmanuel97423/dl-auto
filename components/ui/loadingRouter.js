import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Loading() {
    return (
        <Container sx={{
            width: '100%',
            height: '50vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        </Container>
    );
}