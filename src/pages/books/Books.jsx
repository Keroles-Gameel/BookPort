import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import BookCard from "../../components/books/BookCard/BookCard";
import styles from "./books.module.css";
import Loader from "../../components/books/loader/Loader";
import Sidebar from "../../components/books/sidebar/sidebar";
import SearchBar from "../../components/books/search/search";
import NavBar from "../../components/home/navbar/NavBar";

function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Books");

  useEffect(() => {
    setTimeout(() => {
      fetch("/books.json")
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch books");
          return res.json();
        })
        .then((data) => {
          setBooks(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }, 1000);
  }, []);

  const filteredBooks = books.filter(
    (book) =>
      (selectedCategory === "All Books" ||
        book.category === selectedCategory) &&
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = [
    "Fiction",
    "Non-Fiction",
    "Science-Fiction",
    "Fantasy",
    "Biography",
  ];

  return (
    <>
      <NavBar />
      <div className={styles.booksPage}>
        {loading && <Loader />}
        {error && <p style={{color: "red"}}>{error}</p>}

        {!loading && (
          <>
            <Link to="/" className={styles.backHomeBtn}>
              ← Back to Home
            </Link>
            <SearchBar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />

            <div className={styles.booksContent}>
              <Sidebar
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
              <div className={styles.booksSection}>
                <h1 className={styles.pageTitle}>
                  {selectedCategory === "All Books"
                    ? "All Books"
                    : selectedCategory}
                </h1>
                <div className={styles.booksGrid}>
                  {filteredBooks.map((book) => (
                    <BookCard key={book.id} book={book} />
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Books;
