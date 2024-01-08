import { useAppDispatch } from "../../store/hooks";
import { login } from "../../store/user/userSlice";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

export const LoginForm = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const response = await fetch("http://localhost:8000/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        // Save the JWT token and UserID
        window.localStorage.setItem("jwt", data.jwt);

        if (response.ok) {
            alert("Login successful!");
            dispatch(login());
            navigate("/home");
        } else {
            alert("Login failed!");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)} />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};
