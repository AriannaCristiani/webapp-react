import { Outlet } from "react-router-dom";
import Header from '../layouts/Header.jsx';
import Footer from '../layouts/Footer.jsx';

export default function DefaultLayout() {
    return (
        <>
            <Header></Header>
            <Outlet />
            <Footer></Footer>
        </>
    )
}