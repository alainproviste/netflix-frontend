import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import authService from "../../services/authentification.service";
import TitlePage from "../../components/UI/Title/TitlePage";
import Message from "../../components/UI/Message/Message";
import Input from "../../components/UI/Input/Input";
import styles from "./index.module.scss";

const Index = () => {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    email = localStorage.getItem("email");
    setEmail(email);
  },[]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    authService.register(user)
      .then((data) => {
        console.log(data);
        if (data.message) {
          setError(true);
          setErrorMessage(data.message);
          return false;
        }
        if(data.token){
          localStorage.setItem("token", data.token);
          localStorage.removeItem("email");
          window.location.href = "/subscription";
        }
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setErrorMessage(err.message)
      });
  };

  return (
    <div className={styles.pageRegister}>
      <div className={styles.register_container}>
        <TitlePage title="Inscription" />
        <p className="text-center">
          Inscrivez vous pour vous connecter à votre profil
        </p>
        <form className={styles.form__register} onSubmit={(e) => handleSubmit(e)}>
          <Input
            type="email"
            label="Email"
            id="email"
            name="email"
            placeholder="Mon email"
            required={true}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              console.log(email);
              setUser({ ...user, email: e.target.value });
            }}
          />
          <Input
            type="password"
            label="Mot de passe"
            id="password"
            name="password"
            placeholder="Mon mot de passe"
            required={true}
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
          />
          <input className={styles.register_submit} type="submit" value="M'inscrire" />
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
};

export default Index;