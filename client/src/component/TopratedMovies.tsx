import { useEffect, useState } from "react"
import IMovies from "../model/iMovies"
import DisplayMovies from "./common/DisplayMovies"
import { TopRatedMovies } from "../services/MoviesTopRated"

const TopRated= () => {
    const [moviesList, setMoviesList] = useState<IMovies[]>([])
    useEffect(
        () => {
            const fetchList = async () => {
                TopRatedMovies()
                    .then(data => setMoviesList(data))
                    .catch(error=> alert(error.message))                }

            fetchList()
        }, []
    )
    return (
      <DisplayMovies moviesList={moviesList}/>
    );
}

export default TopRated