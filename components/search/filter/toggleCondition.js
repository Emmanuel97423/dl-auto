import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useState } from 'react';
import style from './toggleCondition.module.css'

export default function toggleCondition() {

    const [condition, setCondition] = useState('occasion');

    function handleChange(event, newCondition) {
        console.log('newAlignment:', newCondition)
        console.log('event:', event)
        setCondition(newCondition);
    };

    function sliderValue() {

    }
    return (
        <ToggleButtonGroup
            color="primary"
            value={condition}
            exclusive
            onChange={handleChange}
            sx={{
                width: .8,

                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: '#c5cae9',
                m: "0 20px 0 20px",
                borderRadius: 10,

            }}

        >
            <ToggleButton
                className={style.toggle}

                sx={{
                    width: 1,

                    flex: .5,
                    // backgroundColor: 'white',
                    // color: 'grey',
                    m: 1,
                    fontSize: '14px',
                    textTransform: 'Capitalize',
                    fontWeight: 'bold',
                    borderRadius: 10,

                }}
                value="occasion">Occasions</ToggleButton>
            <ToggleButton

                sx={{
                    width: 1,
                    flex: .5,
                    color: 'black',
                    m: 1,
                    fontSize: '14px',
                    textTransform: 'Capitalize',
                    fontWeight: 'bold',
                    borderRadius: 10,
                }}
                value="neuves">Neuves</ToggleButton>

        </ToggleButtonGroup >
    );
}