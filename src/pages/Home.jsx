import { useEffect, useState, useContext } from 'react';
import MovieCard from '../components/MovieCard';
import axios from 'axios';
import GlobalContext from '../contexts/GlobalContext';

export default function Home() {

    const [movies, setMovies] = useState([])

    const { setIsLoading } = useContext(GlobalContext)


    function fetchMovies() {

        setIsLoading(true)

        axios.get('http://localhost:3000/api/movies')
            .then(response => {
                // console.log(response)
                setMovies(response.data)
            })
            .catch(err => {
                console.error(err)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }


    useEffect(() => {
        fetchMovies()
    }, [])

    return (
        <section className="container neon mt-4 mb-4 card">
            <div>
                <h1 className='text-center p-4 abril-fatface-regular text-white'>ELENCO DEI FILM</h1>
                <section className="row d-flex justify-content-center align-items-center">
                    {
                        movies.map(movie => {
                            return (
                                <div key={movie.id} className="col-sm-8 col-md-6 col-lg-4 mb-4">
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