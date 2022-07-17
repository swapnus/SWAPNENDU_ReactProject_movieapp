import React, { ChangeEvent, useEffect, useState } from "react";
import { Navbar, Nav, Container, FormControl, Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import '../component/app.css'
import SearchMovie from "./SearchMovie";

const NavigationMenu = () => {
  
  
  return (
    <div className="navigation-links">
    <Navbar sticky="top" bg="dark" expand="lg" variant="dark">
      <Container >
        <Navbar.Brand to="/home" as={NavLink} > 
          <FontAwesomeIcon icon={faFilm}
            className="me-1" />
          Movie-App</Navbar.Brand>
        <Navbar.Toggle aria-controls=" basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto">
            <Nav.Link to="/moviesintheaters" as={NavLink}>Movies in theater</Nav.Link>
            <Nav.Link to="/moviescoming" as={NavLink}>ComingSoon</Nav.Link>
            <Nav.Link to="/topratedindia" as={NavLink}>Top Rated Indian</Nav.Link>
            <Nav.Link to="/topratedmovies" as={NavLink}>Top Rated Movies</Nav.Link>
            <Nav.Link to="/favourit" as={NavLink}>Favourites</Nav.Link>
            <Nav.Link to="/search" as={NavLink}>Search</Nav.Link>
          </Nav>

          {/* <form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" >Search</Button>
          </form> */}

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

  );
};



export default NavigationMenu;
