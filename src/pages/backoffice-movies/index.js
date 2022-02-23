import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './index.module.scss';

const Index = () => {
    return (
        <div className={styles.backofficeMovies}>
            <Sidebar></Sidebar>
        </div>
    );
};

export default Index;