import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Roots from "./Routes/Roots";
import Home from "./Pages/Home";
import Queries from "./Pages/Queries";
import Recommend from "./Pages/Recommend";
import My_queries from "./Pages/My_queries";
import My_recommend from "./Pages/My_recommend";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AuthProvider from "./Provider/AuthProvider";
import AddQueries from "./Pages/AddQueries";
import Update from "./Pages/Update";
import ViewDetails from "./Pages/ViewDetails";
import ErrorPage from "./Pages/ErrorPage";
import PrivetRoute from "./PrivetRoute/PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/queries",
        element: <Queries></Queries>,
      },
      {
        path: "/recommend",
        element: <PrivetRoute><Recommend></Recommend></PrivetRoute>
      },
      {
        path: "/my_queries",
        element: <PrivetRoute><My_queries></My_queries></PrivetRoute>
      },
      {
        path: "/my_recommend",
        element: <PrivetRoute><My_recommend></My_recommend>,</PrivetRoute>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path : '/addQueries',
        element : <PrivetRoute><AddQueries></AddQueries></PrivetRoute>
      },
      {
        path : '/update/:id',
        element : <PrivetRoute><Update></Update></PrivetRoute>,
        loader: ({params}) => fetch(`https://alternative-product-information-server-iota.vercel.app/product/${params.id}`)
      },
      {
        path : '/details/:id',
        element : <PrivetRoute><ViewDetails></ViewDetails></PrivetRoute>,
        loader: ({params}) => fetch(`https://alternative-product-information-server-iota.vercel.app/product/${params.id}`)
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
