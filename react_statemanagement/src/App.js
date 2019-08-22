import React from 'react';
import './App.css';
import Nav from './components/Nav';
import MovieList from './components/MovieList';
import NewMovie from './components/NewMovie';

import { MovieProvider } from './MovieProvider';

function App() {

  return (
    <div className="App">
      <MovieProvider>
        <Nav />
        <NewMovie />
        <MovieList />
      </MovieProvider>
    </div>
  );
}

export default App;
