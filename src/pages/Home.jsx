import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import GlobalContext from '../contexts/GlobalContext';
import MovieCard from '../components/MovieCard';

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const { setIsLoading } = useContext(GlobalContext);

    function fetchMovies() {
        setIsLoading(true);
        axios.get('http://localhost:3000/api/movies')
            .then(response => {
                setMovies(response.data);
            })
            .catch(err => {
                console.error(err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    useEffect(() => {
        fetchMovies();
    }, []);


    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="text-white text-center position-relative">
                <h1 className="p-4 abril-fatface-regular">MOVIES LIST</h1>

                <div className="position-absolute top-50 end-0 translate-middle-y me-4 d-flex align-items-center">
                    {showSearch && (
                        <input
                            type="text"
                            className="form-control form-control-sm rounded-pill me-2"
                            placeholder="Cerca un film..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{ width: "180px", transition: "width 0.3s ease-in-out" }}
                        />
                    )}
                    <button className="btn btn-light rounded-circle" title='search movie' onClick={() => setShowSearch(!showSearch)}>
                        <FaSearch />
                    </button>
                </div>
                <hr />
            </div>

            <section className="container neon mt-4 mb-4 card">
                <div>
                    <section className="row p-4 ms-4">
                        {filteredMovies.length > 0 ? (
                            filteredMovies.map(movie => (
                                <div key={movie.id} className="col-sm-8 col-md-6 col-lg-4 mb-4">
                                    <MovieCard movie={movie} />
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-white fs-4">Nessun film trovato</p>
                        )}
                    </section>
                </div>
            </section>
        </>
    );
}
