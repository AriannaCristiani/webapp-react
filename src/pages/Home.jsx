import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import axios from 'axios';

export default function Home() {

    const [movies, setMovies] = useState([])

    function fetchMovies() {

        axios.get('http://localhost:3000/api/movies', {
        })
            .then(response => {
                // console.log(response)
                setMovies(response.data)
            })
            .catch(err => {
                console.error(err)
            })
    }


    useEffect(() => {
        fetchMovies()
    }, [])

    return (
        <section className="container">
            <div>
                <h1>ELENCO DEI FILM</h1>
                <section>
                    <ul>
                        {
                            movies.map(movie => {
                                return <li key={movie.id}>
                                    <MovieCard movie={movie}></MovieCard>
                                </li>
                            })
                        }
                    </ul>
                </section>
            </div>
        </section>
    )
}