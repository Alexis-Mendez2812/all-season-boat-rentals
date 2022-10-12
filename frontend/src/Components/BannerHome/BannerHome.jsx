import React, { useEffect, useState } from 'react';
import style from './BannerHome.module.css';
import Carousel from "react-material-ui-carousel";
import { CarPic } from '../Test/styledComponents';
function BannerHome() {
   
const [data,setData]= useState([])

useEffect(()=>{
    console.log("hola")
    fetch("https://yachtimeapp.herokuapp.com/test/images").then((res)=>res.json()).then((res)=>setData(res))
},[])
return (
<Carousel interval={3500} animation="slide" duration={800}
navButtonsAlwaysVisible={false}
navButtonsAlwaysInvisible={true}
>
							{data.map((item, index) => {
								return (
                           <>
                           <div style={{height:"10vh"}} ></div>
                           <CarPic
                           key={index}
                           style={{ backgroundImage: `url(${item})` }}
                           
									/>
                           </>
                           );
                        })}
						</Carousel> 
                        
						)
// 
// 
// 
// 
// 

//
//   </div>
   // return (
   //    <div className={style.container}>
   //       <ul className={style.listado}>
   //          <li className={style.eachSlide}>
   //             <img className={style.eachImg} src={one} alt='' />
   //          </li>
   //          <li className={style.eachSlide}>
   //             <img className={style.eachImg} src={one} alt='' />
   //          </li>
   //          <li className={style.eachSlide}>
   //             <img className={style.eachImg} src={one} alt='' />
   //          </li>
   //          <li className={style.eachSlide}>
   //             <img className={style.eachImg} src={one} alt='' />
   //          </li>
   //       </ul>
   //    </div>
   // );
}

export default BannerHome;
