import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Box } from "@mui/material";
import { Carta, DataBox, DataGraphy, Firma } from "./styledComponents";
import { WppAvatar } from "../Home/styledComponents";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useSelector } from "react-redux";
import firma from "./firma.png";
import firma3 from "./firma3.png";
function ContactUs() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const aux = useSelector((state) => {
		return state.aux;
	});
	return (
		<>
			<Navbar />
			{!aux && (
				<a href="https://wa.link/tgghvx" target="_blank" rel="noreferrer">
					<WppAvatar>
						<WhatsAppIcon sx={{ fontSize: 50 }} />
					</WppAvatar>
				</a>
			)}
			<DataBox>
				<h3 style={{ color: "#000", fontSize: "2rem" }}>Contact</h3>
				<h3 style={{ color: "#000", fontSize: "2rem" }}>+1 (305) 960-5180</h3>
				<DataGraphy>401 Biscayne Blvd, Miami, FL 33132</DataGraphy>
				<p
					style={{
						color: "#000",
						fontSize: "2rem",
						marginBottom: "-0.01rem",
					}}
				>
					marina de Bayside miami
				</p>
				<br></br>
			</DataBox>

			<Box>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.73788533416!2d-80.1865475!3d25.7792199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b69fdcd6168d%3A0x9e703d1868f3ea29!2sMiamarina%20At%20Bayside!5e0!3m2!1ses-419!2sus!4v1663288115659!5m2!1ses-419!2sus"
					style={{
						border: "0",
						width: "100vw",
						height: "14rem",
					}}
					allowFullScreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</Box>
			<div
				style={{
					color: "#000",
					backgroundColor: "#00000000",
					fontSize: "2rem",
				}}
			>
				<Carta>
					<h3
						style={{
							fontSize: "2rem",
							margin: "40px 0px 40px 0px",
						}}
					>
						About Us
					</h3>
					<p>
						Our mission is to use extravagant exploratory voyages around the
						heart of Miami as a tool to shift your definition of fantasy and
						relaxation. When you set foot on one of our private boat or yacht
						decks, we trust you will find a one-of-a-kind experience through our
						opulent service. As our guest, you are guaranteed not only a safe
						and smooth charter experience but a personal and private space away
						from the masses.
					</p>
					<Firma>
						<img src={firma3} alt="firma.png" width="70%" />
					</Firma>
				</Carta>
			</div>
			<Footer />
		</>
	);
}

export default ContactUs;
