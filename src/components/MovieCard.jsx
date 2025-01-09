import { Link } from 'react-router-dom'

export default function movieCard({ movie }) {

  const { id, title, director, image, genre, abstract } = movie;

  return (
    <section className='container'>
      <div className='card' style={{ width: '18rem' }} >
        <img src={image} className='card-img-top' alt="" />
        <div className='card-body'>
          <h5 className='card-title text-success fs-4'>{title}</h5>
          <p className='card-text'>Un film di:  {director}</p>
          <p className='card-text'>Genere:  {genre}</p>
          <p className='card-text'>{abstract}</p>
          <Link to={`/movie/${id}`} className='btn btn-success'>Leggi di più</Link>
        </div>
      </div>
    </section>
  )
}
