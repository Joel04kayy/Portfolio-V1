'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className="fixed w-full z-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/" 
              className={`nav-home ${
                pathname === '/' ? 'text-blue-400' : 'text-gray-300'
              }`}
            >
              <Image
                src="/JKlogo.png"
                alt="Home"
                width={60}
                height={60}
                className="w-[60px] h-[60px]"
              />
            </Link>
            <div className="flex items-center space-x-4">
              <Link 
                href="/about" 
                className={`nav-link px-3 py-2 text-xl font-medium ${
                  pathname === '/about' ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                About
              </Link>
              <Link 
                href="/projects" 
                className={`nav-link px-3 py-2 text-xl font-medium ${
                  pathname === '/projects' ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                Projects
              </Link>
              <Link 
                href="/experience" 
                className={`nav-link px-3 py-2 text-xl font-medium ${
                  pathname === '/experience' ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                Experience
              </Link>
              <Link 
                href="/resume" 
                className={`nav-link px-3 py-2 text-xl font-medium ${
                  pathname === '/resume' ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                Resume
              </Link>
              <Link 
                href="/contact" 
                className={`nav-link px-3 py-2 text-xl font-medium ${
                  pathname === '/contact' ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <style jsx global>{`
        main {
          position: relative;
        }
        main::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 120px;
          background: linear-gradient(to bottom, 
            rgba(0,0,0,0.8) 0%,
            rgba(0,0,0,0.8) 70%,
            rgba(0,0,0,0) 100%
          );
          pointer-events: none;
          z-index: 40;
        }
      `}</style>
    </>
  )
} 