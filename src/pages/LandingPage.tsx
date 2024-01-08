import BasicThreadList from "../components/Home/BasicThreadList";
import NavBar from "../components/shared/NavBar";
import React from "react";

const LandingPage: React.FC = () => {
    return (
        <>
            <NavBar />
            <h3>
                {"Welcome to CVWO's sample react app! Here's a basic list of forum threads for you to experiment with."}
            </h3>
            <br />
            <BasicThreadList />
        </>
    );
};

export default LandingPage;
