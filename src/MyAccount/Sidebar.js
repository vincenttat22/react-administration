import Avatar from "react-avatar";
import React from "react";
import logo from "../logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalendar, faPowerOff, faHamburger} from '@fortawesome/free-solid-svg-icons'
import {ActionCreators} from "../redux/reducer/AppReducer";
import {useDispatch} from "react-redux";
import adminCSS from '../css/adminlte.min.css'

function SideBar(props) {
    const dispatch = useDispatch();
    function logout() {
        dispatch(ActionCreators.processLogout());
    }
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="index3.html" className="brand-link">
                <img style={{height: '40px'}} src={logo} alt=""/>
                    <span className="brand-text font-weight-light">My Restaurant</span>
            </a>

            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <Avatar name="Wim Mostmans" size="35" round={true}/>
                    </div>
                    <div className="info">
                        <a href="#" className="d-block">Alexander Pierce</a>
                    </div>
                </div>

                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" role="menu"
                        data-accordion="false">
                        <li className="nav-item">
                            <a href="/app/cuisine" className="nav-link">
                                <FontAwesomeIcon icon={faHamburger} className="nav-icon " />
                                <p>
                                    Cuisine
                                    {/*<span className="right badge badge-danger">New</span>*/}
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/app/booking" className="nav-link">
                                <FontAwesomeIcon icon={faCalendar} className="nav-icon " />
                                <p>
                                    Booking
                                    {/*<span className="right badge badge-danger">New</span>*/}
                                </p>
                            </a>
                        </li>
                        <li className="nav-header"></li>
                        <li className="nav-item">
                            <a href="#" onClick={logout} className="nav-link">
                                <FontAwesomeIcon icon={faPowerOff}  className="nav-icon " />
                                <p>
                                    Logout
                                </p>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default SideBar;
