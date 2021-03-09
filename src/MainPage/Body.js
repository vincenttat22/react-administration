import React, {useEffect} from "react";
import {Switch, Route} from "react-router-dom";
import 'react-intl-tel-input/dist/main.css'
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Pricing from "./Pricing";
import Features from "./Features";
import Contact from "./Contact";
import Login from "./Login";
import {useDispatch} from "react-redux";
import {checkLoginStatus} from "../redux/duck/HandleLogin";



function MainBody(props) {
    const dispatch = useDispatch();
    useEffect(function (){
        dispatch(checkLoginStatus())
    },[dispatch])
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Pricing" component={Pricing} />
                <Route exact path="/Features" component={Features} />
                <Route exact path="/Contact" component={Contact} />
                <Route exact path="/Login" component={Login} />
            </Switch>
            <Footer/>
        </div>
    );
}


export default MainBody;

