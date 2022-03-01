import React from 'react';
import LogoImg from "../../../../public/Netflix-logo.png";
import styles from "./HeaderLogo.module.scss";

const Headerlogo = () => {
    return (
        <div className={styles.header_logo}>
            <img src={LogoImg.src} alt="Logo netflix"/>
        </div>
    );
};

export default Headerlogo;