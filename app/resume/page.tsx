'use client';

import AnimatedBackground from '../components/AnimatedBackground'
import Navbar from '../components/Navbar'

export default function Resume() {
  return (
    <main className="min-h-screen text-white relative">
      <AnimatedBackground />
      <Navbar />
      
      <div className="pt-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12">Resume</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1e2538]/80 backdrop-blur-sm rounded-lg p-8">
            <div className="w-full h-[800px] mb-8">
              <iframe
                src="/resume.pdf"
                className="w-full h-full rounded-lg"
                title="Resume PDF"
              />
            </div>
            <div className="flex justify-center">
              <a 
                href="/resume.pdf" 
                download
                className="button"
              >
                <span className="button-content">Download</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .button {
          position: relative;
          overflow: hidden;
          height: 3rem;
          padding: 0 2rem;
          border-radius: 1.5rem;
          background: #304cfc;
          background-size: 400%;
          color: #fff;
          border: none;
          cursor: pointer;
          font-family: var(--font-comfortaa);
          font-weight: 500;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .button:hover::before {
          transform: scaleX(1);
        }

        .button-content {
          position: relative;
          z-index: 1;
        }

        .button::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          transform: scaleX(0);
          transform-origin: 0 50%;
          width: 100%;
          height: inherit;
          border-radius: inherit;
          background: linear-gradient(
            82.3deg,
            rgba(17, 254, 255, 1) 10.8%,
            rgba(45, 73, 255, 1) 94.3%
          );
          transition: all 0.475s;
        }
      `}</style>
    </main>
  )
} 