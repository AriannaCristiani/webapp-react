import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <footer className="container-full p-4 neon">
            <div>

                <NavLink to='/contacts' className='text-white abril-fatface-regular' >CONTATTI</NavLink>

            </div>
        </footer>

    )
}