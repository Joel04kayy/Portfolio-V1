'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Joel Kayyalakam. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </Link>
            <Link 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </Link>
            <Link 
              href="mailto:your.email@example.com" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              Email
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 