import React from "react";
import styles from "./features.module.css";

function Features() {
  const features = [
    {
      icon: "🛒",
      title: "Buy Books",
      text: "Purchase your favorite books easily through our ecommerce system.",
    },
    {
      icon: "📍",
      title: "Find Book Location",
      text: "Know where the book is available and check its stock status.",
    },
    {
      icon: "📚",
      title: "Explore Categories",
      text: "Browse all book types including fiction, science, history and more.",
    },
    {
      icon: "⭐",
      title: "Book Details",
      text: "Read full information about each book before buying.",
    },
  ];

  return (
    <section className={styles.features}>
      <h2 className={styles.title}>
        What <span>Book Port</span> Offers
      </h2>

      <div className={styles.grid}>
        {features.map((item, index) => (
          <div key={index} className={styles.card}>
            <span className={styles.icon}>{item.icon}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
