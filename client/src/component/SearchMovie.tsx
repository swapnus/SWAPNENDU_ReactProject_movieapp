import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react"
import { ChangeEvent } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import IMovies from "../model/iMovies";
import { moviesInTheater } from "../services/movieInTheater";
import { TopRatedMovies } from "../services/MoviesTopRated";
import { IndianTopRated } from "../services/TopRatedIndian";
import { UpcomingMovie } from "../services/upComingMovies";


const baseUrl = process.env.
    REACT_APP_API_BASE_URL;

type Props = {
    moviesSearchList: IMovies[]
};


const SearchMovie = () => {
    const [data, setData] = useState<IMovies[]>([]);
    const [searchMovieData, SetSearchMovieData] = useState<IMovies[]>([]);
    const [filtervalue, setFilterValue] = useState('');
    useEffect(() => {
        const fetchData = async () => {

            moviesInTheater()
                .then(data => {
                    setData(data)
                })
                .catch(error => alert(error.message))

            UpcomingMovie()
                .then(data => {
                    setData([...data])
                })
                .catch(error => alert(error.message))

            TopRatedMovies()
                .then(data => {
                    setData([...data])
                })
                .catch(error => alert(error.message))

            IndianTopRated()
                .then(data => {
                    setData([...data])
                })
                .catch(error => alert(error.message))
        }
        fetchData();
    }, [])


    const handleFilter = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.target.value == '') {
            // setData(searchMovieData)
            console.log('null')
        }
        else {
            const serachResult = data.filter(movies => movies.title.toLowerCase().includes(e.target.value.toLowerCase()))
            console.log(serachResult)
            SetSearchMovieData(serachResult)
        }
        setFilterValue(e.target.value)

    }
    return (
        <div >
            <div>
                <input type="text" placeholder="Type your Fav. Movie" value={filtervalue} onChange={(e) => handleFilter(e)} />
            </div>
            {
                <Row xs={2} md={5} className="g-2">
                    {
                        searchMovieData.map(
                            (movies, idx) => (
                                <Col key={movies.id}>

                                    <Card style={{ width: '14rem' }} className="text-center my-2" border="secondary">

                                        <Card.Img style={{ width: '13.8rem', height: '300px' }} variant="top" src={movies.posterurl} alt="Image Missing" />

                                        <Card.Body className='align-left '>
                                            <Card.Title>{movies.title}</Card.Title>
                                            <Button variant="outline-danger" size="sm">
                                                <FontAwesomeIcon icon={faHeart} className="me-2" />
                                                Add to Favourites
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                </Row>}
        </div>

    );


}

export default SearchMovie;