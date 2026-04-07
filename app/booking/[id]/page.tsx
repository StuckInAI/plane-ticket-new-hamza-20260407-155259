import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';
import styles from './page.module.css';

export default function BookingPage({ params }: { params: { id: string } }) {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <BookingForm flightId={params.id} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
