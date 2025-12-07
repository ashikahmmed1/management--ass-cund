import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import Loader from "../component/Loaders/Loader";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // Show spinner while auth state loading
  if (loading) {
    return <Loader />;
  }

  // If user is logged in → allow access
  if (user) {
    return children;
  }

  // If not logged in → redirect to signin page
  return (
    <Navigate
      to="/signin"
      state={{ from: location.pathname }}
      replace
    />
  );
};

export default PrivateRoute;
