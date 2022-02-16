import { Container } from "@mui/material";
import Box from '@mui/material/Box';
import Carousel from '../../../components/ui/carousel';
import styles from './vehicle.module.css';
import Typography from '@mui/material/Typography';

function vehiclePage() {
    return (
        <Container>
            <Box className={styles.carousel__slide}>
                <Box>
                    <Typography sx={{ pt: '20px' }} variant='link'>Retour à la recherche</Typography>
                </Box>


                <Carousel />

                <Box>
                    <h4>2021</h4>
                    <h2>Palissade Hyndai</h2>
                    <Box>
                        <Box>SE</Box>
                        <Box>7 625 km</Box>
                    </Box>
                </Box>
                <Box><h3>39 621 €</h3></Box>
                <Box>
                    <button>Commencer</button>
                    <Box>
                        Icon
                        <p> Prêt à acheter? Voici comment ça fonctionne</p>
                    </Box>
                </Box>
                <Box>
                    <h2>Les détails du véhicule</h2>
                </Box>
                <Box><p>Aperçu</p><p>Caractéristiques</p></Box>
                <Box className={styles.features}>
                    <Box>
                        IMAGES
                        <p>Couleur extèrieure</p>
                        <p>Argent</p>
                    </Box>
                    <Box>
                        IMAGES
                        <p>Couleur extèrieure</p>
                        <p>Argent</p>
                    </Box>
                    <Box>
                        IMAGES
                        <p>Couleur extèrieure</p>
                        <p>Argent</p>
                    </Box>
                    <Box>
                        IMAGES
                        <p>Couleur extèrieure</p>
                        <p>Argent</p>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default vehiclePage;