import React from 'react';
import styles from './AdminNav.module.scss';
import Link from 'next/link';

const AdminNav = () => {
    return (
        <div className={styles.adminNav}>
            <ul>
                <li>
                    <Link href="/newCategorie">
                        <a>Nouvelle catégorie</a>
                    </Link>
                </li>
                <li>
                    <Link href="/newmovie">
                        <a>Nouveau film</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default AdminNav;