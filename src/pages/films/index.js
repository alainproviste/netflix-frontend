import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import styles from './index.module.scss';
import withAuth from '../../HOC/withAuth';
import { useRouter } from 'next/router';
import MovieGrid from '../../components/movie/MovieGrid/MovieGrid';
import { getMovies } from '../../graphql/queries/movie';
import PopUp from '../../components/movie/PopUp/PopUp';

const Index = () => {

    const { loading, error, data } = useQuery(getMovies);
    const router = useRouter();

    console.log(data);

    if (loading) {
        return "loading...";
    }

    if (error) {
        console.log(error);
        return null;
    }

    return (
        <div className={ styles.moviesPage }>
            {router.query.id ? (<PopUp /> ) : "" }
            <MovieGrid movies={ data.getMovies }/>
        </div>
    );
};

export default withAuth(Index);