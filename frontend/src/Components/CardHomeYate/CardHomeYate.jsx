//CardHomeYate
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../Redux/Actions/ProductActions/getAllProducts';
import './CardHome.css';
import Paginado from '../Paginado/Paginado';
import { Box, CircularProgress } from '@mui/material';
import {
   AllCardsContainer,
   Card,
   DataGraphy,
   ChargingContainer,
   TextBox,
} from './StyledComponents';

export default function CardHomeYate() {
   const dispatch = useDispatch();
   const allYates = useSelector((state) => {
      return state.allYates;
   });

   const [charging, setCharging] = useState(false);
   const [currentPage, setCurrentPage] = useState(1);
   const [yatesPerPage] = useState(9);
   const indexOfLastYate = currentPage * yatesPerPage;
   const indexFirstYate = indexOfLastYate - yatesPerPage;
   const renderYates = allYates.slice(indexFirstYate, indexOfLastYate);

   const paginado = (pageNumber) => {
      setCharging(true);
      setTimeout(() => {
         setCharging(false);
         setCurrentPage(pageNumber);
      }, 400);
   };

   useEffect(() => {
      setCurrentPage(1);
      dispatch(getAllProducts());
   }, [dispatch]);

   if (charging) {
      return (
         <ChargingContainer>
            <CircularProgress color='info' size={100} />;
         </ChargingContainer>
      );
   } else {
      return (
         <Box>
            <AllCardsContainer>
               {renderYates.map((e) => (
                  <Card
                     key={e.id}
                     style={{
                        backgroundImage: `url(${e.pictures[0]||"https://res.cloudinary.com/yachtimeapp/image/upload/v1654214651/api-img/mj9ckyiislx5gouumomy.jpg"})`,
                     }}
                  >
                     <TextBox>
                        <DataGraphy>
                           {e.model}' {e.make}
                        </DataGraphy>
                     </TextBox>
                  </Card>
               ))}
            </AllCardsContainer>
            {allYates.length > 9 && (
               <Paginado
                  yatesPerPage={yatesPerPage}
                  allYates={allYates.length}
                  paginado={paginado}
               />
            )}
         </Box>
      );
   }
}
