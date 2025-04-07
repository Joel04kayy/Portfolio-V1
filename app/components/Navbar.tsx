'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              Portfolio V1
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link 
                href="/about" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === '/about' ? 'text-blue-400' : 'text-gray-300 hover:text-gray-400'
                }`}
              >
                About
              </Link>
              <Link 
                href="/skills" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === '/skills' ? 'text-blue-400' : 'text-gray-300 hover:text-gray-400'
                }`}
              >
                Skills
              </Link>
              <Link 
                href="/projects" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === '/projects' ? 'text-blue-400' : 'text-gray-300 hover:text-gray-400'
                }`}
              >
                Projects
              </Link>
              <Link 
                href="/contact" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === '/contact' ? 'text-blue-400' : 'text-gray-300 hover:text-gray-400'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 