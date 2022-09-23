import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import carta from "./carta2.png";
/*--------------------------------------------------------*/
export const DataBox = styled(Box)`
	margin-top: 5rem;
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 10vh;

	@media (max-width: 768px) {
		flex-direction: column;
		height: 40vh;
	}
`;
export const Firma = styled(Box)`
	width: 100%;
	height: auto;
`;
export const Carta = styled(Box)`
	width: 100%;
	height: auto;
	background-image: url(${carta});
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	align-items: center;
	-webkit-box-shadow: 1px 1px 19px 12px rgba(0, 0, 0, 0.83);
	box-shadow: 1px 1px 19px 12px rgba(0, 0, 0, 0.83);
`;

export const DataGraphy = styled(Typography)`
	color: white;
	font-size: 2rem;
	margin-bottom: -0.01rem;

	@media (max-width: 768px) {
		font-size: 1.2rem;
	}
`;
