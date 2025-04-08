'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="text-2xl font-bold text-white hover:text-gray-300"
          >
            Joel
          </Link>
          <div className="flex items-center space-x-4">
            <Link 
              href="/about" 
              className={`px-3 py-2 rounded-md text-xl font-medium ${
                pathname === '/about' ? 'text-blue-400' : 'text-gray-300 hover:text-gray-400'
              }`}
            >
              About
            </Link>
            <Link 
              href="/projects" 
              className={`px-3 py-2 rounded-md text-xl font-medium ${
                pathname === '/projects' ? 'text-blue-400' : 'text-gray-300 hover:text-gray-400'
              }`}
            >
              Projects
            </Link>
            <Link 
              href="/skills" 
              className={`px-3 py-2 rounded-md text-xl font-medium ${
                pathname === '/skills' ? 'text-blue-400' : 'text-gray-300 hover:text-gray-400'
              }`}
            >
              Skills
            </Link>
            <Link 
              href="/contact" 
              className={`px-3 py-2 rounded-md text-xl font-medium ${
                pathname === '/contact' ? 'text-blue-400' : 'text-gray-300 hover:text-gray-400'
              }`}
            >
              Contact
            </Link>
            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-md text-xl font-medium text-gray-300 hover:text-gray-400"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
} 