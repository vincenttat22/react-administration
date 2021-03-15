import Avatar from "react-avatar";
import React, {useEffect, useState} from "react";
import logo from "../logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalendar, faPowerOff, faHamburger} from '@fortawesome/free-solid-svg-icons'
import {ActionCreators} from "../redux/reducer/AppReducer";
import {useDispatch, useSelector} from "react-redux";
import '../css/adminlte.min.css'

function SideBar(props) {
    const dispatch = useDispatch();
    const appReducerUpdate = useSelector(state => state.appReducer);
    const [userProfile,setUserProfile] = useState({id:"",email:"",first_name:"",last_name:""});
    useEffect(()=> {
        let myProfile = JSON.parse(localStorage.getItem("userProfile"));
        if(myProfile !== undefined) {
            setUserProfile(myProfile)
        }
    },[appReducerUpdate])
    function logout() {
        dispatch(ActionCreators.processLogout());
    }
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="/app" className="brand-link">
                <img style={{height: '40px'}} src={logo} alt=""/>
                    <span className="brand-text font-weight-light">My Restaurant</span>
            </a>

            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <Avatar name={userProfile.first_name+" "+userProfile.last_name} size="35" round={true}/>
                    </div>
                    <div className="info">
                        <div style={{color:"white"}} className="d-block">{userProfile.first_name} {userProfile.last_name}</div>
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
                            <a href="/login" onClick={logout} className="nav-link">
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
