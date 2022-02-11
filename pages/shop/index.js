import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CarCard from '../../components/ui/carCard';
import Box from '@mui/material/Box';
import styles from './shop.module.css'
import { Vehicle } from '../../utils/vehicleClasse.js'
function Shop({ data, children }) {

    const searchResult = data["search:search-result"]["search:ads"]["ad:ad"];


    return (<Container maxWidth="l">
        <Typography sx={{ mt: '10px', mb: '10px' }}>26 000 voitures d'occasion trouvés</Typography>
        <Box className={styles.box}>


            {searchResult.map((vehicules, index) => {
                const vehicle = { ...vehicules }
                const vehicleClasse = new Vehicle(vehicle);
                const id = vehicleClasse.id;
                const marque = vehicleClasse.brand;
                const model = vehicleClasse.model;
                const price = vehicleClasse.price;
                const kilometrage = vehicleClasse.kilometrage;
                console.log('kilometrage:', kilometrage);


                const carburant = vehicleClasse.carburant;
                const img = vehicleClasse.image;



                return (<div className={styles.cards} key={index}>
                    <CarCard
                        id={id}
                        marque={marque}
                        model={model}
                        price={price}
                        kilometrage={kilometrage}
                        carburant={carburant}
                        img={img}

                    >
                    </CarCard>
                    {children}
                </div>)


            })}
        </Box>

    </Container>);
};
// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:3000/api/vehicules`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}
export default Shop;
