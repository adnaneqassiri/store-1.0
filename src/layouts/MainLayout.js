import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
export default function MainLayout() {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    );
}
