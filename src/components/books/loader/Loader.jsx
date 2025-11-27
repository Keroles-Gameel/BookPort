import styles from "./loader.module.css";

export default function Loader() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loaderContainer}>
        <div className={styles.loader}></div>
        <div className={styles.bookIcon}>📚</div>
      </div>
      <h2 className={styles.loadingText}>
        Loading<span className={styles.loadingDots}></span>
      </h2>
      {/* Alternative: Book Stack Animation */}
      <div className={styles.bookStack}>
        <div className={styles.book}></div>
        <div className={styles.book}></div>
        <div className={styles.book}></div>
        <div className={styles.book}></div>
        <div className={styles.book}></div>
      </div>
    </div>
  );
}
