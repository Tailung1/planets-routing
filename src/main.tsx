import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globals.css";  
import "./index.css";  
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Planet from "./components/Planet";

// Router setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/:planetName",
        element: <Planet />
      }
    ]
  }
]);

// Render the app
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
