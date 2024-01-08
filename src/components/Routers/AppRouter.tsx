import { RouteGuard } from "./RouteGuard";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import BasicThreadView from "../../pages/BasicThreadView";
import StyledThreadView from "../../pages/StyledThreadView";
import LandingPage from "../../pages/LandingPage";
import Home from "../../pages/Home";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/thread/1" element={<BasicThreadView />} />
                <Route path="/thread/1/styled" element={<StyledThreadView />} />
                <Route path="/home" element={<RouteGuard destination={<Home />} />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
