import React, { useEffect, useState } from "react";
import logo from "./logo/logo.png";
import style from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { postUserGoogle } from "../../Redux/Actions/actions";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Avatar, MenuItem, Menu, Button } from "@mui/material";
import { ThreeDotsIcom } from "./styledComponents";
import LoginIcon from "@mui/icons-material/Login";

function Navbar() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { user, loginWithRedirect } = useAuth0();
	const [isScrolled, setIsScrolled] = useState(false);
	let userSession = useSelector((state) => state.userSession);

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	useEffect(() => {
		if (user && user.email) {
			return dispatch(postUserGoogle(user));
		}
	}, [dispatch, user]);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleReloadFromLogo = () => {
		navigate("/");
		window.scrollTo(0, 0);
	};

	const handleChangeView = (where) => {
		navigate(`${where}`);
		window.scrollTo(0, 0);
	};

	return (
		<>
			<nav className={isScrolled ? style.navScroll : style.nav}>
				<div className={style.imgYT}>
					<img
						onClick={handleReloadFromLogo}
						src={logo}
						alt="yachtimeLogo"
						className={style.img}
					/>
				</div>

				<div className={style.ulDiv}>
					<ul className={style.ulEnlaces}>
						<li
							onClick={() => {
								handleChangeView("/");
							}}
							className={style.enlace}
						>
							Dashboard
						</li>
						{/* <li
                     onClick={() => {
                        handleChangeView('/membership');
                     }}
                     className={style.enlace}
                  >
                     Membership
                  </li> */}
						<li
							onClick={() => {
								handleChangeView("/FAQ");
							}}
							className={style.enlace}
						>
							FAQ
						</li>
						<li
							onClick={() => {
								handleChangeView("/ourFleet");
							}}
							className={style.enlace}
						>
							Our Fleet
						</li>
						<li
							onClick={() => {
								handleChangeView("/contactUs");
							}}
							className={style.enlace}
						>
							Contact us
						</li>

						<li>
							<a
								className={style.enlace}
								href="https://www.facebook.com/Boat-Miami-Rental-106066052266899"
								target="_blank"
								rel="noreferrer"
							>
								Facebook
							</a>
						</li>
						<li>
							<a
								className={style.enlace}
								href="https://www.instagram.com/allseasonbyboatmiamirental/"
								target="_blank"
								rel="noreferrer"
							>
								Instagram
							</a>
						</li>
						{userSession.email ? (
							<li>
								<Link to={"/userSite/data"} className={style.enlace}>
									<img src={userSession.picture} alt="profile" />
								</Link>
							</li>
						) : (
							<li>
								<Box
									onClick={() => loginWithRedirect()}
									className={style.enlace}
								>
									<i className="fa-solid fa-arrow-right-to-bracket"></i>
								</Box>
							</li>
						)}
					</ul>
				</div>

				<div>
					<Button
						id="demo-positioned-button"
						aria-controls={open ? "demo-positioned-menu" : undefined}
						aria-haspopup="true"
						aria-expanded={open ? "true" : undefined}
						onClick={handleClick}
					>
						<ThreeDotsIcom fontSize="large" />
					</Button>
					<Menu
						id="demo-positioned-menu"
						aria-labelledby="demo-positioned-button"
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						anchorOrigin={{
							vertical: "top",
							horizontal: "left",
						}}
						transformOrigin={{
							vertical: "top",
							horizontal: "left",
						}}
					>
						{userSession.email ? (
							<Box
								style={{
									width: "100%",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Link to={"/userSite/data"} className={style.enlace}>
									<Avatar alt="" src={userSession.picture} />
								</Link>
							</Box>
						) : (
							<Box
								style={{
									width: "100%",
									height: "2rem",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Box
									onClick={() => loginWithRedirect()}
									className={style.enlace}
								>
									<LoginIcon style={{ color: "black" }} />
								</Box>
							</Box>
						)}
						<MenuItem
							onClick={() => {
								handleChangeView("/");
							}}
						>
							Dashboard
						</MenuItem>
						<MenuItem
							onClick={() => {
								handleChangeView("/FAQ");
							}}
						>
							FAQ
						</MenuItem>
						<MenuItem
							onClick={() => {
								handleChangeView("/ourFleet");
							}}
						>
							OUR FLEET
						</MenuItem>
						<MenuItem
							onClick={() => {
								handleChangeView("/contactUs");
							}}
						>
							CONTACT US
						</MenuItem>
				
						{/* <MenuItem
                     onClick={() => {
                        handleChangeView('/membership');
                     }}
                  >
                     Membership
                  </MenuItem> */}
						<a
							href="https://www.facebook.com/Boat-Miami-Rental-106066052266899"
							target="_blank"
							rel="noreferre"
						>
							<MenuItem onClick={handleClose}>Facebook</MenuItem>
						</a>

						<a
							href="https://www.instagram.com/allseasonbyboatmiamirental/"
							target="_blank"
							rel="noreferre"
						>
							<MenuItem style={{ color: "#EE3896" }} onClick={handleClose}>
								Instagram
							</MenuItem>
						</a>
					</Menu>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
