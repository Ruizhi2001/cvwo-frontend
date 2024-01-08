import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { logout } from "../../store/user/userSlice";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
    const navigate = useNavigate();
    const isLoggedIn = useAppSelector((state) => state.user.loggedIn);
    const dispatch = useAppDispatch();

    const handleLoginClick = () => {
        navigate("/login");
    };

    const handleHomeClick = () => {
        if (isLoggedIn) {
            navigate("/home");
        } else {
            navigate("/");
        }
    };

    const handleLogoutClick = () => {
        dispatch(logout());
        localStorage.removeItem("jwt");
        navigate("/");
    };

    const handleRegisterClick = () => {
        navigate("/register");
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit" sx={{ outline: "0" }} onClick={handleHomeClick}>
                        <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontWeight: "bold" }}>
                            Gossip with Go
                        </Typography>
                    </Button>
                    <Box sx={{ flexGrow: 1 }} />
                    {isLoggedIn ? (
                        <Button color="inherit" onClick={handleLogoutClick}>
                            Logout
                        </Button>
                    ) : (
                        <>
                            <Button color="inherit" onClick={handleRegisterClick}>
                                Register
                            </Button>
                            <Button color="inherit" onClick={handleLoginClick}>
                                Login
                            </Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
