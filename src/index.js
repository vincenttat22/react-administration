import React from 'react';
import ReactDOM from 'react-dom';
import 'jquery';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free'
import  './css/MainPage.css'
import  './css/pricing.css'
import  './css/feature.css'
import  './css/login.css'
import {Provider} from "react-redux";
import ConfigureStore from './redux/ConfigureStore'
import {BrowserRouter} from "react-router-dom";
import MainBody from "./MainPage/Body";
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
    <Provider store={ConfigureStore}>
        <BrowserRouter>
            <MainBody />
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);


reportWebVitals();
