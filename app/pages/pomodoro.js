import React from "react";
import Header from "../shared/header";
import styles from "../styles/pagesStyle/pomodoro.module.css";

const Pomodoro = () => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.wrapper}></div>
    </div>
  );
};

export default Pomodoro;
