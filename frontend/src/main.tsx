import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Home,
  Login,
  PersonalData,
  AccessCredentials,
  Subcription,
} from "./pages/index.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    children: [
      {
        path: "personal-data",
        element: <PersonalData />,
      },
      {
        path: "access-credentials",
        element: <AccessCredentials />,
      },
    ],
  },
  {
    path: "subcription",
    element: <Subcription />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
