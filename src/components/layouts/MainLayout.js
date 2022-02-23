import React, { useEffect, useState } from 'react';
import HeaderMenu from '../header/HeaderMenu/HeaderMenu';
import Headerlogo from '../header/HeaderLogo/HeaderLogo';
import HeaderToolbar from '../header/HeaderToolbar/HeaderToolbar';
import styles from './MainLayout.module.scss';
import Footer from '../Footer/Footer';
import background from '../../../public/backgroundHome.jpg'

const MainLayout = ({children}) => {
    const [token, setToken] = useState();

    useEffect(() => {
        const token = localStorage.getItem('token');
        setToken(token)
    },[]);
    return (
        <>
            <header className={styles.header}>
                <Headerlogo/>
                { token ? 
                <HeaderMenu/>
                : "" }
                <HeaderToolbar/>
            </header>
            <main>
                { token ? "" : <img className={styles.background} src={background.src} alt='Background netflix'/> }
                <div className={styles.container}>
                    {children}
                </div>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    );
};

export default MainLayout;