import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import background from '../../public/backgroundHome.jpg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
      </Head>

      <main className={styles.main}>
        <h1>Films, pas de série et pas grand chose en illimité.</h1>
        <h2>Où que vous soyez. Annulez à tout moment.</h2>
        <h3>Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.</h3>
        <form>
          <input placeholder='Adresse e-mail'/>
          <button>Commencer</button>
        </form>
      </main>
    </div>
  )
}
