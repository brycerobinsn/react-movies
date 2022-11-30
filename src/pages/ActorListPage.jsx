import ActorCard from "../components/ActorCard/ActorCard"
import { movies } from "../data"

export default function ActorListPage () {
    const actorsList = []
    movies.map((movie) => {
        actorsList.push(...movie.cast)
    })
    const actorSet = new Set(actorsList)
    const actorArray = Array.from(actorSet)

    return (
        <>
            <h1>ActorListPage</h1>
            {actorArray.map((actor) => <ActorCard actor={actor}/>)}
        </>
    )
}