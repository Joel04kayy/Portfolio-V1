import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";

const comfortaa = Comfortaa({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Portfolio V1",
  description: "Personal portfolio website showcasing my projects and skills as a Computer Science student",
  icons: {
    icon: { url: '/favicon.png', type: 'image/png' },
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
