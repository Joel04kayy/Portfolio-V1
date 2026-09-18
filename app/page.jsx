'use client';

import GradientBackground from './components/GradientBackground'
import Navbar from './components/Navbar'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Image from 'next/image'

export default function Home() {
  const [text] = useTypewriter({
    words: ['Computer Science Student', 'Software Developer', 'Full Stack Developer', 'Tech Enthusiast', 'Basketball Player', 'Badminton Player'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 75
  });

  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <GradientBackground />
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

      <div className="pointer-events-none fixed inset-x-0 bottom-6 z-10 flex justify-center">
        <div className="social-buttons pointer-events-auto">
          <a href="https://github.com/Joel04kayy" target="_blank" rel="noopener noreferrer" className="social-button github">
            <svg className="cf-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="-2.5 0 19 19"><path d="M9.464 17.178a4.506 4.506 0 0 1-2.013.317 4.29 4.29 0 0 1-2.007-.317.746.746 0 0 1-.277-.587c0-.22-.008-.798-.012-1.567-2.564.557-3.105-1.236-3.105-1.236a2.44 2.44 0 0 0-1.024-1.348c-.836-.572.063-.56.063-.56a1.937 1.937 0 0 1 1.412.95 1.962 1.962 0 0 0 2.682.765 1.971 1.971 0 0 1 .586-1.233c-2.046-.232-4.198-1.023-4.198-4.554a3.566 3.566 0 0 1 .948-2.474 3.313 3.313 0 0 1 .091-2.438s.773-.248 2.534.945a8.727 8.727 0 0 1 4.615 0c1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529a.694.694 0 0 1-.272.587z"></path></svg>
          </a>
          <a href="https://linkedin.com/in/joel-kayyalakam" target="_blank" rel="noopener noreferrer" className="social-button linkedin">
            <svg viewBox="0 -2 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <g id="Icons" stroke="none" strokeWidth="1">
                  <g transform="translate(-702.000000, -265.000000)">
                      <path d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z" id="LinkedIn"></path>
                  </g>
              </g>
            </svg>
          </a>
          <a href="mailto:joel04kayy@gmail.com" className="social-button email">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M22 8.62V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.62l9.55 4.77a1 1 0 0 0 .9 0L22 8.62zM12 11.38l-10-5V6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v.38l-10 5z"/>
            </svg>
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="social-button resume">
            <Image
              src="/resumeIcon.png"
              alt="Resume"
              width={24}
              height={24}
              className="h-6 w-6"
            />
          </a>
        </div>
      </div>
    </main>
  )
} 