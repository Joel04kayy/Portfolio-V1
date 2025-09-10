'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Navbar() {
  const pathname = usePathname()

  return (
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
            <a 
              href="#" 
              className="nav-link px-3 py-2 text-xl font-medium text-gray-300 relative group"
            >
              Next Build
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap mt-3 bg-[#1ca0f4]">
                Coming Soon
              </span>
            </a>
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
  )
} 