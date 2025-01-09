import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <ul className='d-flex justify-content-center gap-4 fs-3'>
                <li>
                    <NavLink to='/' className='text-white'>HOME PAGE</NavLink>
                </li>
                <li>
                    <NavLink to='/about' className='text-white' >ABOUT US</NavLink>
                </li>
                <li>
                    <NavLink to='/contacts' className='text-white' >CONTACTS</NavLink>
                </li>
            </ul>
        </nav>
    )
}