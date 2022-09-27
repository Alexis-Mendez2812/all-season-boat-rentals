import { BottomNavigation } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
/*--------------------------------------------------------*/

export const BtmNav = styled(BottomNavigation)`
   width: 100%;
   htight: 5rem;
   background-color: black;
`;

export const LoginButton = styled('button')`
   width: 100%;
   height: 2rem;
   background-color: grey;
   color: white;
   border: 0vh;
`;

export const ThreeDotsIcom = styled(MenuIcon)`
   margin-right: -8rem;
   margin-top: 0.5rem;
   color: white;
`;
