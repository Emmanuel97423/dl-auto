// import * as React from 'react';
import { Box, Slider, TextField } from '@mui/material';
import { useState } from 'react'


function valuetext(value) {
    return `${value}°C`;
}

export default function RangeSlider() {
    const [value, setValue] = useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: 1
        }}>
            <Box sx={{
                mt: 3,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',

            }}>
                <TextField id="outlined-uncontrolled"
                    label="Prix Minimum"
                    defaultValue={value}
                    value={value}
                    sx={{
                        flex: .45
                    }} />
                <TextField id="outlined-uncontrolled"
                    label="Prix Minimum"
                    defaultValue="1000"
                    sx={{
                        flex: .45
                    }}
                />

            </Box>
            <Box sx={{
                width: .9,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'

            }}>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                />
            </Box>
        </Box>
    );
}