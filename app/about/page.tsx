'use client';

import GradientBackground from '../components/GradientBackground'
import Navbar from '../components/Navbar'
import Image from 'next/image'

export default function About() {
  return (
    <main className="min-h-screen text-white relative">
      <GradientBackground />
      <Navbar />
      
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Section */}
            <div className="lg:col-span-1">
              <div className="about-card bg-gray-800/80 backdrop-blur-sm rounded-lg p-8 h-[62.5%] sticky top-32">
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="w-48 h-48 relative mb-6 rounded-full overflow-hidden border-4 border-blue-500/30 transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_20px_rgba(28,160,244,0.5)]">
                    <Image
                      src="/Profile.png"
                      alt="Profile Picture"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Joel Kayyalakam</h3>
                  <p className="text-blue-400 text-lg mb-1">Computer Science</p>
                  <p className="text-gray-400 text-lg mb-4">University of Guelph</p>
                  <div className="flex space-x-4 mb-4">
                    <a href="https://github.com/Joel04kayy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="https://linkedin.com/in/joel-kay" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a href="mailto:Joel04kayy@gmail.com" className="text-blue-400 hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* About Text Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Education Card */}
              <div className="about-card bg-gray-800/80 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-blue-400">Education & Career</h3>
                </div>
                <p className="text-gray-300">
                  I am a third-year Computer Science student at the University of Guelph with a minor in Project Management, passionate about building innovative digital solutions that bridge technology and user needs. As a Full-stack Developer, I&apos;ve led teams to redesign and develop dynamic websites for organizations like More Than Circumstance and Evstry, leveraging tools like React, Next.js, and Webflow to enhance functionality and user engagement.
                </p>
              </div>

              {/* Technical Skills Card */}
              <div className="about-card bg-gray-800/80 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <h3 className="text-xl font-semibold text-blue-400">Technical Expertise</h3>
                </div>
                <p className="text-gray-300">
                  My work spans integrating RESTful APIs, optimizing SEO strategies, and ensuring accessibility compliance, all while collaborating closely with cross-functional teams to deliver impactful results. I run a side business building custom computer setups and troubleshooting hardware-software challenges, which has honed my technical problem-solving skills and deepened my understanding of system optimization.
                </p>
              </div>

              {/* Startup Business Card */}
              <div className="about-card bg-gray-800/80 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-blue-400">Startup Business</h3>
                </div>
                <p className="text-gray-300">
                  I run a successful startup business specializing in custom computer builds and technical solutions. From high-performance gaming rigs to professional workstations optimized for demanding software like SolidWorks, I create tailored systems that perfectly match my clients&apos; needs. My business has not only provided valuable hands-on experience in hardware-software integration but has also helped me develop strong client relationships and project management skills.
                </p>
              </div>

              {/* Projects & Interests Card */}
              <div className="about-card bg-gray-800/80 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <h3 className="text-xl font-semibold text-blue-400">Projects & Interests</h3>
                </div>
                <p className="text-gray-300">
                  Whether crafting gaming rigs or workstations for demanding software like SolidWorks, I thrive on creating efficient, aesthetically pleasing solutions. My curiosity extends to sim racing, where I&apos;m designing my own racing simulator. I enjoy tackling projects that demand both technical precision and collaborative innovation, from developing a 3D Pong game in Python to constructing full-stack e-commerce platforms.
                </p>
              </div>

              {/* Future Goals Card */}
              <div className="about-card bg-gray-800/80 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h3 className="text-xl font-semibold text-blue-400">Future Goals</h3>
                </div>
                <p className="text-gray-300">
                  With a graduation date set for 2027, I&apos;m eager to apply my skills in software development, team leadership, and project management to new challenges—especially those that push me to learn and grow alongside industry professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-card {
          transition: transform 0.3s ease;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .about-card:hover {
          transform: scale(1.05);
          z-index: 10;
        }
      `}</style>
    </main>
  )
} 