import React, {useEffect, useMemo, useState} from "react";
import {useNavigate} from "react-router-dom";
import NavBar from "../../components/home/navbar/NavBar";
import Footer from "../../components/home/footer/Footer";
import styles from "./cart.module.css";
import {useCart} from "../../context/CartContext";
import Loader from "../../components/books/loader/Loader";

const Cart = () => {
  const {cartItems, updateCartItem, getTotalItems} = useCart();
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const totalItems = getTotalItems();

  useEffect(() => {
    fetch("/books.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch books");
        return res.json();
      })
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const items = useMemo(() => {
    return books
      .filter((book) => cartItems[book.id])
      .map((book) => ({
        ...book,
        quantity: cartItems[book.id],
      }));
  }, [books, cartItems]);

  const handleRemove = (bookId) => {
    updateCartItem(bookId, 0);
  };

  const handleQuantityChange = (bookId, delta) => {
    const nextQuantity = (cartItems[bookId] || 0) + delta;
    updateCartItem(bookId, Math.max(0, nextQuantity));
  };

  const handleOrderNow = () => {
    navigate("/payment");
  };

  return (
    <div className={styles.cartPage}>
      <NavBar />
      <main className={styles.content}>
        <header className={styles.header}>
          <div>
            <h1>My Cart</h1>
            <p>{totalItems === 0 ? "Nothing here yet." : `${totalItems} item(s) ready to checkout.`}</p>
          </div>
        </header>

        {loading ? (
          <Loader />
        ) : items.length === 0 ? (
          <div className={styles.emptyState}>
            <p>Your cart is empty.</p>
            <p className={styles.emptyHint}>Browse the books page and add titles you love.</p>
          </div>
        ) : (
          <section className={styles.itemsList}>
            {items.map((item) => (
              <article key={item.id} className={styles.itemCard}>
                <img src={item.image} alt={item.title} className={styles.itemCover} />
                <div className={styles.itemInfo}>
                  <h3>{item.title}</h3>
                  {item.description && <p>{item.description}</p>}
                  <div className={styles.itemActions}>
                    <div className={styles.quantityControls}>
                      <button onClick={() => handleQuantityChange(item.id, -1)} disabled={item.quantity <= 1}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                    </div>
                    <div className={styles.actionButtons}>
                      <button className={styles.removeBtn} onClick={() => handleRemove(item.id)}>
                        Remove
                      </button>
                      <button className={styles.orderNowBtn} onClick={handleOrderNow}>
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;




