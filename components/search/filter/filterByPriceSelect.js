
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from 'react';


let priceRange = [];

for (let i = 0; i < 11; i++) {
    priceRange.push(i * 10000);
};

export default function SelectLabels() {



    const [age, setAge] = useState('');


    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-helper-label">Prix minimum</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={age}
                    label="Prix minimum"
                    onChange={handleChange}
                >
                    {priceRange.map((price) => {
                        return (<MenuItem value={price}>{price}</MenuItem>)
                    })}
                    <MenuItem value={30}>+100 000</MenuItem>
                    {/* <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
                {/* <FormHelperText>Prix minimum</FormHelperText> */}
            </FormControl>

        </div>
    );
}
