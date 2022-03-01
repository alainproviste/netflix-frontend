import React, { useState } from 'react';
import styles from "./index.module.scss";
import withAdmin from '../../HOC/withAdmin';
import { useMutation } from '@apollo/client';
import { createCategorie } from '../../graphql/mutations/categorie';
import Titlepage from '../../components/UI/Title/TitlePage';

const Index = () => {
    const [categorie, setCategorie] = useState({});

    const [isCreate] = useMutation(createCategorie);
    return (
        <div className={ styles.newCategoriePage }>
            <Titlepage title={ "Création d'une nouvelle catégorie" }/>
            <form onSubmit={ e => {
                console.log(typeof categorie.name);
                e.preventDefault();
                isCreate({
                    variables: {
                        name: categorie.name
                    },
                    onCompleted: (data) => {
                        console.log(data);
                    }
                });
            }}>
                <input type="text" id="name" placeholder='Nom' required
                    onChange={(e) => {
                        setCategorie({...categorie, name: e.target.value});
                    }}
                />
                <button type='submit'>Nouvelle catégorie</button>
            </form>
        </div>
    );
};

export default withAdmin(Index);