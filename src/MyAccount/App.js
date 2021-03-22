import Header from "./Header";
import '@fortawesome/fontawesome-svg-core';
import React from "react";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import '../css/App.css'
import SideBar from "./Sidebar";
import {Route, useLocation, useParams} from "react-router";
import Cuisine from "./Cuisine";
import Booking from "./Booking";
import Verify from "./Verify";

function App(props) {
    const [collapseSidebar,setCollapseSidebar] = useState("sidebar-collapse");
    const loginStatus = useSelector((state)=> state.appReducer);
    const pathname = useLocation();
    const params = useParams();
    useEffect(() => {
        if (loginStatus.auth !== undefined && !loginStatus.auth) {
            props.history.push("/login");
        } else if(loginStatus.auth) {
            if(!loginStatus.is_verified && pathname.pathname !== "/app/verify" && params === undefined) {
                props.history.push("/app/verify");
            }
        }
    }, [loginStatus,props])

    return (<div className={`hold-transition sidebar-mini layout-fixed ${collapseSidebar}`}>
        <div className="wrapper">
            <Header OnCollapseSidebar={()=>setCollapseSidebar(collapseSidebar === "sidebar-collapse" ? "" : "sidebar-collapse")} />
            <SideBar ShowToolTip={collapseSidebar === "sidebar-collapse" ? undefined : false} />
            <div className="content-wrapper" style={{marginTop:"50px",minHeight:"calc(100vh - 50px)"}}>
                <Route exact path="/app/cuisine" component={() => <Cuisine />}/>
                <Route exact path="/app/booking" component={Booking}/>
                <Route exact path="/app/verify" component={Verify} />
            </div>

        </div>
    </div>);
}


export default App;
