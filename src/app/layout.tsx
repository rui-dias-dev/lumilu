import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const montserratSans = Montserrat({
  variable: '--font-montserrat-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Lumilu',
  description: 'Bring art & intention into every practice',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserratSans.className} border-grid bg-cream flex flex-1 flex-col antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
