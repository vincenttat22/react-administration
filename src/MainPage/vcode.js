import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function VCode() {

    return <div>
        <Header/>
        <section style={{height:"calc(100vh - 500px)",paddingTop:"50px"}} className="content">
            <div className="error-page">
                <div className="error-content">
                    <div className="spinner-border" style={{width: "3rem", height: "3rem"}} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>
    </div>;
}

export default VCode;
