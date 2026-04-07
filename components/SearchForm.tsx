'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './SearchForm.module.css';

export default function SearchForm() {
  const router = useRouter();
  const [tripType, setTripType] = useState('roundtrip');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departure, setDeparture] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState('1');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({
      from,
      to,
      departure,
      return: returnDate,
      passengers,
      tripType,
    });
    router.push(`/search?${params.toString()}`);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.tripTypeRow}>
        <label className={styles.radioLabel}>
          <input
            type="radio"
            name="tripType"
            value="roundtrip"
            checked={tripType === 'roundtrip'}
            onChange={() => setTripType('roundtrip')}
          />
          Round Trip
        </label>
        <label className={styles.radioLabel}>
          <input
            type="radio"
            name="tripType"
            value="oneway"
            checked={tripType === 'oneway'}
            onChange={() => setTripType('oneway')}
          />
          One Way
        </label>
      </div>
      <div className={styles.fields}>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>From</label>
          <input
            className={styles.input}
            type="text"
            placeholder="City or airport"
            value={from}
            onChange={e => setFrom(e.target.value)}
            required
          />
        </div>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>To</label>
          <input
            className={styles.input}
            type="text"
            placeholder="City or airport"
            value={to}
            onChange={e => setTo(e.target.value)}
            required
          />
        </div>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Departure</label>
          <input
            className={styles.input}
            type="date"
            value={departure}
            onChange={e => setDeparture(e.target.value)}
            required
          />
        </div>
        {tripType === 'roundtrip' && (
          <div className={styles.fieldGroup}>
            <label className={styles.label}>Return</label>
            <input
              className={styles.input}
              type="date"
              value={returnDate}
              onChange={e => setReturnDate(e.target.value)}
            />
          </div>
        )}
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Passengers</label>
          <select
            className={styles.input}
            value={passengers}
            onChange={e => setPassengers(e.target.value)}
          >
            {[1,2,3,4,5,6].map(n => (
              <option key={n} value={n}>{n} Passenger{n > 1 ? 's' : ''}</option>
            ))}
          </select>
        </div>
      </div>
      <button className={styles.submitBtn} type="submit">Search Flights</button>
    </form>
  );
}
