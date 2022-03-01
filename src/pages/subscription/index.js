import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import { loadStripe } from '@stripe/stripe-js';
import stripeService from "../../services/stripe.service";
import withAuth from '../../HOC/withAuth';
import authentificationService from '../../services/authentification.service';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK);

const index = () => {
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
                    <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="checkmark-group--icon" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z" fill="currentColor"></path></svg> Regardez autant que vous voulez. Sans publicité.</li>
                    <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="checkmark-group--icon" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z" fill="currentColor"></path></svg> Recommandations personnalisées.</li>
                    <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="checkmark-group--icon" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z" fill="currentColor"></path></svg> Changez ou annulez votre forfait à tout moment.</li>
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

export default withAuth(index);