import React, { useState } from "react";
import Head from 'next/head';
import { useRouter } from "next/router";
import styles from '../styles/Home.module.scss';
import { Router } from "next/router";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("email", email);
    router.push('/register');
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.home_container}>
          <h1>Films, pas de série et pas grand chose en illimité.</h1>
          <h2>Où que vous soyez. Annulez à tout moment.</h2>
          <h3>Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.</h3>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input type="email" placeholder='Adresse e-mail' onChange={(e) => {
              setEmail(e.target.value)
            }} required/>
            <button>Commencer</button>
          </form>
        </div>
      </main>
    </div>
  )
}
