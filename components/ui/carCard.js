import Box from '@mui/material/Box';
import Image from 'next/image';
import imageTest from '../../public/carTest.jpg';
import styles from './carCard.module.css';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

function carCard(props) {
    return (
        <Box >
            <Box className={styles.img} sx={{ display: 'flex', flexDirection: 'column', pb: '16px', pr: '16px', pl: '16px', border: 1, borderColor: 'grey', borderRadius: '15px', }}>

                <IconButton sx={{ alignSelf: 'flex-end', color: 'grey', top: '12px', right: '2px' }}>
                    <FavoriteIcon sx={{ color: 'blue' }} />
                </IconButton>

                <Image
                    src={imageTest}
                    alt="Picture of the author"

                />
                <Divider orientation="horizontal" flexItem sx={{ color: 'grey' }} />
                <Box>
                    <Typography variant="span">2012</Typography>
                    <Typography variant="h5" sx={{ mt: "-7px", mb: "-7px" }}>Volkswagen passat</Typography>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: '16px',

                    }}>
                        <Typography variant="span" sx={{ mr: '8px', p: '2px' }}>SEL</Typography>
                        <Divider orientation="vertical" variant="middle" flexItem sx={{ color: 'grey' }} />
                        <Typography variant="span" sx={{ ml: '8px', p: '2px' }}>50 000 km</Typography>
                    </Box>
                    <Divider orientation="horizontal" flexItem sx={{ color: 'grey' }} />
                    <Box className={styles.bottom} sx={{ mt: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography sx={{ color: '#353535', fontSize: '18px', fontWeight: '700' }}>11 988 €</Typography>
                        <Button variant="contained" sx={{ width: '70%', }}>Consulter</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
};

export default carCard;