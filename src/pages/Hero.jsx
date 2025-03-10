import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <section className='container-full d-flex flex-column justify-content-center align-items-center m-4'>
            <div className="hero">
                <img className='hero-img' src="/Movie.png" alt="movie image" />
            </div>
            <div>
                <Link to='/home' className='abril-fatface-regular hero-btn'>See more...</Link>
            </div>
        </section>
    );
}
