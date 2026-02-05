import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './pages/Root/Root.jsx';
import Home from './pages/Home/Home.jsx';
import Product from './pages/Product/Product.jsx';
import ProductDetails from './pages/Product/ProductDetails.jsx';
import Cart from './pages/Cart/Cart.jsx';
import MyOrders from './pages/MyOrders/MyOrders.jsx';
import About from './pages/About/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/product",
        Component: Product,
      },
      {
        path: "/product/:id",
        Component: ProductDetails,
      },
      {
        path: "/cart",
        Component: Cart,
      },
      {
        path: "/my-orders",
        Component:MyOrders,
      },
      {
        path: '/about',
        Component: About,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
);
