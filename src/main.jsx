import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import AddToPage from "./pages/AddTOPAGE/AddToPage";
import CoffeSingle from "./components/CoffeSingle";
import CoffeUpdate from "./components/CoffeUpdate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:3000/coffes"),
      },
    ],
  },
  {
    path: "/coffes/:id",
    element: <CoffeSingle></CoffeSingle>,
    loader: ({ params }) => fetch(`http://localhost:3000/coffes/${params.id}`),
  },
  {
    path: "/coffesUpdate/:id",
    element: <CoffeUpdate></CoffeUpdate>,
    loader: ({ params }) => fetch(`http://localhost:3000/coffes/${params.id}`),
  },
  {
    path: "addCoffes",
    element: <AddToPage></AddToPage>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
