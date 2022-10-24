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
className={style.carousel}
>
							{data.map((item, index) => {
								return (
                        <img className={style.imgBanner} src={item} alt={`Banner ${item}`} key={item+index}  />
                           // <CarPic
                           // key={index}
                           // style={{ backgroundImage: `url(${item})`,marginTop:"50px" }}
									// />
                           );
                        })}
						</Carousel> 
                        
						)
}

export default BannerHome;
