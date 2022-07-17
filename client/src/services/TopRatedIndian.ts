import axios from "axios";
import IMovies from "../model/iMovies";

const baseUrl = process.env.
    REACT_APP_API_BASE_URL;

const IndianTopRated = async () => {
    return axios.get<IMovies[]>(`${baseUrl}/top-rated-india`)
        .then(Response => Response.data)

}

export {
    IndianTopRated
}