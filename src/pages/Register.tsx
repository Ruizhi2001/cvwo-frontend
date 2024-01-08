import NavBar from "../components/shared/NavBar";
import { RegistrationForm } from "../components/Registeration/RegistrationForm";
import React from "react";

function Register() {
    return (
        <>
            <NavBar />
            <h3>{"This is the registration page."}</h3>
            <br />
            <RegistrationForm />
        </>
    );
}

export default Register;
