import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import StarsVote from '../../components/StarsVote';
import ReviewCard from '../../components/ReviewCard';



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
                <div className="custom-card" style={{ borderRadius: '10px', backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                    <div className="card-body">
                        <div className="row align-items-center">
                            <div className="col-auto">
                                <img src={movie.image} alt={movie.title} className="img-fluid" style={{ maxWidth: '200px', borderRadius: ' 8px 0 0 8px ' }} />
                            </div>
                            <div className="col">
                                <h1 className="card-title text-danger fw-bold mb-2">{movie.title}</h1>
                                <div>
                                    <strong>Regista: </strong>{movie.director}
                                </div>
                                <p>
                                    <strong>Genere: </strong>{movie.genre}
                                </p>
                                <strong>Trama: </strong>
                                <p className="card-text">{movie.abstract}</p>
                                <strong>Valutazione: </strong> <StarsVote vote={movie.avg_vote} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container'>
                <div>
                    <div>
                        <h2 className='text-center fs-1 py-4'>Tutte le recensioni</h2>
                    </div>

                    {movie.reviews.length ?
                        <div>
                            {movie.reviews.map(review => (
                                <ReviewCard review={review} key={review.id} />
                            ))}
                        </div> :
                        <div>Attualmente non ci sono recensioni</div>
                    }

                    <section className='container form-container mb-4'>
                        <div className="container w-50">
                            <div>
                                <h2 className='text-center py-4'>Aggiungi una recensione</h2>
                            </div>
                            <div className='p-4'>
                                <form className='d-flex flex-column gap-3 text-center align-items-center'>
                                    <p className='form-control'>
                                        <label htmlFor="name"><strong>Nome</strong></label>
                                        <input class="input-group" type="text" placeholder='Inserisci il tuo nome' name='name' id='name' />
                                    </p>
                                    <p className='form-control'>
                                        <label htmlFor="text"><strong>Recensione</strong></label>
                                        <textarea class="input-group" rows="6" name="text" id="text" placeholder='Scrivi la tua recensione'></textarea>
                                    </p>
                                    <p className='form-control text-center d-flex align-items-center flex-column'>
                                        <label htmlFor="vote"><strong>Voto</strong></label>
                                        <select class="input-group w-25 text-center" name="vote" id="vote">
                                            <option value="1">1</option>
                                            <option value="1">2</option>
                                            <option value="1">3</option>
                                            <option value="1">4</option>
                                            <option value="1">5</option>
                                        </select>
                                    </p>
                                    <button className='btn btn-dark'>Invia</button>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </> :
            <div>Loading...</div>

    )
}

