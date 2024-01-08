import * as React from "react";
import { Navigate } from "react-router-dom";

interface RouteGuardProps {
    destination: React.ReactNode;
}

export const RouteGuard: React.FC<RouteGuardProps> = ({ destination }) => {
    const hasJWT = () => {
        const token = localStorage.getItem("jwt");
        if (token) {
            return true;
        } else {
            return false;
        }
    };

    if (hasJWT()) {
        console.log("has jwt");
        return <>{destination}</>;
    }
    console.log("no jwt");
    alert("You must be logged in to access this page!");
    return <Navigate to="/" />;
};
