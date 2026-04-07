'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense } from 'react';
import styles from './SearchResults.module.css';

const airlines = ['SkyAir', 'BlueLine', 'AeroJet', 'CloudWings', 'StarFly', 'PacificAir'];

function generateFlights(from: string, to: string, departure: string, count = 8) {
  return Array.from({ length: count }, (_, i) => {
    const basePrice = 100 + Math.floor(Math.random() * 600);
    const hours = 1 + Math.floor(Math.random() * 14);
    const mins = [0, 15, 30, 45][Math.floor(Math.random() * 4)];
    const depHour = 5 + Math.floor(Math.random() * 16);
    const depMin = [0, 15, 30, 45][Math.floor(Math.random() * 4)];
    const arrHour = (depHour + hours) % 24;
    const arrMin = (depMin + mins) % 60;
    return {
      id: `FL${1000 + i}`,
      airline: airlines[i % airlines.length],
      from: from || 'New York',
      to: to || 'London',
      departure: `${String(depHour).padStart(2, '0')}:${String(depMin).padStart(2, '0')}`,
      arrival: `${String(arrHour).padStart(2, '0')}:${String(arrMin).padStart(2, '0')}`,
      duration: `${hours}h ${mins > 0 ? mins + 'm' : '00m'}`,
      price: basePrice,
      stops: i % 3 === 0 ? 0 : i % 3 === 1 ? 1 : 2,
      date: departure || new Date().toISOString().split('T')[0],
      class: 'Economy',
    };
  });
}

function SearchResultsInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const from = searchParams.get('from') || '';
  const to = searchParams.get('to') || '';
  const departure = searchParams.get('departure') || '';
  const passengers = searchParams.get('passengers') || '1';

  const flights = generateFlights(from, to, departure);

  const handleBook = (id: string) => {
    const params = new URLSearchParams(searchParams.toString());
    router.push(`/booking/${id}?${params.toString()}`);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          {from && to ? `${from} → ${to}` : 'All Flights'}
        </h1>
        <p className={styles.subtitle}>
          {flights.length} flights found{departure ? ` for ${departure}` : ''}{' '}
          · {passengers} passenger{parseInt(passengers) > 1 ? 's' : ''}
        </p>
      </div>
      <div className={styles.list}>
        {flights.map(flight => (
          <div key={flight.id} className={styles.card}>
            <div className={styles.cardLeft}>
              <div className={styles.airline}>{flight.airline}</div>
              <div className={styles.flightId}>{flight.id}</div>
            </div>
            <div className={styles.cardCenter}>
              <div className={styles.timeRow}>
                <div className={styles.time}>{flight.departure}</div>
                <div className={styles.durationLine}>
                  <span className={styles.durationText}>{flight.duration}</span>
                  <div className={styles.line}></div>
                  <span className={styles.stops}>
                    {flight.stops === 0 ? 'Nonstop' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}
                  </span>
                </div>
                <div className={styles.time}>{flight.arrival}</div>
              </div>
              <div className={styles.routeRow}>
                <span>{flight.from}</span>
                <span>{flight.to}</span>
              </div>
            </div>
            <div className={styles.cardRight}>
              <div className={styles.price}>${flight.price}</div>
              <div className={styles.perPerson}>per person</div>
              <button
                className={styles.bookBtn}
                onClick={() => handleBook(flight.id)}
              >
                Select
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SearchResults() {
  return (
    <Suspense fallback={<div style={{padding: '40px', textAlign: 'center'}}>Loading flights...</div>}>
      <SearchResultsInner />
    </Suspense>
  );
}
