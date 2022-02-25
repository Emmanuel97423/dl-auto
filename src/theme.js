import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue, red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    toggle: {
        ':hover': {
            backgroundColor: 'red'
        }
    },
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        tercary: {
            main: '#c5cae9'
        },
        divider: {
            main: blue.A200,
        },
        error: {
            main: red.A400,
        },

    },
    typography: {
        fontFamily: 'Roboto',
    },

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
theme.typography.h2 = {
    fontSize: '32px',
};
theme.typography.h4 = {
    fontSize: '1.2rem',
    textTransform: 'Capitalize',
    '@media (min-width:600px)': {
        fontSize: '18px',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '18px',
    },
};
theme.typography.h5 = {
    fontSize: '25px',
    textTransform: 'Capitalize',
    color: '#353535',
    fontWeight: '700',
};
theme.typography.h6 = {
    fontSize: '18px',
    textTransform: 'Capitalize',
    color: '#353535',
    fontWeight: '700',
};
theme.typography.span = {
    fontSize: '14px',
    color: '#353535',
};
theme.typography.spanGrey = {
    fontSize: '14px',
    color: '#707070',
};
theme.typography.spanBold = {
    fontSize: '18px',
    color: '#353535',
    fontWeight: '700',
};
theme.typography.link = {
    fontSize: '16px',
    color: '#556cd6',
    fontWeight: '700',
    textTransform: 'Capitalize',
};


export default theme;