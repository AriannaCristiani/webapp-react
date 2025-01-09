import { Link } from "react-router-dom"

export default function Header() {
    return (
        <footer className="container-full p-4 bg-success">
            <div>
                <Link to="/" className="text-white fs-4 ">Torna alla Home</Link>
            </div>
        </footer>

    )
}