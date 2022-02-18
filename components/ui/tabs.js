import PropTypes from 'prop-types';
import imgTest from '/public/img/services/car-painting.png';
import Image from 'next/image'
import { Box, Typography, Tabs, Tab } from "@mui/material";
import styles from './tabs.module.css';
import { useState } from 'react';



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </Box>
    );
};
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}



function tabs() {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (

        <Box >
            <Box sx={{
                pt: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {/* <Typography variant='link' sx={{ mr: '20px' }}>Aperçu</Typography><Typography variant='link' sx={{ color: 'black' }}>Caractéristiques</Typography> */}
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab sx={{
                        fontSize: '16px',
                        fontWeight: '700',
                        textTransform: 'Capitalize'
                    }} label="Aperçu" {...a11yProps(0)} />
                    <Tab sx={{
                        fontSize: '16px',
                        fontWeight: '700',
                        textTransform: 'Capitalize'
                    }}
                        label="Caractéristiques" {...a11yProps(1)} />

                </Tabs>
            </Box>
            <TabPanel sx={{ display: 'flex', }} value={value} index={0}>
                <Box className={styles.features} sx={{
                    pt: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}>

                    <Box sx={{
                        width: '100%',
                        flex: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}>
                        <Image
                            src={imgTest}
                            alt="Picture of the author"
                            width={64}
                            height={64}
                            layout="fixed"
                        />
                        <Typography variant='link' sx={{
                            mt: '20px'
                        }}>Couleur extèrieure</Typography>
                        <p>Argent</p>
                    </Box>
                    <Box sx={{
                        width: '100%',
                        flex: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}>
                        <Image
                            src={imgTest}
                            alt="Picture of the author"
                            width={64}
                            height={64}
                            layout="fixed"
                        />
                        <Typography variant='link' sx={{
                            mt: '20px'
                        }}>Couleur extèrieure</Typography>
                        <p>Argent</p>
                    </Box>
                    <Box sx={{
                        width: '100%',
                        flex: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}>
                        <Image
                            src={imgTest}
                            alt="Picture of the author"
                            width={64}
                            height={64}
                            layout="fixed"
                        />
                        <Typography variant='link' sx={{
                            mt: '20px'
                        }}>Couleur extèrieure</Typography>
                        <p>Argent</p>
                    </Box>
                    <Box sx={{
                        width: '100%',
                        flex: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}>
                        <Image
                            src={imgTest}
                            alt="Picture of the author"
                            width={64}
                            height={64}
                            layout="fixed"
                        />
                        <Typography variant='link' sx={{
                            mt: '20px'
                        }}>Couleur extèrieure</Typography>
                        <p>Argent</p>
                    </Box>


                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Box className={styles.features} sx={{ pt: '50px' }}>
                    <Typography variant='h6'>Sécurité</Typography>
                    <ul className={styles.ul}>
                        <li>Caméra de recul</li>
                        <li>Assistance au freinage</li>
                        <li>Verrous de sécurité pour enfants</li>
                        <li>Régulateur de vitesse</li>
                    </ul>
                </Box>
            </TabPanel>

        </Box>

    );
};
export default tabs;