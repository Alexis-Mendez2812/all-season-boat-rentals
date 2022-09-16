import React, { useState } from 'react';
import style from './YachtimeContact.module.css';
import angel from './staff/angel.jpg';
import david from './staff/david.jpg';
import diego from './staff/diego.jpg';
import valeria from './staff/valeria.jpg';
import { SiInstagram } from 'react-icons/si';
import {
   MapContainer,
   NumberGraphy,
   DataBox,
   AllCardsBox,
   CardBox,
} from './styledComponents';
import { Box } from '@mui/material';

function YachtimeContact() {
   const [mapRef] = useState(
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.73788533416!2d-80.1865475!3d25.7792199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b69fdcd6168d%3A0x9e703d1868f3ea29!2sMiamarina%20At%20Bayside!5e0!3m2!1ses-419!2sus!4v1663288115659!5m2!1ses-419!2sus"
   );

   return (
      <Box
         style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
         }}
      >
         <h1 className={style.title}>Yachtimeapp Crew</h1>
         <div className={style.divImages}>
            <div className={style.staff}>
               <img src={angel} alt='angel' className={style.img} />
               <span>Angel L.</span>
               <h3>CEO\Founder</h3>
               <a href='https://instagram.com/angellimongi?igshid=YmMyMTA2M2Y='>
                  <SiInstagram className={style.instagram} />
               </a>
            </div>
            <div className={style.staff}>
               <img src={david} alt='david' className={style.img} />
               <span>David G.</span>
               <h3>COO\Founder</h3>
               <a href='https://instagram.com/davidgarciabaquero?r=nametag'>
                  <SiInstagram className={style.instagram} />
               </a>
            </div>
            <div className={style.staff}>
               <img src={valeria} alt='valeria' className={style.img} />
               <span>Valeria F.</span>
               <h3>Concierge</h3>
               <a href='https://www.instagram.com/valeriafainsodc/'>
                  <SiInstagram className={style.instagram} />
               </a>
            </div>
            <div className={style.staff}>
               <img src={diego} alt='diego' className={style.img} />
               <span>Diego C.</span>
               <h3>Concierge</h3>
               <a href='https://www.instagram.com/diegooocorrales/'>
                  <SiInstagram className={style.instagram} />
               </a>
            </div>
         </div>
         <AllCardsBox>
            <CardBox>
               <img src={angel} alt='angel' className={style.img} />
               <span style={{ color: 'white' }}>Angel L.</span>
               <h3 style={{ color: 'white' }}>CEO\Founder</h3>
               <a href='https://instagram.com/angellimongi?igshid=YmMyMTA2M2Y='>
                  <SiInstagram
                     style={{ color: 'white' }}
                     className={style.instagram}
                  />
               </a>
            </CardBox>
            <CardBox>
               <img src={david} alt='david' className={style.img} />
               <span style={{ color: 'white' }}>David G.</span>
               <h3 style={{ color: 'white' }}>COO\Founder</h3>
               <a href='https://instagram.com/davidgarciabaquero?r=nametag'>
                  <SiInstagram
                     style={{ color: 'white' }}
                     className={style.instagram}
                  />
               </a>
            </CardBox>
            <CardBox>
               <img src={valeria} alt='valeria' className={style.img} />
               <span style={{ color: 'white' }}>Valeria F.</span>
               <h3 style={{ color: 'white' }}>Concierge</h3>
               <a href='https://www.instagram.com/valeriafainsodc/'>
                  <SiInstagram
                     style={{ color: 'white' }}
                     className={style.instagram}
                  />
               </a>
            </CardBox>
            <CardBox>
               <img src={diego} alt='diego' className={style.img} />
               <span style={{ color: 'white' }}>Diego C.</span>
               <h3 style={{ color: 'white' }}>Concierge</h3>
               <a href='https://www.instagram.com/diegooocorrales/'>
                  <SiInstagram
                     style={{ color: 'white' }}
                     className={style.instagram}
                  />
               </a>
            </CardBox>
         </AllCardsBox>
         {mapRef && (
            <MapContainer>
               <iframe
                  src={mapRef}
                  style={{ border: '0', width: '103vw', height: '40vh' }}
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
               ></iframe>

               <DataBox>
                  <NumberGraphy>+1 (305) 960-5180</NumberGraphy>
                  <span style={{ color: 'white' }}>
                  401 Biscayne Blvd, Miami, FL 33132
                  </span>
                  <p style={{ color: 'white' }}>marina de Bayside miami</p>
               </DataBox>
            </MapContainer>
         )}
      </Box>
   );
}

export default YachtimeContact;
