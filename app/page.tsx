import Navbar from '@/components/Navbar';
import SearchForm from '@/components/SearchForm';
import FeaturedRoutes from '@/components/FeaturedRoutes';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Fly Anywhere, Anytime</h1>
            <p className={styles.heroSubtitle}>Find and book the best flight deals in seconds</p>
          </div>
          <div className={styles.searchWrapper}>
            <SearchForm />
          </div>
        </section>
        <section className={styles.featuredSection}>
          <div className={styles.container}>
            <FeaturedRoutes />
          </div>
        </section>
        <section className={styles.whySection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Why Choose SkyBook?</h2>
            <div className={styles.whyGrid}>
              <div className={styles.whyCard}>
                <div className={styles.whyIcon}>✈️</div>
                <h3>500+ Airlines</h3>
                <p>Access flights from hundreds of airlines worldwide</p>
              </div>
              <div className={styles.whyCard}>
                <div className={styles.whyIcon}>💰</div>
                <h3>Best Prices</h3>
                <p>We guarantee the lowest fares available online</p>
              </div>
              <div className={styles.whyCard}>
                <div className={styles.whyIcon}>🔒</div>
                <h3>Secure Booking</h3>
                <p>Your payment and data are always protected</p>
              </div>
              <div className={styles.whyCard}>
                <div className={styles.whyIcon}>📱</div>
                <h3>24/7 Support</h3>
                <p>Round-the-clock assistance whenever you need it</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
