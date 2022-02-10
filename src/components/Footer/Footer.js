import React from 'react';
import styles from './Footer.module.scss';
import {BiGlobe} from 'react-icons/bi';

const Footer = () => {
    return (
        <div className={styles.footer_main}>
            <div className={styles.footer_elements}>
                <p>
                    Des questions ? Appelez le *Numéro de netflix*
                </p>
                <ul>
                    <li>FAQ</li>
                    <li>Centre d'aide</li>
                    <li>Conditions d'utilisation</li>
                    <li>Confidentialité</li>
                    <li>Préférences de cookies</li>
                    <li>Mentions légales</li>
                </ul>
                <div className={styles.footer_language}>
                    <BiGlobe/>
                    <select>
                        <option>Français</option>
                    </select>
                </div>
             </div>
        </div>
    );
};

export default Footer;