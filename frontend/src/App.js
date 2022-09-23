import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Login from './Components/Login/Login.jsx';
import { useDispatch, useSelector } from 'react-redux';
import Home from './Components/Home/Home.jsx';
import Navbar from './Components/Navbar/Navbar';
import { WppAvatar } from './Components/Home/styledComponents';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import { LoginForm } from './Components/Login/LoginForm.jsx';
// import { RegisterForm } from './Components/Login/RegisterForm.jsx';
import Loading from './Components/Loading/Loading.jsx';
import { Profile } from './Components/Login/Profile.jsx';
import NewProduct from './Components/NewProduct/NewProduct.jsx';
import Uploading from './Components/Uploading/Uploading.jsx';
import Admin from './Components/Admin/Admin';
import Privacy from './Components/Privacy/Privacy';
import ContactUs from './Components/ContactUs/ContactUs.jsx';
import Membership from './Components/Membership/Membership.jsx';
import Service from './Components/Service/Service';
import PayPal from './Components/PayPal/PayPal';
import CardDetail from './Components/CardDetail/CardDetail.jsx';
import Pay from './Components/Pay/Pay.jsx';
import Faq from './Components/Faq/Faq.jsx';
import { UserSite } from './Components/userSite/UserSite.js';
import { useAuth0 } from '@auth0/auth0-react';
import { postUserGoogle } from './Redux/Actions/actions';
// import iconx from './img/iconoX.png'


function App() {
   const dispatch = useDispatch();
   const { user } = useAuth0();
   const aux = useSelector((state) => {
      return state.aux;
   });

   const [pur, setPur] = useState(false);
   useEffect(() => {
      if (user) {
         dispatch(postUserGoogle(user));
      }
   }, [user]);
   useEffect(() => {
      setPur(!pur);
   }, []);
   return (
      <div className='App'>
         {!aux && (
            <a href='https://walink.co/77da43' target='_blank' rel='noreferrer'>
               <WppAvatar>
                  <WhatsAppIcon sx={{ fontSize: 50 }} />
               </WppAvatar>
            </a>
         )}

         <BrowserRouter>
            <Routes>
               <Route path='/admin' element={<Admin />} />
               <Route path='/CardDetail/:id' element={<CardDetail />} />
               <Route path='/contactUs' element={<ContactUs />} />
               <Route path='/FAQ' element={<Faq />} />
               <Route path='/loading' element={<Loading />} />
               <Route path='/membership' element={<Membership />} />
               <Route path='/newproduct' element={<NewProduct />} />
               <Route path='/paypal' element={<PayPal />} />
               <Route path='/paypal/pay/:mount' element={<Pay />} />
               <Route path='/privacy' element={<Privacy />} />
               <Route path='/profile' element={<Profile />} />
               <Route path='/service' element={<Service />} />
               <Route path='/Uploading' element={<Uploading />} />
               <Route path='usersite/newproduct/:id' element={<NewProduct />} />
               <Route path='/userSite' element={<UserSite />} />
               <Route path='/userSite/*' element={<UserSite />} />
               {/* <Route path='/login' element={<Login />} /> */}
               {/* <Route path='/loginForm' element={<LoginForm />} /> */}
               {/* <Route path='/registerForm' element={<RegisterForm />} /> */}
               <Route exact path='/' element={<Home />} />
               <Route path='/' element={<Navbar />} />
               <Route path='*' element={<Home />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
