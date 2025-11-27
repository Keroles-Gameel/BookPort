import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {AiFillHeart} from "react-icons/ai";
import {FaUserCircle} from "react-icons/fa";
import icon from "/icon.jpeg";
import styles from "./navbar.module.css";
import {useCart} from "../../../context/CartContext";
import {useFavorites} from "../../../context/FavoritesContext";

function NavBar() {
  const {getTotalItems} = useCart();
  const totalItems = getTotalItems();
  const {getFavoritesCount} = useFavorites();
  const totalFavorites = getFavoritesCount();
  const navigate = useNavigate();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    try {
      const savedPhoto = window.localStorage.getItem("profilePhoto");
      if (savedPhoto) setProfilePhoto(savedPhoto);
      const savedUser = window.localStorage.getItem("loggedInUser");
      if (savedUser) {
        const user = JSON.parse(savedUser);
        setUserName(user.name || "");
      }
    } catch {
      // ignore
    }
  }, []);

  const handleToggleUserMenu = () => {
    setIsUserMenuOpen((open) => !open);
  };

  const handleLogout = () => {
    window.localStorage.removeItem("loggedInUser");
    setUserName("");
    setIsUserMenuOpen(false);
    navigate("/login");
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      if (typeof result === "string") {
        setProfilePhoto(result);
        try {
          window.localStorage.setItem("profilePhoto", result);
        } catch {
          // ignore
        }
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <Link to="/" className={styles.logoContainer}>
          <img src={icon} alt="Book Port Logo" className={styles.logoImg} />
          <span className={styles.logoText}>Book Port</span>
        </Link>
        <ul className={styles.navLinks}>
          <li>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li>
            <a href="#about" className={styles.navLink}>
              About
            </a>
          </li>
          <li>
            <Link to="/books" className={styles.navLink}>
              Books
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className={styles.navLink}>
              Contact-Us
            </Link>
          </li>
        </ul>
        <div className={styles.navIcons}>
          <Link
            to="/favorites"
            className={styles.favoritesBtn}
            aria-label="Favorites">
            <AiFillHeart className={styles.favoritesIcon} />
            {totalFavorites > 0 && (
              <span className={styles.favoritesBadge}>{totalFavorites}</span>
            )}
          </Link>
          <Link to="/cart" className={styles.cartBtn} aria-label="Shopping cart">
            <span className={styles.cartIcon}>🛒</span>
            {totalItems > 0 && (
              <span className={styles.cartBadge}>{totalItems}</span>
            )}
          </Link>
          <div className={styles.userMenu}>
            <button
              type="button"
              className={styles.userAvatar}
              onClick={handleToggleUserMenu}
              aria-haspopup="true"
              aria-expanded={isUserMenuOpen}>
              {profilePhoto ? (
                <img
                  src={profilePhoto}
                  alt="Profile"
                  className={styles.userAvatarImage}
                />
              ) : (
                <FaUserCircle className={styles.userAvatarIcon} />
              )}
            </button>
            {isUserMenuOpen && (
              <div className={styles.userDropdown}>
                {userName && (
                  <div className={styles.userNameRow}>
                    <span className={styles.userNameLabel}>Signed in as</span>
                    <span className={styles.userNameValue}>{userName}</span>
                  </div>
                )}
                <label className={styles.userUploadLabel}>
                  Change profile photo
                  <input
                    type="file"
                    accept="image/*"
                    className={styles.userFileInput}
                    onChange={handleAvatarChange}
                  />
                </label>
                <div className={styles.userDropdownDivider} />
                <Link
                  to="/favorites"
                  className={styles.userDropdownItem}
                  onClick={() => setIsUserMenuOpen(false)}>
                  Favorites
                </Link>
                <Link
                  to="/cart"
                  className={styles.userDropdownItem}
                  onClick={() => setIsUserMenuOpen(false)}>
                  Cart
                </Link>
                <button
                  type="button"
                  className={styles.userDropdownLogout}
                  onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
          {!userName && (
            <>
              <Link to="/login" className={styles.btnLogin}>
                Login
              </Link>
              <Link to="/register" className={styles.btnRegister}>
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
