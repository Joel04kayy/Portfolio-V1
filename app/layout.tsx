import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";

const comfortaa = Comfortaa({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Joel Kayyalakam",
  description: "Welcome to my portfolio! Explore my journey through software development, innovative projects, and professional experiences.",
  icons: {
    icon: { url: '/favicon.png', type: 'image/png' },
  },
  openGraph: {
    title: 'Joel Kayyalakam',
    description: 'Welcome to my portfolio! Explore my journey through software development, innovative projects, and professional experiences.',
    url: 'https://joelkayy.vercel.app',
    siteName: 'Joel Kayyalakam Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Joel Kayyalakam Portfolio Preview'
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joel Kayyalakam',
    description: 'Welcome to my portfolio! Explore my journey through software development, innovative projects, and professional experiences.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${comfortaa.className} flex flex-col min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
