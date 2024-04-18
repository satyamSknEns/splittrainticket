import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { validateToken } from "./validateToken.js";
import { getCookie, removeCookie } from "./coockies.js";
import Loader from "../components/loader.js";

const ProtectedRoute = ({ element: Element }) => {
  const navigate = useNavigate();
  const [isValidated, setIsValidated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getCookie("token");
    if (!token) {
      removeCookie("token");
      removeCookie("user");
      navigate("/login");
    }

    validateToken(token)
      .then((user) => {
        console.log("user PrivateRoute", user);
        if (user?.success === true) {
          setIsValidated(true);
        } else {
          setIsValidated(false);
        }
      })
      .catch((error) => {
        console.error("Token validation failed:", error);
        removeCookie("token");
        removeCookie("user");
        navigate("/login");
        setIsValidated(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [navigate]);

  if (loading) {
    return (<Loader />);
  }

  return isValidated ? Element : <Navigate to="/unauthorized" />;
};

export default ProtectedRoute;
