import AppRouter from "./components/Routers/AppRouter";
import React from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#A7C6DA",
        },
        secondary: {
            main: "#EEFCCE",
        },
    },
});

const App: React.FC = () => {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <AppRouter />
            </ThemeProvider>
        </div>
    );
};

export default App;
