import {
    createBrowserRouter, } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home";
import Register from "../Register/Register";
import SignIn from "../SignIn/SignIn";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: "error element",
      children: [
        { path: "/",
             element: <Home /> },
        { path: "/register",
             element: <Register/> },
        { path: "/login",
             element: <SignIn/> },

 
      ],
    },
  ]);


  export default router;