import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
    typography: {
        fontFamily: 'Roboto',
    }
});

theme.typography.h1 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
        fontSize: '3rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '3rem',
    },
};

export default theme;