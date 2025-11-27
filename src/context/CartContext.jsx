import React, {createContext, useContext, useEffect, useState} from "react";

const CartContext = createContext();
const CART_STORAGE_KEY = "book-port:cart";

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

const getInitialCart = () => {
  if (typeof window === "undefined") return {};
  try {
    const saved = window.localStorage.getItem(CART_STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch (error) {
    console.error("Failed to parse cart from storage:", error);
    return {};
  }
};

export const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState(getInitialCart); // {bookId: quantity}

  useEffect(() => {
    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (error) {
      console.error("Failed to persist cart:", error);
    }
  }, [cartItems]);

  const updateCartItem = (bookId, quantity) => {
    setCartItems((prev) => {
      if (quantity === 0) {
        const newItems = {...prev};
        delete newItems[bookId];
        return newItems;
      }
      return {
        ...prev,
        [bookId]: quantity,
      };
    });
  };

  const getTotalItems = () => {
    return Object.values(cartItems).reduce(
      (total, quantity) => total + quantity,
      0
    );
  };

  return (
    <CartContext.Provider value={{cartItems, updateCartItem, getTotalItems}}>
      {children}
    </CartContext.Provider>
  );
};


