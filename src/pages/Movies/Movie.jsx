import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import StarsVote from '../../components/StarsVote';
import ReviewCard from '../../components/ReviewCard';
import Form from '../../components/Form';
import GlobalContext from '../../contexts/GlobalContext';



export default function Movies() {

    const [movie, setMovie] = useState(null)

    const { id } = useParams()

    const { setIsLoading } = useContext(GlobalContext)

    function fetchMovie() {

        setIsLoading(true)

        axios.get(`http://localhost:3000/api/movies/${id}`)
            .then(response => {
                setMovie(response.data)
            })
            .catch(err => {
                console.error(err)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    useEffect(() => {
        fetchMovie()
    }, [id])



    return (

        movie ? <>
            <section className="container mt-4">
                <div style={{ borderRadius: '10px', backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-auto">
                                <img src={movie.image} alt={movie.title} className="img-fluid" style={{ maxWidth: '200px', borderRadius: ' 8px 0 0 8px ' }} />
                            </div>
                            <div className="col">
                                <h1 className="card-title mb-2 abril-fatface-regular neon-color">{movie.title}</h1>
                                <div>
                                    <strong>Director: </strong>{movie.director}
                                </div>
                                <p>
                                    <strong>Gender: </strong>{movie.genre}
                                </p>
                                <strong>Plot: </strong>
                                <p className="card-text">{movie.abstract}</p>
                                <strong>Vote: </strong> <StarsVote vote={movie.avg_vote} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container'>
                {movie.reviews.length ? (
                    <>
                        <div><h2 className='text-center fs-1 py-4 abril-fatface-regular mt-4 text-white'>All reviews</h2></div>
                        <div>
                            {movie.reviews.map(review => (
                                <ReviewCard review={review} key={review.id} />
                            ))}
                        </div>
                    </>
                ) : (
                    <div className=' fs-3 py-4 abril-fatface-regular mt-4 text-white'>There are currently no reviews</div>
                )}
                <Form id={id} onSuccess={fetchMovie} key={movie.reviews.length} />
            </section>
        </> :
            <div className='container fs-5 text-center text-white mt-4'>Information from the movie could not be reached</div>

    )
}

