'use client';

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
    <main className="relative min-h-screen overflow-hidden text-white">
      <Navbar />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 pb-28 pt-28 sm:px-6 lg:px-8">
        <section className="w-full max-w-6xl">
          <div className="text-center">
            <h1 className="text-[2.7rem] font-semibold leading-[0.95] tracking-[-0.065em] text-white/95 sm:text-5xl md:text-[5.2rem]">
              Hey, I&apos;m <span className="block font-semibold sm:inline">Joel Kayyalakam</span>
            </h1>
            <div className="mt-5 text-lg font-medium tracking-[-0.04em] text-white/80 sm:mt-7 sm:text-2xl md:text-[2.3rem]">
              I&apos;m a <span className="text-white">{text}</span>
              <Cursor cursorColor="#ffffff" />
            </div>
          </div>
        </section>
      </div>

    </main>
  )
} 