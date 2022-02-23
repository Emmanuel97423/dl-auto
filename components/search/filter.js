import { Box, Button, Divider, Typography } from '@mui/material'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterListIcon from '@mui/icons-material/FilterList';
export default function filter() {
    return (
        <Box
            sx={{
                mt: 2,
                mb: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

            }}>

            <Button
                sx={{
                    mr: 4,
                }}><FilterAltIcon /><Typography variant="link">Filtre</Typography></Button>
            <Divider color="#c5cae9" orientation="vertical" variant="middle" flexItem />
            <Button
                sx={{
                    ml: 4,
                }}
            ><FilterListIcon /><Typography variant="link">Trie</Typography></Button>
            <Divider />
        </Box>
    )
}