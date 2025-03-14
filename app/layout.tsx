import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CookieConsent } from './components/ui/CookieConsent';
import Footer from './components/layout/Footer';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Krontiva Africa",
  description: "We are an industry-leading transformation company",
  icons: {
    icon: [
      {
        url: '/favicon.png',
        href: '/favicon.png',
      },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className={`${inter.variable} ${jakarta.variable}`}>
        {children}
        <CookieConsent />
        <Footer />
      </body>
    </html>
  );
}
