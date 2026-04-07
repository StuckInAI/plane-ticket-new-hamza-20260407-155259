'use client';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './BookingForm.module.css';

const airlines: Record<string, string> = {
  FL1000: 'SkyAir', FL1001: 'BlueLine', FL1002: 'AeroJet',
  FL1003: 'CloudWings', FL1004: 'StarFly', FL1005: 'PacificAir',
  FL1006: 'SkyAir', FL1007: 'BlueLine',
};

interface Props {
  flightId: string;
}

export default function BookingForm({ flightId }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get('from') || 'New York';
  const to = searchParams.get('to') || 'London';
  const departure = searchParams.get('departure') || '';
  const passengers = parseInt(searchParams.get('passengers') || '1');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [passport, setPassport] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const price = 100 + (parseInt(flightId.replace('FL', '')) % 600);
  const airline = airlines[flightId] || 'SkyAir';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const bookingRef = 'SKY' + Math.random().toString(36).substring(2, 8).toUpperCase();
    const params = new URLSearchParams({
      ref: bookingRef,
      from,
      to,
      departure,
      flightId,
      airline,
      passengers: String(passengers),
      price: String(price * passengers),
      name: `${firstName} ${lastName}`,
      email,
    });
    router.push(`/confirmation?${params.toString()}`);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.flightSummary}>
        <h2 className={styles.summaryTitle}>Flight Summary</h2>
        <div className={styles.summaryRow}>
          <div className={styles.summaryItem}>
            <span className={styles.summaryLabel}>Flight</span>
            <span className={styles.summaryValue}>{flightId}</span>
          </div>
          <div className={styles.summaryItem}>
            <span className={styles.summaryLabel}>Airline</span>
            <span className={styles.summaryValue}>{airline}</span>
          </div>
          <div className={styles.summaryItem}>
            <span className={styles.summaryLabel}>Route</span>
            <span className={styles.summaryValue}>{from} → {to}</span>
          </div>
          <div className={styles.summaryItem}>
            <span className={styles.summaryLabel}>Date</span>
            <span className={styles.summaryValue}>{departure || 'N/A'}</span>
          </div>
          <div className={styles.summaryItem}>
            <span className={styles.summaryLabel}>Passengers</span>
            <span className={styles.summaryValue}>{passengers}</span>
          </div>
          <div className={styles.summaryItem}>
            <span className={styles.summaryLabel}>Total</span>
            <span className={styles.summaryPrice}>${price * passengers}</span>
          </div>
        </div>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.formTitle}>Passenger Details</h2>
        <div className={styles.fields}>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>First Name</label>
            <input className={styles.input} type="text" value={firstName} onChange={e => setFirstName(e.target.value)} required placeholder="John" />
          </div>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>Last Name</label>
            <input className={styles.input} type="text" value={lastName} onChange={e => setLastName(e.target.value)} required placeholder="Doe" />
          </div>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>Email</label>
            <input className={styles.input} type="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="john@example.com" />
          </div>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>Phone</label>
            <input className={styles.input} type="tel" value={phone} onChange={e => setPhone(e.target.value)} required placeholder="+1 234 567 8900" />
          </div>
          <div className={styles.fieldGroupFull}>
            <label className={styles.label}>Passport / ID Number</label>
            <input className={styles.input} type="text" value={passport} onChange={e => setPassport(e.target.value)} required placeholder="AB1234567" />
          </div>
        </div>

        <h2 className={styles.formTitle} style={{marginTop: '28px'}}>Payment Details</h2>
        <div className={styles.fields}>
          <div className={styles.fieldGroupFull}>
            <label className={styles.label}>Card Number</label>
            <input className={styles.input} type="text" value={cardNumber} onChange={e => setCardNumber(e.target.value)} required placeholder="1234 5678 9012 3456" maxLength={19} />
          </div>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>Expiry Date</label>
            <input className={styles.input} type="text" value={cardExpiry} onChange={e => setCardExpiry(e.target.value)} required placeholder="MM/YY" maxLength={5} />
          </div>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>CVV</label>
            <input className={styles.input} type="text" value={cardCvv} onChange={e => setCardCvv(e.target.value)} required placeholder="123" maxLength={4} />
          </div>
        </div>

        <button className={styles.submitBtn} type="submit" disabled={submitted}>
          {submitted ? 'Processing...' : `Confirm Booking · $${price * passengers}`}
        </button>
      </form>
    </div>
  );
}
