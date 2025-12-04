import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Routes/Routes";
import { Toaster } from "react-hot-toast";
import Authprovider from "./Pages/Authprovider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={router}></RouterProvider>
      <Toaster/>
    </Authprovider>
  </StrictMode>
);
