import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  AccessCredentials,
  Home,
  Login,
  PaymentSelection,
  PersonalData,
  AccountVerification,
  Subcription,
} from "./pages";
import { RegisterLayout } from "./components/Register";
import { Step } from "./components/Register/propTypes.d";

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
    element: <RegisterLayout />,
    children: [
      {
        path: Step.STEP_1,
        element: <PersonalData />,
      },
      {
        path: Step.STEP_2,
        element: <AccessCredentials />,
      },
      {
        path: Step.STEP_3,
        element: <AccountVerification />,
      },
      {
        path: Step.STEP_4,
        element: <PaymentSelection />,
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
