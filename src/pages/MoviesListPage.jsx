import { movies } from "../data"
import MovieCard from "../components/MovieCard/MovieCard"

export default function MoviesListPage(){
    return (
        <>
            <h1>MoviesListPage</h1>
            <div>{movies.map((movie) => (
                <MovieCard key={movie.title} movie={movie}/>
            ))}</div>
        </>
    )
}