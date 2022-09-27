import React, { useState } from "react";
import style from "./YachtimeContact.module.css";
import angel from "./staff/angel.jpg";
import gian from "./staff/gian.png";
import { SiInstagram } from "react-icons/si";
import {
	MapContainer,
	NumberGraphy,
	DataBox,
	AllCardsBox,
	CardBox,
} from "./styledComponents";
import { Box } from "@mui/material";

function YachtimeContact() {
	const [mapRef] = useState(
		"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.73788533416!2d-80.1865475!3d25.7792199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b69fdcd6168d%3A0x9e703d1868f3ea29!2sMiamarina%20At%20Bayside!5e0!3m2!1ses-419!2sus!4v1663288115659!5m2!1ses-419!2sus"
	);

	return (
		<Box
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<h1 className={style.title}>Allseason Crew</h1>
			{/* version pc */}
			<div className={style.divImages}>
				<div className={style.staff}>
					<img src={angel} alt="angel" className={style.img} />
					<span>Angel L.</span>
					<h3>CEO\Founder</h3>
					<a href="https://instagram.com/angellimongi?igshid=YmMyMTA2M2Y=">
						<SiInstagram className={style.instagram} />
					</a>
				</div>
				<div className={style.staff}>
					<img src={gian} alt="gian" className={style.img} />
					<span>Gian L.</span>
					<h3>COO</h3>
					<a href="https://www.instagram.com/giannardulli/">
						<SiInstagram className={style.instagram} />
					</a>
				</div>
			</div>
			{/* version celu */}
			<AllCardsBox>
				<CardBox>
					<img
						src={angel}
						id="retratoAngel"
						alt="angel"
						className={`${style.img} retratoAngel `}
						style={{ padding:"7px" }}
					/>
					<span style={{ color: "#EEEFEF" }}>Angel L.</span>
					<h3 style={{ color: "#EEEFEF" }}>CEO\Founder</h3>
					<a href="https://instagram.com/angellimongi?igshid=YmMyMTA2M2Y=">
						<SiInstagram
							style={{ color: "#EEEFEF" }}
							className={style.instagram}
						/>
					</a>
				</CardBox>
				<CardBox>
					<img src={gian} alt="gian" className={style.img} />
					<span style={{ color: "#EEEFEF" }}>Gian L.</span>
					<h3 style={{ color: "#EEEFEF" }}>COO</h3>
					<a href="https://www.instagram.com/giannardulli/">
						<SiInstagram
							style={{ color: "#EEEFEF" }}
							className={style.instagram}
						/>
					</a>
				</CardBox>
			</AllCardsBox>
			{mapRef && (
				<MapContainer>
					<iframe
						src={mapRef}
						style={{ border: "0", width: "103vw", height: "40vh" }}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>

					<DataBox>
						<NumberGraphy>+1 305 992 0643</NumberGraphy>
						<span style={{ color: "#434545" }}>
							401 Biscayne Blvd, Miami, FL 33132
						</span>
						<p style={{ color: "#434545" }}>marina de Bayside miami</p>
					</DataBox>
				</MapContainer>
			)}
		</Box>
	);
}

export default YachtimeContact;
