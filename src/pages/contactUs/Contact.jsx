import React from "react";
import {Link} from "react-router-dom";
import NavBar from "../../components/home/navbar/NavBar";
import styles from "./contact.module.css";

function Contact() {
  return (
    <>
      <NavBar />
      <div className={styles.contactPage}>
        <h2 className={styles.contactPageTitle}>
          Contact <span className={styles.contactPageTitleSpan}>Us</span>
        </h2>
        <p className={styles.contactSubtitle}>
          We'd love to hear from you! Please fill out the form below.
        </p>
        <Link to="/" className={styles.backHomeBtn}>
          ← Back to Home
        </Link>

        <div className={styles.contactCenter}>
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label className={styles.formGroupLabel}>Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className={styles.formGroupInput}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formGroupLabel}>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.formGroupInput}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.formGroupLabel}>Message</label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                className={styles.formGroupTextarea}
                required></textarea>
            </div>

            <button type="submit" className={styles.contactBtn}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
