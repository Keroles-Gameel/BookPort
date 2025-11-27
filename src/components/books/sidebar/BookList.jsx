import React, { useState } from "react";
import Books from "./Books";

function BookList({ books, categories }) {
  const [selectedCategory, setSelectedCategory] = useState("All Books");

  const filteredBooks =
    selectedCategory === "All Books"
      ? books
      : books.filter((book) => book.category === selectedCategory);

  return (
    <div className="book-list-container">
      <aside className="sidebar">
        <h3 className="filter-title">Filter categories</h3>
        <ul className="category-list">
          <li
            key="All Books"
            className={selectedCategory === "All Books" ? "active" : ""}
            onClick={() => setSelectedCategory("All Books")}
          >
            All Books
          </li>
          {categories.map((cat) => (
            <li
              key={cat}
              className={selectedCategory === cat ? "active" : ""}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </li>
          ))}
        </ul>
      </aside>

      <div className="books-grid">
        {filteredBooks.map((book) => (
          <Books key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default BookList;
