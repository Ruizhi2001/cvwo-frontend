import NavBar from "../components/shared/NavBar";
import { LoginForm } from "../components/Login/LoginForm";
import React from "react";

const Login = () => {
    return (
        <>
            <NavBar />
            <h3>{"This is the login page."}</h3>
            <br />
            <LoginForm />
        </>
    );
};

export default Login;
