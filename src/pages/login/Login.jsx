import React, { useState } from "react";
import {Button} from "primereact";
import "./Login.css";
import { t } from "i18next";

const Login = () =>{
    const [user, setUser] = useState({email:"", senha:""})
    return(
        <div>
            <h1>Página de Login</h1>
            <div>
                {/* Dentro do card */}
                <h1 className='textColor'>Página de Login</h1>
                {/* Dentro do card */}
                {/* <Password onChange ={handleChange} name="password"></Password> */}
                <Button onClick={Login} label={t('button.login')}/>
            </div>
        </div>
    );
}
export default Login;