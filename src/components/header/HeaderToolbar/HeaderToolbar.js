import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './HeaderToolbar.module.scss';
import jwtDecode from 'jwt-decode';

const HeaderToolbar = () => {
    const [token, setToken] = useState();
    const [isAdmin, setIsAdmin] = useState();
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        setToken(token);
        if(token){
            isAdmin = jwtDecode(token).isAdmin;
            setIsAdmin(isAdmin);
        }
    },[]);

    const logout = () => {
        localStorage.removeItem('token');
        window.location.href = "/";
    }

    return (
        <div className={styles.header_toolbar}>

            { isAdmin == true ? 
                <Link href="/backoffice-movies">
                    <a>
                        Backoffice
                    </a>
                </Link>
            :
                ""
            }
           
           { !token ? 
                <Link href="/login">
                    <a>
                        S'identifier
                    </a>
                </Link>
                :
                <Link href="/">
                    <a onClick={ () => logout() }>
                        Se déconnecter
                    </a>
                </Link>
            }
        </div>
    );
};

export default HeaderToolbar;