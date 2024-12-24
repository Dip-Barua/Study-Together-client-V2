import {
    createBrowserRouter, } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home";
import Register from "../Register/Register";
import SignIn from "../SignIn/SignIn";
import Error from "../components/Error/Error";
import UpdateProfile from "../UpdateProfile/UpdateProfile";
import CreateAssignment from "../pages/CreateAssignment";
import Assignments from "../pages/Assignments";
import UpdateAssignment from "../pages/UpdateAssignment";

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
        { path: "/update-user",
             element: <UpdateProfile/> },
        { path: "/create-assignment",
             element: <CreateAssignment/> },
        { path: "/assignments",
             element: <Assignments/> },
        { path: "/update-assignment/:id",
             element: <UpdateAssignment/> },

 
      ],
    },
  ]);


  export default router;