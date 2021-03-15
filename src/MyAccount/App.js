import Header from "./Header";
import '@fortawesome/fontawesome-svg-core';
import React from "react";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import '../css/App.css'
import SideBar from "./Sidebar";
import {Route} from "react-router";
import Cuisine from "./Cuisine";
import Booking from "./Booking";

function App(props) {
    const [collapseSidebar,setCollapseSidebar] = useState("");
    const auth = useSelector((state)=> state.appReducer.auth);
    useEffect(() => {
        if (auth !== undefined && !auth) {
            props.history.push("/login");
        }
    }, [auth,props])

    return (<div className={`hold-transition sidebar-mini layout-fixed ${collapseSidebar}`}>
        <div className="wrapper">
            <Header OnCollapseSidebar={()=>setCollapseSidebar(collapseSidebar === "sidebar-collapse" ? "" : "sidebar-collapse")} />
            <SideBar />
            <Route exact path="/app/cuisine" component={() => <Cuisine />}/>
            <Route exact path="/app/booking" component={Booking}/>
        </div>
    </div>);
}


export default App;
