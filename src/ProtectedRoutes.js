import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
    const idToken = useSelector((state) => state.idToken);
    let login = idToken !== "";

    useEffect(() => {
        if (idToken === "") {
            login = false;
        }
    }, [idToken]);

    return login ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;
