import React from 'react';
import styles from './PopUp.module.scss';
import { getMovie } from '../../../graphql/queries/movie';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { AiFillCloseCircle } from 'react-icons/ai';
import { GrPlayFill } from 'react-icons/gr';
import Link from 'next/link';

const PopUp = (props) => {
    
    const router = useRouter();

    const { loading, error, data } = useQuery(getMovie, {
        variables: {
            id: router.query.id
        }
    });

    if (loading) {
        return "loading...";
    }

    if (error) {
        console.log(error);
        return null;
    }

    return (
        <div className={ styles.popUpPage }>
            <div className={ styles.popUpContainer }>
                <div className={ styles.upperPart }>
                    <Link href={{ query: null }}>
                        <AiFillCloseCircle className={ styles.closeButton }/>
                    </Link>
                    <img className={ styles.movieImg } src={ data.getMovie.img } alt="Movie's picture"/>
                    <Link href={`/watch/${data.getMovie.id}`} >
                        <button className={ styles.playButton }><GrPlayFill/>Lecture</button>
                    </Link>
                </div>
                <p className={ styles.title }>{ data.getMovie.title }</p>
                <div className={ styles.mainInformations }>
                    <p className={ styles.recommendation }>Recommandé à 1876%</p>
                    <p>{ data.getMovie.year }</p>
                    <p>{ data.getMovie.duration }</p>
                </div>
                <p>{ data.getMovie.description }</p>
                <p>Producteur: { data.getMovie.producer }</p>
                <p className={styles.actors}>Distribution: { data.getMovie.actors.map((actor) => <span key={actor}>{actor},</span>) }</p>
            </div>
            <Link href={{ query: null }}>
                <div className={ styles.popUpBackground }></div>
            </Link>
        </div>
    );
};

export default PopUp;