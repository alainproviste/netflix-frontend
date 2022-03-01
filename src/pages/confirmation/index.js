import React, {useEffect} from 'react';
import authentificationService from '../../services/authentification.service';
import { useRouter } from 'next/router';
import withAuth from '../../HOC/withAuth';

const Index = () => {

    const router = useRouter();

    useEffect(() => {
        const amount = router.query.amount;
        const subscription = "";
        if(amount == "60"){
            subscription = "netflix_prenium";
        }
        if(amount == "30"){
            subscription = "netflix_classique";
        };
        const token = localStorage.getItem('token');
        authentificationService.updateUser(token, subscription)
            .then(router.push('/browse'))
            .catch(err => console.log(err));
    },[]);
    return (
        <div>
            
        </div>
    );
};

export default withAuth(Index);