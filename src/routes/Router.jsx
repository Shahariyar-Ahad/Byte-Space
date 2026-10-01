import { createBrowserRouter } from "react-router";
import Layout from "../rootLayout/Layout";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../rootLayout/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import Errorpage from "../pages/ErrorPage/Errorpage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Errorpage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "*",
        element: <Errorpage />,
      },
    ],
  },

  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);