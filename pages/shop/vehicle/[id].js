import Image from 'next/image'
import { Container, Box, Typography, Divider, Button } from "@mui/material";
import Carousel from '../../../components/ui/carousel';
import styles from './vehicle.module.css';
import { FaArrowLeft } from 'react-icons/fa';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { GrDeliver } from 'react-icons/gr';

import Tabs from '../../../components/ui/tabs';

function vehiclePage() {
    return (
        <Container sx={{
            '@media (min-width:1024px)': {
                maxWidth: '90%'
            }
        }}>
            <Box className={styles.carousel__slide}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    mt: '20px',
                    mb: '20px'
                }}>
                    <FaArrowLeft className={styles.arrow} /><Typography sx={{
                        pl: '8px'
                    }} variant='link'>Retour à la recherche</Typography>
                </Box>


                <Box sx={{
                    '@media (min-width:1024px)': {
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'flex-start',
                    },
                    '@media (min-width:1440px)': {
                        display: 'flex',
                        // justifyContent: 'space-around',
                        alignItems: 'flex-start',
                    },
                }}>
                    <Carousel />

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        '@media (min-width:1440px)': {
                            width: '100%',
                            flex: '40%',
                        },
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start'
                        }}>
                            <Typography sx={{
                                pt: '10px'
                            }} variant='span'>2012</Typography>

                            <Typography variant='h5'>Palissade Hyndai</Typography>
                            <Box sx={{
                                pb: '10px',
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center'
                            }}>

                                <Typography sx={{
                                    mr: '8px'
                                }} variant='spanGrey'>Diesel</Typography>
                                <Divider orientation="vertical" variant="middle" flexItem sx={{
                                    color: '#707070'
                                }} />
                                <Typography sx={{
                                    ml: '8px',
                                    p: '2px'
                                }} variant='spanGrey'>7 625 km</Typography>

                            </Box>
                        </Box>
                        <Divider orientation="horizontal" flexItem sx={{
                            color: '#707070',
                            '@media (min-width:1024px)': {
                                display: 'none'
                            },
                        }} />
                        <Box><h3>39 621 €</h3></Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            borderRadius: '20px',
                            '@media (min-width:1024px)': {
                                order: 2,
                            },
                        }}>
                            <Button sx={{
                                borderRadius: '20px',
                                '@media (min-width:1024px)': {
                                    order: 1,
                                },
                            }} variant="contained" >Commencer</Button>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                mt: '15px',
                                '@media (min-width:1024px)': {
                                    order: 2,

                                },
                            }}>
                                <AiFillQuestionCircle size={30} className={styles.help__icon} />

                                <Typography sx={{
                                    ml: '10px',
                                    '@media (min-width:1024px)': {
                                        textAlign: 'center',
                                    },
                                }}>Prêt à acheter? Voici comment ça fonctionne.</Typography>
                            </Box>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            mt: '25px',
                            p: '10px',
                            backgroundColor: '#EAEAEA',
                            borderRadius: '5px',
                            borderRadius: '20px',
                            '@media (min-width:1024px)': {
                                order: 1,
                                mt: '0',
                                mb: '20px',
                            },

                        }}>
                            <GrDeliver size={20} /><Typography sx={{ ml: '5px' }} variant='spanBold'>395 €</Typography><Typography sx={{ ml: '5px' }}>Livraison vers</Typography><Typography variant="link" sx={{ ml: '5px' }}>97423</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ mt: '60px' }}>
                    <Typography variant="h2" sx={{ textAlign: 'center' }}>Les détails du véhicule</Typography>
                </Box>
                <Tabs />
            </Box>
        </Container>
    )
}

export default vehiclePage;