import logo from '../logo.svg';
import React, {useState} from "react";
import {useSelector} from "react-redux";


function SeeInAction(props) {
    const [inaction,setInaction] = useState(false)
    const handleSeeInAction = () => {
        setInaction(!inaction);
    }
    if (!inaction) {
        return (<button className="btn btn-primary enableHD" onClick={handleSeeInAction}>See it in
            action</button>);
    } else {
        return (<button className="btn btn-danger disableHD" onClick={handleSeeInAction}><span
            className="glyphicon glyphicon-remove"></span> Disable HelpDesk </button>);
    }
}

function NavLoginSection(props) {
    const auth = useSelector((state)=> state.handleLogin.auth);
    if (auth) {
        return (<a className="btn btn-default" href="MyAccount" >My Account</a>);
    } else {
        return (<a className="btn btn-default" href="Login" >Login</a>);
    }
}

function MainHeader() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{top: "0px"}}>
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
                        <SeeInAction/>
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
