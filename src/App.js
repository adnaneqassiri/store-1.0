import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

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
            ],
        },
    ]);
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}
