import Box from '@mui/material/Box';
import imageTest from '../../public/carTest.jpg';
import Image from 'next/image';
import styles from './carousel.module.css';
import noImagePlaceHolder from '../../public/no-image.jpg';
import { useState, useEffect } from 'react';




function carousel(props) {

    useEffect(() => {
        if (props.images === null) {
            setImageState(false);
            return;
        } else {
            setImageState(true);
            return;
        }
    })

    const [imageState, setImageState] = useState(false);



    return (<Box className={styles.carousel} sx={{
        '@media (min-width:1024px)': {
            width: '60%',
            // height: '400px',
            // flex: '10%',
            mr: '15px',
        },
        '@media (min-width:1440px)': {
            width: '70%',
            // flex: '70%',
            // mr: '15px',
        },
    }}>
        <Box className={styles.first__img} sx={{

            border: '1px solid black',
            borderRadius: '10px',
            mb: '10px',
            // p: '5px',
            overflow: 'hidden',
            '@media (min-width:1024px)': {
                width: '100%',
                height: '350'
            }

        }}>
            {imageState ?
                <Image
                    className={styles.large__img}
                    src={props.images[0]}
                    alt="Picture of the author"
                    width={500}
                    height={330}
                    layout="responsive"
                    objectFit='cover'


                /> : <Image
                    className={styles.large__img}
                    src={noImagePlaceHolder}
                    alt="Picture of the author"
                    width={200}
                    height={330}
                    layout="responsive"
                    objectFit='cover'


                />
            }
        </Box>
        {imageState ? <Box className={styles.thumb}>

            {props.images.map((image, i) => {
                return (
                    <Box className={styles.thumb__img} key={i}>
                        <Image
                            src={image}
                            alt="Picture of the author"
                            width={88}
                            height={68}
                            layout="fixed"
                            objectFit='cover'

                        />
                    </Box>
                )
            })}


        </Box> : null}
    </Box>)
}

export default carousel;