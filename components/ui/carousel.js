import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import imageTest from '../../public/carTest.jpg';
import Image from 'next/image';
import styles from './carousel.module.css';
import noImagePlaceHolder from '../../public/no-image.jpg';
import { useState, useEffect } from 'react';
import StandardImageList from './imagesList'

// import { AiFillCloseCircle } from 'react-icons/ai';




function carousel(props) {


    const [open, setOpen] = useState(false);
    const [imageState, setImageState] = useState(false);
    const [imageThumbState, setImageThumbState] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        if (props.images) {
            setImageThumbState(true)
            setImageState(true);
            return;

        }
        else {

            setImageState(false);
            setImageThumbState(false)
            return;
        }
    }, [])





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

            border: '1px solid #bdbdbd',
            borderRadius: '10px',
            mb: '10px',
            // p: '5px',
            overflow: 'hidden',
            '@media (min-width:1024px)': {
                width: '100%',
                height: '350',

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
                    onClick={handleOpen}
                    placeholder="blur"
                    blurDataURL={props.images[0]}
                    priority={true}


                /> : <Image
                    className={styles.large__img}
                    src={noImagePlaceHolder}
                    alt="Picture of the author"
                    width={300}
                    height={330}
                    layout="fixed"
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
                            onClick={handleOpen}
                            placeholder="blur"
                            blurDataURL={image}
                            priority={true}


                        />
                    </Box>
                )
            })}


        </Box> : null
        }

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
                // overflowY: 'scroll',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '@media (min-width:1024px)': {
                    // ml: '20px',
                    width: '80%',

                },

            }}
        >

            {/* <AiFillCloseCircle /> */}
            <StandardImageList
                images={props.images}
                setOpen={setOpen}
            />
        </Modal>
    </Box>)
}

export default carousel;