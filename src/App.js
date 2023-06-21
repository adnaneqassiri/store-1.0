import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Purchase from "./pages/Purchase";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./CartContext";
import { useState, useEffect } from "react";
import Modal from "./components/Modal";

export default function App() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);
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
            <Modal show={show} handleClose={handleClose} />
            <CartProvider>
                <RouterProvider router={router} />
            </CartProvider>
        </>
    );
}
