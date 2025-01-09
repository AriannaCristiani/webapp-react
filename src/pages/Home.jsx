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
                <h1 className='text-center text-success p-4'>ELENCO DEI FILM</h1>
                <section className="row">
                    {
                        movies.map(movie => {
                            return (
                                <div key={movie.id} className=" col-sm-8 col-md-6 col-lg-4 mb-4">
                                    <MovieCard movie={movie}></MovieCard>
                                </div>
                            )
                        })
                    }
                </section>
            </div>
        </section>
    )
}