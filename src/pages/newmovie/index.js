import React, {useState} from 'react';
import styles from "./index.module.scss";
import withAdmin from '../../HOC/withAdmin';
import AdminNav from '../../components/AdminNav/AdminNav';
import Titlepage from '../../components/UI/Title/TitlePage';
import movieService from '../../services/movie.service';

const Index = () => {
    const [movie, setMovie] = useState({});
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [success, setSucces] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = (e) => {
        const token = localStorage.getItem('token');
        e.preventDefault();
        movieService.createMovie(token, movie)
            .then((data) => {
                if(data.created){
                    setSucces(true);
                    setSuccessMessage("Création du film réussi !")
                }else{
                    setError(true);
                    setErrorMessage('Une erreur est survenu lors de la création du film !')
                }
            })
            .catch((err) => {
                console.log(err);
                setError(true);
                setErrorMessage(err.message)
            });
    }
    return (
        <div className={ styles.newMoviePage }>
            <AdminNav/>
            <Titlepage title={ "Création d'un nouveau film" }/>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder='Nom du film' required onChange={(e) => {
                    setMovie({...movie, title: e.target.value});
                }}/><br/>
                <input type="text" placeholder='Description du film' required onChange={(e) => {
                    setMovie({...movie, description: e.target.value});
                }}/><br/>
                <input type="text" placeholder='Date du film' required onChange={(e) => {
                    setMovie({...movie, year: e.target.value});
                }}/><br/>
                <input type="text" placeholder='Producteur' required onChange={(e) => {
                    setMovie({...movie, producer: e.target.value});
                }}/><br/>
                <input type="text" placeholder='Acteur' required onChange={(e) => {
                    setMovie({...movie, actors: e.target.value});
                }}/><br/>
                <input type="text" placeholder='Durée' required onChange={(e) => {
                    setMovie({...movie, duration: e.target.value});
                }}/><br/>
                <input type="text" placeholder="Lien de l'image" required onChange={(e) => {
                    setMovie({...movie, img: e.target.value});
                }}/><br/>
                <input type="text" placeholder="lien iframe" required onChange={(e) => {
                    setMovie({...movie, iframe: e.target.value});
                }}/><br/>
                <input type="submit" value="Nouveau film" />
            </form>
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
        </div>
    );
};

export default withAdmin(Index);