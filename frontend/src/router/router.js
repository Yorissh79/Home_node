import Layout from "../components/layout/Layout";
import Home from "../pages/home/Home";
import Basket from "../pages/basket/Basket";
import Wishlist from "../pages/wishlist/Wishlist";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                path: "/",
                Component: Home
            },
            {
                path: "/basket",
                Component: Basket
            },
            {
                path: "/wish",
                Component: Wishlist
            }
        ]
    }
])