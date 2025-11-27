import React, { useState, useEffect, useMemo } from "react";
import styles from "./BookCard.module.css";
import { BsCartPlus } from "react-icons/bs";
import {
  AiOutlineHeart,
  AiOutlinePlus,
  AiOutlineMinus,
  AiFillHeart,
} from "react-icons/ai";
import { useCart } from "../../../context/CartContext";
import { useFavorites } from "../../../context/FavoritesContext";

const BASE_LIBRARY_LOCATIONS = [
  { name: "Alexandria Library – Manuscripts Wing", city: "Alexandria" },
  { name: "Dar Al Kutub Library – Heritage Hall", city: "Cairo" },
  { name: "Bibliotheca Alexandrina – Scholars Hub", city: "Alexandria" },
  { name: "Mansoura Public Library – Delta Archives", city: "Mansoura" },
  { name: "Alexandria Library – Reading Garden", city: "Alexandria" },
  { name: "Dar Al Kutub Library – Nile Annex", city: "Cairo" },
  { name: "Bibliotheca Alexandrina – Palm Atrium", city: "Alexandria" },
  { name: "Mansoura Public Library – Children’s Corner", city: "Mansoura" },
];

const getUniqueLocations = (bookId) => {
  if (bookId === undefined || bookId === null) {
    return BASE_LIBRARY_LOCATIONS.slice(0, 4);
  }

  const numericSeed =
    typeof bookId === "number"
      ? bookId
      : parseInt(bookId, 10) ||
        bookId
          .toString()
          .split("")
          .reduce((sum, char) => sum + char.charCodeAt(0), 0);

  const startIndex = numericSeed % BASE_LIBRARY_LOCATIONS.length;
  return Array.from({ length: 4 }, (_, idx) => {
    const nextIndex = (startIndex + idx) % BASE_LIBRARY_LOCATIONS.length;
    return BASE_LIBRARY_LOCATIONS[nextIndex];
  });
};

function BookCard({ book }) {
  const { updateCartItem, cartItems } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const [isInCart, setIsInCart] = useState(false);
  const [counter, setCounter] = useState(1);
  const isBookFavorite = isFavorite(book.id);
  const libraryLocations = useMemo(
    () => getUniqueLocations(book.id),
    [book.id]
  );

  useEffect(() => {
    // Sync local state with cart context
    const quantity = cartItems[book.id] || 0;
    if (quantity > 0) {
      setIsInCart(true);
      setCounter(quantity);
    } else {
      setIsInCart(false);
      setCounter(1);
    }
  }, [cartItems, book.id]);

  const handleCartClick = () => {
    const currentQty = cartItems[book.id] || 0;
    const newQty = currentQty + 1;
    setIsInCart(true);
    setCounter(newQty);
    updateCartItem(book.id, newQty);
  };

  const handlePlusClick = (e) => {
    e.stopPropagation();
    const newCounter = counter + 1;
    setCounter(newCounter);
    updateCartItem(book.id, newCounter);
  };

  const handleMinusClick = (e) => {
    e.stopPropagation();
    if (counter > 1) {
      const newCounter = counter - 1;
      setCounter(newCounter);
      updateCartItem(book.id, newCounter);
    } else {
      setIsInCart(false);
      setCounter(1);
      updateCartItem(book.id, 0);
    }
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    toggleFavorite(book);
  };

  return (
    <div className={styles.bookCard}>
      <div className={styles.bookImagePlaceholder}>
        <img className={styles.img} src={book.image} alt={book.title} />

        <div className={styles.hoverOverlay}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "1rem",
              maxWidth: "80%",
            }}
          >
            <div
              style={{
                color: "white",
                width: "100%",
              }}
            >
              <p
                style={{
                  margin: "0 0 0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  fontSize: "0.9rem",
                  color: "#e9cda3",
                }}
              >
                Available at
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "grid",
                  gap: "0.35rem",
                  fontSize: "0.85rem",
                }}
              >
                {libraryLocations.map((location) => (
                  <li key={location.name}>
                    <span style={{ display: "block", fontWeight: 600 }}>
                      {location.name}
                    </span>
                    <span style={{ opacity: 0.85, fontSize: "0.8rem" }}>
                      {location.city}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.details}>
        <h3 className={styles.bookTitle}>{book.title}</h3>
        <p className={styles.bookDescription}>{book.description}</p>
        <div className={styles.buttonsContainer}>
          <button
            type="button"
            className={styles.readNowButton}
            onClick={handleCartClick}
          >
            Add to Cart
          </button>

          <div className={styles.iconButtons}>
            {isInCart && (
              <div className={styles.cartCounterContainer}>
                <button
                  className={styles.iconButton}
                  onClick={handleMinusClick}
                >
                  <AiOutlineMinus />
                </button>
                <span className={styles.counter}>{counter}</span>
                <button className={styles.iconButton} onClick={handlePlusClick}>
                  <AiOutlinePlus />
                </button>
              </div>
            )}
            <button
              className={styles.iconButton}
              style={
                isBookFavorite
                  ? {
                      color: "#d63939",
                      borderColor: "#d63939",
                      backgroundColor: "#fff5f5",
                    }
                  : undefined
              }
              onClick={handleFavoriteClick}
              aria-pressed={isBookFavorite}
              aria-label="Add to favorites"
            >
              {isBookFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
