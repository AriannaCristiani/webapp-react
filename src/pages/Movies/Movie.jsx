import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import StarsVote from '../../components/StarsVote';



export default function Movies() {

    const [movie, setMovie] = useState(null)

    const { id } = useParams()

    function fetchMovie() {
        axios.get(`http://localhost:3000/api/movies/${id}`)
            .then(response => {
                setMovie(response.data)
            })
            .catch(err => {
                console.error(err)
            })
    }

    useEffect(() => {
        fetchMovie()
    }, [id])

    return (

        movie ? <>
            <section className="container mt-4">
                <div className="card" style={{ borderRadius: '10px', backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-auto">
                                <img src={movie.image} alt={movie.title} className="img-fluid" style={{ maxWidth: '200px', borderRadius: '8px' }} />
                            </div>
                            <div className="col">
                                <h1 className="card-title">{movie.title}</h1>
                                <div>
                                    <strong>Regista: </strong>{movie.director}
                                </div>
                                <p>
                                    <strong>Genere: </strong>{movie.genre}
                                </p>
                                <strong>Voto: </strong> <StarsVote vote={movie.avg_vote} />
                                <p className="card-text">{movie.abstract}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </> :
            <div>Loading...</div>

    )
}

