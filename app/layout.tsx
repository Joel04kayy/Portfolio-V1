import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Portfolio V1",
  description: "Personal portfolio website showcasing my projects and skills as a Computer Science student",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex flex-col min-h-screen`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
