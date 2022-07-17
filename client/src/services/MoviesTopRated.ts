import axios from "axios";
import IMovies from "../model/iMovies";

const baseUrl = process.env.
    REACT_APP_API_BASE_URL;

const TopRatedMovies = async () => {
    return axios.get<IMovies[]>(`${baseUrl}/top-rated-movies`)
        .then(Response => Response.data)

}

export {
    TopRatedMovies
}