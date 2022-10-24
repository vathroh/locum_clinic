import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./pages/chat/index";
import Login from "./pages/auth/Login";
import ProtectedRoutes from "./ProtectedRoutes";

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<ProtectedRoutes />}>
                        <Route path="/" element={<Chat />} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;
