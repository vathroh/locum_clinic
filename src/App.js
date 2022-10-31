import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//login
import Login from "./pages/login/login";
import ForgotPassword from "./pages/login/forgot_password";
import ResetPassword from "./pages/login/reset_password";

//dashboard
import Dashboard from "./pages/dashboard/dashboard";
import Home from "./pages/dashboard/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
