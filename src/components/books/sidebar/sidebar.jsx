import React from "react";
import styles from "./sidebar.module.css";

function Sidebar({ categories, selectedCategory, onSelectCategory }) {
  return (
    <aside className={styles.sidebar}>
      <h3 className={styles.filterTitle}>Filter Categories</h3>
      <ul className={styles.categoryList}>
        <li
          className={selectedCategory === "All Books" ? styles.active : ""}
          onClick={() => onSelectCategory("All Books")}
        >
          All Books
        </li>
        {categories.map((cat) => (
          <li
            key={cat}
            className={selectedCategory === cat ? styles.active : ""}
            onClick={() => onSelectCategory(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
