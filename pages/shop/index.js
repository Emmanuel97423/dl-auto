import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CarCard from '../../components/ui/carCard';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import styles from './shop.module.css';
import { VehicleFactory } from '../../utils/classes/Vehicles';
import { useState, useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import SearchInput from '../../components/search/inputSearch';
import Filter from '../../components/search/filter/filterNav';
import { formatInTimeZone, zonedTimeToUtc } from 'date-fns-tz';
import axios from 'axios';


import InfiniteScroll from "react-infinite-scroll-component";


function Shop({ data, children }) {
    const vehiclesList = data["search-result"]["ads"]["ad"];
    const date = new Date(Date.now())
    const dateTimeDe = formatInTimeZone(date, 'Europe/Berlin', 'yyyy-MM-dd HH:mm:ssXXX').replace('+', '%2B').replace(' ', 'T')

    const [posts, setPosts] = useState(vehiclesList);
    const [hasMore, setHasMore] = useState(true);
    const [pageState, setPageState] = useState(1);
    const [checkDate, setCheckDate] = useState(dateTimeDe);

    //Call API 
    const getMorePost = async () => {
        setPageState(pageState + 3);
        const res = axios.post(`${process.env.API_BASE_URL}/api/vehicles/`, {
            page: pageState,
            dateCheck: dateTimeDe
        }).then((response) => {

            return response.data
        })
        const newPosts = await res;
        const newVehicules = newPosts["search-result"]["ads"]["ad"]
        setPosts((post) => [...post, ...newVehicules]);
    };

    return (<Container className={styles.container} maxWidth="l" >
        <Box>
            <SearchInput />
            <Divider color="#e0e0e0"
                sx={{
                    mt: 1,

                }} />
            <Filter />
            <Divider color="#e0e0e0" />
            <Box>
                <Typography sx={{ mt: '10px', mb: '10px' }}>+600 000 véhicules trouvés</Typography>
                <InfiniteScroll
                    className={styles.InfiniteScroll}
                    dataLength={posts.length}
                    next={getMorePost}
                    hasMore={hasMore}
                    scrollThreshold={1}
                    loader={
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            mt: 2,
                        }}>
                            <CircularProgress></CircularProgress>
                            <h4>Chargement...</h4>
                        </Box>
                    }
                    endMessage={<h4>Il n'y a plus rien à montrer pour le moment...</h4>}
                >
                    <Box className={styles.box}>
                        {
                            posts.map((vehicules, index) => {
                                const vehicle = { ...vehicules }
                                const vehicleClasse = new VehicleFactory(vehicle);
                                const id = vehicleClasse.id;
                                const marque = vehicleClasse.brand;
                                const model = vehicleClasse.model;
                                const price = vehicleClasse.price;
                                const kilometrage = vehicleClasse.kilometrage;
                                const carburant = vehicleClasse.carburant;
                                const img = vehicleClasse.image;
                                const priceTtc = vehicleClasse.getPriceTtc;
                                const condition = vehicleClasse.condition
                                return (<Box className={styles.cards} key={index} >
                                    <CarCard
                                        id={id}
                                        marque={marque}
                                        model={model}
                                        price={priceTtc}
                                        kilometrage={kilometrage}
                                        carburant={carburant}
                                        img={img}
                                        condition={condition}
                                    >
                                    </CarCard>
                                    {children}
                                </Box>)
                            })
                        }
                    </Box>
                </InfiniteScroll>
            </Box>
        </Box>
    </Container >);
}
// This gets called on every request
export async function getServerSideProps(context) {
    // Fetch data from external API
    const res = await axios.get(`${process.env.API_BASE_URL}/api/vehicles/`).then((response) => {
        return response.data;
    }).catch(e => { console.error(e); })
    const data = await res
    return { props: { data } }
};
export default Shop;
