import { Outlet } from "react-router-dom";
import Header from '../layouts/Header.jsx';
import Footer from '../layouts/Footer.jsx';

export default function DefaultLayout() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <main className="flex-grow-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}