import { NavLink, Link } from "react-router-dom";


export default function NavBar() {
    return (
        <nav className="d-flex justify-content-between align-items-center ">
            <div >
                <Link to="/">
                    <img className="logo" src="../public/logo.jpg" alt="logo" title="back to Home" />
                </Link>
            </div>
            <div>
                <ul className='d-flex justify-content-between gap-4 fs-5'>
                    <li>
                        <NavLink to='/home' className='text-white abril-fatface-regular'>MOVIES</NavLink>
                    </li>
                    <li>
                        <NavLink to='/form' className='text-white abril-fatface-regular' >JOIN US</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}