import React, { useEffect, useState } from 'react';
import Carousel from "react-material-ui-carousel";
import { CarPic,Container } from './styledComponents';

function Test() {
const [data,setData]= useState([])

useEffect(()=>{
	console.log("hola")
    fetch("http://localhost:3001/test/images").then((res)=>res.json()).then((res)=>setData(res))
	
},[])


if(data.length>0){


return (
  <Container>
<Carousel interval={3500} animation="slide" duration={800} navButtonsAlwaysInvisible={true} navButtonsAlwaysVisible={false} >
							{data.map((item, index) => {
								return (
									<CarPic
										key={index}
										style={{ backgroundImage: `url(${item})` }}
									/>
								);
							})}
						</Carousel> 
         </Container>)
}else{
	return (<><hr/></>)
}
}
export default Test;
