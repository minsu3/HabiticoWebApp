import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../shared/header";
import Footer from "../shared/footer";

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <Header />
        <Head>
          <title>Habitico App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to Habitico! 👋</h1>
          <p className={styles.description}>
            A productivity app bundled up for maximum efficiency.
          </p>
          <div className={styles.grid}>
            <a href="/sign-in" className={styles.card}>
              <h3>Sign in to get started &rarr;</h3>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
