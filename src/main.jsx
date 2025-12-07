import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { AuthProvider } from "./context/AuthProvider";
import { ToastContainer } from "react-toastify";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} /> 
      <ToastContainer />
    </AuthProvider>
  </React.StrictMode>
);
