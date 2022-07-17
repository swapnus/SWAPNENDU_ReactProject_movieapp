import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <main>
            <section className="my-5">
            <hr />
                <header >
                    <h1 className= "text-info " style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '5vh',}}>
                        <FontAwesomeIcon
                            icon={faFilm}
                            className="me-2 text-warning"
                        />
                        Movies-App
                    </h1>
                </header>
                <hr />
                <p style={{fontSize: 40, fontWeight:'bolder',display: 'flex', justifyContent:'center'}} className='text-light'>
                    Welcome to Movies. Now you can book your tickets easly.
                    </p>

                    <div className="my-2 text-dark" style={{fontSize: 30,display: 'flex', justifyContent:'center'}}>
                        <small>
                            <strong>NOTE</strong>: You can even search an movie. And you can explore the same on clicking the movie.
                        </small>
                        
                    </div>
                    
            </section>
            
        </main>
        
    )
};

export default Home;