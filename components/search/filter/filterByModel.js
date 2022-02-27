import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button } from '@mui/material';

const accordionTitle = ['Marque & modèle', 'Type de véhicule', 'Années & kilometrage', 'Carburant', 'Motorisation'];
const brands = ['Audi', 'Alpha Roméo', 'BMW', 'Cadillac', 'Chevrolet', 'Chrysler', 'Dodge', 'Fiat', 'Ford', 'GMC', 'Honda', 'Hummer', 'Hyundai', 'Infinity', 'Jaguar', 'Jeep', 'Kia', 'Land Rover']

export default function SimpleAccordion() {
    return (
        <Box sx={{
            mt: 2
        }}>
            <Accordion sx={{
                boxShadow: 'none',
                p: 0,
            }}>
                <AccordionSummary
                    sx={{

                        p: 0,
                    }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Marque & modèle</Typography>
                </AccordionSummary>
                <AccordionDetails
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        p: 0,
                    }}
                >
                    <Typography variant='h6'>
                        Marque
                    </Typography>
                    {brands.map((brand) => {
                        return (<Button variant="outlined"
                            sx={{
                                mt: 2,
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                            }}
                        ><Typography variant="link">{brand}</Typography></Button>)

                    })}
                </AccordionDetails>
            </Accordion>

        </Box>
    );
}
