import React from "react";
import NavBar from "../../components/home/navbar/NavBar";
import Footer from "../../components/home/footer/Footer";
import styles from "./favorites.module.css";
import {useFavorites} from "../../context/FavoritesContext";
import {useCart} from "../../context/CartContext";

const Favorites = () => {
  const {favorites, removeFavorite} = useFavorites();
  const {cartItems, updateCartItem} = useCart();

  const handleAddToCart = (book) => {
    const currentQty = cartItems[book.id] || 0;
    updateCartItem(book.id, currentQty + 1);
  };

  return (
    <div className={styles.favoritesPage}>
      <NavBar />
      <main className={styles.content}>
        <div className={styles.header}>
          <h1>My Favorite Books</h1>
          {favorites.length > 0 && (
            <p>{favorites.length} saved {favorites.length === 1 ? "book" : "books"}</p>
          )}
        </div>
        {favorites.length === 0 ? (
          <div className={styles.emptyState}>
            <p>You have not added any favorites yet.</p>
            <p className={styles.emptyHint}>Tap the heart icon on any book to save it here.</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {favorites.map((book) => (
              <article key={book.id} className={styles.card}>
                <img src={book.image} alt={book.title} className={styles.cover} />
                <div className={styles.cardBody}>
                  <h3>{book.title}</h3>
                  {book.description && <p>{book.description}</p>}
                  <div className={styles.cardActions}>
                    <button
                      type="button"
                      className={styles.addToCartButton}
                      onClick={() => handleAddToCart(book)}>
                      Add to Cart
                    </button>
                    <button
                      type="button"
                      onClick={() => removeFavorite(book.id)}
                      className={styles.removeButton}>
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Favorites;


