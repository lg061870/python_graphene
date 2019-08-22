import React from 'react';

function Movie(props){
    console.log(props);

    return(
        <React.Fragment>
            <h3>{props.title}</h3>
        </React.Fragment>
    );
}

export default Movie;