import React, { useContext, useState } from 'react';
import { MovieContext } from '../MovieProvider';


function NewMovie(){
    const [movies, setMovies] = useContext(MovieContext);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const updateName = (event) => { setName(event.target.value) }
    const updatePrice = (event) => { setPrice(event.target.value)}

    const addMovie = (event) => {
        event.preventDefault();

        setMovies(prevMovies => 
             [...prevMovies, 
                    { 
                        id: 1,
                        name: name,
                        price: price
                    }
            ])
    }

    return(
        <form onSubmit={addMovie}>
            <input type="text" placeholder="name of movie" value={name} onChange={updateName} />
            <input type="text" placeholder="price" value={price} onChange={updatePrice} />
            <button>Add Movie</button>
        </form>
    )
}

export default NewMovie;