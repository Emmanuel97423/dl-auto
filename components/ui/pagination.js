import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import styles from './pagination.module.css';


function paginationApp(props) {


    function handleChange(e, value) {
        if (value) {
            props.setPage(value);
            props.childToParent(props.page);
            // window.scrollTo(0, 0);
        } else if (arrowNav === 'NavigateNextIcon') {
            props.setPage(value)
        } else if (arrowNav === 'NavigateBeforeIcon') {
            props.setPage(value)
        }
    };

    return (
        <Box className={styles.pagination}>
            <Stack spacing={2}>
                <Pagination onChange={(e, value) => handleChange(e, value)} page={props.page} count={props.totalPagesInt} siblingCount={1} defaultPage={props.page} variant="outlined" shape="rounded" showFirstButton={true} showLastButton={true} />
            </Stack>
        </Box>
    )
}

export default paginationApp;