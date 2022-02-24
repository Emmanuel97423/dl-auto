import { Container, Box, Button, Drawer, List, Divider, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';

import styles from './navBarMobile.module.css';
import { useState, useEffect } from 'react'


const topMenu = [
    {
        name: 'Boutique',
        link: '/'
    },
    {
        name: 'Contact',
        link: '/'
    },
];

export default function NavBarMobile(props) {


    const toggleDrawer = () => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        props.setDrawer(false);
    };
    const list = (anchor) => (
        <Box
            sx={{
                width: 320,
                // backgroundColor: 'blue',
                display: 'flex',
                flexDirection: 'column',
                '@media (min-width:1024px)': {
                    display: 'none'
                },
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Box
                sx={{
                    p: 1,
                    width: 1,
                    display: 'flex',
                    justifyContent: 'flex-end',
                }}
            >
                <CloseIcon />
            </Box>
            <List
                sx={{ width: 1, fontSize: '20px' }}
            >

                <ListItem button key='Boutique'
                    sx={{ mb: 1, mt: 1 }}
                >
                    {/* <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon> */}
                    <ListItemText primary='Boutique' />
                    <ListItemIcon
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <ArrowForwardIosIcon />
                    </ListItemIcon>
                </ListItem>
                <Divider color='#bdbdb'
                />

                <ListItem button key='Contact'
                    sx={{ mb: 1, mt: 1 }}
                >
                    {/* <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon> */}
                    <ListItemText primary='Contact' />
                    <ListItemIcon
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <ArrowForwardIosIcon />
                    </ListItemIcon>
                </ListItem>
                <Divider color='#bdbdb'
                />

            </List>

            {/* <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List> */}
        </Box>
    );

    return (




        <Box
        >
            <Drawer
                anchor='left'
                open={props.drawer}
                onClose={toggleDrawer('left', false)}
                sx={{
                    width: 1,
                    // backgroundColor: 'red',
                    display: 'flex',
                }}


            >
                {list('left')}
            </Drawer>
        </Box>


    );
}