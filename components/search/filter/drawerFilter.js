import { Box, Drawer, Container, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ToogleCondition from './toggleCondition';
import RangePriceSlider from './filterByPriceSlider';
import SimpleAccordion from './filterByModel';


export default function drawerFilter(props) {
    console.log('props:', props)
    const toggleDrawer = () => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        props.setActiveDrawer(false);
    };
    return (

        <Box
        >
            <Drawer
                anchor='left'
                open={props.activeDrawer}
                onClose={toggleDrawer('left', false)}
                sx={{
                    width: 1,
                    // backgroundColor: 'red',
                    display: 'flex',
                }}
            >
                <Container sx={{ pt: 1 }}>
                    <Box sx={{
                        width: 300,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 6,
                        mt: 1,
                    }}><Typography variant='link'>Résultat du filtre</Typography><CloseIcon />
                    </Box>
                    <Box
                        sx={{
                            width: 1,

                            p: "15px 0 15px 0",
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',

                            // backgroundColor: '#c5cae9',
                            // m: "0 20px 0 20px",
                            // borderRadius: 10,
                        }}
                    >
                        <ToogleCondition />
                    </Box>
                    <Box
                        sx={{
                            mt: 2
                        }}>
                        <Typography variant="h6">Magasiner par prix (€)</Typography>
                        <Box>
                            <RangePriceSlider />
                        </Box>

                    </Box>
                    <Box sx={{
                        mt: 3,
                    }}>
                        <Typography variant="h6">Affinez votre recherche</Typography>
                        <SimpleAccordion />
                    </Box>
                </Container>

            </Drawer>
        </Box>
    )
}