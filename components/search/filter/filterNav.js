import { Box, Button, Divider, Typography, Drawer } from '@mui/material'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterListIcon from '@mui/icons-material/FilterList';
import DrawerFilter from './drawerFilter'

import { useEffect, useState } from 'react'

export default function filter(props) {


    function toggleDrawer() {
        setActiveDrawer(true)
    }
    const [activeDrawer, setActiveDrawer] = useState(false);




    return (
        <Box
            sx={{
                mt: 0.5,
                mb: 0.5,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

            }}>

            <Button
                onClick={toggleDrawer}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mr: 4,
                }}>
                <FilterAltIcon />
                <Typography sx={{
                    ml: 1
                }} variant="link">Filtre
                </Typography>
            </Button>
            <Divider color="#e0e0e0" orientation="vertical" variant="middle" flexItem />
            <Button
                sx={{
                    ml: 4,
                }}
            >
                <FilterListIcon />
                <Typography
                    sx={{
                        ml: 1
                    }}
                    variant="link">Trie</Typography>
            </Button>
            <Divider />

            <DrawerFilter
                activeDrawer={activeDrawer}
                setActiveDrawer={setActiveDrawer}
                filterCondition={props.filterCondition}
                handleCondition={props.handleCondition}
                handleFilterPrice={props.handleFilterPrice}
            />

        </Box>
    )
}