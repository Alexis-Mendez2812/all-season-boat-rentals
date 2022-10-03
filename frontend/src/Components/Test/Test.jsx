import { CloudinaryContext, Image } from "cloudinary-react";
import React from "react";
import './test.css'
const Test = () => {
	return (
		<div className='containerTest' >
			<h1>Test Page</h1>
			<CloudinaryContext cloudName="dnnwshf50">
				<Image publicId="sample" width="40%" />
				<Image publicId="sample" width="40%" />
			</CloudinaryContext>
		</div>
	);
};

export default Test;
