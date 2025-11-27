import React from "react";
import {Link} from "react-router-dom";
import styles from "./footer.module.css";
import icon from "/icon.jpeg";

function footer() {
  return (
    <>
      <footer className={styles.footer} id="contact">
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            {/*<img src={icon} alt="Book Port Logo" />*/}
            <img src={icon} alt="Book Port Logo" className={styles.logoImg} />
            <h3>Book Port</h3>
            <p>Your digital library at your fingertips 📚</p>
          </div>

          <div className={styles.footerLinks}>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <Link to="/books">Books</Link>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className={styles.footerContact}>
            <h4>Contact Us</h4>
            <p>Email: support@bookport.com</p>
            <p>Phone: +20 100 000 0000</p>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© 2025 Book Port. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default footer;
