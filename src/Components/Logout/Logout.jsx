import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const remove = async () => {
    try {
      localStorage.removeItem("token"); // Clear the token or any other user-related info
      navigate("/"); // Navigate to the homepage after logout
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    remove();
  }, []); // This ensures the function is only called once when the component is mounted.

  return null;
}

export default Logout;
