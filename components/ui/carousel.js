import Box from '@mui/material/Box';
import imageTest from '../../public/carTest.jpg';
import Image from 'next/image';
import styles from './carousel.module.css'




function carousel() {
    return (<Box className={styles.carousel}>
        <Box className={styles.first__img}>
            <Image
                className={styles.large__img}
                src={imageTest}
                alt="Picture of the author"
                width={500}
                height={400}
                layout="responsive"

            />
        </Box>
        <Box className={styles.thumb}>
            <Box className={styles.thumb__img}>
                <Image

                    src={imageTest}
                    alt="Picture of the author"
                    width={68}
                    height={68}
                    layout="fixed"





                />
            </Box>
            <Box className={styles.thumb__img}>
                <Image

                    src={imageTest}
                    alt="Picture of the author"
                    width={68}
                    height={68}
                    layout="fixed"

                />
            </Box>
            <Box className={styles.thumb__img}>
                <Image

                    src={imageTest}
                    alt="Picture of the author"
                    width={68}
                    height={68}
                    layout="responsive"

                />
            </Box>
            <Box className={styles.thumb__img}>
                <Image

                    src={imageTest}
                    alt="Picture of the author"
                    width={68}
                    height={68}
                    layout="fixed"

                />
            </Box>
            <Box className={styles.thumb__img}>
                <Image

                    src={imageTest}
                    alt="Picture of the author"
                    width={68}
                    height={68}
                    layout="fixed"

                />
            </Box>
            <Box className={styles.thumb__img}>
                <Image

                    src={imageTest}
                    alt="Picture of the author"
                    width={68}
                    height={68}
                    layout="fixed"

                />
            </Box>
            <Box className={styles.thumb__img}>
                <Image

                    src={imageTest}
                    alt="Picture of the author"
                    width={68}
                    height={68}
                    layout="fixed"

                />
            </Box>
            <Box className={styles.thumb__img}>
                <Image

                    src={imageTest}
                    alt="Picture of the author"
                    width={68}
                    height={68}
                    layout="fixed"

                />
            </Box>

        </Box>
    </Box>)
}

export default carousel;