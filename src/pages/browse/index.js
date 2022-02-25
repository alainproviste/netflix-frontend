import React from 'react';
import styles from './index.module.scss';
import Slider from '../../components/movie/Slider/Slider.js';
import { useQuery } from '@apollo/client';
import { getCategories } from '../../graphql/queries/categorie';
import PopUp from '../../components/movie/PopUp/PopUp';
import { useRouter } from 'next/router';
import withAuth from '../../HOC/withAuth';
import { getRandomMovie } from '../../graphql/queries/movie';

const index = () => {

    const { loading, error, data } = useQuery(getCategories);
    const { loading: loadingMovie, error: errorMovie, data: dataMovie } = useQuery(getRandomMovie);
    const router = useRouter();

    if (loading) {
        return "loading...";
    }

    if (error) {
        console.log(error);
        return null;
    }

    if (loadingMovie) {
        return "loading...";
    }

    if (errorMovie) {
        console.log(errorMovie);
        return null;
    }

    return (
        <>
            {router.query.id ? (<PopUp /> ) : "" }
            <div className={styles.mainMovie}>
                <img src={ dataMovie.getRandomMovie.img }></img>
                <div className={styles.description}>
                    <h1>{ dataMovie.getRandomMovie.title }</h1>
                    <div className={styles.synopsis}>{ dataMovie.getRandomMovie.description }</div>
                    <button>Lecture</button>
                    <button>Plus d'infos</button>
                </div>
            </div>
            <div className={styles.categoriesContainer}>
                {
                    data.getCategories.map((categorie) =>(
                        <Slider categorie={categorie} key={categorie.id}/>
                    ))
                }
            </div>
        </>
    );
};

export default withAuth(index);