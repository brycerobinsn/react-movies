import { movies } from "../data"
import { useParams } from "react-router-dom"

export default function MovieDetailPage(){
    const movieTitle = useParams()
    const movie = movies.find(movie => movie.title === movieTitle.movieTitle )

    return (
        <>
            <h1>MovieDetailPage</h1>
            <h2>{movie.title}</h2>
            <div>Released: {movie.releaseDate}</div>
            <div>Cast: {movie.cast.join(', ')}</div>
            <img src={movie.posterPath}/>
        </>

    )
}