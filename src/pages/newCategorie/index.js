import React, { useState } from 'react';
import styles from "./index.module.scss";
import withAdmin from '../../HOC/withAdmin';
import { useMutation } from '@apollo/client';
import { createCategorie } from '../../graphql/mutations/categorie';
import Titlepage from '../../components/UI/Title/TitlePage';
import AdminNav from '../../components/AdminNav/AdminNav';
import categorieService from '../../services/categorie.service';

const Index = () => {
    const [categorie, setCategorie] = useState({});
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [success, setSucces] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = (e) => {
        const token = localStorage.getItem('token');
        e.preventDefault();
        categorieService.createCategorie(token, categorie)
            .then((data) => {
                if(data.created){
                    setSucces(true);
                    setSuccessMessage("Création de catégorie réussi !")
                }else{
                    setError(true);
                    setErrorMessage("Une erreur est survenue lors de la création de la catégories !")
                }
            })
            .catch((err) => {
                console.log(err);
                setError(true);
                setErrorMessage(err.message)
            });
    }

    // const [isCreate] = useMutation(createCategorie);
    return (
        <div className={ styles.newCategoriePage }>
            <AdminNav/>
            <Titlepage title={ "Création d'une nouvelle catégorie" }/>
            {/* <form onSubmit={ e => {
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
            </form> */}
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder='Nom de la catégorie' required onChange={(e) => {
                    setCategorie({...categorie, name: e.target.value});
                }}/><br/>
                <input type="submit" value="Nouvelle catégorie" />
                {
                error ? (
                    <p>{errorMessage}</p>
                )
                :
                ""  
                }
                {
                success ? (
                    <p>{successMessage}</p>
                )
                :
                ""  
                }
            </form>
        </div>
    );
};

export default withAdmin(Index);