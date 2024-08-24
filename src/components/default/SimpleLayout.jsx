import React from "react";
import "./SimpleLayout.css";

const SimpleLayout = ({ child }) => {

    return (
        <div className="SimpleLayout">
            <child />
        </div>
    );
}
export default SimpleLayout;