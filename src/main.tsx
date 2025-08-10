import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Toaster } from "./components/ui/sonner.tsx";
import { Analytics } from "@vercel/analytics/react";
import App from "./App.tsx";
import About from "@/About.tsx";
import Gallery from "@/Gallery.tsx";
import ClothingDetail from "@/components/ClothingDetail.tsx";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/gallery",
      element: <Gallery />,
    },
    {
      path: "/clothing/:id",
      element: <ClothingDetail />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
    <Analytics />
  </React.StrictMode>,
);
