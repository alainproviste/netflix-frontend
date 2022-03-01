import React from 'react';
import styles from './index.module.scss';
import Slider from '../../components/movie/Slider/Slider.js';
import { useQuery } from '@apollo/client';
import { getCategories } from '../../graphql/queries/categorie';
import PopUp from '../../components/movie/PopUp/PopUp';
import { useRouter } from 'next/router';
import withAuth from '../../HOC/withAuth';
import { getRandomMovie } from '../../graphql/queries/movie';
import { GrPlayFill } from 'react-icons/gr';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import Link from 'next/link';

const Index = () => {

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
                    <Link href={`/watch/${dataMovie.getRandomMovie.id}`} >
                        <button className={ styles.playButton }><GrPlayFill/>Lecture</button>
                    </Link>
                    <Link href={{ query: { id: dataMovie.getRandomMovie.id } }}>
                        <button className={ styles.playButton }><AiOutlineInfoCircle/>Plus d infos</button>
                    </Link>
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

export default withAuth(Index);