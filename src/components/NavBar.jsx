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
                <ul className='d-flex justify-content-between gap-4 fs-4'>
                    <li>
                        <NavLink to='/' className='text-white abril-fatface-regular'>FILM</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className='text-white abril-fatface-regular' >CHI SIAMO</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contacts' className='text-white abril-fatface-regular' >CONTATTI</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}