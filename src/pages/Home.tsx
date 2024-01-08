import BasicThreadList from "../components/Home/BasicThreadList";
import RichTextEditor from "../components/Post/RichTextEditor";
import NavBar from "../components/shared/NavBar";
import React from "react";

export const Home = () => {
    return (
        <>
            <NavBar />
            <br />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <RichTextEditor endpoint="http://localhost:8000/api/entry" />
            </div>
            <BasicThreadList />
        </>
    );
};

export default Home;
