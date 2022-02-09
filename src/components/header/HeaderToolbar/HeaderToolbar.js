import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';
import styles from './HeaderToolbar.module.scss';

const HeaderToolbar = () => {
    const router = useRouter();
    const [token, setToken] = useState();

    useEffect(() => {
        const token = localStorage.getItem('token');
        setToken(token)
    },[]);

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        router.push("/");
    }

    return (
        <div className={styles.header_toolbar}>
           
           { !token ? 
                <Link href="/login">
                    <a>
                        S'identifier
                    </a>
                </Link>
                :
                    <a onClick={ (e) => logout(e) }>
                        Se déconnecter
                    </a>
            }
        </div>
    );
};

export default HeaderToolbar;