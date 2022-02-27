// import * as React from 'react';
import { Box, Slider, TextField, Typography } from '@mui/material';
import { useState } from 'react'


function valuetext(value) {
    return `${value}€`;
}

export default function RangeSlider() {
    const [value, setValue] = useState([5, 80]);
    const [maxRange, setMaxRange] = useState(false)



    const handleChange = (event, newValue, activeThumb) => {

        setValue(newValue);
        if (newValue[1] === 100) {
            setMaxRange(true)
            console.log('maxRange:', maxRange)
        } else {
            setMaxRange(false)
            console.log('maxRange:', maxRange)
        }

    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: 1
        }}>
            {/* <Box sx={{
                mt: 3,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',

            }}>
                <TextField id="outlined-uncontrolled"
                    label="Prix Minimum"
                    defaultValue="5000"
                    value={value + " €"}
                    onChange={minPriceChange}
                    sx={{
                        flex: .45
                    }} />
                <TextField id="outlined-uncontrolled"
                    label="Prix Maximum"
                    defaultValue="2000000"
                    value={value[1] + " €"}
                    sx={{
                        flex: .45
                    }}
                />

            </Box> */}
            <Box sx={{
                width: .9,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'

            }}>
                <Box sx={{
                    width: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mt: 2
                }}>
                    <Typography>{value[0]}K</Typography><Typography>{maxRange ? '+' : null} {value[1]}K</Typography>
                </Box>
                <Slider
                    getAriaLabel={() => 'Fourchette de prix'}
                    value={value}
                    onChange={handleChange}
                    // valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    max={100}
                    min={0}
                    marks
                    step={10}
                />
            </Box>
        </Box>
    );
}