import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Login, Register, Subcription } from "./pages";
import { AccountVerification } from "./pages/AccountVerification";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "register",
    element: <Register />
  },
  {
    path: "subcription",
    element: <Subcription />
  },
  {
    path: "account-verification",
    element: <AccountVerification />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
