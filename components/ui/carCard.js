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
    console.log('props:', props.kilometrage)
    return (
        <Box >
            <Box className={styles.img} sx={{ mb: '16px', display: 'flex', flexDirection: 'column', border: 1, borderColor: 'grey', borderRadius: '15px', }}>

                <IconButton sx={{ mb: '16px', alignSelf: 'flex-end', color: 'grey', top: '12px', right: '2px' }}>
                    <FavoriteIcon sx={{ color: 'blue' }} />
                </IconButton>

                <Image
                    src={props.img}
                    alt="Picture of the author"
                    width={500}
                    height={400}
                    layout="responsive"


                />
                <Divider orientation="horizontal" flexItem sx={{ color: 'grey' }} />
                <Box sx={{ p: '16px' }} >
                    <Typography variant="span" >2012</Typography>
                    <Typography variant="h5" sx={{ mt: "-7px", mb: "-7px" }}>{props.marque}</Typography>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: '16px',
                    }}>
                        <Typography variant="span" sx={{ mr: '8px', p: '2px' }}>{props.carburant}</Typography>
                        <Divider orientation="vertical" variant="middle" flexItem sx={{ color: 'grey' }} />
                        <Typography variant="span" sx={{ ml: '8px', p: '2px' }}>{props.kilometrage} km</Typography>
                    </Box>
                    <Divider orientation="horizontal" flexItem sx={{ color: 'grey' }} />
                    <Box className={styles.bottom} sx={{ mt: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                        <Typography className={styles.price} sx={{ color: '#353535', fontSize: '18px', fontWeight: '700' }}>{props.price} €</Typography>
                        <Button variant="contained" sx={{ width: '65%', }}>Consulter</Button>
                    </Box>
                </Box>
            </Box >
        </Box >
    )
};

export default carCard;