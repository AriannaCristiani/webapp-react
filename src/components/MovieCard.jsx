import { Link } from 'react-router-dom'

export default function movieCard({ movie }) {

  const { id, title, director, image, genre, abstract } = movie;

  return (
    <section>
      <img src={image} alt="" />
      <div>
        <h3>
          {title}
        </h3>
        <p>
          {director}
        </p>
        <p>
          {genre}
        </p>
        <p>
          {abstract}
        </p>
        <Link to={`/movie/${id}`}>Leggi di più</Link>
      </div>
    </section>
  )
}
