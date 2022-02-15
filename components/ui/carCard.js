import Box from '@mui/material/Box';
import Image from 'next/image';
import imageTest from '../../public/carTest.jpg';
import styles from './carCard.module.css';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import LoadingSkeleton from '../../components/ui/loading';
import Router from 'next/router';
import { useState, useEffect } from "react";




function carCard(props) {
    const [routerState, setRouterState] = useState('start');

    setTimeout(() => {
        setRouterState('finish')
    }, 2000)


    if (routerState === 'finish') {
        return (<Box className={styles.box} sx={{ mb: '16px', display: 'flex', flexDirection: 'column', border: 1, borderColor: 'grey', borderRadius: '15px', }}>

            <IconButton sx={{ mb: '16px', alignSelf: 'flex-end', color: 'grey', top: '12px', right: '2px' }}>
                <FavoriteIcon sx={{ color: 'blue' }} />
            </IconButton>

            <div>
                <Image
                    className={styles.image}
                    src={props.img}
                    alt="Picture of the author"
                    width={500}
                    height={400}
                    layout="responsive"
                    placeholder="blur"
                    blurDataURL={props.img}
                    priority={true}



                />
            </div>
            <Divider orientation="horizontal" flexItem sx={{ color: 'grey' }} />
            <Box sx={{ p: '16px' }} >
                <Typography variant="span" >2012</Typography>
                <Typography variant="h5" sx={{ mt: "-7px", mb: "-7px" }}>{props.marque} {props.model}</Typography>
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
                    <Button className={styles.button} variant="contained" >Consulter</Button>
                </Box>
            </Box>
        </Box>)
    } else {
        return (<LoadingSkeleton />)
    }
};

export default carCard;