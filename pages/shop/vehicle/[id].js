import Image from 'next/image'
import { Container, Box, Typography, Divider, Button, Modal, } from "@mui/material";
import Carousel from '../../../components/ui/carousel';
import styles from './vehicle.module.css';
import { FaArrowLeft } from 'react-icons/fa';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { GrDeliver } from 'react-icons/gr';
import { useRouter } from 'next/router'
import Tabs from '../../../components/ui/tabs';
// import { VehicleFactory } from '../../../utils/classes/Vehicles';
import { Car } from '../../../utils/classes/Car';
import { Factory } from '../../../utils/factories/Factory.js';





function vehiclePage({ data }) {

    const router = useRouter()

    const car = new Car(data);
    // const priceTc = car.priceTtc

    const images = car.images


    return (
        <Container sx={{
            '@media (min-width:1024px)': {
                maxWidth: '80%',

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
                        pl: '8px',
                        cursor: 'pointer'
                    }} variant='link'
                        onClick={() => router.back()}
                    >Retour à la recherche</Typography>
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
                    <Carousel

                        images={images}
                    />


                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        '@media (min-width:1024px)': {
                            // ml: '20px',
                            width: '100%',
                            flex: '50%',
                        },

                        '@media (min-width:1440px)': {
                            // ml: '20px',
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

                            <Typography variant='h5'>{car.brand} {car.model}</Typography>
                            <Box sx={{
                                pb: '10px',
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center'
                            }}>

                                <Typography sx={{
                                    mr: '8px'
                                }} variant='spanGrey'>{car.fuel}</Typography>
                                <Divider orientation="vertical" variant="middle" flexItem sx={{
                                    color: '#707070'
                                }} />
                                <Typography sx={{
                                    ml: '8px',
                                    p: '2px'
                                }} variant='spanGrey'>{car.kilometrage} km</Typography>

                            </Box>
                        </Box>
                        <Divider orientation="horizontal" flexItem sx={{
                            color: '#707070',
                            '@media (min-width:1024px)': {
                                display: 'none'
                            },
                        }} />
                        <Box><h3>{car.priceTtc} €</h3></Box>
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
};
// export async function getStaticPaths() {
//     return {
//         paths: [
//             { params: { ... } }
//         ],
//         fallback: true // false or 'blocking'
//     };
// }
// This gets called on every request
export async function getServerSideProps({ params }) {


    // Fetch data from external API

    const res = await fetch(`${process.env.API_BASE_URL}/api/vehicles/vehicle/`, {
        method: 'POST',
        body: params.id

    })
    const data = await res.json()



    // Pass data to the page via props
    return { props: { data } }
};

export default vehiclePage;