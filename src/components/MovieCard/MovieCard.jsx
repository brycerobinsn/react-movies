import { Link } from "react-router-dom";
import './MovieCard.css'
export default function MovieCard ({movie}) {
    const movieStyle = {
        backgroundImage: `url(${movie.posterPath})`,
        backgroundSize:'cover',
    }

    return(
        <div className="movieContainer">
            <Link to={`/movies/${movie.title}`}>
                <div className="movie" style={movieStyle}>
                    <div>{movie.title}</div>
                    <div>Release: {movie.releaseDate}</div>
                </div>
            </Link>
        </div>
    )
}