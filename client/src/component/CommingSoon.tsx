import { useEffect, useState } from "react"
import IMovies from "../model/iMovies"
import DisplayMovies from "./common/DisplayMovies"
import { UpcomingMovie } from "../services/upComingMovies"

const CommingSoon = () => {
    const [moviesList, setMoviesList] = useState<IMovies[]>([])
    useEffect(
        () => {
            const fetchList = async () => {
                UpcomingMovie()
                    .then(data => setMoviesList(data))
                    .catch(error=> alert(error.message))                }

            fetchList()
        }, []
    )
    return (
      <DisplayMovies moviesList={moviesList}/>
    );
}

export default CommingSoon