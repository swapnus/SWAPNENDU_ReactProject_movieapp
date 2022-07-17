import { useEffect, useState } from "react"
import IMovies from "../model/iMovies"
import DisplayMovies from "./common/DisplayMovies"
import {IndianTopRated} from "../services/TopRatedIndian"

const TopRatedIndia = () => {
    const [moviesList, setMoviesList] = useState<IMovies[]>([])
    useEffect(
        () => {
            const fetchList = async () => {
                IndianTopRated()
                    .then(data => setMoviesList(data))
                    .catch(error=> alert(error.message))                }

            fetchList()
        }, []
    )
    return (
      <DisplayMovies moviesList={moviesList}/>
    );
}

export default TopRatedIndia