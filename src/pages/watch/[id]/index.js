import React from 'react';
import styles from './index.module.scss';
import { useRouter } from 'next/router';
import { useQuery } from "@apollo/react-hooks";
import { getMovie } from '../../../graphql/queries/movie';

const Index = () => {

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
        <div className={ styles.movieContainer }>
            <iframe width="100%" height="100%" src={ data.getMovie.iframe } frameBorder="0" allowFullScreen></iframe>
        </div>
    );
};

export default Index;