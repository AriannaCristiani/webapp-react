import { Link } from "react-router-dom"

export default function Header() {
    return (
        <footer className="container-full p-4 neon">
            <div>
                <Link to="/" className="text-white fs-2 abril-fatface-regular">Torna alla Home</Link>
            </div>
        </footer>

    )
}