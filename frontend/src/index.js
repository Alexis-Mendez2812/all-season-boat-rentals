import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

import { Provider } from 'react-redux';
import store from './Redux/Store/store';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

// axios.defaults.baseURL = 'https://yachtimeapp.herokuapp.com';
axios.defaults.baseURL = 'http://localhost:3001';

ReactDOM.render(
   <Provider store={store}>
      <Auth0Provider
         domain='dev-xiwxe9u1.us.auth0.com'
         clientId='FkFcMVkaXA6m2oupkve9w8kaXJrmdI6i'
         redirectUri={window.location.origin}
      >
         <App />
      </Auth0Provider>
   </Provider>,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
