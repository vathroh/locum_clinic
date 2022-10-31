import React from "react";
import { useNavigate } from "react-router-dom";
import Background from "../../assets/forgot_password.png"

function ForgotPassword() {
    const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/reset-password')
  };

    return (
        <div
            onClick={handleSubmit}
            style={{
                width: "100vw",
                height: "100vh",
                backgroundImage: `url('${Background}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        />
    );
}

export default ForgotPassword;