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
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import About from "../pages/About";

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
             element: <PrivateRoute> <CreateAssignment/> </PrivateRoute> },
        { path: "/assignments",
             element: <Assignments/> },
        { path: "/update-assignment/:id",
             element: <PrivateRoute> <UpdateAssignment/></PrivateRoute>  },
        { path: "/view-assignment/:id",
             element: <PrivateRoute><ViewAssignment/>  </PrivateRoute> },
        { path: "/my-attempted-assignment",
             element: <MyAttemptedAssignment/> },
        { path: "/pending-assignments",
             element: <PrivateRoute> <PendingAssignment/></PrivateRoute>  },
        { path: "/about",
             element: <About></About> },

 
      ],
    },
  ]);


  export default router;