import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
/*--------------------------------------------------------*/
export const BackIcon = styled(KeyboardBackspaceIcon)`
   color: #454545;
   font-weight: bold;
   font-size: 3vw;
   transition: 0.3s;
   cursor: pointer;

   &: hover {
      font-size: 4vw;
      color: #2e8cbf;
   }
`;

export const IconBox = styled(Box)`
   width: 5rem;
   height: 15rem;
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const Picture = styled(Box)`
   width: auto;
   height: auto;
   transition: 2s;
   overflow: hidden;
`;

export const PictureShadow = styled(Box)`
   width: 100%;
   height: 90vh;
   background-color: rgba(0, 0, 0, 0.2);
`;

export const DataPictureBox = styled(Box)`
   width: 100%;
   height: 24.3rem;
   display: flex;
   flex-direction: column;
   justify-content: flex-end;
   align-items: flex-end;
   padding-right: 3rem;
   padding-bottom: 5rem;

   @media (max-width: 768px) {
      flex-direction: column-reverse;
      align-items: flex-start;
      justify-content: flex-start;
      margin-top: 12rem;
      margin-left: 1rem;
   }
`;

export const DataGraphy = styled(Typography)`
   margin-left: 0.7rem;
   text-transform: uppercase;
   font-weight: bold;
   font-size: 4rem;
   color: white;
   cursor: default;
   font-weight: 400;

   @media (max-width: 768px) {
      font-size: 2.5rem;
   }
`;

export const MessageButton = styled(Button)`
   background-color: transparent;
   border: 0.13rem solid white;
   color: white;
   width: 12rem;
   transition: 0.5s;

   &:hover {
      background-color: #000000bd;
      border-color: #2e8cbf;
      color: #2e8cbf;
      width: 17rem;
   }
`;

export const DataTitle = styled(Typography)`
   text-transform: uppercase;
   font-weight: bold;
   letter-spacing: -0.1rem;
   font-size: 4rem;
   color: #454545;
   cursor: default;
   font-weight: 500;
   font-family: monospace;
   width: 100%;
`;

export const InfoBox = styled(Box)`
   display: flex;
   flex-wrap: wrap;
   align-items: flex-start;
   align-content: flex-start;
   // @media (max-width: 768px) {
   //    flex-direction: column;
   //    justify-content: space-around;
   //    height: 120vh;
   // }
`;

export const FeatureBox = styled(Box)`
   min-width: 49vw;
   height: auto;
   padding: 1em;
   display:flex;
   flex-direction: row;
   flex-wrap: wrap;
   align-content: flex-start;
   align-items: center;
   justify-content: center;
`;

export const DetailBox = styled(Box)`
min-width: 49vw;
height: auto;
   display: flex;
   flex-direction: column;
   flex-wrap: no-wrap;
   align-items:flex-start;
   justify-content:flex-start

   // @media (max-width: 768px) {
   //    height: 45vh;
   //    width: 100vw;
   //    margin-left: -1.6rem;
   // }
`;

export const Li = styled('li')`
   color: #454545;
   font-size: 1.2rem;
   margin-bottom: 0.8rem;
`;

export const TextBox = styled(Box)`
min-width: 49%;
height: auto;
   font-size: 1.2rem;
   text-align: justify;
   line-height: 1.5rem;
   color: #454545;
   align-self:center;
   margin:0;

   // @media (max-width: 768px) {
   //    width: 90vw;
   // }
`;

export const CarPic = styled(Box)`
   height: 50vh;
   background-size: contain ;
   background-position-y: 50%;
   background-position-x: 50%;
   background-repeat:no-repeat;
`;

export const ChatBox = styled(Box)`
   width: 30%
   height: 100vh;
   background-color: black;
`;

export const TextChatBox = styled(Box)`
   width: 100%;
   height: 94%;
   padding: 1.2rem;
   overflow-y: auto;

   &::-webkit-scrollbar {
      width: 0.5rem;
      background-color: white;
   }
   &::-webkit-scrollbar-thumb {
      background-color: rgb(39, 37, 37);
      border-radius: 0vh;
   }
`;

export const InputChatBox = styled(Box)`
   width: 100%;
   height: 6%;
   background-color: grey;
   display: flex;
   align-items: center;
   justify-content: space-evenly;
`;

export const SendButton = styled('button')`
   width: 18%;
   height: 80%;
   border: 0vh;
   background-color: white;
   border-radius: 1rem;
   color: #4d4a4a;
   cursor: pointer;
   font-weight: 500;
`;

export const MessageOwnerBox = styled(Box)`
   background-color: grey;
   margin: 0.2rem;
   word-wrap: break-word;
   padding: 0.2rem;
   border-radius: 0.2rem;
   margin-left: -0.4rem;
`;

export const MessageGraphy = styled(Typography)`
   font-size: 0.8rem;
   color: white;
   cursor: default;
   font-weight: 400;
   letter-spacing: 0.05rem;
`;
