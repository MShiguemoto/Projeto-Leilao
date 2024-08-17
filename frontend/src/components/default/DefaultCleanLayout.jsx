import React from "react";
import "./DefaultCleanLayout.css";

const DefaultCleanLayout = ({ child }) => {

    return (
        <div className="DefaultCleanLayout">
            <child />
        </div>
    );
}
export default DefaultCleanLayout;