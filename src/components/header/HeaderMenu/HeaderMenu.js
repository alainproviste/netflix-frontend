import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './HeaderMenu.module.scss';
import { useRouter } from 'next/router';
import jwtDecode from 'jwt-decode';

const HeaderMenu = () => {
    const router = useRouter();
    const [isAdmin, setIsAdmin] = useState();
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token){
            isAdmin = jwtDecode(token).isAdmin;
            setIsAdmin(isAdmin);
        }
    },[]);
    return (
        <div className={styles.header_menu}>
            <nav>
                <ul>
                    <li className={router.pathname=="/browse" ? styles.active : ""}>
                        <Link href="/browse">
                            <a>Accueil</a>
                        </Link>
                    </li>
                    <li className={router.pathname=="/films" ? styles.active : ""}>
                        <Link href="/films">
                            <a>Films</a>
                        </Link>
                    </li>
                    <li className={router.pathname=="/ma-liste" ? styles.active : ""}>
                        <Link href="/ma-liste">
                            <a>Ma liste</a>
                        </Link>
                    </li>
                    { isAdmin == true ? 
                        <li>
                            <Link href="/newCategorie">
                                <a>
                                    Backoffice
                                </a>
                            </Link>
                        </li>
                    :
                        ""
                    }
                </ul>
            </nav>
        </div>
    );
};

export default HeaderMenu;