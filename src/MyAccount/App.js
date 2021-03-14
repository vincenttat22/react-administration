import Header from "./Header";
import '@fortawesome/fontawesome-svg-core';
import React from "react";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ActionCreators} from "../redux/reducer/AppReducer";
import '../css/App.css'
import SideBar from "./Sidebar";
import {Route} from "react-router";
import Cuisine from "./Cuisine";
import Booking from "./Booking";

function App(props) {
    // const auth = useSelector((state) => state.handleLogin.auth);
    // const appKey = useSelector((state) => state.appReducer)
    const [collapseSidebar,setCollapseSidebar] = useState("");
    const auth = useSelector((state)=> state.appReducer.auth);
    const cuisineData = useSelector((state)=> state.appReducer.cuisine);
    const appDispatch = useDispatch();
    useEffect(() => {
        // appDispatch(getKey());
        appDispatch(ActionCreators.getCuisine());
        if (!auth) {
            props.history.push("/login");
        }
    }, [appDispatch,auth,props])


    return (<div className={`hold-transition sidebar-mini layout-fixed ${collapseSidebar}`}>
        <div className="wrapper">
            <Header OnCollapseSidebar={()=>setCollapseSidebar(collapseSidebar === "sidebar-collapse" ? "" : "sidebar-collapse")} />
            <SideBar />
            <Route exact path="/app/cuisine" component={() => <Cuisine cuisine={cuisineData} />}/>
            <Route exact path="/app/booking" component={Booking}/>
        </div>
    </div>);
}


export default App;
