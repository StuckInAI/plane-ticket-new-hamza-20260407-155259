import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SkyBook - Airplane Ticket Booking',
  description: 'Book your flights easily with SkyBook',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
