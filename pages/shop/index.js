import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CarCard from '../../components/ui/carCard';
import Box from '@mui/material/Box';
import styles from './shop.module.css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import SearchBar from '../../components/search/searchBar'
import { VehicleFactory } from '../../utils/classes/Vehicles';
import { useState, useEffect } from "react";
import Router from 'next/router';


import PaginationApp from '../../components/ui/pagination';





function Shop({ data, children }) {

    const [page, setPage] = useState(1);
    const [dataState, setDataState] = useState([]);
    // const [dataServerSideState, setDataServerSideState] = useState([]);
    const [vehicleTotalState, setVehicleTotalState] = useState(null);




    const searchResult = data["search:search-result"]["search:ads"]["ad:ad"];
    const vehicleTotal = data["search:search-result"]["search:total"]._text

    // console.log('data:', data)
    // setVehicleTotal(data);
    // console.log('vehicleTotal:', vehicleTotal)

    const totalPages = data["search:search-result"]["search:max-pages"]._text;
    const totalPagesInt = parseInt(totalPages)


    //pagination component listener
    const paginationChange = async (currentPage) => {
        //fetch data pagination
        // const stateDataPaginationResult = dataState;
        // setDataState([]);

        const res = await fetch(`${process.env.API_BASE_URL}/api/vehicules/`, {
            method: 'POST',
            body: currentPage,

        })
        const data = (await res.json());
        const vehiclesResult = data["search:search-result"]["search:ads"]["ad:ad"]
        setDataState(vehiclesResult);


        // Pass data to the page via props
        // return { props: dataState }
    };
    //Template ui condition
    function TemplateState() {
        if (dataState.length > 0) {
            return (

                <Box className={styles.box}>
                    {

                        dataState.map((vehicules, index) => {
                            const vehicle = { ...vehicules }
                            const vehicleClasse = new VehicleFactory(vehicle);
                            const id = vehicleClasse.id;
                            const marque = vehicleClasse.brand;
                            const model = vehicleClasse.model;
                            const price = vehicleClasse.price;
                            const kilometrage = vehicleClasse.kilometrage;
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


                        })
                    }
                </Box>)
        } else {
            return (
                <Box className={styles.box}>
                    {

                        searchResult.map((vehicules, index) => {
                            const vehicle = { ...vehicules }
                            const vehicleClasse = new VehicleFactory(vehicle);
                            const id = vehicleClasse.id;
                            const marque = vehicleClasse.brand;
                            const model = vehicleClasse.model;
                            const price = vehicleClasse.price;
                            const kilometrage = vehicleClasse.kilometrage;
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


                        })
                    }
                </Box>)
        }
    }

    //Page 1st load

    return (<Container className={styles.container} maxWidth="l">
        <Box className={styles.searchMenu}>
            <SearchBar />

        </Box>
        <Box>
            <Typography sx={{ mt: '10px', mb: '10px' }}>{vehicleTotal} voitures d'occasion trouvés</Typography>

            <TemplateState />
            <PaginationApp
                page={page}
                setPage={setPage}
                totalPagesInt={totalPagesInt}
                childToParent={paginationChange}
            // setDataState={setDataState}
            >

            </PaginationApp>
        </Box>
    </Container>);

}


// This gets called on every request
export async function getServerSideProps(context) {

    // Fetch data from external API

    const res = await fetch(`${process.env.API_BASE_URL}/api/vehicles/`, {
        method: 'POST',
    })
    const data = await res.json()


    // Pass data to the page via props
    return { props: { data } }
};






export default Shop;
