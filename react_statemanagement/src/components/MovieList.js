import React from 'react';
import Movie from './Movie'
import { MovieContext } from '../MovieProvider';
import { useContext} from 'react';


function MovieList(props) {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div>
        {
            movies.map(movie => (
                <Movie title={movie.name} />
            ))
        }
    </div>
  );
}

export default MovieList;