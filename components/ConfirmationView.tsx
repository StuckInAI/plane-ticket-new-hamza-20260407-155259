'use client';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';
import styles from './ConfirmationView.module.css';

function ConfirmationInner() {
  const searchParams = useSearchParams();
  const ref = searchParams.get('ref') || 'SKYXXXXXX';
  const from = searchParams.get('from') || 'N/A';
  const to = searchParams.get('to') || 'N/A';
  const departure = searchParams.get('departure') || 'N/A';
  const flightId = searchParams.get('flightId') || 'N/A';
  const airline = searchParams.get('airline') || 'N/A';
  const passengers = searchParams.get('passengers') || '1';
  const price = searchParams.get('price') || '0';
  const name = searchParams.get('name') || 'Passenger';
  const email = searchParams.get('email') || 'N/A';

  return (
    <div className={styles.wrapper}>
      <div className={styles.successIcon}>✅</div>
      <h1 className={styles.title}>Booking Confirmed!</h1>
      <p className={styles.subtitle}>Your flight has been successfully booked. A confirmation has been sent to <strong>{email}</strong>.</p>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <span className={styles.refLabel}>Booking Reference</span>
          <span className={styles.ref}>{ref}</span>
        </div>
        <div className={styles.details}>
          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Passenger</span>
            <span className={styles.detailValue}>{name}</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Flight</span>
            <span className={styles.detailValue}>{flightId} · {airline}</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Route</span>
            <span className={styles.detailValue}>{from} → {to}</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Date</span>
            <span className={styles.detailValue}>{departure}</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Passengers</span>
            <span className={styles.detailValue}>{passengers}</span>
          </div>
          <div className={styles.detailRow}>
            <span className={styles.detailLabel}>Total Paid</span>
            <span className={styles.price}>${price}</span>
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        <Link href="/" className={styles.homeBtn}>Back to Home</Link>
        <Link href="/search" className={styles.searchBtn}>Book Another Flight</Link>
      </div>
    </div>
  );
}

export default function ConfirmationView() {
  return (
    <Suspense fallback={<div style={{padding: '40px', textAlign: 'center'}}>Loading confirmation...</div>}>
      <ConfirmationInner />
    </Suspense>
  );
}
