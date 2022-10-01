import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login/Login";
import Produtos from "./Produtos/Produtos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/produtos",
    element: <Produtos />,
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
