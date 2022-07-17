import { useState } from "react"
import { Button, Card, Row, Col } from 'react-bootstrap'
import IMovies from '../../model/iMovies'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart, height} from '@fortawesome/free-regular-svg-icons/faHeart'



type Props = {
  moviesList: IMovies[]
}

const DisplayMovies = ({ moviesList }: Props) => {
  const [open, setOpen] = useState(false);

  return (
  <div >
    {
      <Row xs={2} md={5} className="g-2">
        {Array.from({ length: 6 }).map((_, idx) => (
          moviesList.map(
            (movies, idx) => (
              <Col key={movies.id}>

                <Card style={{ width: '14rem'}} className="text-center my-2" border="secondary">

                  <Card.Img  style={{ width: '13.8rem', height: '300px',}} variant="top" src={movies.posterurl} alt="Image Missing" />

                  <Card.Body className= 'align-center '>
                    <Card.Title>{movies.title}</Card.Title>
                    <Button variant="outline-danger" size="sm"> 
                    <FontAwesomeIcon icon={faHeart} className = "me-2"/>
                    Add to Favourites
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))))}</Row>}
  </div>
  )
}


export default DisplayMovies