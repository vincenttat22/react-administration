import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Page404() {
    return <div>
        <Header/>
        <section style={{height:"calc(100vh - 500px)",paddingTop:"50px"}} className="content">
            <div className="error-page">
                <h2 className="headline text-warning"> 404</h2>
                <div className="error-content">
                    <h3><i className="fas fa-exclamation-triangle text-warning"></i> Oops! Page not found.</h3>
                    <p>
                        We could not find the page you were looking for.
                        Meanwhile, you may <a href="/">return to home page</a> or try using the
                        search form.
                    </p>

                </div>
            </div>
        </section>

        <Footer/>
    </div>;
}

export default Page404;
