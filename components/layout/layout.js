import Navbar from './navbar';
import styles from './layout.module.css';
import NavBarMobile from './navBarMobile';
import { Container, Box, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { style } from '@mui/system';
import ThreeBar from '@mui/icons-material/Dehaze';




export default function Layout({ children }) {

    const [isMobile, setIsMobile] = useState();
    const [activeMobileMenu, setActiveMobileMenu] = useState(false);
    const [drawer, setDrawer] = useState(false);

    function handleDrawer() {
        setDrawer(true)
    }

    useEffect(() => {
        setIsMobile(window.matchMedia("(max-width: 768px)").matches)
    });


    return (
        <Box className={style.layout}>
            <Box className={styles.nav__mobile}
                sx={{
                    '@media (min-width:1024px)': {
                        display: 'none'
                    },
                }}
            >
                <Box sx={{
                    margin: 1.2
                }}

                >
                    <Button
                        onClick={handleDrawer}
                    >
                        <ThreeBar sx={{
                            color: 'blue',
                            fontSize: '30px'
                        }}
                        />
                    </Button>


                </Box>
                <NavBarMobile
                    drawer={drawer}
                    setDrawer={setDrawer}
                />
            </Box>

            <Box
                className={styles.navbar}
                sx={{
                    '@media (max-width:768px)': {
                        display: 'none'
                    },
                }}
            >
                <Navbar />


            </Box>

            <Box>
                <main className={styles.main}>{children}</main>
            </Box>

        </Box>
    )
};

