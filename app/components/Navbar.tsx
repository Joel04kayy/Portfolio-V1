'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed w-full z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className={`nav-home ${
              pathname === '/' ? 'invisible' : 'text-gray-300'
            }`}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-6 h-6"
            >
              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>
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
  )
} 