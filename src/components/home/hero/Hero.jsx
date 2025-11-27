import React from "react";
import {Link} from "react-router-dom";
import img2 from "../../../assets/images/img2.jpg";
import styles from "./hero.module.css";

function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>
            Buy <span>your</span> favourite <span>Book</span> from{" "}
            <span>Here</span>
          </h1>
          <Link to="/books" className={styles.shopBtn}>
            SHOP NOW →
          </Link>
        </div>
        <div className={styles.heroImg}>
          <img src={img2} alt="girl reading" />
        </div>
      </section>
    </>
  );
}

export default Hero;
