import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./router/Router.jsx";
import AuthProvider from "./components/AuthProvider/AuthProvider.jsx";
import { ThemeProvider } from "./ThemeContext.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
<ThemeProvider> <AuthProvider routes={<RouterProvider router={router}></RouterProvider>
 }>
      </AuthProvider> </ThemeProvider>
   </StrictMode>
);
