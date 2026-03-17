import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Holiday Hotel - Best Hotel in Addis Ababa, Ethiopia",
  description: "Luxury hotel in Addis Ababa, Ethiopia since 1986. Premium accommodation, restaurant, and dining experience with extensive menu featuring Ethiopian and international cuisine.",
  keywords: "Holiday Hotel, Addis Ababa, Ethiopia, luxury hotel, restaurant, dining, Ethiopian cuisine, hotel accommodation, premium hospitality",
  authors: [{ name: "Holiday Hotel" }],
  creator: "Habkal",
  publisher: "Holiday Hotel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://holidayhotel.et'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Holiday Hotel - Best Hotel in Addis Ababa, Ethiopia",
    description: "Luxury hotel in Addis Ababa, Ethiopia since 1986. Premium accommodation, restaurant, and dining experience.",
    url: 'https://holidayhotel.et',
    siteName: 'Holiday Hotel',
    images: [
      {
        url: '/Holiday-Cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Holiday Hotel Addis Ababa',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Holiday Hotel - Best Hotel in Addis Ababa, Ethiopia',
    description: 'Luxury hotel in Addis Ababa, Ethiopia since 1986. Premium accommodation, restaurant, and dining experience.',
    images: ['/Holiday-Cover.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
