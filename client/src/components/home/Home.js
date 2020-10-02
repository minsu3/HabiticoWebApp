import React from 'react'
import { Link } from 'react-router-dom'
import sharedStyles from "../../global.module.css";
import styles from './home.module.css'

function Home() {
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
  
  return (
    <div className={sharedStyles.main}>
      <h1 className={styles.title}>Habitico</h1>
      <h2 className={styles.subTitle}>Increase Your Productivity</h2>
      <div className={styles.signup}>
        <Link to="/signup">
          <button className={styles.signupButton}>Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default Home