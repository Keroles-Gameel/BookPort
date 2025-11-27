import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import styles from "./home.module.css";
import NavBar from "../../components/home/navbar/NavBar";
import Hero from "../../components/home/hero/Hero";
import About from "../../components/home/about/About";
import Footer from "../../components/home/footer/Footer";
import Features from "../../components/home/features/Features";
import Categories from "../../components/home/categories/Categories";

const Home = () => {
  const [sliderBooks, setSliderBooks] = useState([]);
  const [currentSlideGroup, setCurrentSlideGroup] = useState(0);
  const [loading, setLoading] = useState(true);
  const booksPerSlide = 3; // Show 3 books at a time
  const totalSlideGroups = 2; // Only 2 dots

  // Fetch books from JSON API
  useEffect(() => {
    fetch("/books.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch books");
        return res.json();
      })
      .then((data) => {
        // Get enough books for 2 slide groups (3 books per group = 6 books total)
        setSliderBooks(data.slice(0, booksPerSlide * totalSlideGroups));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching books:", err);
        setLoading(false);
      });
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (sliderBooks.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlideGroup((prevGroup) =>
        prevGroup === totalSlideGroups - 1 ? 0 : prevGroup + 1
      );
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [sliderBooks.length]);

  return (
    <div className={styles.home}>
      {/* Navbar */}
      <NavBar />
      {/* Hero Section */}
      <Hero />
      {/* About Section */}
      <About />
      {/* Features Section */}
      <Features />
      {/* Categories Section */}
      <Categories />
      {/* Book Slider Section */}
      <section className={styles.bookSlider}>
        <h2 className={styles.bookSliderTitle}>Best Seller</h2>
        {loading ? (
          <div className={styles.sliderLoading}>Loading books...</div>
        ) : sliderBooks.length > 0 ? (
          <div className={styles.sliderContainer}>
            <div
              className={styles.sliderTrack}
              style={{
                transform: `translateX(-${currentSlideGroup * 100}%)`,
                transition: "transform 0.7s ease-in-out",
              }}>
              {Array.from({length: totalSlideGroups}).map((_, groupIndex) => (
                <div key={groupIndex} className={styles.slideGroup}>
                  {sliderBooks
                    .slice(
                      groupIndex * booksPerSlide,
                      (groupIndex + 1) * booksPerSlide
                    )
                    .map((book) => (
                      <div key={book.id} className={styles.slide}>
                        <img
                          src={book.image}
                          alt={book.title}
                          className={styles.slideImg}
                        />
                        <div className={styles.slideOverlay}>
                          <h3 className={styles.slideOverlayTitle}>
                            {book.title}
                          </h3>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
            {/* Slider Indicators - Only 2 dots */}
            <div className={styles.sliderIndicators}>
              {Array.from({length: totalSlideGroups}).map((_, index) => (
                <button
                  key={index}
                  className={`${styles.indicator} ${
                    index === currentSlideGroup ? styles.indicatorActive : ""
                  }`}
                  onClick={() => setCurrentSlideGroup(index)}
                  aria-label={`Go to slide group ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className={styles.sliderError}>No books available</div>
        )}
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
