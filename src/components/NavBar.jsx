import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <ul className='d-flex justify-content-center gap-4'>
                <li>
                    <NavLink to='/'>HOME PAGE</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>ABOUT US</NavLink>
                </li>
                <li>
                    <NavLink to='/contacts'>CONTACTS</NavLink>
                </li>
            </ul>
        </nav>
    )
}