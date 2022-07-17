import axios from 'axios';
import IMovies from "../model/iMovies";

const baseUrl = process.env.
REACT_APP_API_BASE_URL;

const moviesInTheater = async ()=>{
    return axios.get<IMovies[]>(`${baseUrl}/movies-in-theaters`)
    .then(Response => Response.data)
}

export {
    moviesInTheater
}