import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>✈</span>
          <span className={styles.logoText}>SkyBook</span>
        </Link>
        <div className={styles.links}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/search" className={styles.link}>Search Flights</Link>
        </div>
      </div>
    </nav>
  );
}
