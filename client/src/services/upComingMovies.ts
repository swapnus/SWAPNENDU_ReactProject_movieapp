import axios from "axios";
import IMovies from "../model/iMovies";

const baseUrl = process.env.
REACT_APP_API_BASE_URL;

const UpcomingMovie = async ()=>{
    return axios.get<IMovies[]>(`${baseUrl}/movies-coming`)
    .then(Response => Response.data)
}

export {
    UpcomingMovie
}