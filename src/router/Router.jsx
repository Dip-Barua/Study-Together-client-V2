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
import ViewAssignment from "../pages/ViewAssignment";
import MyAttemptedAssignment from "../pages/MyAttemptedAssignment";
import PendingAssignment from "../pages/PendingAssignment";

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
        { path: "/view-assignment/:id",
             element: <ViewAssignment/> },
        { path: "/my-attempted-assignment",
             element: <MyAttemptedAssignment/> },
        { path: "/pending-assignments",
             element: <PendingAssignment/> },

 
      ],
    },
  ]);


  export default router;