import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../shared/header/header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <Head>
        <title>HABITICO - Productivity App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Habitico! 👋</h1>

        <p className={styles.description}>
          Productivity app bundled up for maximum efficiency.
        </p>

        <div className={styles.grid}>
          <a href="/sign-in" className={styles.card}>
            <h3>Sign in to get started &rarr;</h3>
            <p>
              Any file placed inside this directory will be transferred to the
              root of the build, this usually works for static files, such as
              images, text files, etc.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        Designed and Developed by&nbsp;
        <a
          href="http://www.minsu-kim.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Minsu K</strong>
        </a>
        .
      </footer>
    </div>
  );
}
