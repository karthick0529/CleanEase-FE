import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import http from "../../../utils/http";
import "./RegisterCheck.css";

function RegisterCheck() {
  const { registerToken } = useParams();
  const [animation, setAnimation] = useState(true);
  const [error, setError] = useState("");

  const verifyUserRegistration = async (registerToken) => {
    try {
      const { data } = await http.get(`/auth/register-check/${registerToken}`);
      setAnimation(false);
      alert("Registration Success!");
      localStorage.setItem("token", data.token);
      window.location = "/";
    } catch (err) {
      setAnimation(false);
      if (err.message === "Network Error") {
        setError("Connection timeout! DB not responding");
      } else if (err.response.status === 400) {
        setError(err.response.data);
      } else {
        setError(err.message);
      }
    }
  };

  useEffect(() => {
    verifyUserRegistration(registerToken);
  }, [registerToken]);

  return (
    <div className="RegisterCheck_Container">
      <div className="RegisterCheck_Image" />
      <div className="RegisterCheck_Content">
        {animation && !error ? (
          <div className="RegisterCheck_Loading">
            <CircularProgress />
          </div>
        ) : null}
        {!animation && !error ? (
          <div className="RegisterCheck_Success">
            <h2>Verification Success</h2>
            <p>Please login with your email and password</p>
          </div>
        ) : null}
        {!animation && error ? (
          <div className="RegisterCheck_Error">
            <h2>Error Verifying Register</h2>
            <p>{error}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default RegisterCheck;
