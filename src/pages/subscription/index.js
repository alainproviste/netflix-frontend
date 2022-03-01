import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import { loadStripe } from '@stripe/stripe-js';
import stripeService from "../../services/stripe.service";
import withAuth from '../../HOC/withAuth';
import authentificationService from '../../services/authentification.service';
import { AiOutlineCheck } from 'react-icons/ai';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK);

const Index = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const token = localStorage.getItem('token');
        authentificationService.getUser(token)
            .then(data => {
                setUser(data);
            })
            .catch(err => console.log(err));
    },[]);

    const handleConfirmation = async () => {
        const total = 0;
        if(user.subscription == "netflix_classique"){
            total = 30;
        }
        if(user.subscription == "netflix_prenium"){
            total = 60;
        }
        const token = localStorage.getItem('token');
        const payload = {
            total: total,
            subscription: user.subscription
        }
        try {
            const stripe = await stripePromise;
            const response = await stripeService.createSession(token, payload);
            await stripe.redirectToCheckout({
                sessionId: response.id,
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles.pageSub}>
            <h1>Sélectionner le forfait qui vous convient</h1>
            <div className={styles.presentationContainer}>
                <ul>
                    <li><AiOutlineCheck/> Regardez autant que vous voulez. Sans publicité.</li>
                    <li><AiOutlineCheck/> Recommandations personnalisées.</li>
                    <li><AiOutlineCheck/> Changez ou annulez votre forfait à tout moment.</li>
                </ul>
                <div className={styles.abonnement}>
                    <div className={styles.choice} onClick={() => {
                        setUser({...user, subscription: "netflix_classique"});
                    }}>
                        Standard: 30€/mois
                    </div>
                    <div className={styles.choice} onClick={() => {
                        setUser({...user, subscription: "netflix_prenium"});
                    }}>
                        Prenium: 60€/mois
                    </div>
                </div>
            </div>
            <button className={styles.nextButton} onClick={handleConfirmation}>Suivant</button>
        </div>
    );
};

export default withAuth(Index);