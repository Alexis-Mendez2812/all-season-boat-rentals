import { CloudinaryContext, Image } from "cloudinary-react";
import React, { useState } from "react";
import { useEffect } from "react";
import './test.css'
const Test = () => {


const [data,setData]= useState([])

    useEffect(()=>{
        console.log("hola")
        fetch("http://localhost:3001/test/images").then((res)=>res.json()).then((res)=>setData(res))
    },[])
	return (
		<div className='containerTest' >
			<h1>Test Page</h1>
			<CloudinaryContext cloudName="dnnwshf50">
				<Image publicId="sample" width="40%" />
				<Image publicId="sample" width="40%" />
			</CloudinaryContext>

            <div>
                {data.length>0? data.map((e)=>(<img className='data' src={e} />)) :null}
            </div>
		</div>
	);
};

export default Test;
