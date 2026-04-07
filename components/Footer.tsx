import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logoIcon}>✈</span>
          <span className={styles.logoText}>SkyBook</span>
        </div>
        <p className={styles.copy}>© {new Date().getFullYear()} SkyBook. All rights reserved.</p>
        <div className={styles.links}>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}
