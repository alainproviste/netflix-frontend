import React from 'react';
import styles from './Sidebar.module.scss';
import Link from 'next/link';
import { BiMoviePlay, BiCategoryAlt, BiUser } from 'react-icons/bi';

const Sidebar = () => {
    return (
        <div className={styles.panel}>
            <div className={styles.tab}>
                <a href="/dashboard-movies">
                    <BiMoviePlay/>
                    <h3>Films</h3>
                </a>
            </div>
            <div className={styles.tab}>
                <a href="/dashboard-categories">
                    <BiCategoryAlt/>
                    <h3>Catégories</h3>
                </a>
            </div>
            <div className={styles.tab}>
                <a href="/dashboard-categories">
                    <BiUser/>
                    <h3>Utilisateurs</h3>
                </a>
            </div>
        </div>
    );
};

export default Sidebar;