import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

import { Category } from '../../utils/categoryClass.js'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};
const names = [
    'Cabriolet/Roadster',
    'Break',
    'Berline',
    'SUV/Pickup/Truc',
    'Citadine',
    'Coupé Sport',
    'Monospace / Ludospace',
    'Autre',

];

function searchBar({ data }) {
    const requestArr = [];
    const [personName, setPersonName] = React.useState([]);
    const handleChange = (event) => {
        console.log('event:', event.target.value[0])
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
        try {
            if (event.target.value[0] === 'Cabriolet/Roadster') {
                const key = 'Cabrio'
                console.log('key:', key)
                const categoryClass = new Category(key)
                categoryClass.getData
                console.log('categoryClass.getData:', categoryClass.getData)
                // console.log('searchData:', searchData)
            }

        } catch (e) {
            console.log('error', e)
        }
    };

    return (
        <FormControl sx={{
            m: 1, width: 1, position: 'sticky',
            top: 85,
            backgroundColor: 'white',
        }}>
            <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
            <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(', ')}
                MenuProps={MenuProps}
            >
                {names.map((name) => (
                    <MenuItem key={name} value={name}>
                        <Checkbox checked={personName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
};
export async function getServerSideProps() {

    // Fetch data from external API

    const res = await fetch(`${process.env.API_BASE_URL}/api/vehicules/categories`)

    const data = await res.json()


    // Pass data to the page via props
    return { props: { data } }
}

export default searchBar;