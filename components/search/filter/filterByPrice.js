// import * as React from 'react';
import { Box, Slider, TextField } from '@mui/material';
import { useState } from 'react'


function valuetext(value) {
    return `${value}°C`;
}
const minDistance = 10;
export default function RangeSlider() {
    const [value, setValue] = useState([10000, 500000]);
    const [minPrice, setMinPrice] = useState()


    const handleChange = (event, newValue, activeThumb) => {
        console.log('event:', event.target.value)
        console.log('newValue:', newValue)
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        } else {
            setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        }

        // setValue(newValue);

    };
    const minPriceChange = (event) => {

        setMinPrice(event.target.value)


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
                    defaultValue="20000"
                    value={value[0] + " €"}
                    onChange={handleChange}
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
                    max={2000000}
                    min={0}
                    marks
                    step={10000}
                />
            </Box>
        </Box>
    );
}