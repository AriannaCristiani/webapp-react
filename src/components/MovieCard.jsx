import { Link } from 'react-router-dom'


export default function movieCard({ movie }) {

  const { id, title, director, image, genre, abstract } = movie;

  return (
    <section className='container'>
      <div className='card' style={{ width: '18rem' }} >
        <img src={image} className='card-img-top' alt="" />
        <div className='card-body'>
          <h5 className='card-title fs-4'><strong>{title}</strong></h5>
          <p className='card-text'><strong>Un film di: </strong>  {director}</p>
          <p className='card-text'><strong>Genere: </strong>  {genre}</p>
          <p className='card-text'>{abstract}</p>
          <Link to={`/movie/${id}`} className='btn btn-danger'>Leggi di più</Link>
        </div>
      </div>
    </section>
  )
}
