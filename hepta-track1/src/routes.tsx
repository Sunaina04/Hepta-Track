import React from "react";
import SidebarLayout from "./Components/Sidebar/SidebarLayout";
import LoginForm from "./Components/Login/LoginForm";
import ResetPassword from "./Components/ResetPassword/ResetPassword";

const routes = [
  {
    path: "",
    element: <LoginForm />,
  },
  {
    path: "login",
    element: <LoginForm />,
  },

  {
    path: "resetPassword",
    element: <ResetPassword />,
  },
  {
    path: "forgotPassword",
    element: "",
  },
  {
    path: "",
    element: <SidebarLayout />,
    children: [
      {
        path: "dashboard",
        element: "",
      },
      {
        path: "userManagement",
        element: "",
      },
      {
        path: "agentManagement",
        element: "",
      },
      {
        path: "vehicleManagement",
        element: "",
      },
      {
        path: "expenseManagement",
        element: "",
      },
      {
        path: "smartTractorKit",
        element: "",
      },
      {
        path: "subscriptions",
        element: "",
      },
      {
        path: "adsPromotions",
        element: "",
      },
      {
        path: "instructionalVideos",
        element: "",
      },
    ],
  },
];

export default routes;
