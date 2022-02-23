import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import styles from './MovieGrid.module.scss';

const MovieGrid = (props) => {
    return (
        <div className={ styles.moviesGrid }>
            {
                props.movies.map((movie) => (
                    <MovieCard movie={ movie } key={ movie.id }/>
                ) )
            }
        </div>
    );
};

export default MovieGrid;