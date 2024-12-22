import {
    createBrowserRouter, } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: "error element",
      children: [
        { path: "/",
             element: <Home /> },

 
      ],
    },
  ]);


  export default router;