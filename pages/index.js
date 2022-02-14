import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';

export default function Home() {
  return (
    <Container maxWidth="l">
      <Box sx={{ my: 4 }}>
        <Typography variant="h1" component="h1" gutterBottom>
          Dl Automobile
        </Typography>
        <Link
          href={{
            pathname: '/shop',
            // query: {
            //   modele: 'FORD',
            //   page: 1
            // },
          }}
          color="secondary">
          Go to the shop page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  )
}
