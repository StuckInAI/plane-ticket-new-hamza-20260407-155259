import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConfirmationView from '@/components/ConfirmationView';
import styles from './page.module.css';

export default function ConfirmationPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <ConfirmationView />
        </div>
      </main>
      <Footer />
    </div>
  );
}
