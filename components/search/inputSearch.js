import { Box, TextField, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

export default function searchInput() {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': {
                    mt: 2,
                    width: 1,

                },
                display: 'flex',
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label="Rechercher marque, modele... " variant="outlined" sx={{
                borderRadius: '4px 0 0 4px',
            }} />

            <Button
                sx={{
                    width: '100%',
                    flex: '10%',
                    backgroundColor: 'blue',
                    borderRadius: '0 4px 4px 0',
                }}
            >
                <SearchIcon></SearchIcon>
            </Button>

        </Box>
    )
}