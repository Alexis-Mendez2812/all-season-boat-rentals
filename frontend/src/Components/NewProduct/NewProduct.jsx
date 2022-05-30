import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Uploading from "../Uploading/Uploading";

import "./NewProduct.css";
export default function NewProduct() {
	const [product, setProduct] = useState({
		make: "",
		model: 40,
		year: 1990,
		cabins: 0,
		bathrooms: 0,
		guest: 0,
		length: [],
		lengthUno: 30,
		lengthDos: 0,
		beam: [],
		beamUno: 10,
		beamDos: 0,
		draft: [],
		draftUno: 3,
		draftDos: 0,
		fuelCapacity: 0,
		waterCapacity: 0,
		cruiseVel: 0,
		location: "",
		fuelType: "",
		description: "",
		pictures: "Desktop/zzRecurso 1.png",
	});
	const [controller, setController] = useState({});
console.log(product.pictures)
	const [select, setSelect] = useState([]);

	const dispatch = useDispatch();

	const handleOnSubmit = async function (event) {
		event.preventDefault();
	};
	const handleOnChange = function (event) {
		setProduct({ ...product, [event.target.name]: event.target.value });
		setController(
			validate({ ...product, [event.target.name]: event.target.value })
		);
	};

	return (
		<div className="Form-body">
			<form onSubmit={handleOnSubmit} className="Form-form">
				<div className="Form-div-title">
					<h1 className="Form-title">Import your Ship!</h1>
				</div>
				<div className="Form-div-inputs">
				
						<label className="Form-label ">Make</label> <br />
							<input
							className="Form-input"
							type="text"
							name="make"
							value={product.make}
							placeholder="SEA RAY/AZIMUT/MERIDIAN"
							onChange={handleOnChange}></input>
						<label className="Form-label ">Model</label> <br />
							<input
							className="Form-input"
							type="number"
							min="40"
							name="model"
							value={product.model}
							placeholder="40/45/70/100/120"
							onChange={handleOnChange}></input>
						<label className="Form-label ">Year</label> <br />
							<input
							className="Form-input"
							type="number"
              min="1990"
              max="2023"
							name="year"
							value={product.year}
							placeholder="2000"
							onChange={handleOnChange}></input>
						<label className="Form-label ">Cabins</label> <br />
							<input
							className="Form-input"
							type="number"
              min="0"
              max="30"
							name="cabins"
							value={product.cabins}
							placeholder="1-2-3...."
							onChange={handleOnChange}></input>
						<label className="Form-label ">Bathrooms</label> <br />
							<input
							className="Form-input"
							type="number"
							name="bathrooms"
              min="0"
              max="20"
							value={product.bathrooms}
							placeholder="1-2-3...."
							onChange={handleOnChange}></input>
						<label className="Form-label ">Guest</label> <br />
							<input
							className="Form-input"
							type="number"
              min="0"
              max="50"
							name="guest"
							value={product.guest}
							placeholder="1-2-3...."
							onChange={handleOnChange}></input>
						<label className="Form-label ">Length</label> <br />
						
            <div className="Form-div-internal">
							<input
              className="Form-input-internal"
							type="number"
							name="lengthUno"
              min="30"
              max="200"
							value={product.lengthUno}
							placeholder="Title"
							onChange={handleOnChange}></input>
							<input
              className="Form-input-internal"
							type="number"
							name="lengthDos"
              min="0"
              max="11"
							value={product.lengthDos}
							placeholder="Title"
							onChange={handleOnChange}></input>
            <label className="Form-label-internal "> {`${product.lengthUno}' ${product.lengthDos}"`}</label> <br />
            </div>
						<label className="Form-label ">Beam</label> <br />
						
            <div className="Form-div-internal">
							<input
              className="Form-input-internal"
							type="number"
							name="beamUno"
              min="10"
              max="40"
							value={product.beamUno}
							placeholder="Title"
							onChange={handleOnChange}></input>
							<input
              className="Form-input-internal"
							type="number"
							name="beamDos"
              min="0"
              max="11"
							value={product.beamDos}
							placeholder="Title"
							onChange={handleOnChange}></input>
            <label className="Form-label-internal "> {`${product.beamUno}' ${product.beamDos}"`}</label> <br />
            </div>
						<label className="Form-label ">Draft</label> <br />
						
            <div className="Form-div-internal">
							<input
              className="Form-input-internal"
							type="number"
							name="draftUno"
              min="3"
              max="10"
							value={product.draftUno}
							placeholder="Title"
							onChange={handleOnChange}></input>
							<input
              className="Form-input-internal"
							type="number"
							name="draftDos"
              min="0"
              max="11"
							value={product.draftDos}
							placeholder="Title"
							onChange={handleOnChange}></input>
            <label className="Form-label-internal "> {`${product.draftUno}' ${product.draftDos}"`}</label> <br />
            </div>
					
						
						<label className="Form-label ">Fuel Capacity</label> <br />
							<input
							className="Form-input"
							type="number"
							min="0"
							name="fuelCapacity"
							value={product.fuelCapacity}
							placeholder="Title"
							onChange={handleOnChange}></input>
						<label className="Form-label ">WaterCapacity</label> <br />
							<input
							className="Form-input"
							type="number"
							min="0"
							name="waterCapacity"
							value={product.waterCapacity}
							placeholder="Title"
							onChange={handleOnChange}></input>
						<label className="Form-label ">Cruise Vel</label> <br />
							<input
							className="Form-input"
							type="number"
							min="0"
							name="cruiseVel"
							value={product.cruiseVel}
							placeholder="Title"
							onChange={handleOnChange}></input>
						<label className="Form-label ">Location</label> <br />
							<input
							className="Form-input"
							type="text"
							name="location"
							value={product.location}
							placeholder="Title"
							onChange={handleOnChange}></input>
						<label className="Form-label ">Description</label> <br />
							<input
							className="Form-input"
							type="text"
							name="description"
							value={product.description}
							placeholder="Title"
							onChange={handleOnChange}></input>
						<label className="Form-label ">Pictures</label> <br />
							{/* <input
							className="Form-input"
							type="file"
							name="pictures"
							value={product.pictures}
							placeholder="Title"
							onChange={handleOnChange}></input>
					<img src={product.pictures||"https://cdn-icons-png.flaticon.com/512/71/71494.png"} alt="chose a image" />
					 */}
				</div>
				<div className="Form-">
						{controller.button === "button" && (
              <input
                className="Form-fake-button"
                type="button"
                value="CREATE?"
              ></input>
            )}
						{controller.button === "button" && (
							<input className="myButton fake" type="button" value="👻"></input>
						)}
						
						{!controller.button && (
							<button type="submit" class="myButton">
								🚢
							</button>
						)}
					</div>
				<div className="Form-div-controlers">
					
					{controller.description && (
						<p className="Form-controller">●{controller.description}</p>
					)}
				
				
				
				
				
				</div>
				
			<Uploading />
			</form>
		</div>
	);
}

export function validate(game) {
	let controller = {};
	
	

	//DESCRIPTION
	if (!game.description) {
		controller.description = "The description is required";
	} else if (game.description.length > 255) {
		controller.description =
			"The description should not be more than 255 characters";
	}


	if (
		controller.name ||
		controller.background_image ||
		controller.genres ||
		controller.rating ||
		controller.platforms ||
		controller.released ||
		controller.description ||
		!game.description 
	) {
		controller.button = "button";
	}
	// console.log("controller",controller);
	// console.log("ship",ship)
	return controller;
}