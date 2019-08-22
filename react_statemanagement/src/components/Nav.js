import React, { useContext } from 'react';
import { MovieContext } from '../MovieProvider';


function Nav(){
    const [movies, setMovies] = useContext(MovieContext);
    return(
        <div>
            <h1>Movie List</h1>
            <h3>List Of Movies: {movies.length}</h3>
        </div>
    );
}

export default Nav;