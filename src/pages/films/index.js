import React, { useState, useEffect } from 'react';
import { useQuery } from "@apollo/react-hooks";
import { useLazyQuery } from "@apollo/client";
import styles from './index.module.scss';
import withAuth from '../../HOC/withAuth';
import { useRouter } from 'next/router';
import MovieGrid from '../../components/movie/MovieGrid/MovieGrid';
import { getMovies } from '../../graphql/queries/movie';
import { getCategories, getCategorie } from '../../graphql/queries/categorie';
import PopUp from '../../components/movie/PopUp/PopUp';
import Titlepage from '../../components/UI/Title/TitlePage';

const Index = () => {

    const [categorie, setCategorie] = useState();
    const { loading, error, data } = useQuery(getMovies);
    const { loading: loadingCategories, error: errorCategories, data: dataCategories } = useQuery(getCategories);
    const { called, loading: loadingCategorie, data: dataCategorie } = useQuery(
        getCategorie,
        { variables: { id: categorie } }
    );
    const router = useRouter();

    if (loading) {
        return "loading...";
    }

    if (error) {
        console.log(error);
        return null;
    }

    if (loadingCategories) {
        return "loading...";
    }

    if (errorCategories) {
        console.log(errorCategories);
        return null;
    }

    return (
        <div className={ styles.moviesPage }>
            {router.query.id ? (<PopUp /> ) : "" }
            <Titlepage title="Films"/>
            <select className={ styles.selectCategorie } onChange={(e) => {
                setCategorie(e.target.value);
            }}>
                <option value={""}>Genres</option>
                {
                    dataCategories.getCategories.map((categorie) => (
                        <option value={ categorie.id }>{ categorie.name }</option>
                    ))
                }
            </select>
            {
                !dataCategorie ?
                <MovieGrid movies={ data.getMovies }/>
                :
                <MovieGrid movies={ dataCategorie.getCategorie.movies }/>
            }
        </div>
    );
};

export default withAuth(Index);