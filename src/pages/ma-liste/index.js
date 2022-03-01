import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './index.module.scss';
import withAuth from '../../HOC/withAuth';
import wishlistService from '../../services/wishlist.service';
import Title from '../../components/UI/Title/TitlePage';
import MovieGrid from '../../components/movie/MovieGrid/MovieGrid';
import PopUp from '../../components/movie/PopUp/PopUp';

const Index = () => {

    const [wishlist, setWishlist] = useState();
    const [message, setMessage] = useState();
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        wishlistService.getWishList(token)
            .then(data => {
                if(data.message){
                    setMessage(data.message);
                }else{
                    setWishlist(data.movie);
                }
            })
            .catch(err => console.log(err));
    },[]);

    return (
        <div className={ styles.maListePage }>
            {router.query.id ? (<PopUp /> ) : "" }
            <Title title="Ma liste"/>
            {
                wishlist ?

                <MovieGrid movies={ wishlist } /> :

                <div className={ styles.message }>
                    { message }
                </div>
            }
        </div>
    );
};

export default withAuth(Index);