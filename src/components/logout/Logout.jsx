import React from "react"
import { Button } from 'primereact/button'
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

    const tryLogout = () => {
        
        if (localStorage.getItem("token")) {
            localStorage.removeItem("token", token);
            localStorage.removeItem("email", usuario.email);
            navigate("/login")
        }
    }

    return (<>
        <Button onClick={tryLogout} Label="Logout" id="Logout"></Button>
    </>);
}

export default Logout;