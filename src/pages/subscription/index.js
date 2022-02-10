import React from 'react';
import styles from './index.module.scss';
import { loadStripe } from '@stripe/stripe-js';
import stripeService from "../../services/stripe.service";

const index = () => {
    return (
        <>
            <h1>Sélectionner le forfait qui vous convient</h1>
            <div>
                <ul>
                    <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="checkmark-group--icon" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z" fill="currentColor"></path></svg>Regardez autant que vous voulez. Sans publicité.</li>
                    <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="checkmark-group--icon" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z" fill="currentColor"></path></svg>Recommandations personnalisées.</li>
                    <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="checkmark-group--icon" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z" fill="currentColor"></path></svg>Changez ou annulez votre forfait à tout moment.</li>
                </ul>
            </div>
        </>
    );
};

export default index;