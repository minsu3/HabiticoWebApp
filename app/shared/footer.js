import React from "react";
import styles from "../styles/pagesStyle/footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        Designed and Developed by&nbsp;
        <a
          href="http://www.minsu-kim.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Minsu K</strong>
        </a>
        .
      </p>
    </div>
  );
}

export default Footer;
