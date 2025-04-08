'use client';

import GradientBackground from './components/GradientBackground'
import Navbar from './components/Navbar'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export default function Home() {
  const [text] = useTypewriter({
    words: ['Computer Science Student', 'Software Developer', 'Full Stack Developer', 'Tech Enthusiast', 'Basketball Player', 'Badminton Player'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 75
  });

  return (
    <main className="min-h-screen text-white relative">
      <GradientBackground />
      <Navbar />
      
      {/* Hero Section */}
      <div className="absolute inset-0 flex items-center justify-center">
        <section className="px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl tracking-tight">
                Hey, I&apos;m <span className="font-bold">Joel Kayyalakam</span>
              </h1>
              <div className="mt-6 text-2xl sm:text-3xl md:text-4xl">
                I&apos;m a <span>{text}</span>
                <Cursor cursorColor="#ffffff" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
