import React from "react";
import styles from "./search.module.css";
import { FiSearch } from "react-icons/fi";

function SearchBar({ searchQuery, onSearchChange }) {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search books by title..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <FiSearch className={styles.searchIcon} />
    </div>
  );
}

export default SearchBar;
