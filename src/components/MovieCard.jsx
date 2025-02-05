import { Link } from 'react-router-dom'


export default function movieCard({ movie }) {

  const { id, title, director, image, genre, abstract } = movie;

  return (
    <Link to={`/movie/${id}`} >
      <div className="custom-card" title="view details" >
        <img src={image} className="card-img" alt={title} />
        <div className="card-overlay">
          <div className="card-body">
            <h5 className="card-title fs-4 mb-4">{title}</h5>
            <p className="card-text"><strong>Un film di:</strong> {director}</p>
            <p className="card-text"><strong>Genere:</strong> {genre}</p>
            <p className="card-text">{abstract}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
