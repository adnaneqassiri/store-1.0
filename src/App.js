import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Purchase from "./pages/Purchase";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./CartContext";

export default function App() {
    let router = createBrowserRouter([
        {
            element: <MainLayout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/products",
                    element: <Products />,
                },
                {
                    path: "/products/:id",
                    element: <ProductDetails />,
                },
                {
                    path: "purchase",
                    element: <Purchase />,
                },
                {
                    path: "*",
                    element: <NotFound />,
                },
            ],
        },
    ]);
    return (
        <>
            <CartProvider>
                <RouterProvider router={router} />
            </CartProvider>
        </>
    );
}
