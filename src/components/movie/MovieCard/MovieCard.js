import React, { useEffect, useState } from 'react';
import { useQuery } from "@apollo/react-hooks";
import styles from './MovieCard.module.scss';
import { AiOutlineDown,AiFillPlayCircle } from 'react-icons/ai';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { IoIosRemoveCircle } from 'react-icons/io';
import Link from 'next/link';
import wishlistService from '../../../services/wishlist.service';
import { getMovie } from '../../../graphql/queries/movie';

const MovieCard = (props) => {

    const [action, setAction] = useState();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(props.movie.title){
            wishlistService.inWishlist(token, props.movie.id)
            .then(result => {
                setAction(result.inWishlist);
            });
        }
    },[]);

    if(!props.movie.title){
        const token = localStorage.getItem('token');
        const id = props.movie;
        const { loading, error, data } = useQuery(getMovie, { variables: { id }, });
        
        if (loading) {
            return "loading...";
        }

        if (error) {
            console.log(error);
            return null;
        }

        wishlistService.inWishlist(token, data.getMovie.id)
        .then(result => {
            setAction(result.inWishlist);
        });
    }

    const addWish = (movie) => {
        const token = localStorage.getItem("token");
        wishlistService.addWish(token, movie);
        window.location.reload(false);
    }

    const removeWish = (movie) => {
        const token = localStorage.getItem("token");
        wishlistService.getWishList(token)
            .then(data => {
                if(data.movie.length == 1){
                    wishlistService.deleteWishlist(token, data._id);
                    window.location.reload(false);
                }else{
                    wishlistService.removeWish(token, movie);
                    window.location.reload(false);
                }
            })
            .catch(err => console.log(err));
    }
    return (
        <div>
            <div className={styles.swiper_slide}>
                <Link href={ !data ? { query: { id: props.movie.id } } : { query: { id: data.getMovie.id } } }>
                    <img src={ !data ? props.movie.img : data.getMovie.img }></img>
                </Link>
                <div className={ styles.movieInformations }>
                    <div className={ styles.icons }>
                        <a href={`/watch/${ !data ? props.movie.id : data.getMovie.id}`} className={ styles.play }>
                            <AiFillPlayCircle/>
                        </a>
                        { !action ? 
                        <BsFillPlusCircleFill onClick={ () => addWish(props.movie.id)} className={ styles.wish }/>
                        : 
                        <IoIosRemoveCircle onClick={ !data ? () => removeWish(props.movie.id) : () => removeWish(data.getMovie.id)} className={ styles.wish }/>
                        }
                        <Link href={ !data ? { query: { id: props.movie.id } } : { query: { id: data.getMovie.id } } }>
                            <AiOutlineDown className={ styles.arrow }/>
                        </Link>
                    </div>
                    <h4>{ !data ? props.movie.title : data.getMovie.title }</h4>
                    <h5>{ !data ? props.movie.duration : data.getMovie.duration }</h5>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;