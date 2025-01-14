import { Outlet } from "react-router-dom";
import Header from '../layouts/Header.jsx';
import Footer from '../layouts/Footer.jsx';
import Loader from "../components/Loader.jsx";
import { useContext } from 'react';
import GlobalContext from "../contexts/GlobalContext.js";

export default function DefaultLayout() {

    const { isLoading } = useContext(GlobalContext)

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <main className="flex-grow-1">
                <Outlet />
            </main>
            <Footer />
            {isLoading && <Loader />}
        </div>
    );
}