import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";

import Root from "./pages/Root/Root";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import ProductDetails from "./pages/Product/ProductDetails";
import Cart from "./pages/Cart/Cart";
import MyOrders from "./pages/MyOrders/MyOrders";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";

import ProtectedRoute from "./components/Routes/ProtectedRoute";


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "product", Component: Product },
      { path: "product/:id", Component: ProductDetails },

      {
        path: "cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: "my-orders",
        element: (
          <ProtectedRoute>
            <MyOrders />
          </ProtectedRoute>
        ),
      },

      { path: "about", Component: About },
      { path: "login", Component: Login },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
      <RouterProvider router={router} />
    
  </StrictMode>,
);
