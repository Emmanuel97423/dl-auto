import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CarCard from '../../components/ui/carCard';
function Shop() {
    return (<Container maxWidth="l">
        <Typography sx={{ mt: '10px', mb: '10px' }}>26 000 voitures d'occasion trouvés</Typography>
        <CarCard />
    </Container>);
};
export default Shop;
