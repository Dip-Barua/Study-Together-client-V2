import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./router/Router.jsx";
import AuthProvider from "./components/AuthProvider/AuthProvider.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>

  <AuthProvider routes={<RouterProvider router={router}></RouterProvider>
 }>
      </AuthProvider>  </StrictMode>
);
