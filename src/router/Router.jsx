import {
    createBrowserRouter, } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home";
import Register from "../Register/Register";
import SignIn from "../SignIn/SignIn";
import Error from "../components/Error/Error";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
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