import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchResults from '@/components/SearchResults';
import styles from './page.module.css';

export default function SearchPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <SearchResults />
        </div>
      </main>
      <Footer />
    </div>
  );
}
