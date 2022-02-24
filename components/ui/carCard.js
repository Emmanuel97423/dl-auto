import Box from '@mui/material/Box';
import Image from 'next/image';
import Link from 'next/link'
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
    const [isACar, setIsACAr] = useState(false);
    function routerChange() {
        setRouterState('finish')
    }
    useEffect(() => {

        setTimeout(() => {
            routerChange()
        }, 3000)
    }, [])





    if (routerState === 'finish') {
        return (<Box className={styles.box} sx={{
            mb: '16px',
            display: 'flex',
            flexDirection: 'column',
            border: 1,
            borderColor: '#bdbdbd',
            borderRadius: '15px',
            overflow: 'hidden',
        }}>

            {/* <IconButton sx={{ mb: '16px', alignSelf: 'flex-end', color: 'grey', top: '12px', right: '2px' }}>
                <FavoriteIcon sx={{ color: '#757575' }} />
            </IconButton> */}

            <Link href={`/shop/vehicle/${props.id}`}>
                <Box sx={{
                    position: 'relative',
                    display: 'block',
                    cursor: 'pointer',

                }}>
                    <IconButton sx={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        mb: '16px',
                        alignSelf: 'flex-end',
                        color: 'grey',
                        zIndex: 2,
                        // top: '12px',
                        // left: '2px'
                        backgroundColor: '#eeeeee',
                        border: '1px solid #bdbdbd'
                    }}>
                        <FavoriteIcon sx={{ color: '#757575' }} />
                    </IconButton>
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
                </Box>
            </Link>
            <Divider orientation="horizontal" flexItem sx={{ color: '#bdbdbd' }} />
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
                <Divider orientation="horizontal" flexItem sx={{ color: '#bdbdbd' }} />
                <Box className={styles.bottom} sx={{ mt: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                    <Typography className={styles.price} sx={{
                        color: '#353535',
                        fontSize: '18px',
                        fontWeight: '700',
                        '@media (min-width:1024px)': {
                            fontSize: '19px',
                        }

                    }}>{props.price} €</Typography>
                    <Link href={`/shop/vehicle/${props.id}`}>
                        <Button className={styles.button} variant="contained" >Consulter</Button>
                    </Link>
                </Box>
            </Box>
        </Box>)
    } else {
        return (<LoadingSkeleton
            props={props}
        />)
    }
};

export default carCard;