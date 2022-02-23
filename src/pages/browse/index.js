import React from 'react';
import styles from './index.module.scss';
import Slider from '../../components/movie/Slider/Slider.js';
import { useQuery } from '@apollo/client';
import { getCategories } from '../../graphql/queries/categorie';
import PopUp from '../../components/movie/PopUp/PopUp';
import { useRouter } from 'next/router';
import withAuth from '../../HOC/withAuth';

const index = () => {

    const { loading, error, data } = useQuery(getCategories)
    const router = useRouter();

    if (loading) {
        return "loading...";
    }

    if (error) {
        console.log(error);
        return null;
    }

    return (
        <>
            {router.query.id ? (<PopUp /> ) : "" }
            <div className={styles.mainMovie}>
                <img src='https://occ-0-56-55.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUKCdnCaaUugmOglDlEDOGzU0sll2xUNR2392p5DfqnLfAY8hzY55sfdKgMKjSWMedQvCcuepSDzNdjuOqToJf38Tp56.webp?r=006'></img>
                <div className={styles.description}>
                    <h1>Interstellar</h1>
                    <div className={styles.synopsis}>Dans un proche futur, la Terre est devenue hostile pour l'homme. Les tempêtes de sable sont fréquentes et il n'y a plus que le maïs qui peut être cultivé, en raison d'un sol trop aride. Cooper est un pilote, recyclé en agriculteur, qui vit avec son fils et sa fille dans la ferme familiale.</div>
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