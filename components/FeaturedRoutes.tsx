import Link from 'next/link';
import styles from './FeaturedRoutes.module.css';

const routes = [
  { from: 'New York', to: 'London', price: 349, duration: '7h 20m', tag: 'Popular' },
  { from: 'Los Angeles', to: 'Tokyo', price: 589, duration: '11h 45m', tag: 'Deal' },
  { from: 'Chicago', to: 'Paris', price: 429, duration: '9h 10m', tag: 'New' },
  { from: 'Miami', to: 'Cancun', price: 159, duration: '2h 30m', tag: 'Hot' },
  { from: 'San Francisco', to: 'Sydney', price: 749, duration: '15h 30m', tag: 'Popular' },
  { from: 'Seattle', to: 'Vancouver', price: 89, duration: '1h 10m', tag: 'Deal' },
];

export default function FeaturedRoutes() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Featured Routes</h2>
      <div className={styles.grid}>
        {routes.map((route, i) => (
          <Link
            href={`/search?from=${encodeURIComponent(route.from)}&to=${encodeURIComponent(route.to)}`}
            key={i}
            className={styles.card}
          >
            <div className={styles.cardTop}>
              <span className={styles.tag}>{route.tag}</span>
              <span className={styles.duration}>{route.duration}</span>
            </div>
            <div className={styles.route}>
              <span className={styles.city}>{route.from}</span>
              <span className={styles.arrow}>✈</span>
              <span className={styles.city}>{route.to}</span>
            </div>
            <div className={styles.price}>From <strong>${route.price}</strong></div>
          </Link>
        ))}
      </div>
    </div>
  );
}
