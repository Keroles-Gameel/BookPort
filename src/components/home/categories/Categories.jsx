import React from "react";
import styles from "./categories.module.css";

import fictionImg from "../../../assets/images/fiction.jpg";
import nonfictionImg from "../../../assets/images/nonfiction.png";
import scifiImg from "../../../assets/images/Science-Fiction.jpg";
import fantasyImg from "../../../assets/images/Fantasy.jpeg";
import bioImg from "../../../assets/images/Biography.jpeg";

function Categories() {
  const categories = [
    {name: "Fiction", img: fictionImg},
    {name: "Non-Fiction", img: nonfictionImg},
    {name: "Science-Fiction", img: scifiImg},
    {name: "Fantasy", img: fantasyImg},
    {name: "Biography", img: bioImg},
  ];

  return (
    <section className={styles.categories}>
      <h2 className={styles.title}>
        Book <span>Categories</span>
      </h2>

      <div className={styles.grid}>
        {categories.map((cat, index) => (
          <div key={index} className={styles.card}>
            <img src={cat.img} alt={cat.name} className={styles.catImg} />
            <p className={styles.catName}>{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
