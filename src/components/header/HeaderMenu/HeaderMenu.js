import React from 'react';
import Link from 'next/link';
import styles from './HeaderMenu.module.scss';
import { useRouter } from 'next/router';

const HeaderMenu = () => {
    const router = useRouter();
    return (
        <div className={styles.header_menu}>
            <nav>
                <ul>
                    <li className={router.pathname=="/" ? styles.active : ""}>
                        <Link href="/">
                            <a>Accueil</a>
                        </Link>
                    </li>
                    <li className={router.pathname=="/films" ? styles.active : ""}>
                        <Link href="/films">
                            <a>Films</a>
                        </Link>
                    </li>
                    <li className={router.pathname=="/ma_liste" ? styles.active : ""}>
                        <Link href="/ma_liste">
                            <a>Ma liste</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default HeaderMenu;