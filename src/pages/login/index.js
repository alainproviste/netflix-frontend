import React, { useState } from 'react';
import authService from "../../services/authentification.service";
import TitlePage from "../../components/UI/Title/TitlePage";
import Input from "../../components/UI/Input/Input";
import Message from "../../components/UI/Message/Message";
import style from './index.module.scss';
import background from '../../../public/backgroundHome.jpg'
import Link from 'next/link';

const Index = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        authService.login(user)
        .then((data) => {
            console.log(data);
            if (data.message) {
            setError(true);
            setErrorMessage(data.message);
            return false;
            }
            localStorage.setItem("token", data.token);
            window.location.href = "/browse";
        })
        .catch((err) => {
            console.log(err);
            setError(true);
            setErrorMessage(err.message)
        });
    };

    return (
        <div className={style.page_login}>
            <div className={style.login_container}>
                <TitlePage title="S'identifier"/>
                <form className={style.form__login} onSubmit={(e) => handleSubmit(e)}>
                    <Input
                        type="text"
                        label=""
                        id="email"
                        name="email"
                        placeholder="E-mail"
                        required={true}
                        onChange={(e) => {
                        setUser({ ...user, email: e.target.value });
                        }}
                    />
                    <Input
                        type="password"
                        label=""
                        id="password"
                        name="password"
                        placeholder="Mot de passe"
                        required={true}
                        onChange={(e) => {
                        setUser({ ...user, password: e.target.value });
                        }}
                    />
                    <input className={style.login_submit} type="submit" value="S'identifier" />
                    <div>
                        Première visite sur Netflix ? <Link href="/"><a>Inscrivez-vous</a></Link>
                    </div>
                    {
                        error ? (
                            <Message message={errorMessage} type="error"/>
                        )
                        :
                        ""  
                        }
                </form>
            </div>
        </div>
    );
}

export default Index;