import React, { Component } from 'react'
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
    state = { 
        movies: getMovies()
     } 
    render() { 
        return (
            <div>123</div>
        );
    }
}
 
export default Movies;