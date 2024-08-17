import React from "react";
import "./DefaultLayout.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const DefaultLayout = ({ child }) => {

    return (
        <div className="DefaultLayout">
            <Header />
            <child />
            <Footer />
        </div>
    );
}
export default DefaultLayout;