import Header from "./Header";
import '@fortawesome/fontawesome-svg-core';
import React from "react";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getKey} from "../redux/reducer/AppReducer";
import '../css/App.css'
import SideBar from "./Sidebar";

function App(props) {
    // const auth = useSelector((state) => state.handleLogin.auth);
    // const appKey = useSelector((state) => state.appReducer)
    const [collapseSidebar,setCollapseSidebar] = useState("");
    const auth = useSelector((state)=> state.handleLogin.auth);

    const appDispatch = useDispatch();
    useEffect(() => {
        appDispatch(getKey());
        if (!auth) {
            props.history.push("/login");
        }
    }, [appDispatch,auth])


    return (<div className={`hold-transition sidebar-mini layout-fixed ${collapseSidebar}`}>
        <div className="wrapper">
            <Header OnCollapseSidebar={()=>setCollapseSidebar(collapseSidebar === "sidebar-collapse" ? "" : "sidebar-collapse")} />
            <SideBar />

        </div>
    </div>);
}


export default App;
