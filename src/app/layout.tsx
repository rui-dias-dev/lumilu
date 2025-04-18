import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '../components/header/header';
import FooterMobile from '@/components/footer/FooterMobile';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} border-grid bg-cream flex flex-1 flex-col antialiased`}
      >
        <Header />
        {children}
        <FooterMobile />
      </body>
    </html>
  );
}
