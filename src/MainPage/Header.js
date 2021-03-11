import logo from '../logo.svg';
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {processLogout} from "../redux/reducer/HandleLogin";
import Avatar from "react-avatar";
import '../css/header.css';


function NavLoginSection(props) {
    const dispatch = useDispatch();
    function logout() {
        dispatch(processLogout());
    }
    const auth = useSelector((state)=> state.handleLogin.auth);
    if (auth) {
        return (<div className="dropdown">
            <div className="" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <Avatar name="Wim Mostmans" size="35" round={true}/>
            </div>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="/app">My Account</a>
                <div className="dropdown-item" onClick={logout}>Lgout</div>
            </div>
        </div>);
    } else {
        return (<a className="btn btn-default" href="Login" >Login</a>);
    }
}


function MainHeader() {
    return (
        <nav className="nav-main-page navbar navbar-expand-lg navbar-light bg-light" style={{top: "0px"}}>
            <a className="navbar-brand" href="./" style={{marginTop: "-15px"}}><img style={{height: '40px'}}
                                                                                      src={logo} alt=""/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="Pricing">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="Features">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="Contact">Contact</a>
                    </li>
                    <li className="nav-item">
                        <NavLoginSection/>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default MainHeader;
