import React from "react";
import aboutImg from "../../../assets/images/about.jpg";
import styles from "./about.module.css";

function About() {
  return (
    <>
      <section className={styles.about} id="about">
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h2 className={styles.sectionTitle}>
              About <span>BookPort</span>
            </h2>

            <p className={styles.leadText}>
              BookPort is a modern digital library that lets you explore, preview,
              and save your favorite books through a simple and interactive interface.
            </p>

            <div className={styles.infoBlock}>
              <h3>What We Offer</h3>
              <ul>
                <li>Easy browsing and fast search</li>
                <li>Category-based filtering</li>
                <li>Favorites and Cart management</li>
                <li>Book previews with essential details</li>
                <li>Real library locations in Egypt to read selected books</li>
              </ul>
            </div>

            <div className={styles.infoGrid}>
              <div>
                <h3>Who It’s For</h3>
                <p>
                  Readers, students, and anyone who wants a clean
                  and enjoyable book-browsing experience.
                </p>
              </div>
              <div>
                <h3>Our Vision</h3>
                <p>
                  A smooth, responsive platform ready for future backend
                  integration and advanced features.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.aboutImg}>
            <img src={aboutImg} alt="About Book Port" />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
