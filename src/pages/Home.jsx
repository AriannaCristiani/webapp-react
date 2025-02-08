import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import GlobalContext from '../contexts/GlobalContext';
import MovieCard from '../components/MovieCard';

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
        <>
            <div className='text-white text-center'>
                <h1 className=' p-4 abril-fatface-regular '>ELENCO DEI FILM</h1>
                <hr />
            </div>
            <section className="container neon mt-4 mb-4 card">
                <div>

                    <section className="row p-4 ms-4">
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
        </>
    )
}