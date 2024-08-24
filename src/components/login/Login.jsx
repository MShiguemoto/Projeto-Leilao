import React, { useState } from "react";
import { InputText, Button } from 'primereact/InputText'
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = ({ child }) => {
    const [user, setuser] = useState({ email: "", password: "" })
    const navigate = useNavigate();

    const handleChange = (input) => {
        setuser({ ...user, [input.target.name]: input.target.value });
    }

    const login = () => {
        //chamada para o back-end para verificar as credenciais

        if (user.email == "Shig" && user.password == "123") {
            let token = "token do backend";
            localStorage.setItem("token", token);
            localStorage.setItem("email", user.email);

            navigate("/");
        } else {
            alert("usuário ou senha incorretos")
        }

    }

    return (
        <div className="flex justify-content-center align-items-center min-h-screen">
            <Card title="Login" className="p-4" style={{ width: '400px' }}>
                <div className="grid">
                    <div className="field col-12">
                        <label htmlFor="email">Email</label>
                        <InputText onChange={handleChange} name="email" id="email"></InputText>
                    </div>
                    <div className="field col-12">
                        <label htmlFor="password">Senha</label>
                        <InputText onChange={handleChange} name="password" id="password"></InputText>
                    </div>

                    <Button onClick={login} label="Login" className="w-full mt-3"></Button>

                </div>
            </Card>
        </div>
    );
}
export default Login;