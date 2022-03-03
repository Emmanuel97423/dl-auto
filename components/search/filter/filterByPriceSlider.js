// import * as React from 'react';
import { Box, Slider, TextField, Typography } from '@mui/material';
import { useState, useEffect } from 'react'


function valuetext(value) {
    return `${value}€`;
}

export default function RangeSlider(props) {
    console.log('props:', props);

    useEffect(() => {

        if (props.filterPrice.length > 0) {
            let min = props.filterPrice[0];
            let max = props.filterPrice[1]
            setValue([min, max])
            console.log('value:', value)
        }
    }, [])

    const [value, setValue] = useState([5, 80]);

    const [maxRange, setMaxRange] = useState(false)




    const handleChange = (event, newValue, activeThumb) => {

        setValue(newValue);
        if (newValue[1] === 100) {
            setMaxRange(true)

        } else {
            setMaxRange(false)

        };

        // props.handleFilterPrice(value)
        props.setFilterPrice(value)

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