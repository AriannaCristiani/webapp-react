import { NavLink } from "react-router-dom";

export default function Nav() {
    <nav>
        <ul>
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
}