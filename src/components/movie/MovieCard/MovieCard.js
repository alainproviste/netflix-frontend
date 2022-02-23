import React from 'react';
import styles from './MovieCard.module.scss';
import { AiOutlineDown,AiFillPlayCircle } from 'react-icons/ai';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import Link from 'next/link';

const MovieCard = (props) => {
    return (
        <div>
            <div className={styles.swiper_slide}>
                <Link href={{ query: { id: props.movie.id } }}>
                    <img src={ props.movie.img }></img>
                </Link>
                <div className={ styles.movieInformations }>
                    <div className={ styles.icons }>
                        <a href={`/watch/${props.movie.id}`} className={ styles.play }>
                            <AiFillPlayCircle/>
                        </a>
                        <BsFillPlusCircleFill className={ styles.add }/>
                        <Link href={{ query: { id: props.movie.id } }}>
                            <AiOutlineDown className={ styles.arrow }/>
                        </Link>
                    </div>
                    <h4>{ props.movie.title }</h4>
                    <h5>{ props.movie.duration }</h5>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;