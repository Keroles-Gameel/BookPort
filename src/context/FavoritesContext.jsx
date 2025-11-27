import React, {createContext, useContext, useEffect, useState} from "react";

const FavoritesContext = createContext();
const STORAGE_KEY = "book-port:favorites";

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};

const getInitialFavorites = () => {
  if (typeof window === "undefined") {
    return [];
  }
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error("Failed to parse favorites from storage:", error);
    return [];
  }
};

export const FavoritesProvider = ({children}) => {
  const [favorites, setFavorites] = useState(getInitialFavorites);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.error("Failed to persist favorites:", error);
    }
  }, [favorites]);

  const addFavorite = (book) => {
    setFavorites((prev) => {
      if (prev.some((fav) => fav.id === book.id)) {
        return prev;
      }
      return [...prev, book];
    });
  };

  const removeFavorite = (bookId) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== bookId));
  };

  const toggleFavorite = (book) => {
    setFavorites((prev) => {
      if (prev.some((fav) => fav.id === book.id)) {
        return prev.filter((fav) => fav.id !== book.id);
      }
      return [...prev, book];
    });
  };

  const isFavorite = (bookId) => favorites.some((fav) => fav.id === bookId);

  const getFavoritesCount = () => favorites.length;

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        toggleFavorite,
        isFavorite,
        getFavoritesCount,
      }}>
      {children}
    </FavoritesContext.Provider>
  );
};


